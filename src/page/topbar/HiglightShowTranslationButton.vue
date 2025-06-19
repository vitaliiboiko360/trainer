<script setup></script>

<template>
  <div :class="$style.divOuter">
    <button :class="[$style.iconBase, $style.buttonBase, $style.boxShadow]">
      <span :class="$style.spanOuter"
        ><span :class="$style.spanInner"></span
      ></span>
      <span :class="$style.spanCover"></span>
      <span :class="$style.spanCover2"></span>
      <span :class="$style.icon"></span>
    </button>
  </div>
</template>

<style module>
.boxShadow {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.iconBase {
  &:before {
    background-image: url(svg/chat-left-quote.svg);
    background-position: 0.55rem 0.6rem;
    background-size: 3rem;
  }
}
.buttonBase {
  background: none;
  border: solid transparent;
  border-radius: 16px;
  border-width: 2px 2px 4px;
  color: #afafaf;
  height: 3.2rem;
  padding: 2rem;
  transition: filter 0.2s, transform ease;
  position: relative;

  &:before {
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
.icon {
  background-image: url(svg/chat-left-quote.svg);
  background-position: 0.55rem 0.6rem;
  background-size: 3rem;
  background-repeat: space;
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.1;
}
.spanCover2 {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: #fff;
  border-radius: 16px;
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
  border-radius: 16px;
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
.spanInner {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  background: inherit;
  border-radius: 16px;
  background: linear-gradient(
    -90deg,
    #007cf0,
    #35acfc,
    #00d0df,
    #4b00fa,
    #007cf0
  );
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
