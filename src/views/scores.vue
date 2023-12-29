<template>
  <div class="scores">
    <span class="scores__title">Победитель: {{ winner.name }}</span>
    <table class="scores__table">
      <tr
        v-for="pl in players"
        :key="pl.name"
      >
        <td>
          {{ pl.name }}
        </td>
        <td>
          {{ pl.points }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
// Imports
import { onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'

import confetti from 'canvas-confetti'

// Service constants (Compositions & EventBus)
const store = useStore()

// Components

// Emits & Props
const winner = ref(null)
const players = ref(null)
// Refs & Reactive

// Computed

// Methods

const fire = () => {
  const end = Date.now() + 15 * 1000

  ;(function frame() {
    confetti({
      particleCount: 5,
      spread: 180,
      angle: 270,
      origin: {
        x: 0.33,
        y: 0
      },
      colors: ['#edc91f', '#d1dbe2']
    })
    confetti({
      particleCount: 5,
      spread: 180,
      angle: 270,
      origin: {
        x: 0.66,
        y: 0
      },
      colors: ['#edc91f', '#d1dbe2']
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  })()
}

// Hooks
onBeforeMount(() => {
  winner.value = store.state.winner
  players.value = store.state.players.sort((a, b) => b.points - a.points)

  fire()
})
// Watch
</script>

<style lang="scss">
.scores {
  padding: 2rem;
  background: url('../assets/yakubovich.jpeg') center / cover no-repeat;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;

  &__title {
    font-size: 5rem;
    background-color: rgba($color: #000, $alpha: 0.7);
    justify-self: start;
    border-radius: 1rem;
    padding: 1rem;
    line-height: 1;
    color: #fff;
  }

  &__table {
    background-color: rgba($color: #000, $alpha: 0.5);
    color: #fff;
    width: 40%;
    font-size: 2rem;
    border-collapse: collapse;

    tr:first-child {
      background-color: #8b6918;
    }

    td {
      padding: 0.5rem;
      border: 0.2rem solid #5d4305;
    }
  }
}
</style>
