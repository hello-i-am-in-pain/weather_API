<script setup>
defineProps({ label: { type: String, default: 'Calculate' } })
</script>

<template>
  <button
    type="button"
    style="max-width: 320px; display: inline-flex"
    class="w-full mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] hover:from-[#6366f1] hover:to-[#0ea5b6] px-5 py-3 text-white font-semibold shadow-2xl focus:outline-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      style="flex: 0 0 20px"
      class="h-5 w-5 opacity-90"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
    <span class="tracking-wide">{{ label }}</span>
  </button>
</template>

<style scoped></style>
