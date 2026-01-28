<script setup></script>

<template>
  <section class="rounded-3xl p-8 glass shadow-2xl">
    <div class="flex items-start justify-between gap-6">
      <div>
        <div class="text-sm text-slate-300">Miami, FL</div>
        <div class="flex items-center gap-6 mt-4">
          <div class="flex items-baseline gap-3">
            <div class="text-7xl font-extrabold">18<span class="text-2xl">°</span></div>
            <div class="text-slate-300">Mostly cloudy</div>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-4 gap-4 text-center">
          <div class="py-3 px-3 bg-white/4 rounded-xl">
            01:00<br /><span class="block text-sm mt-1">18°</span>
          </div>
          <div class="py-3 px-3 bg-white/4 rounded-xl">
            Now<br /><span class="block text-sm mt-1">18°</span>
          </div>
          <div class="py-3 px-3 bg-white/4 rounded-xl">
            03:00<br /><span class="block text-sm mt-1">17°</span>
          </div>
          <div class="py-3 px-3 bg-white/4 rounded-xl">
            04:00<br /><span class="block text-sm mt-1">18°</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <div
          class="w-40 h-40 rounded-full bg-gradient-to-b from-white/8 to-white/4 flex items-center justify-center shadow-inner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20 text-white/90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M20 13.5A5.5 5.5 0 0014.5 8h-1A4.5 4.5 0 109 17.5"
            />
          </svg>
        </div>

        <div class="mt-4 text-slate-300 text-sm">Updated: 01:00</div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
