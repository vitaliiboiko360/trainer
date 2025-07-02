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
  --local-variable: 'value';
}
.backgroundListItem2 {
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    background-color: blue;
    clip-path: shape(
      from 0% 80%,
      curve to 50% 70% with 25% 60%,
      curve to 100% 60% with 75% 50%,
      close
    );
  }
}
</style>
