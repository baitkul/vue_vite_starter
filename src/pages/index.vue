<template>
  <div class="flex flex-col space-y-4">
    <h1>Home</h1>
    <ul>
      <li>
        <router-link class="text-blue-500 underline" to="/contacts">Contacts</router-link>
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: special
</route>