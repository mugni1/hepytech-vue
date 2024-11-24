<template>
  <section
    class="w-full h-20 bg-white flex justify-end items-center px-5 fixed z-0"
  >
    <header class="flex items-center">
      <span class="text-slate-700 me-1">Hi,</span>
      <span class="font-bold text-slate-700">{{ name }}</span>
      <div
        class="ms-2 h-8 w-8 flex items-center justify-center rounded-md border border-green-500 font-semibold text-green-700"
      >
        <span>{{ initialName }}</span>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  props: ["name", "initialName"],
};
</script>
