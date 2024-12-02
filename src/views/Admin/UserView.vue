<template>
  <!-- SIDEBAR  -->
  <Sidebar />
  <!-- EDN SIDEBAR  -->

  <!-- HEADING  -->
  <AdminHeading :name="userName" :initialName="initialName" />
  <!-- edn HEADING  -->

  <!-- SECTION OF CONTENT  -->
  <section
    class="min-h-screen w-10/12 bg-gradient-to-br from-red-50 via-slate-100 to-yellow-50 ms-auto pt-24 px-5"
  >
    <!-- title  -->
    <h1 class="w-full text-center font-semibold text-slate-800 text-2xl mb-5">
      LIST USER
    </h1>
    <!-- end title  -->

    <!-- btn add  -->
    <button
      class="mb-5 px-5 py-2 bg-green-600 hover:bg-green-800 active:ring-2 ring-green-500 rounded-lg text-white font-semibold shadow-md"
    >
      Add User
    </button>
    <!-- btn add  -->

    <!-- table data  -->
    <table class="w-full">
      <tr>
        <th class="border-b py-5 text-slate-800 w-1/12">No</th>
        <th class="border-b py-5 text-slate-800 w-3/12">Name</th>
        <th class="border-b py-5 text-slate-800 w-3/12">Email</th>
        <th class="border-b py-5 text-slate-800 w-3/12">Role</th>
        <th class="border-b py-5 text-slate-800 w-2/12" colspan="2">Action</th>
      </tr>
      <tr>
        <td class="border-b text-center py-2">1</td>
        <td class="border-b text-center py-2">Asep Abdul Mugni</td>
        <td class="border-b text-center py-2">abankr342@gmail.com</td>
        <td class="border-b text-center py-2">Admin</td>
        <td class="border-b text-center">
          <button
            class="p-2 my-2 bg-red-600 hover:bg-red-800 active:ring-2 ring-red-500 flex items-center justify-center rounded-lg mx-auto"
          >
            <box-icon name="trash-alt" color="#ffffff"></box-icon>
          </button>
        </td>
        <td class="border-b text-center">
          <button
            class="p-2 my-2 bg-purple-600 hover:bg-purple-800 active:ring-2 ring-purple-500 flex items-center justify-center rounded-lg mx-auto"
          >
            <box-icon name="pencil" color="#ffffff"></box-icon>
          </button>
        </td>
      </tr>
    </table>
    <!-- end table data  -->
  </section>
  <!-- END SECTION OF CONTENT  -->
</template>

<script>
import "boxicons";
import AdminHeading from "@/components/AdminHeading.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  data() {
    return {
      userName: localStorage.getItem("name"),
    };
  },
  computed: {
    initialName() {
      return this.userName.substring(0, 1).toUpperCase();
    },
  },
};
</script>
