const process = require('process');
const funcionesDeTareas = require('./funcionesDeTareas') 
let action = process.argv[2] &&  process.argv[2].toLocaleLowerCase(); 

switch (action) {
  case "listar": 
    let listaDeTareas = funcionesDeTareas.leerJson()
    listaDeTareas.forEach(Tarea =>{
     console.log(`Tarea: ${Tarea.titulo} \nEstado: ${Tarea.estado}`)   
      console.log('-----------------------------------------------------')
    }); 
    break; 
    case 'agregar':
      let titulo = process.argv[3];
      let estado = process.argv[4];
       funcionesDeTareas.agregarTarea(titulo, estado)
      break;
      case 'filtrar':
        let filtro = process.argv[3]
        console.log(funcionesDeTareas.filtrarPorEstado(filtro))
        break;
        case undefined: 
        console.log('Tienes que pasar una accion.');
        break  
        default: 
        console.log('No entiendo que queres hacer.')
}  



