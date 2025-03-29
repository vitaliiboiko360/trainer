<script setup>
import { ref, onMounted, getCurrentInstance, watch } from 'vue';

import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const refPText = ref();

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

const createWordElement = (
  textToInsert,
  targetToInsertTo,
  arrayOfCharacterSpans
) => {
  const wordSpan = document.createElement('span');
  for (let i = 0; i <= textToInsert.length; i++) {
    const character = textToInsert.charAt(i) || ' ';
    const characterSpan = document.createElement('span');
    characterSpan.style.opacity = '0';
    characterSpan.textContent = character;
    arrayOfCharacterSpans.push(characterSpan);
    wordSpan.appendChild(characterSpan);
  }
  targetToInsertTo.appendChild(wordSpan);
  return wordSpan;
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

  const animateWord = (word, index) => {
    const color = colorValues[colorIndices[index]];

    gsap.set(refPText.value, { opacity: 1 });

    let arrayOfCharacterSpans = [];

    const spanElement = createWordElement(
      word,
      refPText.value,
      arrayOfCharacterSpans
    );

    const animateChar = (index) => {
      const characterSpan = arrayOfCharacterSpans[index];
      gsap.to(characterSpan, {
        opacity: 1,
        duration: 0.1,
        ease: 'none',
        onComplete: () => {
          const newIndex = index + 1;
          if (newIndex < arrayOfCharacterSpans.length) {
            animateChar(newIndex);
          }
        },
      });
    };

    animateChar(0);

    spanElement.style.backgroundColor = color;

    const updatedObject = { key: 0 };

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
  <p :ref="(el) => (refPText = el)" :class="$style.pText"></p>
</template>

<style module>
.pText {
  white-space: pre-wrap;
}
</style>
