<template>
  <header
    class="w-full h-20 border-b shadow-md flex justify-between items-center px-5 fixed fixed-top bg-white z-50"
  >
    <nav
      class="mx-auto container px-5 flex h-full w-full justify-between items-center"
    >
      <div class="font-bold text-xl text-slate-900">
        <span class="text-purple-700">HEPY</span
        ><span class="text-orange-600">TECH</span>
      </div>
      <div class="text-base font-semibold">
        <ul class="flex gap-5 text-slate-800">
          <li><router-link to="/">Home</router-link></li>
          <li><a href="#about">About</a></li>
          <li><router-link to="on-pinia">Service</router-link></li>
        </ul>
      </div>
      <button
        class="py-2 px-5 border rounded-full shadow-md font-semibold bg-purple-700 text-white hover:scale-95 hover:bg-purple-900 hover:shadow-sm"
      >
        Contac US
      </button>
    </nav>
  </header>
</template>
