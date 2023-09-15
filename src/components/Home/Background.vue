<template>
    <div class="absolute left-0 top-0 h-full z-0 slide-from-left">
      <img
        src="@/assets/images/cactus-flower.svg"
        alt="Cactus illustration"
        class="h-full"
      />
    </div>
  
    <div class="absolute top-0 h-full custom-right slide-from-right">
      <img
        src="@/assets/images/cactus-flower-2.svg"
        alt="Cactus illustration"
        class="h-full"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "BackgroundComponent",
  };
  </script>
  <style scoped>
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

.custom-right {
  right: 50px;
}
</style>