<template>
  <div class="word-block">
    <Card
      v-for="(l, i) in letters"
      :key="`${l.id}_${i}`"
      :letter="l.id"
      :active="l.active"
      @select="checkLetter(l.id)"
    />
  </div>
</template>

<script setup>
// Imports
import {
  defineAsyncComponent as DAC,
  ref,
  computed,
  watch,
  onBeforeMount
} from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// Service constants (Compositions & EventBus)
const store = useStore()
const route = useRoute()

// Components
const Card = DAC(() => import('./card'))

// Emits & Props
// eslint-disable-next-line no-undef
const props = defineProps({
  word: {
    type: String,
    required: true
  },
  named: {
    type: String,
    required: true
  }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['solved'])

// Refs & Reactive
const letters = ref([])

// Computed

// Methods
const checkLetter = letter => {
  letters.value.forEach(l => {
    if (l.id === letter) {
      l.active = true
    }
  })

  if (!letters.value.some(l => !l.active)) {
    emit('solved')
  }
}

const fill = val => {
  letters.value = val.split('').map(l => ({ id: l, active: false }))
}

// Hooks
onBeforeMount(() => {
  fill(props.word)
})

// Watch
watch(
  () => props.named,
  val => {
    checkLetter(val)
  }
)
watch(
  () => props.word,
  val => {
    fill(val)
  }
)
</script>

<style lang="scss" scoped>
.word-block {
  grid-area: word;
  font-size: 7rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
</style>
