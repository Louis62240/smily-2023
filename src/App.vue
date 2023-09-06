<template class="app">
  <Header />
  <Accueil/>
</template>

<script>
import Accueil from './components/Accueil.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Accueil,
    Header
  }
}
</script>

<style>
.app
{
  background:#a78e87;
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
