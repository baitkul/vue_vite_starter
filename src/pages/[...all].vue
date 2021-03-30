<template>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-4">
    <img src="@/assets/illustrations/error.png" class="ml-8 h-[300px] object-center object-contain" />
    <span class="text-3xl font-bold">404</span>
    <span class="text-base">Page doesn't exist</span>
    <router-link to="/" class="underline text-primary">Home</router-link>
  </div>
</template>