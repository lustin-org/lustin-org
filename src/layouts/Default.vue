<template>
  <div class="flex flex-col h-screen">  
    <NavBar />
    
    <main class="flex-1 overflow-y-auto p-5">
      <slot/>
    </main>
    <footer class="py-5 bg-gray-700 text-center text-white">
      {{ $t("footer") }}
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

