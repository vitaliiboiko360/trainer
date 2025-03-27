<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const words = ['Learn', 'Spanish', 'Online'];
const shifts = [60, 90, 120];

const keyfms1 = [
  `matrix(0,0,0,0,370,90)`,
  `matrix(0.5,0,0,0.5,370,90)`,
  `matrix(1,0,0,1,370,90)`,
];

const keyfms2 = [
  `matrix(-0,0,0,0,380,40)`,
  `matrix(-0.5,0,0,0.5,380,40)`,
  `matrix(-1,0,0,1,380,40)`,
];

const refImg = ref();
const refText = ref();
const refSvg = ref();
const refPolygon = ref();
const refRect = ref();

const createWordElement = (textToInsert) => {
  const pElement = document.createElement('p');
  pElement.style.opacity = '0';
  pElement.textContent = textToInsert;
  refText.value.append(pElement);
  return pElement;
};

let tweens = [];

const animateText = (target, leftShift) => {
  tweens.push(
    gsap.to(target, {
      opacity: 1,
      duration: 0.7,
      marginLeft: leftShift,
    })
  );
};

const starBubbleAnimation = () => {
  gsap.to(refPolygon.value, {
    duration: 0.6,
    keyframes: keyfms1.map((key) => {
      return { transform: key };
    }),
  });
  gsap.to(refRect.value, {
    duration: 0.8,
    keyframes: keyfms2.map((key) => {
      return { transform: key };
    }),
  });
};

onMounted(() => {
  gsap.set(refImg.value, { opacity: 0 });
  gsap.to(refImg.value, {
    opacity: 1,
    duration: 0.8,
    left: '+=120',
    onComplete: () => {
      refImg.value.style.opacity = 1;
      refImg.value.style.left = refImg.value.style.left;
      words.forEach((word, index) => {
        setTimeout(() => {
          animateText(createWordElement(word), `+=${shifts[index]}`);
        }, 100 * (index + 1));
        if (index == words.length - 1) {
          setTimeout(() => {
            for (let i = tweens.length - 1; i >= 0; i--) {
              setTimeout(() => {
                tweens[i].reverse();
              }, i + 1 * 450);
            }
          }, 2800);

          setTimeout(starBubbleAnimation, 3000);
        }
      });
    },
  });
});
</script>

<template>
  <div :class="$style.container">
    <svg :ref="(el) => (refSvg = el)" :class="$style.svg">
      <polygon
        :ref="(el) => (refPolygon = el)"
        transform="matrix(0,0,0,0,0,0)"
        points="50,0 0,50 0,0"
        fill="#f0f7ff"
      ></polygon>
      <rect
        :ref="(el) => (refRect = el)"
        transform="matrix(-0,0,0,0,0,0)"
        x="0"
        y="0"
        width="280"
        height="130"
        rx="25"
        ry="25"
        fill="#f0f7ff"
      ></rect>
    </svg>
    <div :ref="(el) => (refText = el)" :class="$style.text"></div>
    <img
      :ref="(el) => (refImg = el)"
      :class="$style.image"
      src="/data/hm/home-1.png"
    />
  </div>
</template>

<style module>
.container {
  position: relative;
}
.svg {
  width: 10rem;
  height: 10rem;
  position: absolute;
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
