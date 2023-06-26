<template>
    <div>
        <form class="login-form" @submit="onSubmit">
            <input type="text" class="txt-input" name="username" v-model="credentials.username" placeholder="Username"
                required autofocus />

            <input type="password" class="txt-input" name="password" v-model="credentials.password" placeholder="Password"
                required />

            <input v-if="isSignupState" type="text" name="fullname" class="txt-input" v-model="credentials.fullname"
                placeholder="Full name" required />

            <button class="btn log-btn" type="submit">{{ isSignupState ? 'Signup' : 'Login' }}</button>
        </form>

        <div class="btns">
            <a href="#" @click="onToggleSignupState">
                {{ isSignupState ? 'Already a member? Login' : 'New user? Signup here' }}
            </a>
        </div>
    </div>
</template>
  
<script>
import { eventBus } from '../services/eventBus.service'
import { userService } from '../services/user.service'

export default {
  data() {
    return {
      credentials: {
        fullname: '',
        username: '',
        password: '',
      },
      isSignupState: false,
    }
  },
  methods: {
    onSubmit(ev) {
      ev.preventDefault()
      if (this.isSignupState) {
        userService.signup(this.credentials)
          .then((user) => {
            this.onChangeLoginStatus(user)
            const msg = {
              txt: `Welcome ${user.fullname}`,
              type: 'success'
            }
            eventBus.emit('user-msg', msg)
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        userService.login(this.credentials)
          .then((user) => {
            this.onChangeLoginStatus(user)
            const msg = {
              txt: `Hi again ${user.fullname}`,
              type: 'success'
            }
            eventBus.emit('user-msg', msg)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    onToggleSignupState() {
      this.isSignupState = !this.isSignupState
    },
    onChangeLoginStatus(user) {
            this.$emit('changeStatus', user)
        }
  },
}
</script>
  
<style lang="scss" scoped></style>
  