<template>
  <section
    class="w-full h-20 bg-white flex justify-end items-center px-5 fixed z-0"
  >
    <header>
      <span class="text-slate-700 me-1">Hi,</span>
      <span class="font-bold text-slate-700">{{ name }}</span>
    </header>
  </section>
</template>

<script>
export default {
  props: ["name"],
};
</script>
