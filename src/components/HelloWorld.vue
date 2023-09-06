<template>
  <div class="container">
  <div class="cont-sun">
    <div class="sun"></div>
    <div class="moon"></div>
  </div>
  <div class="cont-cactus">
    <div class="body-cactus">
      <div class="eye-left"></div>
      <div class="eye-right"></div>
      <div class="spina-1"></div>
      <div class="spina-2"></div>
      <div class="spina-3"></div>
      <div class="spina-4"></div>
      <div class="spina-5"></div>
      <div class="spina-6"></div>
      <div class="spina-7"></div>
      <div class="mouth"></div>
    </div>
    <div class="left-hand"></div>
    <div class="right-hand"></div>
  </div>
  <div class="cont-terrain">
    <div class="terrain"></div>
    <div class="se-terrain"></div>
  </div>
  <div class="mountain"></div>
  <div class="tree"></div>
</div>
</template>

<style lang='scss' scoped>
.container{
  margin: 0;
  background: #90CAF9;
  overflow: hidden;
  animation: sky-color 7s infinite linear;
}

.absolute-center{
  margin: auto;
  left: 0;
  right: 0; 
}

.container{
  position: absolute;
  @extend .absolute-center;
  width: 600px;
  height: 500px;
  bottom: 0;
}

.cont-cactus{
  position: absolute;
  display: block;
  width: 270px;
  height: 270px;
  bottom: 50px;
  z-index: 50;
  @extend .absolute-center;
  
  .body-cactus{
    position: absolute;
    @extend .absolute-center;
    border-top-left-radius: 55%;
    border-top-right-radius: 55%;
    border-bottom-right-radius: 40%120px;
    border-bottom-left-radius: 40%120px;
    width: 150px;
    height: 190px;
    background: red;
    background: -webkit-linear-gradient(left, #1B5E20 , #66BB6A, #1B5E20);
    background: -o-linear-gradient(right, #1B5E20, #66BB6A, #1B5E20);
    background: -moz-linear-gradient(right, #1B5E20, #66BB6A, #1B5E20);
    background: linear-gradient(to right, #1B5E20 , #66BB6A, #1B5E20);
    bottom: 0;
    z-index: 50;
    animation: body-move 3s linear infinite;
    
    &:after{
      content: '';
      display: block;
      position: absolute;
      height: 170px;
      width: 40px;
      border-radius: 50%;
      border-left: 3px solid #DCE775;
      opacity: 0.5;
      left: 35px;
      top: 10px;
    }
    
    &:before{
      content: '';
      display: block;
      position: absolute;
      height: 170px;
      width: 40px;
      border-radius: 50%;
      opacity: 0.5;
      border-right: 3px solid #DCE775;
      right: 35px;
      top: 10px;
    }
    
    .eye-left{
      position: absolute;
      width: 50px;
      height: 50px;
      background: white;
      border-radius: 50%;
      right: 17px;
      top: 17px;
      border: 2px solid #8BC34A;
      z-index: 1;
      
      &:after{
        content: '';
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: black;
        margin: 15px;
      }
      
      &:before{
        content: '';
        display: block;
        position: absolute;
        width: 55px;
        height: 12px;
        background: #1B5E20;
        -webkit-transform: rotateZ(-30deg);
        transform: rotateZ(-30deg);
        right: 5px;
        border-radius: 10px 0px 5px 0;
        animation: eye-move 7s infinite linear;
      }
    }
    .eye-right{
      position: absolute;
      width: 50px;
      height: 50px;
      background: white;
      border-radius: 50%;
      left: 17px;
      top: 17px;
      border: 2px solid #8BC34A;
      z-index: 1;
      &:after{
        content: '';
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: black;
        margin: 15px;
      }
      
      &:before{
        content: '';
        display: block;
        position: absolute;
        width: 55px;
        height: 12px;
        background: #1B5E20;
        -webkit-transform: rotateZ(30deg);
        transform: rotateZ(30deg);
        left: 5px;
        border-radius: 0 10px 0 5px;
        animation: eye-move 7s infinite linear;
      }
    }
    
    .mouth{
      @extend .absolute-center;
      position: absolute;
      width: 70px;
      height: 35px;
      border: 3px solid #AED581;
      background: red;
    background: -webkit-radial-gradient(black, #33691E, #689F38);
    background: -o-radial-gradient(black, #33691E, #689F38);
    background: -moz-radial-gradient(black, #33691E, #689F38);
    background: radial-gradient(black, #33691E, #689F38);
      border-radius: 5px 5px 70% 70%;
      top: 95px;
    }
  }
  
  .right-hand{
    position: absolute;
    width: 45px;
    height: 45px;
    background: #2E7D32;
    right: 0;
    border-radius: 50%;
    margin: 20px;
    animation: dance-hand 7s infinite linear;
    transform-origin: left bottom;
    border: 3px solid #8BC34A;
    &:before{
      position: absolute;
      content: '';
      display: block;
      width: 20px;
      height: 40px;
      background: #7CB342;
      border-radius: 10px;
      top: -15px;
      left: -7px;
      opacity: 0;
      animation: eye-move 7s infinite linear;
    }
    
    &:after{
      position: absolute;
      content: '';
      display: block;
      width: 20px;
      height: 40px;
      background: #7CB342;
      border-radius: 10px;
      right: -7px;
      top: -15px;
      opacity: 0;
      animation: eye-move 7s infinite linear;
    }
  }
  
  .left-hand{
    position: absolute;
    width: 45px;
    height: 45px;
    background: #2E7D32;
    border-radius: 50%;
    margin: 20px;
    animation: dance-hand 7s infinite linear;
    transform-origin: right bottom;
    border: 3px solid #8BC34A;
  }
}

.cont-terrain{
  position: absolute;
  @extend .absolute-center;
  bottom: -450px;
  width:600px;
  height: 600px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 15;
  border: 3px solid #3E2723;
  .terrain{
    position: absolute;
    top: 60px;
    background: -webkit-linear-gradient(#A1887F, #4E342E);
    background: -o-linear-gradient(#A1887F, #4E342E);
    background: -moz-linear-gradient(#A1887F, #4E342E);
    background: linear-gradient(#A1887F, #4E342E);
    width: 100%;
    height: 100px;
    border-radius: 80% 80% 0 0;
    &:after{
      content: '';
      display: block;
      position: absolute;
      @extend .absolute-center;
      width: 100px;
      height: 13px;
      box-shadow: 0px 5px 20px 10px rgba(0,0,0,0.8);
      border-radius: 50%;
      background: rgba(0,0,0,0.8);
      z-index: 30;
      top: 35px;
    }
  }
  .se-terrain{
    position: absolute;
    height: 100px;
    width: 100%;
    background: -webkit-linear-gradient(#FFA726, #FFE082);
    background: -o-linear-gradient(#FFA726, #FFE082);
    background: -moz-linear-gradient(#FFA726, #FFE082);
    background: linear-gradient(#FFA726, #FFE082);
    top: 0px;
    z-index: 10;
    border-radius: 50% 50% 0 0;
  }
}

.spina{
  position: absolute;
  width: 3px;
  height: 17px;
  border-radius: 50% 50% 0 0;
  background: #FDD835;
  -webkit-transform: rotateZ(-40deg);
  transform: rotateZ(-40deg);
}

.spina-rot{
  position: absolute;
  width: 3px;
  height: 17px;
  border-radius: 50% 50% 0 0;
  background: #FDD835;
  -webkit-transform: rotateZ(40deg);
  transform: rotateZ(40deg);
  right: 0;
}

.spina-1{
  @extend .spina;
  margin-left: 42px;
  margin-top: 0px;
}

.spina-2{
  @extend .spina;
  margin-top: 75px;
  margin-left: 25px;
}

.spina-3{
  @extend .spina;
  margin-top: 120px;
  margin-left: 5px
}

.spina-4{
  @extend .spina;
  margin-top: 140px;
  margin-left: 70px
}

.spina-5{
  @extend .spina-rot;
  margin-top: 7px;
  margin-right: 25px
}

.spina-6{
  @extend .spina-rot;
  margin-top: 120px;
  margin-left: 80px
}

.spina-7{
  @extend .spina-rot;
  margin-top: 80px;
  margin-right: 30px
}


.cont-sun{
  position: absolute;
  @extend .absolute-center;
  width: 300px;
  height: 290px;
  transform-origin: bottom center;
  bottom: 180px;
  -webkit-transform: rotateZ(-90deg);
  transform: rotateZ(-90deg);
  animation: sun-rotation 7s infinite linear;
  
  .sun{
      position: absolute;
      @extend .absolute-center;
      background: #F0F4C3;
      width: 100px;
      height: 100px;
      top: 0px;
      border: 10px solid #FFF59D;
      animation: sun-color 7s infinite linear;
  }
  
  .moon{
      position: absolute;
      @extend .absolute-center;
      border-left: 10px solid #F5F5F5;
      width: 100px;
      height: 100px;
      bottom: -250px;
    border-radius: 50%;
  }
}

  .mountain{
    position: absolute;
    bottom: 70px;
    width: 80px;
    height: 110px;
    border-radius: 70% 10px 2px 1px;
    box-shadow: 0 2px 5px #5D4037;
    background: #3E2723;
    z-index: 10;
    right: 80px;
    bottom: 35px;
    -webkit-transform: rotateZ(25deg);
    transform: rotateZ(25deg);
    &:after{
      content: '';
      display: block;
      position: absolute;
      width: 110px;
      height: 60px;
      border-radius: 50px 2% 2px 1px;
      border-left: 2px solid black;
      box-shadow: 0 2px 5px #5D4037;
      background: #3E2723;
      top: 30px;
      left: -75px;
    }
  }

.tree{
  position: absolute;
  z-index: 10;
  left: 150px;
  width: 3px;
  height: 100px;
  bottom: 80px;
  -webkit-transform: rotateZ(-25deg);
  transform: rotateZ(-25deg);
  background: #BDBDBD;
  border: 1px solid #FFE0B2;
  box-shadow: 0px 3px 1px  black;
  z-index: 15;
  &:after{
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 35px;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    background: #BDBDBD;
    border: 1px solid #FFE0B2;
    left: 13px;
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 20px;
    -webkit-transform: rotateZ(-25deg);
    transform: rotateZ(-25deg);
    background: #BDBDBD;
    border: 1px solid #FFE0B2;
    right: 5px;
    top: 30px;
  }
}
  

@keyframes dance-hand{
  0%{
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
  }
  5%{
      -webkit-transform: rotateZ(-40deg);
      transform: rotateZ(-40deg);
  }
  10%{
      -webkit-transform: rotateZ(40deg);
      transform: rotateZ(40deg);
  }
  15%{
      -webkit-transform: rotateZ(-15deg) scaleY(0.5);
      transform: rotateZ(-15deg) scaleY(0.5);
  }
  20%{
      -webkit-transform: rotateZ(15deg) scaleY(1.2);
      transform: rotateZ(15deg) scaleY(1.2);
  }
  30%{
      -webkit-transform: translateX(20px);
      transform: translateX(20px);
  }
  40%{
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
  }
  45%{
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
  }
  50%{
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
  }
  55%{
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
  }
    60%{
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
  }
  65%{
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
  }
    70%{
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
  }
  75%{
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
  }
  78%{
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
  }
  83%{
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
  }
  90%{
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
  }
}

@keyframes body-move{
  0%{
    height: 190px;
  }
  25%{
    height: 200px;
  }
  50%{
    height: 185px;
  }
  75%{
    height: 195px;
  }
  100%{
    height: 190px;
  }
}

@keyframes eye-move{
  0%{
    opacity: 0;
  }
  25%{
    opacity: 0;
  }
  42%{
    opacity: 0;
  }
  45%{
    opacity: 1;
  }
  90%{
    opacity: 1;
  }
  95%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
  
}

@keyframes sun-rotation{
  0%{
      -webkit-transform: rotateZ(-90deg);
      transform: rotateZ(-90deg);
  }
  100%{
      -webkit-transform: rotateZ(270deg);
      transform: rotateZ(270deg);
  }
}

@keyframes sky-color{
  0%{
    background: #90CAF9;
  }
  75%{
    background: #001a4d;
  }
  95%{
    background: #90CAF9;
  }
}

@keyframes sun-color{
  0%{
    background: #F0F4C3;
  }
  75%{
    background: #FB8C00;
    border: 10px solid #E65100;
  }
  95%{
    background: #F0F4C3;
  }
}

</style>