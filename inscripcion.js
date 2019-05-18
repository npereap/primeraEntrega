// []

let curso = [
		{
		id: 1,
		nombre:'Scrum',
		duracion: '32 horas',
		valor: '10.000 pesos'
		},
		{
		nombre:'Xp',
		id: 2,
		duracion: '64 horas',
		valor: '20.000 pesos',
		},
		{
		nombre:'Kanban',
		id: 3,
		duracion: '128 horas',
		valor: '30.000 pesos',
		}
		
];

const fs = require('fs');

const ins = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'c'
	}
}

const argv = require('yargs')
            .command('inscribir','Inscribirme en un curso ', ins)
			.argv

 crearArchivo = (curso) => {
	 if (curso[argv.i-1] == undefined ){
		console.log('Ha ingresado un ID que no corresponde a ningún curso!');
		
		 curso.forEach((element) => {
		setTimeout(function(){
			console.log('El curso No. ' + element.id + ' se llama ' + element.nombre + ', tiene una duracion de ' + element.duracion + ' y un valor de ' + element.valor );
		}, element.id * 2000);
});

} else {
	

let infoCurso = curso.find( infCurso => infCurso.nombre == curso[argv.i-1].nombre)
	
	texto = 'El estudiante ' + argv.n + '\n' +
	' con cédula ' + argv.c + '\n' +
	' se ha matriculado en el curso ' + infoCurso.nombre + '\n' +
	' el cual tiene una duracion de ' + infoCurso.duracion + '\n' +
	' y un valor de ' + infoCurso.valor;

	
	fs.writeFile('incripcion.txt', texto, (err) => {
		if(err) trow (err);
		console.log('Se ha creado el archivo')
	});
}
 
 
 }
 
 crearArchivo(curso);