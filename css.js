const string = `:root {
  --hl: #1b2f90;
  --bg: #f9f9f6;
  --white: #f9f9f6;
  --time: 2s;
  --time4: calc(var(--time) * 4);
  --color1: #ffc400;
  --color2: #003bff;
  --color3: #e79101;
  --color4: #671316;
  --gray: #ccc
}

* {
  margin: 0;
  padding: 0
}

body {
  background: var(--color1);
}

.icon {
  transform-origin: 50% 0;
  transform: scale(2.5, 2.5);
  position: relative;
  width: 120px;
  height: 200px;
  margin: 30px auto;
}

.bg {
  border-radius: 20px;
  width: 200px;
  margin: 0 0 0 -40px;
  height: 200px;
  background: var(--color1);
}

.ear {
  background: var(--hl);
  width: 16px;
  height: 70px;
  border-radius: 100% 70%;
  position: absolute;
  left: 90px;
  top: 42px;
  animation: rightear var(--time) ease-out infinite;
  transform-origin: 50% 0%;
}

.ear.left {
  border-radius: 70% 100%;
  left: 14px;
  top: 42px;
  animation: leftear var(--time) ease-out infinite
}

.head {
  width: 102px;
  height: 48px;
  position: absolute;
  left: 8px;
  top: 8px;
  background: var(--bg);
  border-radius: 48px 48px 3px 3px
}

.face {
  width: 110px;
  height: 68px;
  position: absolute;
  top: 30px;
  left: 4px;
  background: var(--bg);
  border-radius: 100%
}

.chin {
  width: 104px;
  height: 36px;
  position: absolute;
  top: 70px;
  left: 7px;
  background: var(--bg);
  border-radius: 50% / 0px 0px 36px 36px
}

.body {
  width: 66px;
  height: 70px;
  position: absolute;
  top: 100px;
  left: 27px;
  background: var(--bg);
  border-radius: 50%
}

.body .arm {
  width: 26px;
  height: 40px;
  position: absolute;
  top: 5px;
  left: -7px;
  background: var(--bg);
  border-radius: 26px / 26px 0 0 45px;
  transform: rotate(20deg);
}

.body .arm.right {
  transform: scale(-1, 1) rotate(20deg);
  left: 47px;
}

.body .arm:before {
  content: '';
  position: absolute;
  right: 3px;
  top: 10px;
  height: 30px;
  width: 10px;
  border-radius: 10px / 10px 0 0 30px;
  box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.body .leg {
  width: 29px;
  height: 50px;
  position: absolute;
  top: 36px;
  left: 0px;
  background: linear-gradient(-90deg, var(--gray) 0%, var(--bg) 20%, var(--bg) 100%);
  border-radius: 26px / 26px 0 26px 74px;
}

.body .leg.right {
  transform: scale(-1, 1);
  left: 37px;
}

.body .foot {
  width: 29px;
  height: 15px;
  position: absolute;
  bottom: -10px;
  left: 2px;
  background: linear-gradient(227deg, var(--gray) 0%, var(--bg) 30%, var(--bg) 100%);
  border-radius: 15px / 20px 24px 5px 5px;
}

.body .belly {
  width: 60px;
  height: 36px;
  position: absolute;
  bottom: 0;
  left: 3px;
  background: linear-gradient(0deg, var(--gray) 0%, var(--bg) 20%, var(--bg) 100%);
  border-radius: 33px / 0px 0px 35px 35px
}

.birthmark {
  width: 30px;
  height: 36px;
  position: absolute;
  top: 19px;
  left: 79px;
  background: var(--hl);
  border-radius: 36px / 43px 72px 0px 43px;
  transform: rotate(-7deg);
  transform-origin: 50% 100%;
}

.birthmark:before {
  content: '';
  background: var(--bg);
  position: absolute;
  width: 25px;
  height: 3px;
  bottom: -1px;
  border-radius: 12px / 0px 10px 0px 0px;
  left: 7px;
}

.eye {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 28px;
  left: 84px;
  background: var(--white);
  border-radius: 12px / 14px 17px 2px 10px;
  transform: rotate(-7deg);
  transform-origin: 50% 100%;
  overflow: hidden;
  box-shadow: -1px 1px 0px 0px #333 inset;
}

.lower-eyelid {
  background: var(--hl);
  position: absolute;
  width: 17px;
  height: 1px;
  bottom: -1px;
  border-radius: 13px / 0px 0px 2px 2px;
  left: 6px;
}

.pupil {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  position: absolute;
  left: -5px;
  bottom: -5px;
  background: #e79101;
  box-shadow: 0px 0px 4px 1px #333 inset;
  animation: eye var(--time) ease-out infinite;
}

.pupil:before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  margin: -9px 0 0 -9px;
  background: #000;
  border-radius: 50%
}

.pupil:after {
  content: '';
  position: absolute;
  left: 17px;
  top: 6px;
  width: 5px;
  height: 5px;
  background: #fff;
  border-radius: 50%
}

.eye.left {
  left: 13px;
  top: 28px;
  transform: rotate(7deg) scale(-1, 1);
  box-shadow: -1px 1px 0px 0px #333 inset, 0px -2px 4px 2px #bbb;
  animation: lefteye var(--time) ease-out infinite;
}

.nose {
  width: 62px;
  height: 32px;
  position: absolute;
  top: 48px;
  left: 28px;
  background: #363035;
  border-radius: 31px / 12px 12px 19px 19px;
  z-index: 3
}

.nose:before {
  content: '';
  width: 60px;
  height: 12px;
  opacity: 0.8;
  background: linear-gradient(30deg, #fff 0%, #fff 8%, #b1aeb1 15%, #b1aeb1 50%, #544d53 100%);
  position: absolute;
  left: 1px;
  top: 1px;
  border-radius: 30px / 10px 10px 2px 2px
}

.nostril {
  position: absolute;
  width: 15px;
  height: 4px;
  background: linear-gradient(347deg, #363035 0%, #000 50%, #000 100%);
  box-shadow: -1px -1px 3px 0px #363035 inset;
  left: 10px;
  top: 22px;
  transform: rotate(39deg);
  border-radius: 8px / 2px 4px 0px 2px;
  animation: nostril var(--time) ease-out infinite
}

.nostril.right {
  transform: rotate(-39deg) scale(-1, 1);
  left: 37px;
  top: 22px
}

.mouth {
  width: 68px;
  height: 27px;
  position: absolute;
  left: 25px;
  top: 72px;
  border-radius: 36px / 0px 0px 27px 27px;
  background: #671316;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.5) inset;
  animation: mouth var(--time) ease-out infinite
}

.mouth:before {
  content: '';
  width: 72px;
  height: 12px;
  background: var(--bg);
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: 36px / 0px 0px 14px 9px;
  box-shadow: -1px 7px 8px 2px rgba(155, 155, 155, 0.2);
  z-index: 2;
  animation: lip var(--time) ease-out infinite
}

.tongue {
  width: 34px;
  height: 14px;
  position: absolute;
  left: 50%;
  top: 0;
  margin: 0 0 0 -17px;
  border-radius: 17px / 0px 0px 11px 11px;
  background: #a2504f;
  box-shadow: 0px 0px 2px 0px rgba(143, 32, 33, 1) inset;
  animation: tongue var(--time) ease-out infinite
}

.teen {
  background: var(--white)
}

.no11,
.no21 {
  width: 8px;
  height: 3px;
  position: absolute;
  left: 34px;
  top: 11px
}

.no11 {
  margin-left: -8px;
  left: 33.8px;
  border-radius: 4px / 0 0 0 1px;
  border-right: .2px solid rgba(0, 0, 0, 0.5)
}

.no21 {
  border-radius: 4px / 0 0 1px 0;
}

@keyframes mouth {
  0% {
      height: 27px
  }

  30% {
      height: 27px
  }

  80% {
      height: 15px
  }

  100% {
      height: 27px
  }
}

@keyframes lip {
  0% {
      border-radius: 36px / 0px 0px 14px 9px;
  }

  30% {
      border-radius: 36px / 0px 0px 14px 9px;
  }

  80% {
      border-radius: 25px / 0px 0px 14px 9px;
  }

  100% {
      border-radius: 36px / 0px 0px 14px 9px;
  }
}

@keyframes tongue {
  0% {
      height: 14px
  }

  30% {
      height: 14px
  }

  80% {
      height: 25px
  }

  100% {
      height: 14px
  }
}

@keyframes leftear {
  0% {
      transform: rotate(10deg);
  }

  10% {
      transform: rotate(10deg);
  }

  80% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(10deg);
  }
}

@keyframes rightear {
  0% {
      transform: rotate(-10deg);
  }

  10% {
      transform: rotate(-10deg);
  }

  80% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(-10deg);
  }
}

@keyframes eye {
  0% {
      left: -5px
  }

  30% {
      left: -5px
  }

  80% {
      left: -8px
  }

  100% {
      left: -5px
  }
}

@keyframes nostril {
  0% {
      height: 4px
  }

  30% {
      height: 4px
  }

  80% {
      height: 3px
  }

  100% {
      height: 4px
  }
}

@keyframes mask {
  0% {
      left: -40px
  }

  30% {
      left: -40px
  }

  100% {
      left: 400px
  }
}

@keyframes rotate {
  0% {
      background: var(--color1);
      transform: rotate(0deg) scale(1, 1)
  }

  20% {
      background: var(--color1);
      transform: rotate(0deg) scale(.95, .95)
  }

  25% {
      background: var(--color2);
      transform: rotate(90deg) scale(1, 1)
  }

  45% {
      background: var(--color2);
      transform: rotate(90deg) scale(.95, .95)
  }

  50% {
      background: var(--color3);
      transform: rotate(180deg) scale(1, 1)
  }

  70% {
      background: var(--color3);
      transform: rotate(180deg) scale(.95, .95)
  }

  75% {
      background: var(--color4);
      transform: rotate(270deg) scale(1, 1)
  }

  95% {
      background: var(--color4);
      transform: rotate(270deg) scale(.95, .95)
  }

  100% {
      background: var(--color1);
      transform: rotate(360deg) scale(1, 1)
  }
}
      
`;
export default string;
