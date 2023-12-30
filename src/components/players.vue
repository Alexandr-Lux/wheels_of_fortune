<template>
  <div class="players">
    <p
      v-if="round <= 3"
      class="players__title"
    >
      Раунд {{ round }}
    </p>
    <p
      v-else
      class="players__title"
    >
      Финальный раунд
    </p>
    <ul class="players__list">
      <li
        v-for="pl in roundPlayers"
        :key="pl.name"
        class="players__item"
        :class="{ active: pl.name === current }"
        @click="current = pl.name"
      >
        <p class="players__name">{{ pl.name }}</p>
        <p class="players__points">{{ pl.points }}</p>
      </li>
    </ul>
    <div class="players__controls">
      <button
        v-for="b in controls"
        :key="b.id"
        class="players__btn"
        @click="doAction(b.id)"
      >
        {{ b.title }}
      </button>
    </div>
  </div>
</template>

<script setup>
// Imports
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'

// Service constants (Compositions & EventBus)
const controls = [
  { id: '100', title: '100' },
  { id: '200', title: '200' },
  { id: '300', title: '300' },
  { id: '400', title: '400' },
  { id: '500', title: '500' },
  { id: 'bankrot', title: 'Б' },
  { id: 'x2', title: 'x2' },
  { id: 'win', title: '🏆' }
]

// Components

// Emits & Props
// eslint-disable-next-line no-undef
const props = defineProps({
  round: {
    type: Number,
    required: true
  },
  players: {
    type: Array,
    required: true
  }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['next-round', 'win'])

// Refs & Reactive
const roundPlayers = ref([])
const current = ref(props.players?.[0]?.name)

// Computed

// Methods
const doAction = id => {
  const curPlayer = roundPlayers.value.find(pl => pl.name === current.value)

  switch (id) {
    case '100':
      curPlayer.points += 100
      break
    case '200':
      curPlayer.points += 200
      break
    case '300':
      curPlayer.points += 300
      break
    case '400':
      curPlayer.points += 400
      break
    case '500':
      curPlayer.points += 500
      break
    case 'bankrot':
      curPlayer.points = 0
      break
    case 'x2':
      curPlayer.points = curPlayer.points * 2
      break
    case 'win':
      emit('win', current.value)
      break
  }
}

const fill = val => {
  roundPlayers.value = val
}

// Hooks
onBeforeMount(() => {
  fill(props.players)
})

// Watch
watch(
  () => props.players,
  val => {
    fill(val)
    current.value = props.players[0].name
  }
)
</script>

<style lang="scss">
.players {
  grid-area: players;

  padding-left: 1rem;
  display: grid;
  grid-template-rows: 2fr 5fr 3fr;
  align-items: start;

  &__title {
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
  }

  &__list {
    display: grid;
    grid-gap: 1rem;
  }

  &__item {
    padding: 0.3rem;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border: 0.2rem solid transparent;

    &.active {
      border-color: #8bda87;
      background-color: #fff;
    }
  }

  &__controls {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 0.5rem;
  }

  &__btn {
    background-color: #fff;
    padding: 0.2rem 0.4rem;
    font-size: 2rem;
    font-family: 'Neucha', sans-serif;
    border: 0.2rem solid #ccc;
    border-radius: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }
  }
}
</style>
