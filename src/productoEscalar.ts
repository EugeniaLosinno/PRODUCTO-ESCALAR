//let cantidadAIngresar : number = Number(prompt("Ingrese la cantidad de números que desea ingresar");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

let numero = <HTMLInputElement>document.getElementById("cantidad");

let informeV1 = <HTMLParagraphElement>document.getElementById("informeV1");
let informeV2 = <HTMLParagraphElement>document.getElementById("informeV2");
let informeProducto = <HTMLParagraphElement>document.getElementById("informeProducto");


let cantidadAIngresar : number = 0;

function cargarNumerosVector(vector: number[], grupo:string) {
  for (let indice = 0; indice < vector.length; indice++) {
     vector[indice] = Number(prompt("Ingrese el número " + (indice + 1) + " del " + grupo + " grupo"));
  };
};

function mostrarContenidoVector(vector: number[]) { 
  for (let indice = 0; indice < vector.length; indice++) {
    console.log(vector[indice]);
};
};

function productoEscalarVectores(vector_1: number[], vector_2: number[],vectorR: number[]){ 
  for (let indice = 0; indice < vector_1.length; indice++) {
    vectorR[indice] = vector_1[indice] * vector_2[indice];
},
};

btnEnviar.addEventListener("click", () => { 
   cantidadAIngresar = Number(numero.value);
   let vector1: number[] = new Array(cantidadAIngresar);
   let vector2: number[] = new Array(cantidadAIngresar);
   let vectorResultado: number[] = new Array(cantidadAIngresar);
   cargarNumerosVector(vector1,"primer");
   cargarNumerosVector(vector2,"segundo");
   informeV1.innerHTML = (`Los números ingresados en el primer conjunsto ${vector1}`);
   console.log("Los númbre ingresados en el primer conjunto");
   mostrarContenidoVector(vector1);
   console.log("Los númbre ingresados en el segundo conjunto");
   informeV2.innerHTML = (`Los números ingresados en el segundo conjunsto ${vector2}`);
   mostrarContenidoVector(vector2);
   productoEscalarVectores(vector1,vector2,vectorResultado);
   console.log("El resultado el producto escalar de los dos grupos de números ingresados");
   informeProducto.innerHTML = (`El producto escalar de los dos grupos de números ${vectorResultado}`);
   mostrarContenidoVector(vectorResultado);
});