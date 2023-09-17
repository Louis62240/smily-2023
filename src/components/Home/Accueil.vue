<template>
  <section
    class="welcome-section text-body p-4 relative"
  >
  <div class="hidden sm:block">
    <background-component />
  </div>
    <div
      class="container mx-auto flex flex-col justify-center items-center animate__animated animate__fadeIn h-full z-10
      "
    >
      <content-home-component/>
      <button class="start-btn" @click="showAlert">
        {{ $t('startExperience') }} 
      </button>
    </div>
  </section>
  
</template>

<script>
// import Parse from '../../configuration/parse-config';

import BackgroundComponent from './Background.vue';
import ContentHomeComponent from './ContentHome.vue';
export default {
  name: "WelcomeComponent",
  components: {
    BackgroundComponent,
    ContentHomeComponent,
  },
};
</script>

<style scoped>
.welcome-section {
  height: calc(100vh - 64px);
  position: relative; /* Ajouté pour le positionnement absolu du SVG */
}
@media (max-width: 1000px) {
  .welcome-section {
    height: calc(80vh - 80px);
  }
}



.bg-secondary {
  background-color: #faf3e0;
}
.text-body {
  color: #333;
}

.container {
  height: 100%;
  position: relative; /* Ajouté pour le positionnement z-index */
  z-index: 10; /* Ajouté pour que le contenu apparaisse au-dessus du SVG */
  justify-content: center;
    align-items: center;
}

.start-btn {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  background-color: #55423d;  /* ou une autre couleur qui va bien avec votre palette */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px;
}

.start-btn:hover {
  background-color: #ffc0ad; /* Orange, par exemple */
  color: #271c19;
}

/* Animation du bouton pour ajouter du dynamisme */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.start-btn {
  animation: bounce 2s infinite;
}

.sm\:filter {
  filter: blur(8px); /* Ajoutez le filtre de flou souhaité */
}
</style>
