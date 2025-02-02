<script setup>
import { defineProps } from 'vue';
import LineEditor from './line_details/LineEditor.vue';

const { data, translations: tr } = defineProps(['data', 'translations']);
</script>

<template>
  <div class="my-6">
    <v-expansion-panels>
      <LineEditor
        v-for="(line, index) in data.lines"
        :start="line.start"
        :end="line.end"
        :text="line.text"
        :index
        :translation="tr.translations.at(index)"
      />
    </v-expansion-panels>
  </div>
</template>
