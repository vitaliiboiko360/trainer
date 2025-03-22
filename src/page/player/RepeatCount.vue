<script setup>
import { ref } from 'vue';

const iconOne =
  'M 15.6 8 v 1.759 a 0.3 0.3 90 0 0 0.492 0.23 l 2.832 -2.359 a 0.3 0.3 90 0 0 0 -0.461 l -2.832 -2.359 a 0.3 0.3 90 0 0 -0.492 0.23 V 6.8 H 8.4 a 6 6 90 0 0 -5.376 8.668 a 0.6 0.6 90 0 0 1.075 -0.535 A 4.8 4.8 90 0 1 8.4 8 z m 5.376 2.132 a 0.6 0.6 90 0 0 -1.075 0.535 A 4.8 4.8 90 0 1 15.6 17.6 H 8.401 v -1.759 a 0.3 0.3 90 0 0 -0.492 -0.23 l -2.832 2.359 a 0.3 0.3 90 0 0 0 0.461 l 2.832 2.359 a 0.3 0.3 90 0 0 0.492 -0.23 V 18.8 h 7.2 a 6 6 90 0 0 5.376 -8.668 Z M 13.2 9.8 a 0.6 0.6 90 0 0 -1.025 -0.425 l -2.1 2.1 a 0.6 0.6 90 1 0 0.85 0.85 L 12 11.248 V 15.8 a 0.6 0.6 90 0 0 1.2 0 z';

const icon =
  'M 15.6 8 v 1.759 a 0.3 0.3 90 0 0 0.492 0.23 l 2.832 -2.359 a 0.3 0.3 90 0 0 0 -0.461 l -2.832 -2.359 a 0.3 0.3 90 0 0 -0.492 0.23 V 6.8 H 8.4 a 6 6 90 0 0 -5.376 8.668 a 0.6 0.6 90 0 0 1.075 -0.535 A 4.8 4.8 90 0 1 8.4 8 z m 5.376 2.132 a 0.6 0.6 90 0 0 -1.075 0.535 A 4.8 4.8 90 0 1 15.6 17.6 H 8.401 v -1.759 a 0.3 0.3 90 0 0 -0.492 -0.23 l -2.832 2.359 a 0.3 0.3 90 0 0 0 0.461 l 2.832 2.359 a 0.3 0.3 90 0 0 0.492 -0.23 V 18.8 h 7.2 a 6 6 90 0 0 5.376 -8.668 Z';

const menuOpened = ref(false);
const repeatCount = ref(1);
const repeatCountMenuItem1 = ref(2);
const repeatCountMenuItem2 = ref(3);
const onClick = () => {
  menuOpened.value = !menuOpened.value;
};
const onClick1 = () => {
  menuOpened.value = false;
  const menuItemRepeatCount = repeatCountMenuItem1.value;
  repeatCountMenuItem1.value = repeatCount.value;
  repeatCount.value = menuItemRepeatCount;
};
const onClick2 = () => {
  menuOpened.value = false;
  const menuItemRepeatCount = repeatCountMenuItem2.value;
  repeatCountMenuItem2.value = repeatCount.value;
  repeatCount.value = menuItemRepeatCount;
};
</script>

<template>
  <div :class="$style.menuRepeatCountOuterDiv">
    <div v-if="menuOpened" :class="[$style.menuItem, $style.item2]">
      <v-btn rounded="lg" size="45" @click="onClick2"
        ><v-icon size="40" :icon="icon" />
      </v-btn>
      <span :class="$style.menuItmeValue">{{ repeatCountMenuItem2 }}</span>
    </div>
    <div v-if="menuOpened" :class="[$style.menuItem, $style.item1]">
      <v-btn rounded="lg" size="45" @click="onClick1"
        ><v-icon size="40" :icon="icon" /></v-btn
      ><span :class="$style.menuItmeValue">{{ repeatCountMenuItem1 }}</span>
    </div>
    <div :class="[$style.buttonMenuItem]">
      <v-btn rounded="lg" size="55" @click="onClick"
        ><v-icon size="45" :icon="icon"
      /></v-btn>
      <span :class="$style.buttonValue">{{ repeatCount }}</span>
    </div>
  </div>
</template>

<style module>
.buttonMenuItem {
  position: relative;
}
.buttonValue {
  position: absolute;
  top: 6px;
  left: 22px;
  font-size: 1.3rem;
  text-transform: none;
  letter-spacing: normal;
  pointer-events: none;
  font-weight: 500;
}
.menuItmeValue {
  position: absolute;
  top: 5px;
  left: 18px;
  font-size: 1rem;
  text-transform: none;
  letter-spacing: normal;
  pointer-events: none;
  font-weight: 500;
}
.menuRepeatCountOuterDiv {
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
