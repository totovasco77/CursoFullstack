/* CALCULAR EL INDICE DE MASA COLPORAL DE VARIAS PERSONAL
Los siguientes resultados son aportados por la Organización Mundial de la 
Salud para personas entre 20 y 60 años sin importar su sexo
          •	Un IMC menor a 18,5: bajo de peso
          •	Entre 18,5 y 24,9: IMC normal
          •	De 25 a 29,9: indica sobrepeso
          •	Entre 30 y 34,9: obesidad tipo 1
          •	De 35 a 39,9: obesidad tipo 2
          •	Superior a 40: obesidad mórbida
*/

// Definición de Variables.
let descripImc = "";
//
// Definición de funciones de cálculo
//

function calularImc() {
  let peso = document.getElementById("txtPeso").value;
  let altura = document.getElementById("txtAltura").value;
  let imc = peso / (altura * altura);
  if (!peso || !altura) {
    msj.innerHTML = `
        <div>
            <span>Ingrese los valores requeridos</span>
        </div>
        `;
  } else {
    if (peso <= 10 || peso >= 200) {
      msj.innerHTML = `
        <div>
            <span>Ingrese un peso valido</span>
        </div>
        `;
      return;
    }
    if (altura > 2.3) {
      msj.innerHTML = `
        <div>
            <span>Ingrese una altura menos a 2,30 ctms.</span>
        </div>
        `;
      return;
    }

    switch (true) {
      case imc < 18.5:
        descripImc = " tiene bajo de peso.";
        break;
      case imc >= 18.5 && imc <= 24.9:
        descripImc = " tiene IMC normal.";
        break;
      case imc >= 25 && imc <= 29.9:
        descripImc = " tiene indica sobrepeso.";
        break;
      case imc >= 30 && imc <= 34.9:
        descripImc = " tiene obesidad tipo 1.";
        break;
      case imc >= 35 && imc <= 39.9:
        descripImc = " tiene obesidad tipo 2.";
        break;
      default:
        descripImc = " tiene obesidad mórbida";
        break;
    }
    mostarDatos(imc);
  }
}

// Función para mostrar los resultado en pantalla

function mostarDatos(imc) {
  const msj = document.getElementById("msj");
  const msjSalud = document.getElementById("msjSalud");

  msj.innerHTML = `
        <div>
            <span>Su índice de masa corporal es ${imc.toFixed(2)}</span>
        </div>
        `;
  msjSalud.innerHTML = `
        <div>
            <span>Usted ${descripImc}</span>
        </div>
        `;
}






