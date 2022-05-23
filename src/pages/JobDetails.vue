<template>
  <div class="max-w-6xl mx-auto">
    <!-- <h1 v-if="loading" >...loading</h1> -->
    <!-- <pre v-if="!loading">
      {{job}}
    </pre> -->
    <suspense>
      <template #fallback>
        <Loading :active="true" />
      </template>
    <SingleJob />
    </suspense>

    
  </div>
</template>
<script setup>
import SingleJob from '@/components/SingleJob.vue';
import Loading from 'vue-loading-overlay';

</script>