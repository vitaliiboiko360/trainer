<script setup>
import { ref } from 'vue';

import AutoCloseMenu from './AutoCloseMenu.vue';

const icon =
  'M12 7a.6.6 90 01.6.6V9.4a.6.6 90 01-1.2 0V7.6A.6.6 90 0112 7M6.9 9.1a.6.6 90 01.8 0l1.1 1.1a.6.6 90 11-.8.8l-1.1-1.1a.6.6 90 010-.8M4.8 14.2a.6.6 90 01.6-.6h1.9a.6.6 90 010 1.2H5.4A.6.6 90 014.8 14.2m11.4 0a.6.6 90 01.6-.6h1.8a.6.6 90 010 1.2H16.8a.6.6 90 01-.6-.6m.9-5.1a.5.5 90 00-.6 0L11.5 13.4a1.1 1.1 90 101.6 1.5l4.1-5.2a.5.5 90 000-.6zM2.4 14.2a9.6 9.6 90 1118.7 3.2c-.5 1.5-2.2 1.9-3.5 1.5C16 18.4 13.8 17.8 12 17.8c-1.8 0-4 .6-5.5 1.1-1.3.4-3 0-3.5-1.5A9.6 9.6 90 012.4 14.2m9.6-8.4a8.4 8.4 90 00-7.9 11.2c.2.7 1.1 1.1 2 .8C7.7 17.2 10 16.6 12 16.6s4.3.6 5.9 1.2c.9.3 1.8-.1 2-.8A8.4 8.4 90 0012 5.8';

const playbackSpeed = ref(1);
const playbackSpeedMenuItem1 = ref(0.87);
const playbackSpeedMenuItem2 = ref(0.75);
const menuOpened = ref(false);
const onClick = () => {
  menuOpened.value = !menuOpened.value;
};
const onClick1 = () => {
  menuOpened.value = false;
  const menuItemPlaybackSpeed = playbackSpeedMenuItem1.value;
  playbackSpeedMenuItem1.value = playbackSpeed.value;
  playbackSpeed.value = menuItemPlaybackSpeed;
};
const onClick2 = () => {
  menuOpened.value = false;
  const menuItemPlaybackSpeed = playbackSpeedMenuItem2.value;
  playbackSpeedMenuItem2.value = playbackSpeed.value;
  playbackSpeed.value = menuItemPlaybackSpeed;
};
</script>

<template>
  <AutoCloseMenu @close="menuOpened = false">
    <div :class="$style.menuPlaybackSpeedOuterDiv">
      <div v-if="menuOpened" :class="[$style.menuItem, $style.item2]">
        <v-btn rounded="lg" size="45" @click="onClick2"
          ><span :class="$style.playbackSpeedValue"
            >{{ playbackSpeedMenuItem2 }}x</span
          ></v-btn
        >
      </div>
      <div v-if="menuOpened" :class="[$style.menuItem, $style.item1]">
        <v-btn rounded="lg" size="45" @click="onClick1"
          ><span :class="$style.playbackSpeedValue"
            >{{ playbackSpeedMenuItem1 }}x</span
          ></v-btn
        >
      </div>
      <v-btn rounded="lg" size="55" @click="onClick">
        <div :class="$style.buttonInnerDiv">
          <span :class="[$style.playbackSpeedValue, $style.valueInButton]"
            >{{ playbackSpeed }}x</span
          ><v-icon size="30" :icon="icon" :class="$style.iconInButton" /></div
      ></v-btn>
    </div>
  </AutoCloseMenu>
</template>

<style module>
.buttonInnerDiv {
  position: relative;
}
.iconInButton {
  position: absolute;
  right: -8px;
  top: -26px;
}
.valueInButton {
  position: absolute;
}
.playbackSpeedValue {
  font-size: 1rem;
  text-transform: none;
  letter-spacing: normal;
  right: -22px;
}
.menuPlaybackSpeedOuterDiv {
  position: relative;
}
.menuItem {
  position: absolute;
}
.item1 {
  top: -3.5rem;
  left: 0.4rem;
}
.item2 {
  top: -6.5rem;
  left: 0.4rem;
}
</style>
