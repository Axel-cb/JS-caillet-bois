const personas = [
    prompt({nombre: "Alex", edad: 31}),
    {nombre: "Jorge", edad: 48},
    {nombre: "Silvina", edad: 17},
    {nombre: "Carla", edad: 20}
];

const mayores = personas.filter(p => p.edad >=18);
console.log(mayores);