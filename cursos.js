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
	
 curso.forEach((element) => {
		setTimeout(function(){
			console.log('El curso No. ' + element.id + ' se llama ' + element.nombre + ', tiene una duracion de ' + element.duracion + ' y un valor de ' + element.valor );
		}, element.id * 2000);
});