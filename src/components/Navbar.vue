<script setup>
  import { ref } from 'vue';
  const isOpen = ref(false);
</script>
<template>
  <nav class="bg-white border border-gray-200 shadow-sm px-6 py-6 items-center justify-between"> 
    <div class="max-w-screen-xl mx-auto flex items-center justify-between">
      <div class="flex-shrink-0">
        <img src="/src/assets/logo.svg" class="w-36 sm:w-48 md:w-40 lg:w-[100px] h-auto" alt="Logo" />
      </div>
      <ul class="hidden md:flex items-center gap-8 flex-nowrap min-w-0">
        <li class="group">
          <router-link to="/" class="text-gray-800 font-semibold relative inline-block ...">
            About us
            <span class="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li class="truncate relative group">
          <router-link to="/about" class="relative inline-block text-gray-800 font-semibold px-2 py-1 transition-colors duration-300 hover:text-gray-600">
            Furniture
            <svg class="w-4 h-4 inline ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
            <span class="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li class="truncate relative group">
          <router-link to="#" class="relative inline-block text-gray-800 font-semibold px-2 py-1 transition-colors duration-300 hover:text-gray-600">
            Partnerships
            <span class="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li class="truncate relative group">
          <router-link to="#" class="relative inline-block text-gray-800 font-semibold px-2 py-1 transition-colors duration-300 hover:text-gray-600">
            Contact
            <span class="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
      </ul>
      <div class="hidden md:flex items-center gap-3 flex-shrink-0">
        <button class="bg-[#E5F0B6] text-gray-800 px-4 py-2 rounded hover:bg-green-200">Sign Up</button>
        <button class="bg-gray-800 text-white p-2 rounded flex items-center justify-center">
          <img src="/src/assets/parcel.png" alt="" class="w-5 h-5 filter invert brightness-90" />
        </button>
      </div>
      <button @click="isOpen = !isOpen" class="md:hidden flex items-center gap-2">
        <div class="flex flex-col gap-1.5">
          <span class="block w-3 h-0.5 bg-black"></span>
          <span class="block w-6 h-0.5 bg-black"></span>
          <span class="block w-3 h-0.5 bg-black"></span>
        </div>
      </button>
    </div>
  </nav>
  <transition name="slide">
    <div v-if="isOpen" class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-6">
      <button @click="isOpen = false" class="self-end text-gray-800 text-2xl">&times;</button>
      <ul class="flex flex-col gap-4">
        <li><router-link @click="isOpen = false" to="/" class="text-gray-800 font-semibold">About us</router-link></li>
        <li><router-link @click="isOpen = false" to="#" class="text-gray-800 font-semibold">Furniture</router-link></li>
        <li><router-link @click="isOpen = false" to="#" class="text-gray-800 font-semibold">Partnerships</router-link></li>
        <li><router-link @click="isOpen = false" to="#" class="text-gray-800 font-semibold">Contact</router-link></li>
      </ul>
      <div class="flex flex-col gap-2 mt-auto">
        <button class="bg-[#E5F0B6] text-gray-800 px-4 py-2 rounded hover:bg-green-200 w-full">Sign Up</button>
        <button class="bg-gray-800 text-white p-2 rounded flex items-center justify-center w-full">
          <img src="/src/assets/parcel.png" alt="" class="w-5 h-5 filter invert brightness-90" />
        </button>
      </div>
    </div>
  </transition>
  <RouterView/>
</template>
<style>
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-enter-from, .slide-leave-to {
    transform: translateX(100%);
  }
  .slide-enter-to, .slide-leave-from {
    transform: translateX(0);
  }
</style>