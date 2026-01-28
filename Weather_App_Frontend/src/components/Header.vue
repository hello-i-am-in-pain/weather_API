<script setup></script>

<template>
  <header class="w-full py-6">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div
          class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
          style="background: linear-gradient(135deg, var(--blue-700), #6b73ff)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 15a4 4 0 004 4h8a4 4 0 100-8 5 5 0 10-9-3"
            />
          </svg>
        </div>
        <div>
          <h1 class="text-2xl font-bold">Weather App</h1>
          <p class="text-sm text-slate-300/80">UI Shell — Vue 3 + Tailwind</p>
        </div>
      </div>
      <nav class="hidden md:flex items-center gap-4 text-sm text-slate-200/80">
        <a class="px-3 py-2 rounded-md hover:bg-white/5">Home</a>
        <a class="px-3 py-2 rounded-md hover:bg-white/5">Forecast</a>
        <a class="px-3 py-2 rounded-md hover:bg-white/5">Locations</a>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
