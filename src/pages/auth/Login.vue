<template>
    <form @submit.prevent="handleForm" class="flex flex-col items-start gap-4 p-3 mx-auto md:w-6/12">
        <h1 class="text-xl font-semibold text-slate-700">Login</h1>

        <Input v-model="loginFields.email" labels="Email" name="email" :helperText="getErrors('email')" :hasError="Boolean(getErrors('email'))" class="text-blue-800" />
        <Input v-model="loginFields.password" labels="Password" name="password" :helperText="getErrors('password')" :hasError="Boolean(getErrors('password'))" class="text-blue-800" />

        <Button :loading="loading">Login</Button>
    </form>
</template>
<script setup>
import { reactive } from "vue";
import Input from "@/components/Form/Input.vue";
import Button from "@/components/Form/Button.vue";
import useForm from "@/hooks/useForm";
import { useRouter } from "vue-router";

const router = useRouter();
const loginFields = reactive({
    "email": "",
    "password": ""
});

const {submit, getErrors, loading} = useForm();

const handleForm = () => {
    submit('post', loginFields, "api/auth/login").then(()=>{
        router.push({name: 'home'});
    })
}
</script>