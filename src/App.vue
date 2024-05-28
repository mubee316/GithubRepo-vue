<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'

msg: 'oops, something went wrong'
</script>

<template>
  <ErrorBoundary fallback="{{msg}}">
    <header>
      <div class="wrapper">
        <NavbarComponent />
      </div>
    </header>

    <RouterView />
  </ErrorBoundary>
</template>

<style >
body {
  margin: 0 auto;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: black;
}
</style>
