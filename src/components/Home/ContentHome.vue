<template>
     <h1 class="text-5xl font-extrabold tracking-wider text-highlight mb-4">
        {{ $t('welcome') }}
      </h1>
      <p class="text-lg mb-4">
        {{ $t('bestPlatform') }}
      </p>
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
</style>