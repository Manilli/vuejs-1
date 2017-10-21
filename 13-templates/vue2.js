

Vue.component('elegir-ganador', {
  props: ['listado'],
  template: '#elegir-ganador-template',
  methods:{
    elegirGanador(){
      let cantidad = this.participantes.length;
      let indice = Math.floor((Math.random()*cantidad));
      this.ganador= this.participantes[indice];
    }
  },
  data (){
    return{
      ganador: false,
      participantes: this.listado
    }
  }
});

const vm= new Vue({
  el:'main',
  data: {
    personas:['Juan', 'David', 'Neyder', 'Maria']
  }
});
