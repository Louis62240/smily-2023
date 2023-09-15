<template>
  <header class="bg-primary text-headline p-4 shadow-2xl header-animated">
    <div
      class="container mx-auto flex justify-between items-center animate__animated animate__fadeIn"
    >
      <div class="flex items-center group cursor-pointer smily-container">
        <logo-and-title-component />
      </div>
      <nav>
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
        { nameKey: "home", icon: "fa-home" },
        { nameKey: "contact", icon: "fa-envelope" },
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
