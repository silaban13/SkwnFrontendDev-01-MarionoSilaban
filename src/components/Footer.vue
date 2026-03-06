<template>
  <footer class="bg-white border-t border-gray-200 px-6 sm:px-10 md:px-16 py-10 sm:py-12">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      <div class="max-w-xs">
        <div class="flex items-center gap-2 mb-5">
          <img src="/src/assets/Group 237985.svg" alt="">
          <span class="text-[#2c1a0e] font-semibold text-lg tracking-tight">Dekoor</span>
        </div>
        <p class="text-sm text-gray-500 leading-relaxed mb-8">
          Dekoor is a furniture company created to fulfill the needs of family
          with aesthetic feeling in their furniture. Always pay attention to
          details and give clear communication for the customers. Priority of
          our design is comfortability.
        </p>
        <p class="text-sm text-gray-400">©Copyright 2022 Dekoor</p>
      </div>
      <div class="flex flex-col sm:flex-row gap-8 md:gap-16">
        <div>
          <h4 class="text-sm font-semibold text-[#1a1a1a] mb-5">Support</h4>
          <ul class="space-y-4">
            <li v-for="item in support" :key="item">
              <a href="#" class="text-sm text-gray-500 hover:text-[#2c1a0e] transition-colors duration-150">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-[#1a1a1a] mb-5">Social Media</h4>
          <ul class="space-y-4">
            <li v-for="item in socialMedia" :key="item">
              <a href="#" class="text-sm text-gray-500 hover:text-[#2c1a0e] transition-colors duration-150">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-[#1a1a1a] mb-5">About Us</h4>
          <ul class="space-y-4">
            <li v-for="item in aboutUs" :key="item">
              <a href="#" class="text-sm text-gray-500 hover:text-[#2c1a0e] transition-colors duration-150">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>
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