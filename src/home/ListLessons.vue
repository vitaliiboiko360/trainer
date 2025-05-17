<script setup>
import { ref } from 'vue';
import css from './home.module.scss';
import { useQuery } from '@tanstack/vue-query';

import LessonListItem from './LessonListItem.vue';
import { LIST_TEXT_JSON_KEY, queryListOfTextJson } from '../query/default';

const toLessonId = (index) => index + 1;

const { isPending, isError, data, error } = useQuery({
  queryKey: [LIST_TEXT_JSON_KEY],
  queryFn: () => queryListOfTextJson(),
});

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
  return `transform: rotate(${degNumber}deg)`;
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
        :class="[$style.listItemRotate]"
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
              :style="`${getRotateStyle()}`"
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
  animation: 5s linear 1s infinite alternate rotateItem;
}
.listItemRotateReverse {
  animation: 5s linear 1s infinite alternate rotateItemReverse;
}
</style>
