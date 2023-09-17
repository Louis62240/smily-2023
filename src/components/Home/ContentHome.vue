<template>
  <div>
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider text-highlight mb-4 text-center">
      {{ $t('welcome') }}
    </h1>
    <p class="text-base md:text-lg lg:text-xl mb-4 text-center">
      {{ $t('bestPlatform') }}
    </p>
  </div>
</template>
<script>
export default 
{
    name:"ContentComponent",
}
</script>
<style scoped>
.text-highlight {
  color: #55423d;
}
.text-center {
  text-align: center;
}
</style>