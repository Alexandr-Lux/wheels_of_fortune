<template>
  <div class="auth">
    <div class="auth__title">Регистрация игроков</div>
    <ul class="auth__rounds">
      <li
        v-for="(round, key) in players"
        :key="key"
        class="auth__rounds-item"
      >
        <p class="auth__round-label">Раунд {{ key + 1 }}</p>
        <ul class="auth__players">
          <li
            v-for="(pl, i) in round"
            :key="i"
          >
            <input
              v-model="pl.name"
              type="text"
              class="auth__input"
            />
          </li>
        </ul>
      </li>
    </ul>
    <div
      class="auth__btn"
      @click="letsPlay"
    >
      Готово
    </div>
  </div>
</template>

<script setup>
// Imports
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'

// Service constants (Compositions & EventBus)
const router = useRouter()
const store = useStore()

// Components

// Emits & Props

// Refs & Reactive
// const players = ref([
//   [
//     { name: '', points: 0 },
//     { name: '', points: 0 },
//     { name: '', points: 0 }
//   ],
//   [
//     { name: '', points: 0 },
//     { name: '', points: 0 },
//     { name: '', points: 0 }
//   ],
//   [
//     { name: '', points: 0 },
//     { name: '', points: 0 },
//     { name: '', points: 0 }
//   ]
// ])

const players = ref([
  [
    { name: 'Маша', points: 0 },
    { name: 'Саша', points: 0 },
    { name: 'Макс', points: 0 }
  ],
  [
    { name: 'Катя', points: 0 },
    { name: 'Яна', points: 0 },
    { name: 'Денис', points: 0 }
  ],
  [
    { name: 'Сережа', points: 0 },
    { name: 'Коля', points: 0 },
    { name: 'Андрей', points: 0 }
  ]
])

// Computed

// Methods
const letsPlay = () => {
  store.commit('SET_FIELD', ['players', players.value])

  router.push({ name: 'main' })
}

// Hooks

// Watch
</script>

<style lang="scss">
.auth {
  background: #c7dafc;

  height: 100vh;
  width: 100vw;
  padding: 3rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 5rem;

  &__input {
    font-size: 3rem;
    font-family: 'Neucha', sans-serif;
    height: 5rem;
    padding: 0 1rem;
    width: 100%;
    color: #000;
    background: transparent;
    border: none;
    border-bottom: 0.2rem solid #666;
  }

  &__title {
    font-size: 4rem;
    text-align: center;
    text-transform: uppercase;
  }

  &__rounds {
    display: flex;
    gap: 3rem;

    &-item {
      flex: 1;
    }
  }

  &__players {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__round-label {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  &__btn {
    align-self: start;
    justify-self: center;
    padding: 0.5rem;
    border-radius: 1rem;
    border: 0.1rem solid #777;
    background-color: #04aa6d;
    box-shadow: 0 0.4rem #999;
    cursor: pointer;
    font-size: 2rem;
    color: #fff;

    &:hover {
      background-color: #3e8e41;
    }

    &:active {
      background-color: #3e8e89;
      box-shadow: 0 0.1rem #666;
      transform: translateY(0.3rem);
    }
  }
}
</style>
