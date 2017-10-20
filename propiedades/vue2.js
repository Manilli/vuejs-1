

Vue.component('autor', {
  props: ['nombre'],
  template: '<h1> {{nombre}} </h1>'
});


const vm= new Vue({
  el:'main',
  data: {
    autor: "Pepito"
  }
});
