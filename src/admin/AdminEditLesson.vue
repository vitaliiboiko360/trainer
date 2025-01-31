<script setup>
import {
  SVG_RETURN_ADMIN_HOME,
  xmlnsSvg,
  xmlnsXhtml,
} from '../home/details/etc';
import Svg from '../home/Svg.vue';

const heightWidth = '32px';

import AdminQueryLesson from './AdminQueryLesson.vue';
import { defineProps } from 'vue';
const { resource, id } = defineProps(['resource', 'id']);
</script>

<template>
  <v-container class="bg-surface-variant">
    <v-row justify="center" no-gutters>
      <v-col align-self="center" cols="auto">
        <v-sheet :elevation="9" border rounded>
          <v-toolbar title="Edit Lesson">
            <template v-slot:prepend>
              <router-link
                :to="{
                  path: '/admin',
                }"
                style="margin-left: 16px; margin-top: 6px"
              >
                <Svg
                  :xmlns="xmlnsSvg"
                  :width="heightWidth"
                  :height="heightWidth"
                >
                  <foreignObject
                    :xmlns="xmlnsXhtml"
                    :width="heightWidth"
                    :height="heightWidth"
                  >
                    <object
                      :data="SVG_RETURN_ADMIN_HOME"
                      :type="`image/svg+xml`"
                      style="position: relative; z-index: -1"
                    ></object>
                  </foreignObject>
                </Svg>
              </router-link>
            </template>
          </v-toolbar>
          <AdminQueryLesson :resource :id />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
