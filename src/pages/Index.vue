<template>
  <div
    class="hero min-h-screen"
    style="background-image: url('https://static.tildacdn.com/tild3138-3431-4366-b431-383735643532/photo.png')"
  >
    
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-content-100">
      
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">{{ $t("welcome") }}</h1>
        <p class="mb-5">
          {{ $t("strategy-text") }}
        </p>
        <button class="btn btn-black">
          <g-link class="nav__link" to="/main/">
            {{ $t("startbutton") }}
          </g-link>
        </button>
        
      </div>
      
    </div>
    
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import LocalesToggle from "@/components/LocalesToggle.vue";

export default {
  metaInfo: {
    title: "MAIN",
  },
  components: {
    LocaleSwitcher,
    LocalesToggle

  },
};
</script>
