export const fn = (a, b, c) => {
   // Cuerpo de la función: Completa la lógica de la función aquí.
   
   if(a + b + c > 40) {
      throw Error("El número de empanadas no puede pasar de 40.")
   }

   if((a + b + c) % 3 !== 0) {
      throw Error("El número de empanadas tiene que ser divisible entre 3.")
   }

   if(a < 0 || b < 0 || c < 0) {
      throw Error("El numero de empanadas tiene que ser un numero entero.")
   }

};