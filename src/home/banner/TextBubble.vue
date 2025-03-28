<script setup>
import { ref, onMounted, getCurrentInstance, watch, toRef } from 'vue';

import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const refPText = ref();
const refPTextShadow = ref();

const colorValues = [
  '#E6F4EA',
  '#F48125',
  '#D4E8FA',
  '#C4C0FF',
  '#BDBEFC',
  '#FCBA03',
];

const textMsgOrder = ref();
const textMessages = [
  { text: 'Este estudiante tiene un libro', colorIndices: [0, 1, 2, 0, 1] },
  { text: 'Él también tiene una pluma', colorIndices: [0, 1, 2, 0, 1] },
  { text: 'Es domingo por la mañana', colorIndices: [0, 1, 0, 0, 1] },
];

const createWordElement = (textToInsert, targetToInsertTo) => {
  const spanElement = document.createElement('span');
  // spanElement.style.opacity = '0';
  spanElement.style.color = 'rgba(0, 0, 0, 0)';
  spanElement.textContent = `${textToInsert} `;
  targetToInsertTo.append(spanElement);
  return spanElement;
};

onMounted(() => {
  textMsgOrder.value = 0;
});

watch(textMsgOrder, () => {
  // const instance = getCurrentInstance();
  // let unused;
  // unused = instance.vnode.el.parentNode;

  const { text, colorIndices } = textMessages[textMsgOrder.value];

  const words = text.split(' ');

  gsap.to(refPText.value, {
    // opacity: 1,
    duration: text.length * 0.1,
    ease: 'none',
    text: {
      value: text,
      delimiter: '',
    },
  });
  const animateWord = (word, index) => {
    const color = colorValues[colorIndices[index]];
    const spanElement = createWordElement(word, refPTextShadow.value);
    spanElement.style.backgroundColor = color;
    const updatedObject = { key: 0 };
    gsap.set(refPText.value, { opacity: 1 });
    gsap.to(updatedObject, {
      duration: 0.6,
      key: 3,
      yoyo: true,
      onUpdate: () => {
        spanElement.style.boxShadow = `0 0 0 ${updatedObject.key} ${color}`;
      },
      onComplete: () => {
        spanElement.style.backgroundColor = 'unset';
        spanElement.style.boxShadow = 'unset';

        const newIndex = index + 1;
        if (newIndex < words.length) {
          animateWord(words[newIndex], newIndex);
        } else {
          gsap.to(refPText.value, { opacity: 0, duration: 0.7 });
          setTimeout(() => {
            while (refPText.value.firstChild) {
              refPText.value.removeChild(refPText.value.lastChild);
            }
            while (refPTextShadow.value.firstChild) {
              refPTextShadow.value.removeChild(refPTextShadow.value.lastChild);
            }
          }, 700);
          setTimeout(() => {
            textMsgOrder.value = (textMsgOrder.value + 1) % textMessages.length;
          }, 800);
        }
      },
    });
  };

  animateWord(words[0], 0);
});
</script>

<template>
  <p :ref="(el) => (refPTextShadow = el)" :class="$style.pTextShadow"></p>
  <p :ref="(el) => (refPText = el)" :class="$style.pText"></p>
</template>

<style module>
.pText {
  white-space: pre-wrap;
}
.pTextShadow {
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
