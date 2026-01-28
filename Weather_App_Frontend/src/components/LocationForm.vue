<script setup>
import ActionButton from './ActionButton.vue'
// Pure UI form — no logic or v-model bindings per constraints
</script>

<template>
  <form class="space-y-4">
    <div>
      <label class="block text-sm mb-1">Country</label>
      <input
        placeholder="e.g. United States"
        class="w-full rounded-xl glass px-4 py-3 text-slate-100 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa]"
      />
    </div>

    <div>
      <label class="block text-sm mb-1"
        >State / Province <span class="text-xs text-slate-300">(optional)</span></label
      >
      <input
        placeholder="e.g. California"
        class="w-full rounded-xl glass px-4 py-3 text-slate-100 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa]"
      />
    </div>

    <div>
      <label class="block text-sm mb-1">City / Town</label>
      <input
        placeholder="e.g. San Francisco"
        class="w-full rounded-xl glass px-4 py-3 text-slate-100 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa]"
      />
    </div>

    <div>
      <label class="block text-sm mb-1">Time / Date</label>
      <input
        type="datetime-local"
        class="w-full rounded-xl glass px-4 py-3 text-slate-100 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa]"
      />
    </div>

    <div>
      <ActionButton label="Calculate" />
    </div>
  </form>
</template>

<style scoped></style>
