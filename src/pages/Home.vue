<template>
  <div class="max-w-6xl mx-auto">
    <Loading :active="loading"></Loading>
    <div class="min-h-[95vh]">
      <Job v-for="job in jobs" :key="job.id" :job="job" ></Job>
    </div>
    <div ref="endOfJobs">
      <h1 v-if="isPageLoading">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="98px" height="98px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="84" cy="50" r="10" fill="#74007a">
              <animate attributeName="r" repeatCount="indefinite" dur="0.4098360655737705s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
              <animate attributeName="fill" repeatCount="indefinite" dur="1.639344262295082s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#74007a;#fab0fa;#da70dc;#a53faa;#74007a" begin="0s"></animate>
          </circle><circle cx="16" cy="50" r="10" fill="#74007a">
            <animate attributeName="r" repeatCount="indefinite" dur="1.639344262295082s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1.639344262295082s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
          </circle><circle cx="50" cy="50" r="10" fill="#a53faa">
            <animate attributeName="r" repeatCount="indefinite" dur="1.639344262295082s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4098360655737705s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1.639344262295082s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4098360655737705s"></animate>
          </circle><circle cx="84" cy="50" r="10" fill="#da70dc">
            <animate attributeName="r" repeatCount="indefinite" dur="1.639344262295082s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.819672131147541s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1.639344262295082s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.819672131147541s"></animate>
          </circle><circle cx="16" cy="50" r="10" fill="#fab0fa">
            <animate attributeName="r" repeatCount="indefinite" dur="1.639344262295082s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2295081967213115s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1.639344262295082s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2295081967213115s"></animate>
          </circle>
        </svg>
      </h1>
    </div>
  </div>
</template>

<script setup>
import api from "@/helpers/api";
import { onMounted, reactive, ref } from "vue";
import Job from '@/components/Job.vue';
import Loading from 'vue-loading-overlay';
import { useIntersectionObserver } from '@vueuse/core'

const jobs = ref([]);
const loading = ref(false);
const isPageLoading = ref(false);
const endOfJobs = ref(null);
const pagination = reactive({
  current_page: 1,
  last_page: null
})


onMounted(async () => {

  loading.value = true;
  const { ok, data } = await api.get('/api/jobs');

  loading.value = false;

  if (ok) {
    jobs.value = data.data;
    pagination.current_page = data.meta.current_page;
    pagination.last_page = data.meta.last_page;

  } else {
    alert("something went wrong");
  }
});

const { stop } = useIntersectionObserver(
  endOfJobs, async ([{isIntersecting}]) => {
    if(isIntersecting && (pagination.current_page < pagination.last_page)){
      isPageLoading.value = true;
      const {ok, data } = await api.get(`api/jobs?page=${++pagination.current_page}`);
      if(ok){
        pagination.current_page = data.meta.current_page;
        pagination.last_page = data.meta.last_page;
        console.log(data);
        jobs.value = jobs.value.concat(data.data);
      }
      else{
        console.log('Something went wrong');
      }
      isPageLoading.value = false;
    }
  }
)
</script>
