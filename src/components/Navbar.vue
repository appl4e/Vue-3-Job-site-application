<template>
  <div
    class="flex justify-between max-w-6xl px-2 py-10 mx-auto border-t-4 border-indigo-500 xl:px-0"
  >
    <router-link :to="{ name: 'home' }">
      <h2 class="text-2xl font-semibold text-indigo-500">JOB Board</h2>
    </router-link>

    <nav v-if="auth.isLoggedin" class="flex gap-4 items-center">
      <a class="text-base" href="#">My posts</a>
      <a class="text-base button" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Post a job</span>
      </a>
      <a class="text-base" href="#">{{auth.user.name}}</a>
      <router-link class="text-base button" to="" @click="auth.logout">Logout</router-link>
    </nav>
    <nav v-else class="flex gap-4 items-center">
      <router-link :to="{name: 'auth.login'}" >Login</router-link>
      <router-link class="text-base button" :to="{ name: 'auth.registration' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Join</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';

const auth = useAuthStore();
</script>