
const vm=new Vue({
  el:'main',
  data:{
    tareas:[
      {titulo: 'Ganar campos', completado: false},
      {titulo: 'Jugar play', completado: false},
      {titulo: 'Ver tv', completado: false},
      {titulo: 'Comer', completado: false},
      {titulo: 'Dormir', completado: false},
      {titulo: 'Pasar web', completado: false}
    ]
  },
  methods:{
    completarTarea(tarea){
      tarea.completado = !tarea.completado;
    }
  }
});
