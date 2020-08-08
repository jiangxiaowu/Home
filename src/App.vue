<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/music">Player</router-link>|
      <router-link to="/weather">Weather</router-link>|
      <router-link to="/cal">Calculator</router-link> |
      <router-link to="/bird">Flybird</router-link> |
      <router-link to="/bag">PunchBag</router-link> 
    </div>
    <router-view />
    <footer id="main-footer">
      <p>Copyright &copy;2020  My Website --jiangxiaowu &#x2767;</p>
    </footer>
  </div>
</template>

<style lang="less" scope>
#app {
  background: #e0ebe8;
  font-family:  Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  user-select: none;

}

#nav {
  background: #e0ebe8;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#main-footer{
  padding: 10px;
}
</style>
