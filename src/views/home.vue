<script setup>
  import { ref, computed } from "vue"
  import sofaSatu from "@/assets/sofa_satu.jpg"
  import sofaDua from "@/assets/sofa_dua.jpg"
  import sofaTiga from "@/assets/sofa_tiga.jpg"
  import sofaEmpat from "@/assets/sofa_empat.jpg"
  import sofaLima from "@/assets/sofa_lima.jpg"

  const products = [
    { id: 1, name: "Velvet Sofa", price: 199, image: sofaSatu },
    { id: 2, name: "Sofa Und", price: 329, image: sofaDua },
    { id: 3, name: "Side Table", price: 149, image: sofaTiga },
    { id: 4, name: "Wall Shelf", price: 89, image: sofaEmpat },
    { id: 5, name: "Lounge Chair", price: 259, image: sofaLima }
  ]

  const items = computed(() => [
    ...products,
    ...products,
    ...products
  ])

  const currentIndex = ref(products.length)
  const cardWidth = 210
  const gap = 25

  const trackOffset = computed(() => {
    return -(currentIndex.value * (cardWidth + gap))
  })

  function next() {
    currentIndex.value++

    if (currentIndex.value >= products.length * 2) {
      currentIndex.value = products.length
    }
  }

  function prev() {
    currentIndex.value--

    if (currentIndex.value <= 0) {
      currentIndex.value = products.length
    }
  }
</script>
<template>
  <section class="min-h-screen flex flex-col md:flex-row gap-8 bg-gray-100">
    <div class="flex-1 flex flex-col justify-center gap-6 px-6 py-10 md:px-12 lg:px-16">
      <h1 data-aos="fade-up" data-aos-delay="100" class="font-inter text-center lg:text-left font-extrabold text-[30px] leading-[110%] tracking-[-1%] text-gray-800 sm:text-[50px] md:text-[60px] lg:text-[65px] md:leading-[100%] ">
        The kind of <br class="hidden sm:block"> <span class="text-[#c9a84c]">furniture</span>
        you have <br class="hidden sm:block">been <br class="block lg:hidden"> looking for
      </h1>
      <div data-aos="fade-up" data-aos-delay="300" class="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 items-center md:items-start">
        <button  data-aos="fade-up" data-aos-delay="400" class="font-sans flex items-center justify-center gap-4 w-full max-w-[250px] lg:max-w-[300px] h-[60px] md:h-[70px] px-4 md:px-[36px] bg-[#E5F0B6]/30 border border-[#c9a84c]/40 text-gray-700 text-[16px] md:text-[20px] font-medium rounded-[12px] transition-colors hover:bg-[#E5F0B6]/50">
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35"/>
          </svg>
          SEARCH CATALOG
        </button>
        <button data-aos="fade-up" data-aos-delay="500" class="font-sans flex items-center justify-center gap-4 w-full max-w-[250px] lg:max-w-[300px] h-[60px] md:h-[70px] px-4 md:px-[36px] bg-white border border-gray-300 text-gray-700 text-[16px] md:text-[20px] font-medium rounded-[12px] hover:bg-gray-50 transition-colors">
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
          </svg>
            WATCH VIDEOS
        </button>
      </div>
    </div>
    <div class="relative flex-1 w-full md:max-w-none lg:max-w-[500px] sm:h-[500px] md:h-[700px]">
      <img src="/src/assets/sova.svg" alt="Posht Sofa" class="w-full h-full object-cover" />
      <p class="text-sm font-medium text-white absolute top-0 left-0 md:hidden px-3 py-5"> HIGHLIGHTED PRODUCT </p>
      <div class="absolute left-6 md:left-10 bottom-[100px] md:bottom-[110px] flex flex-col gap-3">
        <span class="bg-[#FFFFFF80] text-gray-800 text-sm font-medium rounded-[12px] w-[80px] h-[36px] flex items-center justify-center px-3" data-aos="fade-up" data-aos-delay="100"> $329 </span>
        <h2 class="font-sans text-white text-[40px] md:text-[64px] leading-none" data-aos="fade-up" data-aos-delay="200"> Posht Sofa</h2>
        <button  class="bg-[#2d2416] text-white px-5 py-2.5 rounded-[12px] flex items-center justify-center gap-2 hover:bg-[#3d3220] text-sm font-semibold max-w-[160px] md:max-w-[180px]" data-aos="fade-up" data-aos-delay="300">
          View Details
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </section>
  <section class="bg-[#2F241F] w-full max-w-full md:max-w-[1441px] mx-auto min-h-[486px] px-6 sm:px-12 md:px-20 lg:px-[142px] py-12 md:py-[72px] flex flex-col gap-8 md:gap-[40px]">
    <p class="text-center lg:text-left font-sans text-[#E5F0B6] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[32px] md:leading-[36px]"> WHY CHOOSE US? </p>
    <h1 class="text-center lg:text-left font-sans font-bold text-[25px] sm:text-[42px] md:text-[50px] lg:text-[55px] leading-[110%] md:leading-[100%] tracking-[-1%] text-[#E5F0B6]">
      We care about details and
      <br class="block sm:hidden">
      the quality
      <br class="hidden sm:block">
      of our products
    </h1>
    <div class="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 mt-4 w-full max-w-[1157px]">
      <div class="flex items-center gap-4 flex-1">
        <div class="w-10 h-10 bg-[#E5F0B680] rounded flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-[#F4F4F4]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35"/>
          </svg>
        </div>
        <p class="font-sans font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] uppercase text-[#E5F0B6]">
          Manufactured with
          <br class="hidden sm:block">
          quality
          <br class="block sm:hidden">
           materials
        </p>
      </div>
      <div class="flex items-center gap-4 flex-1">
        <div class="w-10 h-10 bg-[#E5F0B680] rounded flex items-center justify-center shrink-0">
          <span class="font-sans font-bold text-[16px] text-[#F4F4F4]">5</span>
        </div>
        <p class="font-sans font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] uppercase text-[#E5F0B6]">
          5 years of warranty
          <br class="hidden sm:block">
          for each
          <br class="block sm:hidden">
          profuct
        </p>
      </div>
      <div class="flex items-center gap-4 flex-1">
        <div class="w-10 h-10 bg-[#E5F0B680] rounded flex items-center justify-center shrink-0">
          <img src="/src/assets/briefcase.png" alt="Briefcase" class="w-5 h-5 brightness-0 invert"/>
        </div>
        <p class="font-sans font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] uppercase text-[#E5F0B6]">20 years of expertise</p>
      </div>
    </div>
  </section>
  <section class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-[200px] px-6 py-10 flex-wrap text-center max-w-7xl mx-auto">
    <div class="flex flex-col items-center mb-6 md:mb-0">
      <h1 class="font-sans font-bold text-5xl md:text-7xl lg:text-[96px] leading-[100%] tracking-[-0.05em] text-gray-800">25+</h1>
      <p class="font-sans font-normal text-sm md:text-lg lg:text-[24px] lg:ml-[70px] leading-[100%] text-gray-500 mt-1">PARTNERED BRANDS</p>
    </div>
    <div class="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
      <img src="/src/assets/Company logo.svg" alt="Brand 1" class="w-[60px] md:w-[105px] h-auto object-contain">
      <img src="/src/assets/Company logo (1).svg" alt="Brand 2" class="w-[60px] md:w-[105px] h-auto object-contain">
      <img src="/src/assets/Company logo (2).svg" alt="Brand 3" class="w-[60px] md:w-[105px] h-auto object-contain">
      <img src="/src/assets/Company logo (3).svg" alt="Brand 4" class="w-[60px] md:w-[105px] h-auto object-contain">
    </div>
  </section>
  <section class="w-full py-[80px] flex flex-col lg:flex-row items-start gap-[48px]">
    <div class="flex flex-row gap-2 w-full max-w-[620px] h-[200px] sm:h-[380px] lg:h-[523px] order-2 lg:order-1">
      <img src="/src/assets/Rectangle 6794.png" class=" w-[110px] sm:w-[110px] lg:w-[120px] lg:h-full h-[140px] object-cover rounded-xl mx-auto" alt="">
      <img src="/src/assets/Rectangle 6793.png" class="w-[110px] sm:w-[130px] lg:w-[140px] lg:h-full h-[140px] object-cover rounded-xl mx-auto" alt="">
      <img src="/src/assets/Rectangle 6792.png" class="w-[110px] sm:w-[320px] lg:w-[370px] lg:h-full h-[140px] object-cover rounded-xl mx-auto" alt="">
    </div>
    <div class="flex relative flex-col gap-8 w-full lg:flex-1 lg:ml-[70px] order-1 lg:order-2">
      <p class="text-center lg:text-left text-sm text-gray-500 tracking-wide"> Categories </p>
      <h1 class="text-center lg:text-left font-extrabold text-2xl md:text-4xl lg:text-5xl text-gray-800 leading-tight"> Furniture Sets <br> Recommendations </h1>
      <div class="max-w-[390px] space-y-2 mx-auto lg:mx-0">
        <div class="py-3"><h3 class="text-base font-bold text-gray-700 cursor-pointer"> Bedroom</h3></div>
        <div class="bg-[#E5F0B6] p-5 space-y-3">
          <h3 class="text-base font-bold text-gray-800"> Living Room </h3>
          <p class="text-sm text-gray-800">
            Enjoy a great living room aesthetics with
            <br class="block sm:hidden">
            your family
            <br class="hidden sm:block">
            Designs created for
            <br class="block sm:hidden">
            increased comfortability
          </p>
        </div>
        <div class="py-3">
          <h3 class="text-base font-bold text-gray-700 cursr-pointer"> Home Office </h3>
        </div>
        <div class="py-3">
          <h3 class="text-base font-bold text-gray-700 cursor-pointer"> Gaming Room </h3>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#2F241F] best-seller py-12">
    <div class="container mx-auto px-4">
      <div class="header flex items-end justify-between md:items-center gap-4 mb-6">
        <div class="header-text">
          <p class="lg:ml-6 font-sans font-normal text-xs sm:text-sm md:text-base tracking-wide uppercase text-[#B8C47A] mb-2"> OUR PRODUCTS </p>
          <h2 class="lg:ml-6 text-[#D4CA8A] font-inter font-bold text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-[48px] leading-tight tracking-tight"> This month's best seller</h2>
        </div>
        <button class="lg:mr-6 font-sans font-semibold text-[10px] sm:text-sm md:text-base px-3 sm:px-6 md:px-8 py-1.5 sm:py-3 rounded-xl bg-[#D4CA8A] text-[#2C2218] hover:bg-[#e5dc9c] transition "> SEE MORE </button>
      </div> 
      <div class="relative overflow-hidden w-full ">
        <div class="flex gap-6 transition-transform duration-500" :style="{ transform: `translateX(${trackOffset}px)` }">
          <div v-for="(item,index) in items" :key="item.id" class="flex-shrink-0 rounded-2xl overflow-hidden relative cursor-pointer h-10 sm:w-48 md:w-52 lg:w-60  transition-all duration-500"   :class="[ index === currentIndex + 1 ? 'w-3/4 h-[250px] sm:h-64 lg:h-96 scale-105 lg:scale-110 z-10' : 'w-1/2 h-52 sm:h-56 lg:h-80 opacity-70']"  >
            <img :src="item.image" class="w-full h-full object-cover" alt=""/>
            <div v-if="index === currentIndex + 1" class="absolute bottom-4 left-4 text-white">
              <span class="bg-white/70 text-black px-2 py-1 rounded text-sm"> ${{ item.price }} </span>
              <p class="text-xl font-bold"> {{ item.name }} </p>
            </div>
          </div>
        </div>
        <div class="lg:hidden">
          <button @click="prev" class="absolute left-2 top-1/2 top-[55%] -translate-y-1/2 w-10 h-10 rounded-full bg-[#d8d7a0] flex items-center justify-center"> ‹ </button>
          <button @click="next" class="absolute right-2 top-1/2 top-[55%] -translate-y-1/2 w-10 h-10 rounded-full bg-[#d8d7a0] flex items-center justify-center" > › </button> 
        </div>
        <div class="hidden lg:flex gap-3 mt-6 justify-end">
          <button @click="prev" class="w-10 h-10 rounded-full bg-[#d8d7a0] flex items-center justify-center"> ‹ </button>
          <button @click="next" class="w-10 h-10 rounded-full bg-[#d8d7a0] flex items-center justify-center"> › </button>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#f5f5f0] w-full max-w-[1440px] mx-auto py-20 px-6 md:px-20 lg:px-[142px] rounded-2xl flex flex-col gap-10">
    <p class="text-center lg:text-left lg:font-inter font-normal text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 tracking-wide text-[#1a1a1a] uppercase"> LIMITED DEALS </p>
    <h1 class="text-center lg:text-left font-inter font-bold text-[clamp(1.2rem,4vw,2rem)]  md:text-[clamp(2rem,4vw,4rem)]  lg:text-[50px] leading-tight tracking-tight transition-all duration-300 text-[#1a1a1a] max-w-full"> Become a member and get 10% off <br> of your first purchase </h1>
    <div class="flex items-center w-full max-w-xl lg:max-w-lg border border-gray-300 rounded-lg bg-white overflow-hidden">
      <input v-model="email" type="email" placeholder="Enter your email here" class="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-600 placeholder-gray-400 outline-none"/>
      <button @click="subscribe" class="bg-[#d4e07a] hover:bg-[#c5d166] transition p-3 sm:p-4 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </button>
    </div>
  </section>
</template>
<style scoped>
  html, body {
    overflow-x: hidden;
  }
</style>



