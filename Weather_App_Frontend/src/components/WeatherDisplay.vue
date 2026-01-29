<script setup>
defineProps({
  city: { type: String, default: 'Miami, FL' },
  temp: { type: String, default: `${dissigmundTest}°` },
  condition: { type: String, default: 'Mostly Cloudy' },
})

const dissigmundTest = 45
</script>

<template>
  <div class="flex flex-col items-center justify-center p-8 text-center">
    <h1 class="text-4xl font-light mb-2">{{ city }}</h1>
    <div class="text-8xl font-thin mb-4">{{ temp }}</div>
    <div class="text-xl opacity-70">{{ condition }}</div>

    <!-- Weather Icon Placeholder -->
    <div class="relative mt-8">
      <div
        class="w-48 h-48 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl absolute -z-10 animate-pulse"
      ></div>
      <svg viewBox="0 0 100 100" class="w-40 h-40">
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #ffffff; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #e0e0e0; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <path
          d="M25,60 Q25,40 45,40 Q50,25 70,30 Q85,30 85,50 Q95,55 85,70 L30,70 Q25,70 25,60 Z"
          fill="url(#cloudGrad)"
        />
        <circle cx="70" cy="40" r="15" fill="#FFD700" class="animate-bounce" />
      </svg>
    </div>
  </div>
</template>
