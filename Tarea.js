  console.log("------------Este ejercicio muestra la persona reprobada----------")
    var Estudiante1 = {
    cuenta:'62111620',
    nombre: 'Juan',
    nota:98,
    estado:'Aprobado',  
}

    var Estudiante2 = {
    cuenta:'65298356',
    nombre: 'Gixel',
    nota:54,
    estado:'Reprobado',
}


let Estudiantes=[Estudiante1,Estudiante2]
let reprobados = Estudiantes.find(Estudiante=> Estudiante.estado ==='Reprobado')
console.log('La persona reprobada es:', reprobados)