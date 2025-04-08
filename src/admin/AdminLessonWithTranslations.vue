<script setup>
import { defineProps, reactive } from 'vue';
import LineEditor from './line_details/LineEditor.vue';

const { data, translations: tr } = defineProps(['data', 'translations']);

const lines = data.lines.map((line, index) => {
  return reactive({
    start: line.start,
    end: line.end,
    text: line.text,
    lineNumber: line.lineNumber ?? index,
    speechParts: line.speechParts ?? [],
    translations: line.translations ?? [],
  });
});
</script>

<template>
  <div class="my-6">
    <v-expansion-panels>
      <LineEditor
        v-for="(line, index) in lines"
        :start="line.start"
        :end="line.end"
        :text="line.text"
        :lineNumber="line.lineNumber"
        :index
        :translationAndOriginalLIne="tr?.translations?.at(index)"
      />
    </v-expansion-panels>
  </div>
</template>
