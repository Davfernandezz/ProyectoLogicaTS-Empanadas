export const fn = (a: number, b: number, c: number): number => {
    // condiciones de los parametros de entrada
    if (a + b + c > 40) {
      throw new Error("El número de empanadas no puede pasar de 40.");
    }
  
    if ((a + b + c) % 3 !== 0) {
      throw new Error("El número de empanadas tiene que ser divisible entre 3.");
    }
  
    if (a < 0 || b < 0 || c < 0) {
      throw new Error("El numero de empanadas tiene que ser un numero entero.");
    }
  
    let precioTotal: number = 0;
  
    // array de los precios
    const preciosEmpanadas: number[] = [];
    for (let i = 0; i < a; i++) {
      preciosEmpanadas.push(12);
    }
    for (let i = 0; i < b; i++) {
      preciosEmpanadas.push(14);
    }
    for (let i = 0; i < c; i++) {
      preciosEmpanadas.push(16);
    }
  
    // array de la media de los precios
    const mediaEmpanadas: number[] = [];
    while (preciosEmpanadas.length > 1) {
      const primerPrecio = preciosEmpanadas.shift()!;
      const ultimoPrecio = preciosEmpanadas.pop()!;
      const mediaPrecio = (primerPrecio + ultimoPrecio) / 2;
      mediaEmpanadas.push(mediaPrecio);
      mediaEmpanadas.push(mediaPrecio);
    }
  
    // añadir la empanada al array en caso de que falte 
    if (preciosEmpanadas.length === 1) {
      mediaEmpanadas.push(preciosEmpanadas.pop()!);
    }
  
    // ordenar los precios de mayor a menor
    mediaEmpanadas.sort((a, b) => b - a);
    console.log(mediaEmpanadas)
  
    // precio total calculo
    for (let i = 0; i < mediaEmpanadas.length; i++) {
      if (i % 3 === 0) {
        precioTotal += mediaEmpanadas[i];
      }
    }
  
    console.log(precioTotal);
    return precioTotal;
  };