<script setup>
import css from '../page.module.scss';
import cssTopbar from './topbar.module.scss';
import { useRouter } from 'vue-router';

const router = useRouter();
const onClick = () => {
  router.push({ path: '/' });
};
</script>

<template>
  <div>
    <button :class="[$style.backHome]" @click="onClick"></button>
  </div>
</template>

<style module>
.backHome {
  background: none;
  border: solid transparent;
  border-radius: 16px;
  border-width: 2px 2px 4px;
  color: #afafaf;
  height: 3.2rem;
  padding: 2rem;
  transition: filter 0.2s, transform ease;
  position: relative;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:before {
    background-image: url(svg/back-home.svg);
    background-color: #fff;
    border: 2px solid #e5e5e5;
    border-radius: 1rem;
    bottom: -2px;
    box-shadow: 0 2px 0;
    color: #e5e5e5;
    content: '';
    left: -2px;
    position: absolute;
    right: -2px;
    top: -2px;
    transition: box-shadow ease;
    z-index: -1;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    background-repeat: space;
  }
}
</style>
