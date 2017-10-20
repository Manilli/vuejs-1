

Vue.component('mis-tareas', {
//  props: ['tareas'],
  template: `<ul><li v-for="tarea in tareas">{{tarea}}</li></ul>`,
  data (){
    return{
      tareas: ['Aprender Vue', 'Pasar el semestre', 'Hacer algo']
    }
  }
});


const vm= new Vue({
  el:'main',
  // data:{
  //   misTareas: ['mi tarea 1','mi tarea 2','mi tarea 3','mi tarea 4',
  //     'mi tarea 5','mi tarea 6','mi tarea 7','mi tarea 8'],
  //   tareas: ['Aprender Vue', 'Pasar el semestre', 'Hacer algo']
  // }
});
