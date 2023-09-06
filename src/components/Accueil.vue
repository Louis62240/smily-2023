<template>
  <section
    class="welcome-section text-body p-4 shadow-2xl relative"
  >
    <!-- SVG de fond à droite -->
    <!-- SVG de fond à gauche -->
    <div class="absolute left-0 top-0 h-full z-0 slide-from-left">
      <img
        src="@/assets/images/cactus-flower.svg"
        alt="Cactus illustration"
        class="h-full"
      />
    </div>
    <!-- SVG de fond à droite -->
    <div class="absolute top-0 h-full custom-right slide-from-right">
      <img
        src="@/assets/images/cactus-flower-2.svg"
        alt="Cactus illustration"
        class="h-full"
      />
    </div>
    <!-- Contenu du composant -->
    <div
      class="container mx-auto flex flex-col justify-center items-center animate__animated animate__fadeIn h-full z-10"
    >
      <h1 class="text-5xl font-extrabold tracking-wider text-highlight mb-4">
        Bienvenue sur Smily
      </h1>
      <p class="text-lg mb-4">
        La meilleure plateforme pour votre bonheur quotidien.
      </p>
    </div>
  </section>
  
</template>

<script>
export default {
  name: "WelcomeComponent",
};
</script>

<style scoped>
.welcome-section {
  height: calc(100vh - 64px);
  position: relative; /* Ajouté pour le positionnement absolu du SVG */
}
.bg-secondary {
  background-color: #faf3e0;
}
.text-body {
  color: #333;
}
.text-highlight {
  color: #55423d;
}
.container {
  height: 100%;
  position: relative; /* Ajouté pour le positionnement z-index */
  z-index: 10; /* Ajouté pour que le contenu apparaisse au-dessus du SVG */
}
.custom-right {
  right: 50px;
}
@keyframes slideFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.slide-from-left {
  animation: slideFromLeft 1s ease-in-out forwards;
}

.slide-from-right {
  animation: slideFromRight 1s ease-in-out forwards;
}
</style>
