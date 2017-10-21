

Vue.component('mis-tareas', {
  template: `<ul><li v-for="tarea in tareas">{{tarea}}</li></ul>`,
  data (){
    return{
      tareas: ['Aprender Vue', 'Pasar el semestre', 'Hacer algo']
    }
  }
});


const vm= new Vue({
  el:'main'
});
