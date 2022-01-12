let boton = document.getElementById("convertir");
let cantidad = document.getElementById("cantidad");
let tipoMoneda = ["Dolar", "Peso Mexicano", "Peso Colombiano", "Euro", "Libra Esterlina", "Yen Japones"];
let fieldeset = document.getElementById('field')
resultado = document.getElementById('resultado')
equivalencia = document.getElementById('XD')
conversion = document.getElementById('conversion')
//Cortesía de "https://es.stackoverflow.com/questions/69836/cargar-un-array-en-select-javascript" para poder guiarme ⬇
function MyOnLoad() {
    cargarMonedaUno(tipoMoneda)
    cargarMonedaDos(tipoMoneda)
}


function cargarMonedaUno(moneditaDeUno) {
    moneditaDeUno.sort();
    addOptions("monedaUno", moneditaDeUno);
}

function cargarMonedaDos(moneditaDeDos) {

    moneditaDeDos.sort();
    addOptions("monedaDos", moneditaDeDos);
}

function addOptions(mod, moneditas) {
    var moneda = document.getElementById(mod);
    for (let i = 0; i < moneditas.length; i++) {
        var option = document.createElement("option");
        option.text = moneditas[i];
        moneda.add(option);
    }
}
//Hasta Acá ⬆
mostrar = function () {
    fieldeset.style = "display:block;"
}
ocultar = function () {
    fieldeset.style = "display:none;"
}
ocultar()

function calculo(input, modUno, modDos) {
    monedaUno = document.getElementById(modUno);
    monedaDos = document.getElementById(modDos);
    if (input > 0 && monedaUno.value != 1 && monedaDos.value != 1) {
        switch (monedaUno.value) {
            case "Dolar":
                switch (monedaDos.value) {
                    case "Dolar":
                        alert("elije otra moneda")
                        monedaDos.value = 1
                        ocultar()
                        break;
                    case "Euro":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.88).toFixed(2)}€`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `0.88 Euros`
                        break;
                    case "Libra Esterlina":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.74).toFixed(2)}£`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `0.74 Libras Esterlina`
                        break;
                    case "Peso Colombiano":
                        mostrar()
                        resultado.innerHTML = `${(input * 4050.04).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `4,050.04 Peso Colombiano`
                        break;
                    case "Peso Mexicano":
                        mostrar()
                        resultado.innerHTML = `${(input * 20.38).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `20.38 Peso Mexicano`
                        break;
                    case "Yen Japones":
                        mostrar()
                        resultado.innerHTML = `${(input * 115.46).toFixed(2)}¥`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `115.46 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "Euro":
                switch (monedaDos.value) {
                    case "Dolar":
                        mostrar()
                        resultado.innerHTML = `${(input * 1.13).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `1.13 Dólar Estadounidense`
                        break;
                    case "Euro":
                        alert("elije otra moneda")
                        monedaDos.value = 1
                        ocultar()
                        break;
                    case "Libra Esterlina":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.83).toFixed(2)}£`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `0.83 Libra Esterlina`
                        break;
                    case "Peso Colombiano":
                        mostrar()
                        resultado.innerHTML = `${(input * 4589.06).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `4,589.06 Peso Colombiano`
                        break;
                    case "Peso Mexicano":
                        mostrar()
                        resultado.innerHTML = `${(input * 23.08).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `23.08 Peso Mexicano`
                        break;
                    case "Yen Japones":
                        mostrar()
                        resultado.innerHTML = `${(input * 130.83).toFixed(2)}¥`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `130.83 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "Libra Esterlina":
                switch (monedaDos.value) {
                    case "Dolar":
                        mostrar()
                        resultado.innerHTML = `${(input * 1.36).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `1.36 Dólar Estadounidense`
                        break;
                    case "Euro":
                        mostrar()
                        resultado.innerHTML = `${(input * 1.20).toFixed(2)}€`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `1.13 Euro`
                        break;
                    case "Libra Esterlina":
                        alert("elije otra moneda")
                        monedaDos.value = 1
                        ocultar()
                        break;
                    case "Peso Colombiano":
                        mostrar()
                        resultado.innerHTML = `${(input * 5506.46).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `5,506.46 Peso Colombiano`
                        break;
                    case "Peso Mexicano":
                        mostrar()
                        resultado.innerHTML = `${(input * 27.69).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `27.69 Peso Mexicano`
                        break;
                    case "Yen Japones":
                        mostrar()
                        resultado.innerHTML = `${(input * 156.90).toFixed(2)}¥`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `156.90 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "Peso Colombiano":
                switch (monedaDos.value) {
                    case "Dolar":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00025).toFixed(2)}$`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `0.25 Dólar Estadounidense`
                        break;
                    case "Euro":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00022).toFixed(2)}€`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `0.22 Euro`
                        break;
                    case "Libra Esterlina":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00018).toFixed(2)}£`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `0.18 Libra Esterlina`
                        break;
                    case "Peso Colombiano":
                        alert("elije otra moneda")
                        monedaDos.value = 1
                        ocultar()
                        break;
                    case "Peso Mexicano":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00025).toFixed(2)}$`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `0.25 Peso Mexicano`
                        break;
                    case "Yen Japones":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.029).toFixed(2)}¥`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `28.52 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "Peso Mexicano":
                switch (monedaDos.value) {
                    case "Dolar":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.049).toFixed(2)}$`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `0.49 Dólar Estadounidense`
                        break;
                    case "Euro":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.043).toFixed(2)}€`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `0.43 Euro`
                        break;
                    case "Libra Esterlina":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.036).toFixed(2)}£`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `0.36 Libra Esterlina`
                        break;
                    case "Peso Colombiano":
                        mostrar()
                        resultado.innerHTML = `${(input * 198.87).toFixed(2)}$`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `1,998.70 Peso Colombiano`
                        break;
                    case "Peso Mexicano":
                        alert("elije otra moneda")
                        monedaDos.value = 1
                        ocultar()
                        break;
                    case "Yen Japones":
                        mostrar()
                        resultado.innerHTML = `${(input * 5.67).toFixed(2)}¥`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `56.65 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "Yen Japones":
                switch (monedaDos.value) {
                    case "Dolar":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.0087).toFixed(2)}$`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `0.87 Dólar Estadounidense`
                        break;
                    case "Euro":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.0076).toFixed(2)}€`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `0.76 Euro`
                        break;
                    case "Libra Esterlina":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.0064).toFixed(2)}£`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `0.64 Libra Esterlina`
                        break;
                    case "Peso Colombiano":
                        mostrar()
                        resultado.innerHTML = `${(input * 35.09).toFixed(2)}$`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `3,509.06 Peso Colombiano`
                        break;
                    case "Peso Mexicano":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.18).toFixed(2)}$`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `17.65 Peso Mexicano`
                        break;
                    case "Yen Japones":
                        alert("elije otra moneda")
                        monedaDos.value = 1
                        ocultar()
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            default:
                alert("Ha ocurrido un error");
                break;
        }
    }
    else {
        alert("Ingresa valores correctos")
        ocultar()
    }
}

boton.addEventListener('click', function () {
    calculo(cantidad.value, 'monedaUno', 'monedaDos');
    console.log(tipoMoneda)
})