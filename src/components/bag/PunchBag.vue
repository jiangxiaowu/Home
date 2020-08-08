<template>
  <div id="vue-app">
    <!-- bag image -->
    <div id="bag" :class="{burst:ended}"></div>

    <!-- bag health -->
    <div id="bag-health">
      <div v-bind:style="{width:health + '%'}"></div>
    </div>

    <!-- bag contrlos -->
    <div id="controls">
      <button v-on:click="punch" v-show="!ended" class="puc">Punch</button>

      <button v-on:click="restart" class="res">Restart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      health: 100,
      ended: false
    };
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  }
};
</script>

<style scoped>
#bag {
  width: 200px;
  height: 500px;
  margin: 0 auto;
  background: url(./img/bag.png) center no-repeat;
  background-size: 80%;
}

#bag.burst {
  background: url(./img/bag-burst.png) center no-repeat;
  background-size: 80%;
}

#bag-health {
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}

#bag-health div {
  height: 20px;
  background: crimson;
}

#controls {
  width: 120px;
  margin: 0 auto;
  
}

.puc {
  padding: 2px;
  cursor: pointer;
}

.res {
  padding: 2px;
  margin: 5px;
  cursor: pointer;
}
</style>