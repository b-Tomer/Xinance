<script>
import AppHeader from '@/cmps/AppHeader.vue'
import AppFooter from '@/cmps/AppFooter.vue'
import SideMenu from '@/cmps/SideMenu.vue'
import { RouterView } from 'vue-router';
export default {
    components: {
        AppHeader,
        AppFooter,
        RouterView,
        SideMenu
    }
}
</script>

<template>
    <div class="main-app">
        <AppHeader />
        <main class="main-content">
            <RouterView />
        </main>
        <SideMenu />
        <AppFooter />
    </div>
</template>

<style scoped>
.main-content {
    min-height: calc(90vh - 60px);
    grid-column: 2;
    grid-row: 2/3;
    padding-inline: 1rem;

}
</style>
