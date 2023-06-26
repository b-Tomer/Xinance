import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// import { httpService } from './http.service'


export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    query,
    getById,
    remove,
    update,
    getEmptyUser,
    save
}

window.userService = userService
const USER_KEY='user_db'
const STORAGE_KEY_LOGGEDIN_USER = 'STORAGE_KEY_LOGGEDIN_USER'
function query() {
        return storageService.query(USER_KEY)
        // return httpService.get(`user`)
}

async function getById(userId) {
    const user = await storageService.get(USER_KEY, userId)
    // const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {
    return storageService.remove(USER_KEY, userId)
    // return httpService.delete(`user/${userId}`)
}

async function update({ _id }) {
    const user = await storageService.get(USER_KEY, _id)
    await storageService.put(USER_KEY, user)

    // const user = await httpService.put(`user/${_id}`)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query(USER_KEY)
    const user = users.find((user) => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    if (!userCred.imgUrl)
        userCred.imgUrl =
            'https://thispersondoesnotexist.com/'
    // 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await storageService.post(USER_KEY, userCred)
    // const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // return await httpService.post('auth/logout')
}

function saveLocalUser(user) {
    user = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
        mail: user.mail,
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return Promise.resolve (user)
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


function getEmptyUser(name = '', balance = 100) {
    return { name, balance , transactions:[]}
}

function save(user) {
    if (user.id) {
        return storageService.put(USER_KEY, user)
    } else {
        return storageService.post(USER_KEY, user)
    }
}
