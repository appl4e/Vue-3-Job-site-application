<template>
  <form @submit.prevent="handleForm" class="flex flex-col items-start gap-4 p-3 mx-auto md:w-6/12">
    <h1 class="text-xl font-semibold text-slate-700">Register</h1>
    <Input
      v-model="regFields.name"
      labels="Nameee"
      name="name"
      :helperText="getErrors('name')"
      :hasError="Boolean(getErrors('name'))"
      class="text-blue-800"
    />

    <Input
      v-model="regFields.email"
      labels="Email"
      name="email"
      :helperText="getErrors('email')"
      :hasError="Boolean(getErrors('email'))"
      type="email"
    />

    <Input
      v-model="regFields.password"
      labels="Password"
      name="password"
      :helperText="getErrors('password')"
      :hasError="Boolean(getErrors('password'))"
      type="password"
    />
    <Input
      v-model="regFields.password_confirmation"
      labels="Confirm Password"
      name="password_confirmation"
      :helperText="getErrors('password_confirmation')"
      :hasError="Boolean(getErrors('password_confirmation'))"
      type="password"
    />

    <Button :loading="loading">Register</Button>
  </form>
</template>
<script setup>

import { reactive, ref } from "vue";
import Input from "@/components/Form/input.vue"
import Button from "@/components/Form/Button.vue"
import useForm from "@/hooks/useForm";

const regFields = reactive({
  "name": "",
  "email": "",
  "password": "",
  "password_confirmation": ""
});

const { submit, getErrors, loading } = useForm();

const handleForm = () => {
  submit('post', regFields, "api/auth/register");
};

</script>