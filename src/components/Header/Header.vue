<template>
  <header class="bg-primary text-headline p-4 shadow-2xl header-animated">
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center animate__animated animate__fadeIn"
    >
      <div
        class="flex items-center group cursor-pointer smily-container w-full md:w-auto mb-4 md:mb-0"
      >
        <logo-and-title-component />
      </div>
      <nav class="w-full md:w-auto">
        <list-link :menuItems="menuItems" />
      </nav>
    </div>
  </header>
</template>

<script>
import "animate.css";
import LogoAndTitleComponent from "./Logo&Title.vue";
import ListLink from "./ListLink.vue";
export default {
  name: "HeaderComponent",
  data() {
    return {
      showMenu: false,
      menuItems: [
        { nameKey: "home", icon: "fa-home", route: "/" },
        { nameKey: "contact", icon: "fa-envelope", route: "/contact" },
        { nameKey: "account", icon: "fa-user", route: "/login" },
      ],
      showLogin: false,
    };
  },
  components: {
    LogoAndTitleComponent,
    ListLink,
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
<style scoped>
.header-animated {
  animation: slideFromTop 0.5s ease-out forwards;
}
</style>
