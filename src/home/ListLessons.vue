<script setup>
import css from './home.module.scss';
import { useQuery } from '@tanstack/vue-query';
import { watch, ref } from 'vue';
import LessonListItem from './LessonListItem.vue';
import { LIST_TEXT_JSON_KEY, queryListOfTextJson } from '../query/default';

const toLessonId = (index) => index + 1;

const { isPending, isError, data, error } = useQuery({
  queryKey: [LIST_TEXT_JSON_KEY],
  queryFn: () => queryListOfTextJson(),
});

const DURATIONS = [9, 11, 13];

const getRandomDuration = () => DURATIONS[~~Math.random() * DURATIONS.length];

const duration1 = ref(getRandomDuration());
const duration2 = ref(getRandomDuration());

let counter = 0;
const getKey = () => {
  return `lesson-item-key-${counter++}`;
};
let previousAngle = 0;
function getRotateStyle() {
  let degNumber;
  do {
    degNumber =
      (~~(Math.random() * 2) + 1) * (Math.floor(Math.random() * 2) || -1);
  } while (degNumber == previousAngle);
  previousAngle = degNumber;
  // return `transform: rotate(${degNumber}deg)`;
  return degNumber;
}
function getBackgroundPosition() {
  return `background-position-x: ${~~(Math.random() * 85)}%;
  background-position-y: ${~~(Math.random() * 85)}%`;
}
const positions = ref([]);

watch(data, () => {
  if (data.value) {
    for (let i = 0; i < data.value.texts.length; i++) {
      positions.value.push(getBackgroundPosition());
    }
  }
});
</script>

<template>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <div v-else>
    <div><h3 :class="$style.lessonsTitle">Lessons</h3></div>
    <div :class="$style.lessonItemsContainer">
      <div
        v-for="(item, index) in data.texts"
        :key="getKey"
        :class="[
          { [$style.listItemRotate]: (index + duration1 + duration2) % 2 == 0 },
          {
            [$style.listItemRotateReverse]:
              (index + duration1 + duration2) % 2 != 0,
          },
        ]"
      >
        <router-link
          :to="{
            path: `/lesson-${toLessonId(index)}`,
            query: { resource: item.resource },
          }"
        >
          <div :class="[css.lessonListItem, css.fredokaFont]">
            <LessonListItem
              :title="item.title"
              :lessonNumber="toLessonId(index)"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 224"
              width="256"
              height="224"
              id="clipPath"
              :class="$style.svgBg"
            >
              <filter id="blurFilter" y="-50%" height="250%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              </filter>
              <mask id="maskPath" maskUnits="userSpaceOnUse">
                <path
                  style="overflow: visible; height: 120%"
                  fill="white"
                  d="M7 220C-3 217-4 207 0 200 45 138 81 180 121 144 180 91 231 106 249 125 274 153 257 204 244 223c-24 32-222 3-249-4"
                  filter="url(#blurFilter)"
                />
              </mask>
              <foreignObject width="100%" height="100%" mask="url(#maskPath)">
                <div :class="$style.bgInSvg" :style="positions[index]"></div>
              </foreignObject>
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style module>
.lessonCardContainer {
  p {
    margin: 0 0.25rem;
  }
}

.lessonsTitle {
  font-weight: 400;
  text-align: center;
  margin-bottom: 2rem;
}

.lessonItemsContainer {
  div:nth-child(2n + 1) {
    margin-left: 1rem;
  }
  div:nth-child(4n + 2) {
    margin-left: 0;
  }
}
@keyframes rotateItem {
  0% {
    transform: rotate(-1deg);
  }
  50% {
    transform: rotate(+1deg);
  }
  100% {
    transform: rotate(-1deg);
  }
}
@keyframes rotateItemReverse {
  0% {
    transform: rotate(+1deg);
  }
  50% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(+1deg);
  }
}
.listItemRotate {
  animation: calc(v-bind(duration1) * 1s) linear 1s infinite alternate
    rotateItem;
  transform: rotate(-1deg);
}
.listItemRotateReverse {
  animation: calc(v-bind(duration2) * 1s) linear 1s infinite alternate
    rotateItemReverse;
  transform: rotate(1deg);
}

.svgBg {
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  z-index: -1;
  border: solid transparent;
  border-width: 2px 2px 4px;
  border-radius: 12px;
}

.bgInSvg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  z-index: -1;
  /* animation: 150s linear infinite alternate moveHorizontaly,
      700s linear infinite alternate moveVerticaly; */
  background-image: url('/data/bg_flat_1.png');
  background-size: 500px 500px;
  /* mask-image: url(#clipPath_path); */
  border-radius: 10px;
  margin-left: 0px !important;
}

.backgroundListItem {
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    z-index: -1;
  }
}
@keyframes moveHorizontaly {
  0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
}
@keyframes moveVerticaly {
  0% {
    background-position-y: 0%;
  }
  100% {
    background-position-y: 100%;
  }
}
@-webkit-keyframes moveHorizontaly {
  0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
}
@-webkit-keyframes moveVerticaly {
  0% {
    background-position-y: 0%;
  }
  100% {
    background-position-y: 100%;
  }
}
.backgroundListItem1 {
  &::after {
    will-change: background-position;
    background-position-x: 0%;
    background-position-y: 0%;
    /* animation: 150s linear infinite alternate moveHorizontaly,
      700s linear infinite alternate moveVerticaly; */
    background-image: url('/data/bg_flat_1.png');
    background-size: 500px 500px;
    mask-image: url(#clipPath_path);
    border-radius: 10px;
  }
}
.backgroundListItem1_nope {
  &::after {
    mask-clip: view-box;
    mask-size: 100vmin;
    mask-position: center;
    background-color: blue;
    mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 224' width='256' height='224'><filter id='blurFilter'><feGaussianBlur in='SourceGraphic' stdDeviation='5' /></filter><path id='clipPath' fill='black' d='M0 230 0 200C45 138 81 180 121 144 180 91 235 104 261 127L267 223 0 230z' filter='url(#blurFilter)' /></svg>");
  }
}
.backgroundListItem2 {
  &::after {
    background-color: blue;
    clip-path: shape(
      from 0% 80%,
      curve to 50% 70% with 25% 60%,
      curve to 100% 60% with 75% 50%,
      close
    );
  }
}
.backgroundListItem3 {
  &::after {
    filter: blur(20px);
    background-color: blue;
    clip-path: path(
      'M0 260L0 200C45 138 81 180 121 144 180 91 235 104 261 127L260 127L260 220'
    );
  }
}
</style>
