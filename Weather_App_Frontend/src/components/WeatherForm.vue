<script setup></script>

<template>
  <div
    class="bg-weather-secondary/50 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/10 w-full max-w-md"
  >
    <h2 class="text-2xl font-bold mb-6 text-center">Check Weather</h2>
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1 opacity-70">Country</label>
        <input
          type="text"
          placeholder="Enter Country"
          class="w-full bg-weather-primary/50 border border-white/20 rounded-xl px-4 py-2 focus:outline-none focus:border-weather-accent transition-colors"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1 opacity-70"
          >State/Province <span class="text-xs italic">(Optional)</span></label
        >
        <input
          type="text"
          placeholder="Enter State/Province"
          class="w-full bg-weather-primary/50 border border-white/20 rounded-xl px-4 py-2 focus:outline-none focus:border-weather-accent transition-colors"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1 opacity-70">City/Town</label>
        <input
          type="text"
          placeholder="Enter City/Town"
          class="w-full bg-weather-primary/50 border border-white/20 rounded-xl px-4 py-2 focus:outline-none focus:border-weather-accent transition-colors"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1 opacity-70">Time/Date</label>
        <input
          type="datetime-local"
          class="w-full bg-weather-primary/50 border border-white/20 rounded-xl px-4 py-2 focus:outline-none focus:border-weather-accent transition-colors"
        />
      </div>
      <button
        class="w-full bg-gradient-to-r from-weather-accent to-purple-600 hover:from-purple-600 hover:to-weather-accent text-white font-bold py-3 rounded-xl shadow-lg transform transition-all active:scale-95 mt-4"
      >
        Calculate
      </button>
    </div>
  </div>
</template>
