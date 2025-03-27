<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const words = ['Learn', 'Spanish', 'Online'];

const refImg = ref();
const refText = ref([]);

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
    // ease: ,
    left: '+=120',
    onComplete: () => {
      refImg.value.style.opacity = 1;
      Array.from({ length: 3 }).map((_, index) => {
        setTimeout(() => {
          animateText(refText.value[index], `+=${25 + 45 * (index + 1)}`);
        }, 100 * (index + 1));
      });
    },
  });
});
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.text">
      <p
        v-for="word of words"
        :ref="(el) => refText.push(el)"
        style="opacity: 0"
      >
        {{ word }}
      </p>
    </div>
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
