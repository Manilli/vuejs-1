const vm =  new Vue({
  el:'main',
  data:{
    laborales:['Lunes','Martes','Miercoles','Jueves','Viernes'],
    tareas:[
      {nombre:'Hacer la compra', prioridad:'baja'},
      {nombre:'Aprender vue y Firebase', prioridad:'alta'},
      {nombre:'Ir al gimnasio', prioridad:'alta'},
    ],
    persona:{
      nombre:'juan',
      profesion:'Desarrollador',
      ciudad:'roma'
    }
  },
});
