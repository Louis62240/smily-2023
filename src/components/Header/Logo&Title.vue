<template>
  <div class="flex items-center">
      <img
        src="@/assets/images/logo_smily.png"
        alt="Smily Logo"
        class="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 mr-1 md:mr-2 rounded-full shadow-lg smily-logo"
      />
      <div class="smily-text text-xs md:text-sm lg:text-base">Smily</div>
  </div>
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
font-family: "Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 0.1em;
color: #ffd700;
text-shadow: 2px 2px 4px #000000;
transition: color 0.3s ease-in-out;
}

</style>
