<template>
  <Layout>
      
<div class="hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="/404.jpg" class="max-w-sm rounded-lg shadow-2xl"> 
    <div>
      <h1 class="mb-5 text-5xl font-bold">
            {{ $t("404.header")}}
          </h1> 
      <p class="mb-5">
            {{ $t("404.description")}}
          </p> 
      <button class="btn">
          <g-link class="nav__link" to="/main/">
            {{ $t("404.button")}}
          </g-link>
      </button>
    </div>
  </div>
</div>
  </Layout>
</template>

<script>
export default {

}
</script>

<style>

</style>