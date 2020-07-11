<template>
  <div>
    <canvas id="bird" width="320" height="480"></canvas>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cvs: null,
      ctx: null,
      sprite: null,
      bg: null,
      fg: null,
      //Game state
      state: {
        current: 0,
        getReady: 0,
        game: 1,
        over: 2
      }
    };
  },
  mounted() {
    // Select CVS //
    const cvs = document.getElementById("bird");
    this.cvs = cvs;
    const ctx = cvs.getContext("2d");
    this.ctx = ctx;
    this.sprite = new Image();
    this.sprite.src = require("../../assets/bird/img/sprite.png");

    const _this = this;
    //Background
    this.bg = {
      sX: 0,
      sY: 0,
      w: 275,
      h: 226,
      x: 0,
      y: _this.cvs.height - 226,

      draw: function() {
        _this.ctx.drawImage(
          _this.sprite,
          this.sX,
          this.sY,
          this.w,
          this.h,
          this.x,
          this.y,
          this.w,
          this.h
        );

        _this.ctx.drawImage(
          _this.sprite,
          this.sX,
          this.sY,
          this.w,
          this.h,
          this.x + this.w,
          this.y,
          this.w,
          this.h
        );
      }
    };

    //Foreground 前景
    this.fg = {
      sX: 276,
      sY: 0,
      w: 224,
      h: 112,
      x: 0,
      y: _this.cvs.height - 112,

      dx: 2,

      draw: function() {
        _this.ctx.drawImage(
          _this.sprite,
          this.sX,
          this.sY,
          this.w,
          this.h,
          this.x,
          this.y,
          this.w,
          this.h
        );

        _this.ctx.drawImage(
          _this.sprite,
          this.sX,
          this.sY,
          this.w,
          this.h,
          this.x + this.w,
          this.y,
          this.w,
          this.h
        );
      },

      update: function() {
        if (_this.state.current == _this.state.game) {
          this.x = (this.x - this.dx) % (this.w / 2);
        }
      }
    };

    //Bird
    this.bird = {
      animation: [
        { sX: 276, sY: 112 },
        { sX: 276, sY: 139 },
        { sX: 276, sY: 164 },
        { sX: 276, sY: 139 }
      ],
      x: 50,
      y: 150,
      w: 34,
      h: 26,

      radius: 12,

      frame: 0,

      gravity: 0.15,
      jump: 2.6,
      speed: 0,
      rotation: 0,

      draw: function() {
        let bird = this.animation[this.frame];

        _this.ctx.save();
        _this.ctx.translate(this.x, this.y);
        _this.ctx.rotate(this.rotation); // 旋转API
        _this.ctx.drawImage(
          _this.sprite,
          bird.sX,
          bird.sY,
          this.w,
          this.h,
          -this.w / 2,
          -this.h / 2,
          this.w,
          this.h
        );

        _this.ctx.restore();
      },

      flap: function() {
        this.speed = -this.jump;
      },

      update: function() {
        //If the game state is get ready state, the bird must flap slowly
        this.period = _this.state.current == _this.state.getReady ? 10 : 5;
        //We increment (增量) the frame(帧) by 1, each period(周期)
        this.frame += frames % this.period == 0 ? 1 : 0;
        //Frame goes from 0 to 4 ,then again to 0
        this.frame = this.frame % this.animation.length;

        if (_this.state.current == _this.state.getReady) {
          this.y = 150; //Reset position of the bird after game over
          // this.rotation = 0 * DEGREE;
        } else {
          this.speed += this.gravity;
          this.y += this.speed;

          if (this.y + this.h / 2 >= _this.cvs.height - _this.fg.h) {
            this.y = _this.cvs.height - _this.fg.h - this.h / 2;
            if (_this.state.current == _this.state.game) {
              _this.state.current = _this.state.over;
              // DIE.play();
            }
          }

          //If the speed is greater than the jump means the bird is falling down
          // if (this.speed >= this.jump) {
          //   this.rotation = 90 * DEGREE;
          //   this.frame = 1;
          // } else {
          //   this.rotation = -25 * DEGREE;
          // }
        }
      },
      speedReset: function() {
        this.speed = 0;
      }
    };

    this.ctx.fillStyle = "#70c5ce";
    this.ctx.fillRect(0, 0, cvs.width, cvs.height);

    this.sprite.onload = function() {
      _this.bg.draw();
      _this.fg.draw();
      _this.bird.draw();
    };
  }
};
</script>

<style>
canvas {
  border: 1px solid #000;
  display: block;
  margin: 0 auto;
}
</style>