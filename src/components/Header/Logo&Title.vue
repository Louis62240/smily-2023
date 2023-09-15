<template>
    <img
          src="@/assets/images/logo_smily.png"
          alt="Smily Logo"
          class="w-12 h-12 mr-4 rounded-full shadow-lg smily-logo"
        />
        <div class="smily-text">Smily</div>
</template>
<script>
export default {
  name: "LogoAndTitleComponent",
};
</script>
<style scoped>

.smily-logo {
  transition: transform 0.3s ease-in-out;
}

.smily-logo:hover {
  transform: rotate(360deg);
}
.smily-text {
  font-size: 1.5rem; /* Taille du texte */
  font-family: "Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif; /* Choix de la police */
  font-weight: bold; /* Gras */
  text-transform: uppercase; /* Tout en majuscules */
  letter-spacing: 0.1em; /* Espacement des lettres */
  color: #ffd700; /* Couleur du texte */
  text-shadow: 2px 2px 4px #000000; /* Ombre du texte */
  transition: color 0.3s ease-in-out; /* Transition pour la couleur */
}

</style>
