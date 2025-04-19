<script setup lang="ts">
import { defineProps, reactive, watch, defineModel } from 'vue';
import LineEditor from './line_details/LineEditor.vue';

import { SPEECHPART as SP } from './etc';

const { data, translations: tr } = defineProps(['data', 'translations']);
const buttonSaveIsActive = defineModel('buttonSaveIsActive');
const buttonSaveFlushData = defineModel('buttonSaveFlushData');

const lines = data.lines.map((line, index) => {
  return reactive({
    start: line.start,
    end: line.end,
    text: line.text,
    wordCount: line.wordCount ?? line.text.split(' ').length,
    lineNumber: line.lineNumber ?? index,
    speechParts: line.speechParts ?? new Array().fill(SP.NOT_ASSIGNED),
    translations:
      line.translations ??
      line.text.split(' ').map((word, index) => {
        return {
          indexInSentence: index,
          wordInEnglish: '',
          partOfSpeech: SP.NOT_ASSIGNED,
        };
      }),
  });
});

watch(lines, () => {
  buttonSaveIsActive.value = true;
});
watch(buttonSaveFlushData, async () => {
  if (buttonSaveFlushData.value == true) {
    console.log(`buttonSaveFlushData = ${buttonSaveFlushData.value}`);
    const dataToSend = {
      name: data.name,
      audio: data.audio,
      lines: lines,
    };
    try {
      const response = await fetch(
        `http://localhost:4000/lessons/${data.name}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        }
      );
    } catch (e) {
      console.log(e);
    }
    buttonSaveFlushData.value = false;
  }
});
</script>

<template>
  <div class="my-6">
    <v-expansion-panels>
      <LineEditor
        v-for="(line, index) in lines"
        v-model:start="lines[index].start"
        v-model:end="lines[index].end"
        v-model:translations="lines[index].translations"
        :text="line.text"
        :lineNumber="line.lineNumber"
        :index
        :translationAndOriginalLIne="tr?.translations?.at(index)"
        :key="index"
      />
    </v-expansion-panels>
  </div>
</template>
