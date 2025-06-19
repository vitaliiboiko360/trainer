<script setup>
import { nextTick, ref } from 'vue';
import css from '../page.module.scss';
import { textView, TEXTVIEW_BUTTONS as buttons } from '../state/textView.ts';

const textMode = ref(buttons.LineMode);

const onClick = (value) => {
  textView.value = value;
  if (value == buttons.LineMode) {
    textMode.value = buttons.LineMode;
  } else if (value == buttons.ParagraphMode) {
    textMode.value = buttons.ParagraphMode;
  }
};
</script>

<template>
  <div :class="$style.divOuter">
    <button
      :class="[
        $style.topbarButtonBaseLeft,
        css.topBarGroupedButtonLeft,
        css.topBarButtonLineOnTheirOwn,
      ]"
      @click="() => onClick(buttons.LineMode)"
    >
      <span :class="$style.spanOuter"
        ><span :class="[$style.spanInnerLeft]"></span
      ></span>
      <span :class="[$style.borderRadiusLeft, $style.spanCover]"></span>
      <span
        :class="[
          { [$style.selectedButton]: textMode == buttons.LineMode },
          $style.borderRadiusLeft,
          $style.spanCover2,
        ]"
      ></span>
      <span
        :class="[$style.borderRadiusLeft, $style.icon, $style.leftLineMode]"
      ></span>
    </button>
    <button
      :class="[
        $style.topbarButtonBaseRight,
        css.topBarGroupedButtonRight,
        css.topBarButton_TextOrdinary,
      ]"
      @click="() => onClick(buttons.ParagraphMode)"
    >
      <span :class="$style.spanOuter"
        ><span :class="[$style.spanInnerRight]"></span
      ></span>
      <span :class="[$style.borderRadiusRight, $style.spanCover]"></span>
      <span
        :class="[
          { [$style.selectedButton]: textMode == buttons.ParagraphMode },
          $style.borderRadiusRight,
          $style.spanCover2,
        ]"
      ></span>
      <span
        :class="[
          $style.borderRadiusRight,
          $style.icon,
          $style.rightParagraphMode,
        ]"
      ></span>
    </button>
  </div>
</template>

<style module>
.selectedButton {
  background-color: #eee !important;
}
.topbarButtonBaseLeft {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.topbarButtonBaseRight {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.borderRadiusLeft {
  border-radius: 16px 0 0 16px;
}
.borderRadiusRight {
  border-radius: 0 16px 16px 0;
}

.leftLineMode {
  background-image: url(svg/list-check.svg);
  background-size: 85%;
  background-position-x: center;
  background-position-y: center;
}

.rightParagraphMode {
  background-image: url(svg/text_ordinary.svg);
  background-size: contain;
  background-repeat: space;
}

.icon {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spanCover2 {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spanCover {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(1px);
}
.spanOuter {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  /* padding: 0 6px; */
  background-color: #fff;
}
@keyframes spanInnerAnimation {
  50% {
    background-position: 100% 50%;
    transform: skew(-2deg);
  }
}
.oldSpanInner {
  background: linear-gradient(-90deg, #007cf0, #00dfd8, #ff0080, #007cf0);
}
.spanInnerLeft {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  background: inherit;
  background: linear-gradient(-90deg, #007cf0, #00dfd8, #ff0080, #007cf0);
  border-radius: 16px;
  background-size: 400% 100%;
  border: none;
  padding: 0;
  margin: 0;
  animation: spanInnerAnimation 48s ease-in-out infinite;
  &:after {
    content: '';
    position: absolute;
    background-size: inherit;
    background-image: inherit;
    animation: inherit;
    left: 0;
    right: 0;
    top: 2px;
    height: 100%;
    filter: blur(0.32rem);
    border-radius: 16px;
  }
}

.spanInnerRight {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  background: inherit;
  background: linear-gradient(-90deg, #007cf0, #ff0080, #00dfd8, #007cf0);
  border-radius: 16px;
  background-size: 400% 100%;
  border: none;
  padding: 0;
  margin: 0;
  animation: spanInnerAnimation 48s ease-in-out infinite;
  &:after {
    content: '';
    position: absolute;
    background-size: inherit;
    background-image: inherit;
    animation: inherit;
    left: 0;
    right: 0;
    top: 2px;
    height: 100%;
    filter: blur(0.32rem);
    border-radius: 16px;
  }
}

@keyframes partialFadeIn {
  0% {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}
.divOuter {
  animation: partialFadeIn 0.3s;
}
</style>
