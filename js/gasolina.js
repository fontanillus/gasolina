  const VT = document.getElementById("vt");
  const VTT = document.getElementById("vtt");
  const RESPUESTA = document.getElementById("respuesta");

  function calcular() {
    const COMB_VT = 40;  // Litros por vehículo turístico
    const COMB_VTT = 60; // Litros por vehículo todo terreno

    let turistico = Number(VT.value);
    let todoTerreno = Number(VTT.value);

    let combustibleVT = COMB_VT * turistico;
    let combustibleVTT = COMB_VTT * todoTerreno;

    let mensaje = `La necesidad de combustible de los Vehículos Turísticos es de ${combustibleVT} litros y la de los Vehículos Todo Terreno es de ${combustibleVTT} litros, para un total de ${combustibleVT + combustibleVTT} litros.`;

    console.log(mensaje);
    RESPUESTA.innerHTML = mensaje;
  }

