<script setup>
defineProps(['previous', 'next']);
const onClick = () => {
  console.log(`forward`);
};
const iconForward =
  'M19.5 8a.5.5 0 01.5.5v8a.5.5 0 01-1 0V13.252l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C4.713 17.19 4 16.845 4 16.192V8.808c0-.653.713-.998 1.233-.696L11.5 11.748v-2.94c0-.653.713-.998 1.233-.696L19 11.748V8.5a.5.5 0 01.5-.5M5 9.133v6.734L10.804 12.5zm7.5 0v6.734L18.304 12.5z';
const iconBackward =
  'M4.5 8A.5.5 0 015 8.5v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L12.5 13.252v2.94c0 .653-.713.998-1.233.696L5 13.252V16.5a.5.5 0 01-1 0V8.5a.5.5 0 01.5-.5m7 1.133L5.696 12.5 11.5 15.867zm7.5 0L13.196 12.5 19 15.867z';

import { useIndicatorIndexStore } from '../../store/indicatorIndex';
const indicatorIndexStore = useIndicatorIndexStore();
</script>

<template>
  <div>
    <v-btn rounded="lg" size="70" @click="onClick">
      <v-icon
        v-if="next"
        size="60"
        :icon="iconForward"
        @click="() => indicatorIndexStore.updateToNext()"
      />
      <v-icon
        v-if="previous"
        size="60"
        :icon="iconBackward"
        @click="() => indicatorIndexStore.updateToPrev()"
      />
    </v-btn>
  </div>
</template>

<style module></style>
