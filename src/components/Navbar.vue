<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown" @click="drawer = !drawer">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          v-if="drawer"
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><RouterLink to="/">Home</RouterLink></li>

          <li><RouterLink to="/about">About</RouterLink></li>

          <li><RouterLink to="/skills">Skills</RouterLink></li>

          <li><RouterLink to="/education">Education</RouterLink></li>

          <li><RouterLink to="/work">Work</RouterLink></li>

          <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>

          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      <RouterLink
        :to="{ name: 'Home' }"
        class="btn btn-ghost normal-case text-2xl font-bold name"
        ><span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4 -2 24 24"
            width="24"
            fill="currentColor"
          >
            <path
              d="M3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1-7.002v3.173a3.001 3.001 0 1 1-2 0V5.829a3.001 3.001 0 1 1 2 0v2.34c.312-.11.647-.17.997-.171l6.037-.006a1 1 0 0 0 .999-1V5.84A3.001 3.001 0 0 1 13 0a3 3 0 0 1 1.033 5.817v1.175a3 3 0 0 1-2.997 3l-6.037.006a1 1 0 0 0-.999 1zM3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            ></path></svg></span
        >Javi</RouterLink
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <div class="divider divider-horizontal"></div>
        <li><RouterLink :to="{ name: 'Home' }">Home</RouterLink></li>
        <div class="divider divider-horizontal"></div>

        <li><RouterLink :to="{ name: 'About' }">About</RouterLink></li>
        <div class="divider divider-horizontal"></div>

        <li><RouterLink :to="{ name: 'Skills' }">Skills</RouterLink></li>
        <div class="divider divider-horizontal"></div>

        <li><RouterLink :to="{ name: 'Education' }">Education</RouterLink></li>
        <div class="divider divider-horizontal"></div>

        <li><RouterLink :to="{ name: 'Work' }">Work</RouterLink></li>
        <div class="divider divider-horizontal"></div>

        <li><RouterLink :to="{ name: 'Portfolio' }">Portfolio</RouterLink></li>
        <div class="divider divider-horizontal"></div>

        <li><RouterLink :to="{ name: 'Contact' }">Contact</RouterLink></li>
        <div class="divider divider-horizontal"></div>
      </ul>
    </div>
    <div class="navbar-end">
      <!-- <a class="btn">Contact</a> -->
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const drawer = ref(false);
</script>

<style></style>
