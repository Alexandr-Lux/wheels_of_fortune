<template>
  <div class="wheel">
    <!-- <div class="wheel__wrapper"> -->
    <div
      ref="arrow"
      class="wheel__arrow"
      @click="rotate"
    />
    <ul
      ref="wheel"
      class="wheel__sectors"
      :style="{ transform: `rotate(${angle}deg)` }"
      @transitionend="rotateDisabled = false"
    >
      <li
        v-for="sector in sectors"
        :key="sector.id"
        class="sector"
        :style="{
          transform: `rotate(${sector.rotate}deg) skew(27deg, 27deg)`,
          background: `${sector.bg}`
        }"
      >
        <div class="sector__content">
          <img
            v-if="sector.img"
            class="sector__icon"
            :src="sector.img"
            :alt="sector.id"
          />
          <span
            v-if="sector.text"
            :style="{ color: sector.color, fontSize: sector.size ?? '3.5rem' }"
          >
            {{ sector.text }}
          </span>
        </div>
      </li>
    </ul>
    <!-- </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sectors = [
  {
    id: '100',
    text: '100',
    rotate: '0',
    bg: 'white',
    color: 'red'
  },
  {
    id: 'plus',
    text: '+',
    rotate: '36',
    bg: 'black',
    color: 'yellow',
    size: '6rem'
  },
  {
    id: '200',
    text: '200',
    rotate: '72',
    bg: 'white',
    color: 'blue'
  },
  {
    id: 'beer',
    img: 'https://img.icons8.com/color/beer.png',
    rotate: '108',
    bg: 'black'
  },
  {
    id: '300',
    text: '300',
    rotate: '144',
    bg: 'white',
    color: 'green'
  },
  {
    id: '0',
    text: '0',
    rotate: '180',
    bg: 'black',
    color: 'pink'
  },
  {
    id: '500',
    text: '500',
    rotate: '216',
    bg: 'white',
    color: 'purple'
  },
  {
    id: 'bankrupt',
    text: 'Б',
    rotate: '252',
    bg: 'black',
    color: 'lime'
  },
  {
    id: 'x2',
    text: 'x2',
    rotate: '288',
    bg: 'white',
    color: 'navy'
  },
  {
    id: 'toast',
    img: 'https://img.icons8.com/color/toaster.png',
    rotate: '324',
    bg: 'black'
  }
]

const angle = ref(0)
const wheel = ref(null)
const arrow = ref(null)
const rotateDisabled = ref(false)

const rotate = () => {
  if (rotateDisabled.value) return

  rotateDisabled.value = true

  const random = Math.random() * 1000 + 2000
  angle.value = angle.value + random
}
</script>

<style lang="scss">
.wheel {
  padding: 1rem;
  grid-area: wheel;
  // height: 100%;
  // width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  position: relative;

  &__sectors {
    height: 35rem;
    width: 35rem;
    border: 0.1rem solid black;
    position: relative;
    border-radius: 50%;
    overflow: hidden;

    transform: rotate(0deg);

    transition: transform ease-out 10s;
  }

  &__arrow {
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    background: linear-gradient(
      90deg,
      rgba(159, 30, 30, 1) 36%,
      rgba(218, 28, 28, 1) 65%
    );
    z-index: 10;
  }
}

.sector {
  position: absolute;
  height: 50%;
  width: 50%;
  transform-origin: bottom right;
  border: 0.1rem solid black;

  &__content {
    margin: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 60%;
    border-radius: 50%;
    color: black;

    transform: skew(-27deg, -27deg) rotate(-45deg);
  }

  &__icon {
    height: 60%;
  }
}
</style>
