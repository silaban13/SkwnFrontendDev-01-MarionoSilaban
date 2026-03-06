<script>
import Footer from '../components/Footer.vue';
import sofaSatu from '@/assets/sofa_satu.jpg';
import sofaDua from '@/assets/sofa_dua.jpg';
import sofaTiga from '@/assets/sofa_tiga.jpg';
import sofaEmpat from '@/assets/sofa_empat.jpg';
import sofaLima from '@/assets/sofa_lima.jpg';

export default {
  name: 'BestSeller',

  components: {
    Footer,
  },

  data() {
    return {
      currentIndex: 1,
      activeIndex: 1,
      products: [
        { name: 'Velvet Sofa', image: sofaSatu },
        { name: 'Und Chair', price: '329', image: sofaDua },
        { name: 'Tiga Sofa', image: sofaTiga },
        { name: 'Side Table', image: sofaEmpat },
        { name: 'Shelf Unit', image: sofaLima }
      ],
    };
  },

  computed: {
    loopProducts() {
      return [...this.products, ...this.products];
    },
    currentOffset() {
      return this.currentIndex * 324; // sesuaikan width produk + gap
    }
  },

  methods: {
    next() {
      this.currentIndex++;
      if (this.currentIndex >= this.products.length) {
        this.currentIndex = 0;
      }
      this.activeIndex = this.currentIndex;
    },

    prev() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.products.length - 1;
      }
      this.activeIndex = this.currentIndex;
    }
  },
};
</script>
<template>
  <section class="min-h-screen flex flex-col md:flex-row gap-8 bg-gray-100">
    <div class="flex-1 flex flex-col justify-center gap-6 px-6 py-10 md:px-12 lg:px-16">
      <h1 class="font-inter font-extrabold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[65px] leading-[110%] md:leading-[100%] tracking-[-1%] text-gray-800">
        The kind of 
        <br>
        <span class="text-[#c9a84c]">furniture</span> you have 
        <br>
        been looking for
      </h1>
      <div class="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 items-center md:items-start">
        <button class="font-sans flex items-center justify-center gap-4 w-full max-w-[344px] h-[60px] md:h-[70px] px-6 md:px-[36px] bg-[#E5F0B6]/30 border border-[#c9a84c]/40 text-gray-700 text-[18px] md:text-[20px] font-medium rounded-[12px] transition-colors hover:bg-[#E5F0B6]/50">
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35"/>
          </svg>
          SEARCH CATALOG
        </button>
        <button class="font-sans flex items-center justify-center gap-4 w-full max-w-[344px] h-[60px] md:h-[70px] px-6 md:px-[36px] bg-white border border-gray-300 text-gray-700 text-[18px] md:text-[20px] font-medium rounded-[12px] hover:bg-gray-50 transition-colors">
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
          </svg>
            WATCH VIDEOS
        </button>
      </div>
    </div>
    <div class="relative flex-1 w-full max-w-[500px] h-[400px] sm:h-[500px] md:h-[700px]">
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
    <p class="font-sans text-[#E5F0B6] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[32px] md:leading-[36px]"> WHY CHOOSE US? </p>
    <h1 class="font-sans font-bold text-[25px] sm:text-[42px] md:text-[50px] lg:text-[55px] leading-[110%] md:leading-[100%] tracking-[-1%] text-[#E5F0B6]">
      We care about details and the quality<br/>
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
        <p class="font-sans font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] uppercase text-[#E5F0B6]"> Manufactured with <br>quality materials </p>
      </div>
      <div class="flex items-center gap-4 flex-1">
        <div class="w-10 h-10 bg-[#E5F0B680] rounded flex items-center justify-center shrink-0">
          <span class="font-sans font-bold text-[16px] text-[#F4F4F4]">5</span>
        </div>
        <p class="font-sans font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] uppercase text-[#E5F0B6]"> 5 years of warranty <br>for each product</p>
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
      <p class="font-sans font-normal text-sm md:text-lg lg:text-[24px] leading-[100%] text-gray-500 mt-1">Partnered Brands</p>
    </div>
    <div class="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
      <img src="/src/assets/Company logo.svg" alt="Brand 1" class="w-[60px] md:w-[105px] h-auto object-contain">
      <img src="/src/assets/Company logo (1).svg" alt="Brand 2" class="w-[60px] md:w-[105px] h-auto object-contain">
      <img src="/src/assets/Company logo (2).svg" alt="Brand 3" class="w-[60px] md:w-[105px] h-auto object-contain">
      <img src="/src/assets/Company logo (3).svg" alt="Brand 4" class="w-[60px] md:w-[105px] h-auto object-contain">
    </div>
  </section>
  <section class="w-full py-[80px] flex flex-col lg:flex-row items-start gap-[48px]">
    <div class=" flex-row flex  order-2 gap-6 w-full max-w-[620px] h-[200px] sm:h-[380px] lg:h-[523px]">
      <img src="/src/assets/Rectangle 6794.png" class="w-[110px] sm:w-[110px] lg:w-[120px] h-full object-cover rounded-xl mx-auto" alt="">
      <img src="/src/assets/Rectangle 6793.png" class="w-[110px] sm:w-[130px] lg:w-[140px] h-full object-cover rounded-xl mx-auto" alt="">
      <img src="/src/assets/Rectangle 6792.png" class="w-[110px] sm:w-[320px] lg:w-[330px] h-full object-cover rounded-3xl mx-auto" alt="">
    </div>
    <div class="flex  relative order-1  flex-col gap-8 w-full lg:flex-1 ml-8">
      <p class="text-sm text-center text-gray-500 tracking-wide"> Categories </p>
      <h1 class="text-center font-extrabold text-2xl md:text-4xl lg:text-5xl text-gray-800 leading-tight"> Furniture Sets <br> Recommendations </h1>
      <div class=" max-w-[300px] rounded-xl space-y-4">
        <div class="py-3"><h3 class="text-base font-bold text-gray-700 cursor-pointer"> Bedroom</h3></div>
        <div class="bg-[#E5F0B6] rounded-xl p-5 space-y-3">
          <h3 class="text-base font-bold text-gray-800"> Living Room </h3>
          <p class=" text-sm text-gray-800"> Enjoy a great living room aesthetics with your family </p>
          <p class="text-sm text-gray-800"> Designs created for increased comfortability</p>
        </div>
        <div class="py-3">
          <h3 class="text-base font-bold text-gray-700 cursor-pointer"> Home Office </h3>
        </div>
        <div class="py-3">
          <h3 class="text-base font-bold text-gray-700 cursor-pointer"> Gaming Room </h3>
        </div>
      </div>
    </div>
  </section>
  <section class="best-seller py-12">
    <div class="container mx-auto px-4">
      <div class="header flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div class="header-text text-center md:text-left">
          <p class="font-sans font-normal text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6 tracking-wide uppercase text-[#B8C47A]"> OUR PRODUCTS </p>
          <h2 class="text-[#D4CA8A] font-inter font-bold text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-[48px] leading-tight tracking-tight"> This month's best seller </h2>
        </div>
        <button class="font-sans font-semibold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl bg-[#D4CA8A] text-[#2C2218] hover:bg-[#e5dc9c] transition"> SEE MORE </button>
      </div>

      <div class="carousel-wrapper overflow-hidden relative">
  <div class="carousel-track flex gap-4 sm:gap-6 transition-transform duration-500"
       :style="{ transform: `translateX(-${currentOffset}px)` }">
    <div v-for="(product, index) in loopProducts" :key="index"
         class="product-card relative flex-shrink-0 w-[80vw] sm:w-52 md:w-60 lg:w-72 xl:w-80 h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] rounded-xl"
         :class="{ active: index === currentIndex }">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover rounded-xl"/>
      <div v-if="product.price" class="absolute left-2 sm:left-4 bottom-14 sm:bottom-20 px-2 sm:px-4 py-1 rounded-xl bg-white/50 text-black text-xs sm:text-sm font-medium">
        ${{ product.price }}
      </div>
      <h3 class="absolute left-2 sm:left-4 bottom-4 sm:bottom-8 text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
        {{ product.name }}
      </h3>
    </div>
  </div>
</div>

      <div class="nav-buttons flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-4">
        <button class="nav-btn px-3 sm:px-4 py-2 sm:py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition" @click="prev" :disabled="currentIndex === 0">
          &lt;
        </button>
        <button class="nav-btn px-3 sm:px-4 py-2 sm:py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition" @click="next">
          &gt;
        </button>
      </div>
    </div>
  </section>
  <section class="bg-[#f5f5f0] w-full max-w-[1440px] mx-auto py-20 px-6 md:px-20 lg:px-[142px] rounded-2xl flex flex-col gap-10">
    <p class="font-inter font-normal text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 tracking-wide text-gray-500 uppercase"> LIMITED DEALS </p>
    <h1 class="font-inter font-bold text-[clamp(1.5rem,5vw,3rem)] md:text-[clamp(2rem,4vw,4rem)] lg:text-[50px] leading-tight tracking-tight transition-all duration-300 text-[#1a1a1a] max-w-full">
      Become a member and get 10% off <br>
      of your first purchase
    </h1>
    <div class="flex flex-col sm:flex-row items-center w-full max-w-xl border border-gray-300 rounded-lg bg-white overflow-hidden">
      <input v-model="email" type="email" placeholder="Enter your email here" class="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-600 placeholder-gray-400 outline-none" />
      <button @click="subscribe" class="w-full sm:w-auto mt-2 sm:mt-0 bg-[#d4e07a] hover:bg-[#c5d166] transition rounded-md p-3 sm:p-4 flex items-center justify-center">
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

.best-seller{
  width:100%;
  padding:80px 0;
  background:#3a2a1f;
}

.container{
  max-width:1440px;
  margin:auto;
  padding:0 16px;
  display:flex;
  flex-direction:column;
  gap:48px;
}

.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.label{
  font-size:12px;
  letter-spacing:0.12em;
  color:#cbd59a;
  margin-bottom:8px;
}

.see-more-btn{
  background:#d7e2a4;
  color:#2c2218;
  border:none;
  padding:12px 26px;
  border-radius:10px;
  font-weight:600;
  cursor:pointer;
}

.carousel-wrapper{
  width:100%;
  overflow:hidden;
  position:relative;
}

.carousel-track{
  display:flex;
  gap:24px;
  transition:transform .45s ease;
  align-items:center;
}

.product-card{
  width:300px;
  height:400px;
  border-radius:12px;
  overflow:hidden;
  flex-shrink:0;
  position:relative;

  transform:scale(.92);
  opacity:.7;

  transition:
    transform .45s ease,
    opacity .45s ease;
}

.product-card img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

.product-card.active{
  transform:scale(1.05);
  opacity:1;
}

.product-info{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  padding:18px;

  background:linear-gradient(
    to top,
    rgba(0,0,0,.65),
    rgba(0,0,0,0)
  );
}

.price{
  display:inline-block;
  background:white;
  padding:4px 10px;
  border-radius:6px;
  font-size:50px;
  margin-bottom:6px;
}

.product-name{
  color:white;
  font-size:20px;
  font-weight:600;
}

.nav-buttons{
  display:flex;
  justify-content:flex-end;
  gap:12px;
}

.nav-btn{
  width:44px;
  height:44px;
  border-radius:50%;
  border:1px solid #d7e2a4;
  background: #E5F0B6;
  font-size:18px;
  cursor:pointer;
  transition:.25s;
}
</style>



