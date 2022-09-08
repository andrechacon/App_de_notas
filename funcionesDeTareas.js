const fs = require('fs');

let funcionesDeTareas = {
    leerJson: function (){ 
        let tareasJson = fs.readFileSync('./appTareas.json', 'utf-8')
        let tareasParseadas = JSON.parse(tareasJson)
        return tareasParseadas
    },
    agregarTarea:function(titulo, estado){
        let nuevaTarea = {
            titulo:titulo,
            estado:estado,
        }
        let tareasAnteriores = this.leerJson()
        tareasAnteriores.push(nuevaTarea)

        let nuevoJson= JSON.stringify(tareasAnteriores)
        fs.writeFileSync('./appTareas.json' , nuevoJson, 'utf-8')},
        filtrarPorEstado: function(estado){
            let tareas = this.leerJson()
            let filtradas = tareas.filter(tarea => tarea.estado == estado)
          return filtradas

      }
   }


module.exports =funcionesDeTareas 
