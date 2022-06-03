<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">login</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {

}

</style>
