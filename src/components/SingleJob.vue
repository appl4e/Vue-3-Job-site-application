<template>
  <div class="max-w-6xl mx-auto">
    <Job :job="job" :showDetails="false" />
  </div>
  <div class="mt-4 max-w-3xl mx-auto px-4 lg:px-0">
    <div v-html="job.description" class="prose max-w-none" >

    </div>
  </div>
</template>

<script setup>
import api from '@/helpers/api';
import Job from "@/components/Job.vue";
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const job = ref(null);
const route = useRoute();

  const {ok, data} = await api.get(`/api/jobs/${route.params.slug}`);
  if(ok){
    job.value = data.data;
  }
  else{
    alert('something went wrong');
  }

</script>