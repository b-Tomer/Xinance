
<template>
    <aside class="side-menu">
        <nav>
            <RouterLink to="/"><button class="menu-btn ,{ active: $route.path === '/' }">
                    <img class="svg-home" :src="svgHome" alt="SVG Image" />
                    <span class="menu-txt">Home</span> </button></RouterLink>
            <RouterLink to="/contact"><button class="menu-btn ,{ active: $route.path === '/contact' }">
                    <img class="svg" :src="svgContacts" alt="SVG Image" />
                    <span class="menu-txt">Contacts</span></button>
            </RouterLink>
            <RouterLink to="/chart"><button class="menu-btn ,{ active: $route.path === '/chart' }">
                    <img class="svg" :src="svgChart" alt="SVG Image" />
                    <span class="menu-txt">Dashboard</span></button>
            </RouterLink>
            <RouterLink to="/about"><button class="menu-btn ,{ active: $route.path === '/about' }">
                    <img class="svg-home" :src="svgAbout" alt="SVG Image" />
                    <span class="menu-txt">About</span></button>
            </RouterLink>
        </nav>
    </aside>
</template>

<script>
import svgHome from "../assets/icons/home.svg";
import svgAbout from "../assets/icons/about.svg";
import svgChart from "../assets/icons/chart.svg";
import svgContacts from "../assets/icons/contact.svg";
export default {
    data() {
        return {
            svgHome: svgHome,
            svgAbout: svgAbout,
            svgChart: svgChart,
            svgContacts: svgContacts,
        };
    }
}
</script>

<style lang="scss" scoped>
.side-menu {}
</style>