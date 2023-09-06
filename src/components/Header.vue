<template>
    <header class="bg-primary text-headline p-4 shadow-2xl">
      <div class="container mx-auto flex justify-between items-center animate__animated animate__fadeIn">
        <div class="flex items-center group cursor-pointer">
          <img
  src="@/assets/images/logo_smily.png"
  alt="Smily Logo"
  class="w-12 h-12 mr-4 rounded-full shadow-lg smily-logo"
/>
        <div
          class="text-4xl font-extrabold tracking-wider text-highlight animate__animated animate__pulse animate__infinite animate__slow group-hover:text-tertiary transition-colors duration-300"
        >
          Smily
        </div>
      </div>
      <nav>
      <ul class="flex space-x-6">
        <li class="group relative" v-for="(item, index) in menuItems" :key="index">
          <a
  @click="setActive(index)"
  :class="[
    'flex items-center transition duration-300 py-2 px-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transform hover:scale-110 cursor-pointer',
    { 'active-link': activeIndex === index }
  ]"
>
  <i :class="`fas ${item.icon} mr-2`"></i> {{ item.name }}
  <span class="absolute inset-0 bg-highlight opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></span>
</a>
          <div class="absolute left-0 w-full h-0.5 bg-highlight rounded-full group-hover:h-1 transition-all duration-300"></div>
        </li>
      </ul>
    </nav>
      </div>
    </header>
  </template>
  
  <script>
  import "animate.css";
  
  export default {
    name: "HeaderComponent",
    data() {
      return {
        activeIndex: null,
        menuItems: [
          { name: 'Accueil', icon: 'fa-home' },
          { name: 'À propos', icon: 'fa-info-circle' },
          { name: 'Contact', icon: 'fa-envelope' }
        ]
      };
    },
    methods: {
      setActive(index) {
        console.log("Setting active index to", index);
        this.activeIndex = index;
      }
    }
  };
  </script>
  <style scoped>
  .smily-logo {
    transition: transform 0.3s ease-in-out;
  }
  
  .smily-logo:hover {
    transform: rotate(360deg);
  }
  .active-link {
  background-color: #ffc0ad; /* Orange, par exemple */
  color: #271c19; /* Texte blanc */
  border-radius: 12px; /* Coins arrondis */
}
  </style>