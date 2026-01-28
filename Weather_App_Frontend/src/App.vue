<script setup>
import WeatherForm from './components/WeatherForm.vue'
import WeatherDisplay from './components/WeatherDisplay.vue'
import ForecastCard from './components/ForecastCard.vue'

const hourlyForecast = [
  { time: '12:00', temp: '19°', icon: 'sun' },
  { time: '13:00', temp: '20°', icon: 'sun' },
  { time: '14:00', temp: '21°', icon: 'cloud' },
  { time: '15:00', temp: '20°', icon: 'cloud' },
  { time: '16:00', temp: '18°', icon: 'cloud' },
  { time: '17:00', temp: '17°', icon: 'cloud' },
]
</script>

<template>
  <div
    class="min-h-screen bg-weather-gradient flex flex-col items-center py-12 px-4 space-y-8 overflow-x-hidden"
  >
    <!-- Header/Logo Area -->
    <div class="text-center">
      <h1 class="text-2xl font-bold tracking-widest uppercase opacity-50">Weather Pro</h1>
    </div>

    <!-- Main Content Layout -->
    <div
      class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-items-center"
    >
      <!-- Left Column: Display and Forecast -->
      <div class="flex flex-col items-center space-y-8 w-full">
        <WeatherDisplay city="Montreal, Canada" temp="8°" condition="Rainy" />

        <ForecastCard title="Hourly Forecast" :items="hourlyForecast" />
      </div>

      <!-- Right Column: Form -->
      <div class="flex flex-col items-center justify-center w-full h-full">
        <WeatherForm />
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <div
        class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-weather-accent/20 rounded-full blur-[120px]"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"
      ></div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>
