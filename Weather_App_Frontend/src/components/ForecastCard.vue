<script setup>
defineProps({
  title: String,
  items: Array, // { time: String, temp: String, icon: String }
})
</script>

<template>
  <div class="bg-weather-secondary/30 backdrop-blur-sm rounded-3xl p-6 w-full max-w-md">
    <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
      <h3 class="text-sm font-semibold uppercase tracking-wider opacity-60">{{ title }}</h3>
    </div>
    <div class="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col items-center min-w-[60px] space-y-2"
      >
        <span class="text-sm font-medium">{{ item.time }}</span>
        <div class="w-10 h-10 flex items-center justify-center">
          <!-- Simplified Icon -->
          <svg v-if="item.icon === 'cloud'" viewBox="0 0 24 24" class="w-8 h-8 fill-blue-300">
            <path
              d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-0.101,0.005-0.201,0.012-0.3c-1.353-0.781-2.262-2.229-2.262-3.95 c0-2.485,2.015-4.5,4.5-4.5c1.611,0,3.029,0.849,3.834,2.12c0.211-0.077,0.437-0.12,0.666-0.12c1.105,0,2,0.895,2,2 c0,0.113-0.011,0.224-0.03,0.332C22.011,9.664,23,11.214,23,13C23,16.314,20.314,19,17.5,19z"
            />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="w-8 h-8 fill-yellow-400">
            <circle cx="12" cy="12" r="5" />
          </svg>
        </div>
        <span class="text-lg font-bold">{{ item.temp }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
