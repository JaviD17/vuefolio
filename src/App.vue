<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
.title {
  @apply text-center text-primary text-5xl font-bold;
}
.name {
  @apply text-primary;
}
.skills {
  @apply text-accent;
}
</style>
