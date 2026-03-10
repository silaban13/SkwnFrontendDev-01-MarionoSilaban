<template>
  <footer class="bg-white border-t border-gray-200 px-6 sm:px-10 md:px-16 py-10 sm:py-12">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      <div class="max-w-sm lg:max-w-md">
        <div class="flex items-center justify-center lg:justify-start gap-2 mb-5 text-center lg:text-left">
          <img src="/src/assets/Group 237985.svg" alt="">
          <span class="text-[#2c1a0e] font-semibold text-lg tracking-tight">Dekoor</span>
        </div>
        <p class="text-center lg:text-left text-xs lg:text-sm text-gray-500 leading-relaxed mb-8 max-w-xl">
          Dekoor is a furniture company created to fulfill the needs of
          <br class="block lg:hidden">
          family with aesthetic feeling in their furniture. Always pay
          <br class="block lg:hidden">
          attention to details and give clear communication for the
          <br class="block lg:hidden">
          customers. Priority of our design is comfortability.
        </p>
        <p class="hidden lg:block text-sm text-gray-400">©Copyright 2022 Dekoor</p>
      </div>

      <div class="text-center lg:text-left grid grid-cols-2 lg:flex gap-8 md:gap-16">
        <div class="order-2 lg:order-none">
          <h4 class="text-sm font-semibold text-[#1a1a1a] mb-5">Support</h4>
          <ul class="space-y-4">
            <li v-for="item in support" :key="item">
              <a href="#" class="text-sm text-gray-500 hover:text-[#2c1a0e] transition-colors duration-150">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>
        <div class="order-1 lg:order-none">
          <h4 class="text-sm font-semibold text-[#1a1a1a] mb-5">Social Media</h4>
          <ul class="space-y-4">
            <li v-for="item in socialMedia" :key="item">
              <a href="#" class="text-sm text-gray-500 hover:text-[#2c1a0e] transition-colors duration-150">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:mr-[80px] order-2 lg:order-none flex flex-col items-center lg:items-start">
        <h4 class="text-sm font-semibold text-[#1a1a1a] mb-5">About Us</h4>
        <ul class="space-y-4 text-center lg:text-left">
          <li v-for="item in aboutUs" :key="item">
            <a href="#" class="text-sm text-gray-500 hover:text-[#2c1a0e] transition-colors duration-150"> {{ item }} </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      support: ['FAQ', 'Shipping & Returns', 'Care guide', 'Redeem warranty'],
      socialMedia: ['Instagram', 'Facebook', 'Twitter', 'TikTok'],
      aboutUs: ['Our story', 'Designer', 'Craftmanship', 'Sustainability'],
    };
  },
};
</script>