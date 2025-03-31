<script setup>
import { mdiPlayCircleOutline } from '@mdi/js';
import AudioEditField from './AudioEditField.vue';
import { playTime } from '../../page/state/playTime';

const { fieldId } = defineProps(['fieldId']);

const editStart = defineModel('editStart');
const editEnd = defineModel('editEnd');

const onClick = () => {
  console.log(
    `editStart.value ${editStart.value} editEnd.value  ${editEnd.value}`
  );
  playTime.updateTime(editStart.value, editEnd.value);
};
</script>

<template>
  <div :class="$style.timePlayPanel">
    <AudioEditField :editStart :editEnd :fieldId />
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
