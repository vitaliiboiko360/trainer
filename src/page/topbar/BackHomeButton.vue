<script setup>
import css from '../page.module.scss';
import cssTopbar from './topbar.module.scss';
import { useRouter } from 'vue-router';
import ButtonWrap from './ButtonWrap.vue';
import ButtonWrapInside from './ButtonWrapInside.vue';
const router = useRouter();
const onClick = () => {
  router.push({ path: '/' });
};
</script>

<template>
  <ButtonWrap>
    <template v-slot:button>
      <button
        :class="[css.topBarButtonBackHome, cssTopbar.topbarButtonBase]"
        @click="onClick"
      >
        <ButtonWrapInside />
      </button>
    </template>
  </ButtonWrap>
</template>
