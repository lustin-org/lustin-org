<template>
  <Layout>
    <div class="rounded-lg shadow bg-base-200 drawer drawer-mobile h-52">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="flex flex-col items-center justify-center drawer-content">
        <label
          for="my-drawer-2"
          class="mb-4 btn btn-primary drawer-button lg:hidden"
          >open menu</label
        >
        <div class="hidden text-xs text-center lg:block">
          STANDART
        </div>
        <div class="text-xs text-center lg:hidden">
          MOBILE
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <a>Who</a>
          </li>
          <li>
            <a>Am</a>
          </li>
          <li>
            <a>I</a>
          </li>
          <li>
            <a>Timeline</a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style>
</style>