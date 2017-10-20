const vm = new Vue({
  el: 'main',
  data:{
    mensaje: 'Hola mundo',
    nuevaTarea:null,
    tareas:[{
      titulo: 'Aprender Vue',
      prioridad: true,
      antiguedad:20
    },
    {
      titulo: 'Pasar el semestre',
      prioridad:false,
      antiguedad:130
    },
    {
      titulo: 'Hacer algo',
      prioridad:true,
      antiguedad:300
    }
   ]
  },
  methods:{
    agregarTarea(){
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea=null;
    },
  },
  computed:{
    mensajeAlReves(){
      return this.mensaje.split('').reverse().join('');
    },
    tareasConPrioridad(){
      return this.tareas.filter((tarea) => tarea.prioridad);
    },
    tareasPorAntiguedad(){
      return this.tareas.sort((a,b) => b.antiguedad - a.antiguedad);
    }
  },
});
