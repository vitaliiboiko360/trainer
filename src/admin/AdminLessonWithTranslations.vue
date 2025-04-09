<script setup>
import { defineProps, reactive, watch, defineModel } from 'vue';
import LineEditor from './line_details/LineEditor.vue';

const { data, translations: tr } = defineProps(['data', 'translations']);

const lines = data.lines.map((line, index) => {
  return reactive({
    start: line.start,
    end: line.end,
    text: line.text,
    wordCount: line.wordCount ?? line.text.split(' ').length,
    lineNumber: line.lineNumber ?? index,
    speechParts: line.speechParts ?? [],
    translations: line.translations ?? [],
  });
});

watch(lines, () => {
  console.log('something changed');
});
</script>

<template>
  <div class="my-6">
    <v-expansion-panels>
      <LineEditor
        v-for="(line, index) in lines"
        v-model:start="lines[index].start"
        v-model:end="lines[index].end"
        :text="line.text"
        :lineNumber="line.lineNumber"
        :index
        :translationAndOriginalLIne="tr?.translations?.at(index)"
        :key="index"
      />
    </v-expansion-panels>
  </div>
</template>
