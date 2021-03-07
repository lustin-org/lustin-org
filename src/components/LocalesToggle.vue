<template>
  <Card class="shadow-lg compact side bg-default">
    <div class="flex-row items-center space-x-4 card-body">
      <label class="flex-0">
        <div>
          <input type="checkbox" class="toggle" :class="classes" checked />
          <span class="toggle-mark"></span>
        </div>
      </label>
      <div class="flex-1">
        <h2 class="card-title">Enable Notifications</h2>
        <p class="text-content-400">To get latest updates</p>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  name: "LocalesToggle",
};
</script>

<style>
</style>