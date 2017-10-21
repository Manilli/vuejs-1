const vm = new Vue({
  el: 'main',
  data:{
    nuevaTarea:null,
    tareas:[
      'Aprender vue',
      'Pasar el semestre'
    ]
  },
  methods:{
    agregarTarea(){
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea=null;
    },
  },
});
