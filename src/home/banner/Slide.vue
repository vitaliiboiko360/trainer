<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

import TextBubble from './TextBubble.vue';
import { resetSlide, setActiveSlide } from './sliderState';

const words = ['Learn', 'Spanish', 'Online'];
const shifts = [70, 90, 120];

const keyfms1 = [
  `matrix(0,0,0,0,370,80)`,
  `matrix(0.5,0,0,0.5,370,80)`,
  `matrix(1,0,0,1,370,80)`,
];

const keyfms2 = [
  `matrix(-0,0,0,0,380,60)`,
  `matrix(-0.5,0,0,0.5,380,60)`,
  `matrix(-1,0,0,1,380,60)`,
];

const refImg = ref();
const refText = ref();
const refSvg = ref();
const refPolygon = ref();
const refRect = ref();

const startTextBubble = ref(false);

let colorOrder = 0;
const colors = ['#E0F2FD', '#D7F1F1', '#c4c0ff'];
const createWordElement = (textToInsert) => {
  const pElement = document.createElement('p');
  const spanElement = document.createElement('span');
  pElement.style.opacity = '0';
  spanElement.style.background = `linear-gradient(${
    colors[colorOrder++ % colors.length]
  } 85%, transparent 0)`;
  spanElement.style.borderRadius = '2px';
  spanElement.style.paddingLeft = '5px';
  spanElement.style.paddingRight = '5px';
  spanElement.textContent = textToInsert;
  pElement.appendChild(spanElement);
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
    duration: 0.6,
    keyframes: keyfms2.map((key) => {
      return { transform: key };
    }),
    onComplete: () => {
      setTimeout(() => {
        startTextBubble.value = true;
      }, 200);
    },
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
          }, 2300);

          setTimeout(() => {
            starBubbleAnimation();
          }, 2700);
        }
      });
    },
  });
});

onBeforeUnmount(() => {
  gsap.globalTimeline.clear();
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
        width="260"
        height="90"
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
    <div :class="$style.textBubble">
      <TextBubble v-if="startTextBubble"></TextBubble>
    </div>
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
  /* text-shadow: 2px 2px 2px #c4c0ff; */
  color: #310606;
}
.image {
  position: absolute;
  height: 100%;
  /* width: 100%; */
  object-fit: contain;
  left: 200px;
}
.textBubble {
  position: absolute;
  left: 144px;
  top: 68px;
  width: 13rem;
  color: #555555;
}
</style>
