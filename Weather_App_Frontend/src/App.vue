<script setup>
import Header from './components/Header.vue'
import LocationForm from './components/LocationForm.vue'
import WeatherCard from './components/WeatherCard.vue'
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-slate-100"
  >
    <Header />

    <main class="container mx-auto px-4 py-10 flex-1">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-2">
          <WeatherCard />
        </div>

        <aside class="bg-transparent">
          <div class="backdrop-blur-md bg-white/6 rounded-2xl p-6 shadow-lg border border-white/6">
            <h2 class="text-xl font-semibold mb-4">Enter Location</h2>
            <LocationForm />
          </div>
        </aside>
      </div>
    </main>

    <footer class="py-4 text-center text-sm text-slate-300/80">
      UI Shell — inputs are styled and non-functional (pure UI only)
    </footer>
  </div>
</template>

<style>
/* No component-scoped styles; Tailwind utilities are used throughout */
</style>
