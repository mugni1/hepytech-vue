<template>
  <!-- SIDEBAR  -->
  <Sidebar />
  <!-- EDN SIDEBAR  -->

  <!-- HEADING  -->
  <AdminHeading :name="userName" :initialName="initialName" />
  <!-- edn HEADING  -->

  <!-- FORM CREATE -->
  <section
    v-if="useUserStore().formAdd == true"
    class="fixed bg-slate-600 bg-opacity-50 flex items-center justify-center w-full h-screen z-50"
  >
    <form
      data-aos="zoom-in"
      @submit.prevent="useUserStore().createUser()"
      class="container w-11/12 md:w-4/12 h-5/6 relative bg-white rounded-xl shadow-lg p-5 overflow-y-scroll scrollbar-hide border-2 border-slate-400"
    >
      <!-- title  -->
      <h1
        class="mx-auto font-semibold text-xl w-full text-center mb-5 text-slate-800"
      >
        CREATE USER
      </h1>
      <!-- end title  -->
      <!-- input  -->
      <div class="w-full py-2">
        <label class="text-slate-700 font-semibold">
          Name
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="Zharif Khaleed"
          maxlength="100"
          v-model="useUserStore().nameAdd"
          required
        />
      </div>
      <div class="w-full py-2">
        <label class="text-slate-700 font-semibold">
          Email
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="email"
          placeholder="kingzharif@gmail.com"
          v-model="useUserStore().emailAdd"
          required
        />
      </div>
      <div class="w-full py-2">
        <label class="text-slate-700 font-semibold">
          Password
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="zharif27234@#"
          v-model="useUserStore().passwordAdd"
          required
        />
      </div>
      <div class="w-full py-2">
        <label class="text-slate-700 font-semibold">
          Role
        </label>
        <select
          v-model="useUserStore().role_idAdd"
          class="w-full border p-1 shadow-md rounded-md outline-none"
          required
        >
          <option value="1">Admin</option>
        </select>
      </div>
      <!-- edn input  -->
      <!-- box btn  -->
      <div class="w-full py-2 flex gap-5">
        <button
          class="py-2 px-5 bg-purple-600 rounded-lg shadow-md text-white font-semibold"
          :disabled="useUserStore().loadingButton"
        >
          <span v-if="useUserStore().loadingButton == false">Create</span>
          <span v-if="useUserStore().loadingButton == true">Loading</span>
        </button>
        <button
          class="py-2 px-5 bg-slate-500 text-white border rounded-lg shadow-md font-semibold"
          @click="useUserStore().formAdd = false"
        >
          Cancel
        </button>
      </div>
      <!-- edn box btn  -->
    </form>
  </section>
  <!-- END FORM CREATE  -->

  <!-- FORM UPDATE -->
  <section
    v-if="useUserStore().formUpdate == true"
    class="fixed bg-slate-600 bg-opacity-50 flex items-center justify-center w-full h-screen z-50"
  >
    <form
      data-aos="zoom-in"
      @submit.prevent="useUserStore().updateUser(useUserStore().idUpdate)"
      class="container w-11/12 md:w-4/12 h-5/6 relative bg-white rounded-xl shadow-lg p-5 overflow-y-scroll scrollbar-hide border-2 border-slate-400"
    >
      <!-- title  -->
      <h1
        class="mx-auto font-semibold text-xl w-full text-center mb-5 text-slate-800"
      >
        UPDATE USER
      </h1>
      <!-- end title  -->
      <!-- input  -->
      <div class="w-full py-2">
        <label class="text-slate-700 font-semibold">
          Name
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="Zharif Khaleed"
          maxlength="100"
          v-model="useUserStore().nameUpdate"
          required
        />
      </div>
      <div class="w-full py-2">
        <label class="text-slate-700 font-semibold">
          Email
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="email"
          placeholder="kingzharif@gmail.com"
          v-model="useUserStore().emailUpdate"
          required
        />
      </div>
      <div class="w-full py-2">
        <label class="text-slate-700 font-semibold">
          Password
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="zharif27234@#"
          v-model="useUserStore().passwordUpdate"
        />
      </div>
      <div class="w-full py-2">
        <label class="text-slate-700 font-semibold">
          Role
        </label>
        <select
          v-model="useUserStore().role_idUpdate"
          class="w-full border p-1 shadow-md rounded-md outline-none"
          required
        >
          <option value="1">Admin</option>
        </select>
      </div>
      <!-- edn input  -->
      <!-- box btn  -->
      <div class="w-full py-2 flex gap-5">
        <button
          class="py-2 px-5 bg-purple-600 rounded-lg shadow-md text-white font-semibold"
          :disabled="useUserStore().loadingButton"
        >
          <span v-if="useUserStore().loadingButton == false">Update</span>
          <span v-if="useUserStore().loadingButton == true">Loading</span>
        </button>
        <button
          class="py-2 px-5 bg-slate-500 text-white border rounded-lg shadow-md font-semibold"
          @click="useUserStore().formUpdate = false"
        >
          Cancel
        </button>
      </div>
      <!-- edn box btn  -->
    </form>
  </section>
  <!-- END FORM UPDATE  -->

  <!-- SECTION OF CONTENT  -->
  <section
    class="min-h-screen w-10/12 bg-gradient-to-br from-red-50 via-slate-100 to-yellow-50 ms-auto pt-20 px-5"
  >
    <!-- title  -->
    <h1 class="w-full text-center font-bold text-slate-800 text-2xl py-5">
      LIST USER
    </h1>
    <!-- end title  -->

    <!-- card  -->
    <div class="bg-white p-5 rounded-lg shadow-lg mb-10">
      <!-- btn add  -->
      <button
        @click="useUserStore().formAdd = true"
        class="mb-5 px-5 py-2 bg-green-600 hover:bg-green-800 active:ring-2 ring-green-500 rounded-lg text-white font-semibold shadow-md"
      >
        Add User
      </button>
      <!-- btn add  -->

      <!-- table data  -->
      <table class="w-full">
        <!-- table head  -->
        <tr>
          <th class="border-b py-5 text-slate-800 w-1/12">No</th>
          <th class="border-b py-5 text-slate-800 w-3/12">Name</th>
          <th class="border-b py-5 text-slate-800 w-3/12">Email</th>
          <th class="border-b py-5 text-slate-800 w-3/12">Role</th>
          <th class="border-b py-5 text-slate-800 w-2/12" colspan="2">
            Action
          </th>
        </tr>
        <!-- end table head  -->
        <!-- table data  -->
        <tr v-for="(item, index) in useUserStore().listUser" :key="index">
          <td class="border-b text-center py-2">{{ index + 1 }}</td>
          <td class="border-b text-center py-2">{{ item.name }}</td>
          <td class="border-b text-center py-2">{{ item.email }}</td>
          <td class="border-b text-center py-2">{{ item.role.name }}</td>
          <td class="border-b text-center">
            <button
              @click="useUserStore().deleteUser(item.id, item.name, index)"
              class="p-2 my-2 bg-red-600 hover:bg-red-800 active:ring-2 ring-red-500 flex items-center justify-center rounded-lg mx-auto"
            >
              <box-icon name="trash-alt" color="#ffffff"></box-icon>
            </button>
          </td>
          <td class="border-b text-center">
            <button
              @click="
                useUserStore().getDataForUpdate(
                  item.id,
                  item.name,
                  item.email,
                  item.role.id
                )
              "
              class="p-2 my-2 bg-purple-600 hover:bg-purple-800 active:ring-2 ring-purple-500 flex items-center justify-center rounded-lg mx-auto"
            >
              <box-icon name="pencil" color="#ffffff"></box-icon>
            </button>
          </td>
        </tr>
        <!-- end table data -->
        <!-- loading table  -->
        <tr v-if="useUserStore().loadingTable == true">
          <th colspan="6" class="pt-5 text-xl text-blue-600">Loading...</th>
        </tr>
        <!-- end loading table  -->
        <!-- No data table  -->
        <tr
          v-if="
            useUserStore().loadingTable == false &&
            useUserStore().listUser.length < 1
          "
        >
          <th colspan="6" class="pt-5 text-xl text-red-600">No Data</th>
        </tr>
        <!-- end n=No data table  -->
      </table>
      <!-- end table data  -->
    </div>
    <!-- edn card  -->
  </section>
  <!-- END SECTION OF CONTENT  -->
</template>

<script>
import "boxicons";
import AdminHeading from "@/components/AdminHeading.vue";
import Sidebar from "@/components/Sidebar.vue";
import { useUserStore } from "@/stores/user";

export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  setup() {
    return {
      useUserStore,
    };
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
  mounted() {
    useUserStore().getUserList();
  },
};
</script>
