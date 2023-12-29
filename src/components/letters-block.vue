<template>
  <div class="letters-block">
    <div
      v-for="l in letters"
      :key="l.id"
      class="letters-block__item"
      :class="{ disabled: l.disabled }"
      @click="toggleActivity(l.id)"
    >
      {{ l.id }}
    </div>
  </div>
</template>

<script setup>
// Imports
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// Service constants (Compositions & EventBus)
const route = useRoute()

const chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'

// Components

// Emits & Props
// eslint-disable-next-line no-undef
const props = defineProps({
  round: {
    type: Number,
    default: null
  }
})
// eslint-disable-next-line no-undef
const emit = defineEmits(['select'])

// Refs & Reactive
const letters = ref([])
// Computed

// Methods
const toggleActivity = id => {
  const letter = letters.value.find(l => l.id === id)

  if (!letter.disabled) {
    letter.disabled = true

    emit('select', letter.id)
  }
}

const resetLetters = () => {
  letters.value = chars.split('').map(c => ({ id: c, disabled: false }))
}
// Hooks
onBeforeMount(resetLetters)

// Watch
watch(() => props.round, resetLetters)
</script>

<style lang="scss" scoped>
.letters-block {
  padding-top: 2rem;
  grid-area: letters;
  display: grid;
  grid-gap: 0.7rem;
  font-size: 2rem;
  grid-template-columns: repeat(4, auto);
  justify-items: center;
  justify-content: center;
  align-content: start;

  &__item {
    border: 0.1rem solid #777;
    padding: 0.25rem;
    width: 3rem;
    text-align: center;
    border-radius: 0.5rem;
    cursor: pointer;
    background: rgba($color: #ffffff, $alpha: 1);

    &.disabled {
      background: rgba($color: #ffffff, $alpha: 0.2);
      position: relative;
      color: rgba($color: #000000, $alpha: 0.2);
      cursor: default;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 1.3rem;
        width: 0.2rem;
        height: 100%;
        z-index: 10;
        background-color: rgba($color: #ff0000, $alpha: 0.5);
      }

      &:before {
        transform: rotate(40deg);
      }

      &:after {
        transform: rotate(-40deg);
      }
    }

    &:last-child {
      grid-column: 2 / 4;
      grid-row: 9 / 10;
      justify-self: center;
    }
  }
}
</style>
