new Vue({
  el: '#app',
  vuetify: new Vuetify(),
})

console.log("waddup");
console.log(VANTA);

VANTA.BIRDS({
  el: "#app",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0,
  color1: 0xff,
  color2: 0xffffff,
  colorMode: "variance",
  birdSize: 1.40,
  wingSpan: 26.00,
  speedLimit: 4.00,
  separation: 17.00,
  alignment: 14.00,
  cohesion: 14.00,
  quantity: 5.00,
})

console.log("successful");