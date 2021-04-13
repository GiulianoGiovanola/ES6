const alumnos = [
    { nombre: 'Sofia Bonavena', edad: 23 },
    { nombre: 'Micaela Fernandez', edad: 22 },
    { nombre: 'Giuliano Giovanola', edad: 20 },
    { nombre: 'Lautaro Hudson', edad: 19 },
    { nombre: 'Alejandro Nieco', edad: 22 },
    { nombre: 'Micaela Orfali', edad: 24 },
    { nombre: 'Pedro Balza', edad: 26 },
    { nombre: 'Leandro Amaro', edad: 35 },
    { nombre: 'Alva Ramírez', edad: 27 },
    { nombre: 'Diego Salischiker', edad: 29 },
    ]


// Ejercicio 1 (Listo)

const nombresAlumnos = alumnos.map(nombres =>{
    const { nombre } = nombres
    return nombre
})
console.log(`Los nombres de los alumnos son: `, nombresAlumnos)

// Ejercicio 2 (Listo)

const edadesAlumnos = alumnos.map(edades =>{
    const { edad } = edades
    return edad
})
console.log(`Las edades de los alumnos son: `, edadesAlumnos)

// Ejercicio 3 (Listo)

const edadesTotal = alumnos.reduce( (a,b) =>{
    const { edad } = b
    return a + edad
}, 0)
console.log(`La edad total de los alumnos es de:`, edadesTotal)

// Ejercicio 4 (Listo)

const miAlumno = alumnos.find((edadAlumno)=>{
    return edadAlumno.nombre === 'Micaela Orfali'
})
console.log(`La edad de Micaela Orfali es:`, miAlumno.edad)

// Ejercicio 5 (Listo)

const [alumnoUno] = alumnos
console.log(`El primer alumno de la lista es:`, alumnoUno, ` y su nombre es:`, alumnoUno.nombre)

// Ejercicio 6 (Listo)

const alumnosConInicialL = alumnos.filter((alumno)=>{
    const { nombre } = alumno
    if(nombre.charAt(0) === "L"){
        return nombre
    }
})
console.log("Los alumnos que empiezan con la letra L son:", alumnosConInicialL)

// Ejercicio 7

const frutas = ['Manzana', 'Banana', 'Pera', 'Frutilla', 'Naranja', 'Mandarina', 'Anana', 'Sandia', 'Uva', 'Cereza']
const otros = alumnos.map((categoriaNueva)=>{
    categoriaNueva.frutas = frutas[alumnos.indexOf(categoriaNueva)]
    return categoriaNueva
})
console.log(`El array con la nueva categoria agregada: `, otros)

// Ejercicio 8

const edadPromedio = edadesTotal/alumnos.length
console.log('La edad promedio de los alumnos es:', edadPromedio)
