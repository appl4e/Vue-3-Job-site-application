<template>
  <div class="max-w-6xl mx-auto">
    <Loading :active="loading"></Loading>
    <Job v-for="job in jobs" :key="job.id" :job="job" ></Job>
  </div>
</template>

<script setup>
import api from "@/helpers/api";
import { onMounted, ref } from "vue";
import Job from '@/components/Job.vue';
import Loading from 'vue-loading-overlay';
const jobs = ref([]);
const loading = ref(false);

onMounted(async () => {

  loading.value = true;
  const { ok, data } = await api.get('/api/jobs');

  loading.value = false;

  if (ok) {
    jobs.value = data.data;
    console.log(jobs);

  } else {
    alert("something wrong");
  }
});
</script>
