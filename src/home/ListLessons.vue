<script setup>
import css from './home.module.scss';
import { useQuery } from '@tanstack/vue-query';
import { ref } from 'vue';
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
          <div
            :class="[
              css.lessonListItem,
              css.fredokaFont,
              $style.backgroundListItem,
              $style.backgroundListItem1,
            ]"
          >
            <LessonListItem
              :title="item.title"
              :lessonNumber="toLessonId(index)"
            />
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
.backgroundListItem1 {
  &::after {
    background-image: url('/data/bg_flat_1.png');
    background-size: 1000px 1000px;
    mask-image: url('/data/clipPath.svg');
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
