<template>
  <div
    class="card"
    :class="{ active }"
    @click="$emit('select')"
  >
    <div class="card__side card__side--front">
      <div class="card__content">{{ letter }}</div>
    </div>

    <div class="card__side card__side--back" />
  </div>
</template>

<script setup>
// Imports

// Service constants (Compositions & EventBus)

// Components

// Emits & Props
// eslint-disable-next-line no-undef
const props = defineProps({
  letter: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
})
// Refs & Reactive

// Computed

// Methods

// Hooks

// Watch
</script>

<style lang="scss">
.card {
  position: relative;
  height: 10rem;
  width: 8rem;
  -moz-perspective: 30rem;
  perspective: 30rem;
  margin: 0.2rem;
  cursor: pointer;

  &__side {
    height: 100%;
    transition: all 1s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.15);

    &--front {
      background-color: #fff;
      transform: rotateY(180deg);
      z-index: 0;
    }

    &--back {
      background-color: #000;
      z-index: 1;
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    opacity: 0;
  }

  // &:hover &__side--back {
  //   transform: rotateY(-180deg);
  //   z-index: 0;
  // }
  // &:hover &__side--front {
  //   transform: rotateY(0);
  //   z-index: 1;
  // }
  &.active &__side--back {
    transform: rotateY(-180deg);
    z-index: 0;
  }
  &.active &__side--front {
    transform: rotateY(0);
    z-index: 1;
  }
  &.active &__content {
    opacity: 1;
  }
}
</style>
