<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="avatar">
        <div class="w-48 lg:w-96 mask mask-hexagon">
          <img src="/images/profile.jpg" />
        </div>
      </div>
      <div class="mr-10">
        <Hero />
        <RouterLink
          :to="{ name: 'About' }"
          class="btn btn-outline btn-primary my-4"
        >
          About Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="21"
            fill="currentColor"
          >
            <path
              d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1.828-8.414l-3.95 3.95a1 1 0 1 1-1.414-1.415l3.95-3.95H6.828a1 1 0 1 1 0-2h6a.997.997 0 0 1 1 1v6a1 1 0 1 1-2 0V9.587z"
            ></path>
          </svg>
        </RouterLink>
        <SocialGroup />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Hero from "../components/Hero.vue";
import SocialGroup from "../components/SocialGroup.vue";
</script>
