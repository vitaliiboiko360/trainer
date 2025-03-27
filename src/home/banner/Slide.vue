<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const words = ['Learn', 'Spanish', 'Online'];
const shifts = [60, 90, 120];

const refImg = ref();
const refText = ref();

const createWordElement = (textToInsert) => {
  const pElement = document.createElement('p');
  pElement.style.opacity = '0';
  pElement.textContent = textToInsert;
  refText.value.append(pElement);
  return pElement;
};

const animateText = (target, leftShift) => {
  gsap.to(target, {
    opacity: 1,
    duration: 0.7,
    marginLeft: leftShift,
  });
};

onMounted(() => {
  gsap.to(refImg.value, {
    opacity: 1,
    duration: 0.8,
    left: '+=120',
    onComplete: () => {
      refImg.value.style.opacity = 1;
      words.forEach((word, index) => {
        setTimeout(() => {
          animateText(createWordElement(word), `+=${shifts[index]}`);
        }, 100 * (index + 1));
      });
    },
  });
});
</script>

<template>
  <div :class="$style.container">
    <div :ref="(el) => (refText = el)" :class="$style.text"></div>
    <img
      :ref="(el) => (refImg = el)"
      :class="$style.image"
      style="opacity: 0"
      src="/data/hm/home-1.png"
    />
  </div>
</template>

<style module>
.container {
  position: relative;
}
.text {
  position: absolute;
  left: 36px;
  top: 53px;
  font-family: 'Nunito';
}
.image {
  position: absolute;
  height: 100%;
  /* width: 100%; */
  object-fit: contain;
  left: 200px;
}
</style>
