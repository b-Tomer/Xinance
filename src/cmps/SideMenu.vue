
<template>
    <aside class="side-menu">
        <nav>
            <RouterLink to="/"><button class="menu-btn ,{ active: $route.path === '/' }">Home</button></RouterLink>
            <RouterLink to="/user"><button class="menu-btn ,{ active: $route.path === '/user' }">Users</button></RouterLink>
            <RouterLink to="/about"><button class="menu-btn ,{ active: $route.path === '/about' }">About</button></RouterLink>
            <RouterLink to="/chart"><button class="menu-btn ,{ active: $route.path === '/chart' }">Dashboard</button></RouterLink>
        </nav>
    </aside>
</template>

<script>
export default {
 
}
</script>

<style lang="scss">

</style>