<template>
  <form @submit.prevent="handleForm" class="flex flex-col items-start gap-4 p-3 mx-auto md:w-6/12">
    <h1 class="text-xl font-semibold text-slate-700">Register</h1>
    <div class="flex flex-col w-full">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="regFields.name"
        class="bg-slate-50 rounded-sm w-full"
      />
    </div>

    <div class="flex flex-col w-full">
      <label for="name">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="regFields.email"
        class="bg-slate-50 rounded-sm w-full"
      />
    </div>

    <div class="flex flex-col w-full">
      <label for="name">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="regFields.password"
        class="bg-slate-50 rounded-sm w-full"
      />
    </div>

    <div class="flex flex-col w-full">
      <label for="password_confirmation">Confirm Password</label>
      <input
        type="password"
        name="password_confirmation"
        id="password_confirmation"
        v-model="regFields.confPassword"
        class="bg-slate-50 rounded-sm w-full"
      />
    </div>

    <button class="button">Register</button>
  </form>
</template>
<script setup>
import { reactive } from "vue"
const regFields = reactive({
  name: "",
  email: "",
  password: "",
  confPassword: ""
});

const handleForm = async () => {
  await fetch('https://jobs-api.return0.codes/api/auth/register', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(regFields)
  }).then((res) => {
    console.log(res);
  }).catch((error) => {
    console.log(error)
  });
}

</script>