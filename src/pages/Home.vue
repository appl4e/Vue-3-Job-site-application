<template>
    <div class="max-w-6xl mx-auto">
      <suspense>
        <template #fallback>
          <Loading :active="true" ></Loading>
        </template>
        <JobList/>
      </suspense>
    </div>
</template>

<script setup>
import JobList from '@/components/JobList.vue';
import Loading from 'vue-loading-overlay';
</script>
