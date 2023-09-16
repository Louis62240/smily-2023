<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>
<style>
body
{
  background-color: #faf3e0;
}
/* Pour les navigateurs WebKit comme Chrome, Safari, et plus récemment, Microsoft Edge */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #ffc0ad; /* Couleur du "pouce" de la barre de défilement */
  border-radius: 6px;
}

/* Pour Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #ffc0ad transparent; /* "pouce" et "piste" */
}
</style>
