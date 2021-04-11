<template>
   <div class="justify-center flex-1 hidden px-2 mx-2 lg:flex">
    <div class="flex items-stretch">
      <a href="/main" class="btn btn-ghost btn-sm rounded-btn">
              {{ $t("main") }}
            </a> 
      <a href="/happy" class="btn btn-ghost btn-sm rounded-btn">
              {{ $t("feed") }}
            </a> 
      <a href="/radiostream" class="btn btn-ghost btn-sm rounded-btn">
              {{ $t("radiostream") }}
            </a> 
      <a href="/likecv" class="btn btn-ghost btn-sm rounded-btn">
              {{ $t("likecv") }}
            </a>
      <a href="/discuss" class="btn btn-ghost btn-sm rounded-btn">
              {{ $t("discuss.link") }}
            </a>
      <!--
      <a href="/lifebook" class="btn btn-ghost btn-sm rounded-btn">
              {{ $t("book.link") }}
            </a>-->
      <a href="/stats" class="btn btn-ghost btn-sm rounded-btn">
              {{ $t("stats.link") }}
            </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>