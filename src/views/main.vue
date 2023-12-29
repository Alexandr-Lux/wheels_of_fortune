<template>
  <div
    class="main"
    :class="{ final: round === 4 }"
  >
    <Letters-block
      :round="round"
      @select="namedLetter = $event"
    />
    <Word-block
      :word="word"
      :named="namedLetter"
    />
    <Players
      :round="round"
      :players="roundPlayers"
      @win="setWinner"
    />
    <Wheel />
  </div>
</template>

<script setup>
// Imports
import {
  defineAsyncComponent as DAC,
  computed,
  ref,
  reactive,
  onBeforeMount
} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import confetti from 'canvas-confetti'

// Service constants (Compositions & EventBus)
const store = useStore()
const router = useRouter()

const words = {
  1: 'ДЕЗОДОРАНТ',
  2: 'ПОПУГАЙ',
  3: 'ФОНОГРАММА',
  4: 'СОВЕРШЕННОЛЕТИЕ'
}

// Components
const WordBlock = DAC(() => import('../components/word-block'))
const LettersBlock = DAC(() => import('../components/letters-block'))
const Players = DAC(() => import('../components/players'))
const Wheel = DAC(() => import('../components/wheel'))

// Emits & Props

// Refs & Reactive
const namedLetter = ref('')
const round = ref(1)
const winners = reactive([])
const players = ref([])
const firework = ref(false)

// Computed
const word = computed(() => words[round.value])
const roundPlayers = computed(() => {
  return players.value[round.value - 1] ?? winners
})
// const players = computed(() => store.state.players[round.value])

// Methods
const setWinner = async winner => {
  if (firework.value) return

  firework.value = true

  const winnerObj = roundPlayers.value.find(w => w.name === winner)

  if (round.value <= 3) {
    winners[round.value - 1] = winnerObj

    await confetti({
      particleCount: 500,
      spread: 360
    })

    round.value++
  } else {
    store.commit('SET_FIELD', ['winner', winnerObj])
    store.commit('SET_FIELD', ['players', players.value.flat()])

    await confetti({
      particleCount: 500,
      spread: 360
    })

    router.push({ name: 'scores' })
  }

  firework.value = false
}

// Hooks
onBeforeMount(() => {
  players.value = store.state.players
})

// Watch
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  user-select: none;
}

html {
  overflow: hidden;
  height: 100%;
}

body {
  overflow: hidden;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

ul,
ol,
li {
  list-style-type: none;
}

tr,
th,
td,
div,
span,
a,
p {
  word-break: break-word;
}

#app {
  height: 100vh;
  width: 100vw;
}

.main {
  background: #c7dafc;

  height: 100vh;
  width: 100vw;
  padding: 1rem 3rem;

  font-size: 2.5rem;

  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas: 'word word word' 'letters wheel players';

  &.final {
    background: linear-gradient(
      0deg,
      #bf953f,
      #fcf6ba,
      #b38728,
      #fbf5b7,
      #aa771c
    );
  }
}
</style>
