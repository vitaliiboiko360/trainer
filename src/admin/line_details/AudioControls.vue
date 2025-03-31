<script setup>
import { mdiPlayCircleOutline } from '@mdi/js';
import AudioEditField from './AudioEditField.vue';
import { playTime } from '../../page/state/playTime';

const { fieldId } = defineProps(['fieldId']);

const editStart = defineModel('editStart');
const editEnd = defineModel('editEnd');

const onClick = () => {
  playTime.updateTime(editStart.value, editEnd.value);
};
</script>

<template>
  <div :class="$style.timePlayPanel">
    <AudioEditField
      v-model:editStart="editStart"
      v-model:editEnd="editEnd"
      :fieldId
    />
    <v-btn size="46" @click="onClick"
      ><v-icon size="42" :icon="mdiPlayCircleOutline"></v-icon
    ></v-btn>
  </div>
</template>

<style module>
.timePlayPanel {
  width: 200px;
  display: flex;
}
</style>
