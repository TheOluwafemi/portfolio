<template>
  <div class="draw">
    <div class="content">
      <h1 class="error-code">Oops</h1>
      <h5>You took a wrong turn somewhere</h5>
      <router-link to="/">
        <button>Go Home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// import p5 from "p5";

export default {
  mounted() {
    const float = function(p5) {
      // let speed = 2;
      // let posX = 0;
      let height = window.innerHeight;
      let width = window.innerWidth;
      let centerX = 0.0,
        centerY = 0.0;

      let radius = 45,
        rotAngle = -90;
      let accelX = 0.0,
        accelY = 0.0;
      let deltaX = 0.0,
        deltaY = 0.0;
      let springing = 0.0009,
        damping = 0.98;

      //corner nodes
      let nodes = 3;

      //zero fill arrays
      let nodeStartX = [];
      let nodeStartY = [];
      let nodeX = [];
      let nodeY = [];
      let angle = [];
      let frequency = [];

      // soft-body dynamics
      let organicConstant = 1.0;

      // NOTE: Set up is here
      p5.setup = () => {
        // p5.createCanvas(width, height);
        // p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);

        p5.createCanvas(width, height);

        //center shape in window
        centerX = width / 2;
        centerY = height / 2;

        //initialize arrays to 0
        for (let i = 0; i < nodes; i++) {
          nodeStartX[i] = 0;
          nodeStartY[i] = 0;
          nodeY[i] = 0;
          nodeY[i] = 0;
          angle[i] = 0;
        }

        // iniitalize frequencies for corner nodes
        for (let i = 0; i < nodes; i++) {
          frequency[i] = Math.random(5, 12);
        }

        p5.noStroke();
        p5.frameRate(30);
      };

      p5.draw = () => {
        //fade background
        p5.fill("#0b0f1d");
        p5.rect(0, 0, width, height);
        p5.drawShape();
        p5.moveShape();
      };

      p5.drawShape = () => {
        //  calculate node  starting locations
        for (let i = 0; i < nodes; i++) {
          nodeStartX[i] = centerX + Math.cos(p5.radians(rotAngle)) * radius;
          nodeStartY[i] = centerY + Math.sin(p5.radians(rotAngle)) * radius;
          rotAngle += 360.0 / nodes;
        }

        // draw polygon
        p5.curveTightness(organicConstant);
        p5.fill(255);
        p5.beginShape();
        for (let i = 0; i < nodes; i++) {
          p5.curveVertex(nodeX[i], nodeY[i]);
        }
        for (let i = 0; i < nodes - 1; i++) {
          p5.curveVertex(nodeX[i], nodeY[i]);
        }
        p5.endShape(p5.CLOSE);
      };

      p5.moveShape = () => {
        //move center point
        deltaX = p5.mouseX - centerX;
        deltaY = p5.mouseY - centerY;

        // create springing effect
        deltaX *= springing;
        deltaY *= springing;
        accelX += deltaX;
        accelY += deltaY;

        // move predator's center
        centerX += accelX;
        centerY += accelY;

        // slow down springing
        accelX *= damping;
        accelY *= damping;

        // change curve tightness
        organicConstant = 1 - (Math.abs(accelX) + Math.abs(accelY)) * 0.1;

        //move nodes
        for (let i = 0; i < nodes; i++) {
          nodeX[i] =
            nodeStartX[i] + Math.sin(p5.radians(angle[i])) * (accelX * 2);
          nodeY[i] =
            nodeStartY[i] + Math.sin(p5.radians(angle[i])) * (accelY * 2);
          angle[i] += frequency[i];
        }
      };
    };

    const p5 = require("p5");
    new p5(float);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins";

.draw {
  position: relative;
}

.content {
  line-height: 3;
  color: #fdfdfd;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .error-code {
    font-size: 120px;
    line-height: 1.3;
  }

  a {
    &::before {
      content: none;
    }
  }

  button {
    cursor: pointer;
    padding: 0.6rem 1rem;
    color: white;
    border-radius: 4px;
    background: transparent;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
    transition-duration: background, color;

    &:hover {
      background: #fdfdfd;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
</style>
