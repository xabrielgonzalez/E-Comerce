let Mycart = "https://japceibal.github.io/emercado-api/user_cart/25801.json"
let valor = document.getElementsByClassName("cantidad");
let subtotalInd = document.getElementsByClassName("subtotal");
let subtotalCart = document.getElementsByClassName("subtotalCart");
let totalCart = document.getElementsByClassName("totalCart");
let tbody = document.getElementById("table-body");
let resumen = document.getElementById("resumen");
let envios = document.getElementById("envios");
let calle = document.getElementById('usuario')
let esqui = document.getElementById("esqui")
let nume = document.getElementById("num")
let numbercard = document.getElementById("numbercard")
let numbercvv = document.getElementById("numbercvv")
let lastdate = document.getElementById("lastdate")
let banktran = document.getElementById("banktran")

let carrito = []
let total = 0


let hoy = new Date();


let mes = hoy.getMonth() + 1;
let anio = hoy.getFullYear()

let formatday = `${anio}-${mes}`

function methodcard() {
  if (cardpay.checked) {
    nume.disabled = false
    esqui.disabled = false
    calle.disabled = false
    banktran.disabled = true
    numbercard.disabled = false
    lastdate.disabled = false
    numbercvv.disabled = false
  }
}

function methodbank() {
  if (cardbank.checked) {
    nume.disabled = false
    esqui.disabled = false
    calle.disabled = false
    numbercard.disabled = true
    lastdate.disabled = true
    numbercvv.disabled = true
    banktran.disabled = false

  }
}



window.addEventListener('load', () => {
  const form = document.querySelector('#formulario')
  const calle = document.getElementById('usuario')
  const esqui = document.getElementById("esqui")
  const nume = document.getElementById("num")
  const numbercard = document.getElementById("numbercard")
  const numbercvv = document.getElementById("numbercvv")
  const lastdate = document.getElementById("lastdate")
  const banktran = document.getElementById("banktran")
  const cardpay = document.getElementById("cardpay")
  const cardbank = document.getElementById("cardbank")
  const choosemethod = document.getElementById("choosemethod")


  let hoy = new Date();


  let mes = hoy.getMonth() + 1;
  let anio = hoy.getFullYear()

  let formatday = `${anio}-${mes}`

  let alerta = document.getElementById("formcont")


  form.addEventListener('submit', (e) => {
    e.preventDefault()
    validaCampos()
  })
  const validaCampos = () => {

    const calleValor = calle.value.trim()
    const esquinaValor = esqui.value.trim()
    const numvalor = nume.value.trim()
    const ncard = numbercard.value.trim()
    const ncvv = numbercvv.value.trim()
    const ldate = lastdate.value.trim()
    const tbank = banktran.value.trim()

    const validaFalla = (input, msje) => {
      const formControl = input.parentElement
      const aviso = formControl.querySelector('p')
      aviso.innerHTML = msje

      formControl.className = 'formcontrolvalidation falla'
    }

    const validaOk = (input) => {
      const formControl = input.parentElement
      formControl.className = 'formcontrolvalidation ok'
    }


    if (!cardpay.checked && !cardbank.checked) {
      validaFalla(choosemethod, "Debe elegir un metodo de pago")

    } else if (!cardpay.checked && cardbank.checked && !tbank) {
      validaFalla(banktran, 'Campo vacio')


    } else if (!cardpay.checked && cardbank.checked && tbank.length < 10) {
      validaFalla(banktran, 'Debe ingresar una cuenta valida')
    } else {
      validaOk(banktran)
      validaOk(choosemethod)
    }

    if (!cardpay.checked && !cardbank.checked) {
      validaFalla(choosemethod, "Debe elegir un metodo de pago")

    } else if (cardpay.checked && !cardbank.checked && !ncard) {
      validaFalla(numbercard, 'Campo vacio')

    } else if (cardpay.checked && !cardbank.checked && ncard.length < 16) {
      validaFalla(numbercard, 'Debe ingresar una tarjeta valida')
    } else {
      validaOk(numbercard)
      validaOk(choosemethod)
    }

    if (!cardpay.checked && !cardbank.checked) {
      validaFalla(choosemethod, "Debe elegir un metodo de pago")

    } else if (cardpay.checked && !cardbank.checked && !ncvv) {
      validaFalla(numbercvv, 'Campo vacio')

    } else if (cardpay.checked && !cardbank.checked && ncvv.length < 3) {
      validaFalla(numbercvv, 'Debe ingresar un numero de seguridad valido')
    } else {

      validaOk(numbercvv)
      validaOk(choosemethod)
    }


    if (!cardpay.checked && !cardbank.checked) {
      validaFalla(choosemethod, "Debe elegir un metodo de pago")

    } else if (cardpay.checked && !cardbank.checked && !ldate) {
      validaFalla(lastdate, 'Campo vacio')

    } else if (cardpay.checked && !cardbank.checked && ldate <= formatday) {
      validaFalla(lastdate, 'Debe ingresar una fecha valida')

    } else {

      validaOk(lastdate)
      validaOk(choosemethod)
    }

    if (!calleValor) {

      validaFalla(calle, 'Campo vacío')

    }

    else if (calleValor.length < 5) {
      validaFalla(calle, 'calle no valida')
    }
    else {
      validaOk(calle)
    }

    if (!esquinaValor) {
      validaFalla(esqui, 'Campo vacío')
    } else if (esquinaValor.length < 5) {
      validaFalla(esqui, 'esquina no valida')
    }
    else {
      validaOk(esqui)
    }


    if (!numvalor) {
      validaFalla(nume, 'Campo vacío')
    } else if (numvalor.length < 3) {
      validaFalla(nume, 'numero de puerta no valido')
    } else {
      validaOk(nume)
    }


    if (calle.value == "" && esqui.value == "" && nume.value == "" && !cardpay.checked && !cardbank.checked) {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong> Aun tienes campos sin rellenar y debe seleccionar un metodo de pago.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`
    }
    else if (esquinaValor.length < 5 || calleValor.length < 5 || numvalor.length < 2 || !cardpay.checked && !cardbank.checked) {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong> Algunos campos no son validos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`

    } else if (cardpay.checked && numbercard.value == "" && numbercvv.value == "" && lastdate.value == "" && !cardbank.checked && banktran.value == "") {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>Debe Completar los campos de la tarjeta.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`

    } else if (cardpay.checked && numbercard.length < 16 || numbercvv.length < 3 || lastdate <= formatday && !cardbank.checked && banktran.value == "") {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>Algunos campos de la tarjeta no son validos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`

    } else if (cardpay.checked && numbercard.length < 16 && numbercvv.value == "" && lastdate.value == "" && !cardbank.checked && banktran.value == "") {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>Algunos campos de la tarjeta no son validos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`

    } else if (cardpay.checked && numbercard.length < 16 && numbercvv.length < 3 && lastdate.value == "" && !cardbank.checked && banktran.value == "") {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>Algunos campos de la tarjeta no son validos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`

    } else if (cardpay.checked && numbercard.value == "" && numbercvv.length < 3 && lastdate.value == "" && !cardbank.checked && banktran.value == "") {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>Algunos campos de la tarjeta no son validos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`

    } else if (cardpay.checked && numbercard.value == "" && numbercvv.length < 3 && lastdate <= formatday && !cardbank.checked && banktran.value == "") {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>Algunos campos de la tarjeta no son validos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`

    } else if (cardpay.checked && numbercard.length < 16 && numbercvv.value == "" && lastdate <= formatday && !cardbank.checked && banktran.value == "") {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>Algunos campos de la tarjeta no son validos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`

    } else if (cardpay.checked && numbercard.value == "" && numbercvv.value == "" && lastdate <= formatday && !cardbank.checked && banktran.value == "") {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>Algunos campos de la tarjeta no son validos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`


    } else if (!cardpay.checked && numbercard.value == "" && numbercvv.value == "" && lastdate.value == "" && cardbank.checked && banktran.value == "") {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>Debe Completar el campo de la transferencia bancaria.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`


    } else if (!cardpay.checked && numbercard.value == "" && numbercvv.value == "" && lastdate.value == "" && cardbank.checked && banktran.length < 10) {
      alerta.innerHTML = `  
      <div class="alert alert-danger alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="alert">
        <strong>Cuidado!</strong>El campo de la transferencia bancaria no es valido.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
      </div>`

    } else {
      alerta.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show alertaReset mt-2" style="position: static;" id="exito" role="alert">
      <strong>Compra realizada con éxito!</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    }

  }

})

function showcarrito() {

  for (let addcart of carrito) {
    tbody.innerHTML = ""

    let UnitCost = addcart.unitCost
    let Cant = addcart.count
    let subtotal = UnitCost * Cant

    total += subtotal
    tbody.innerHTML += `    
    <tr class="product-row">
    <td class="d-flex justify-content-center align-content-center"><a class ="remover text-danger"> <i class="fas fa-trash-alt"></i></a></td>
    <td><img src="${addcart.image}" class="img-fluid" width="70" alt="product"></td>
    <td>${addcart.name}</td>
    <td>
    <div class="form-group mb-0">
    <input type="number"  class="formcontrolvalidation cart-qty cantidad" name="cartQty1" id="cartQty1" min="1" max="20" value="${Cant}"  
    oninput="javascript: 
    if (this.value.length > this.maxLength) 
    this.value = this.value.slice(0, this.maxLength);"
    type = "number"
    maxlength = "2">
    </div>
    </td>
    <td>USD ${UnitCost}</td>
    <td class="text-right subtotal" id="inputsub">USD ${subtotal}</td>
</tr>   
    `
    resumen.innerHTML += `<tr>
  <td style="font-size:20px;">Subtotal :</td>
  <td style="font-size:20px;" class="subtotalCart">USD ${total}</td>
</tr>
<tr>
  <td style="font-size:20px;">Envio :</td>
  <td style="font-size:20px;" id="shipping"></td>
</tr>
<tr>
  <td class="font-18"><h4 style="font-weight:bold;">Total :</h4></td>
  <td class="font-18 "><h4 class="totalCart" style="font-weight:bold;"></h4></td>
</tr>
 `;
    envios.innerHTML = `<div class="mt-2">
<h4>Metodo de envio:</h4>
</div>
<div >
<input class="form-check-input" type="radio" name="inlineRadioOption" id="inlineRadio1" value="option1" checked>
<label class="form-check-label" for="inlineRadio1">  Premium 15% (2 a 5 días) </label>
</div>
<div>
<input class="form-check-input" type="radio" name="inlineRadioOption" id="inlineRadio2" value="option2">
<label class="form-check-label" for="inlineRadio2"> Express 7% (5 a 8 días) </label>
</div>
<div>
<input class="form-check-input" type="radio" name="inlineRadioOption" id="inlineRadio3" value="option3" >
<label class="form-check-label" for="inlineRadio3"> Estandar 5% (12 a 15 días)  </label>
</div>`


    let inputcantidad = document.getElementById("cartQty1")
    let metodoDeEnvio = document.getElementsByClassName("form-check-input");
    inputcantidad.addEventListener('input', function () {

      document.getElementById("inputsub").innerHTML = inputcantidad.value * UnitCost

      let shipping = document.getElementById("shipping");

      /**formato envio */

      if (metodoDeEnvio[0].checked) {
        totalCart[0].innerHTML = `USD ${(inputcantidad.value * UnitCost * 0.15) + inputcantidad.value * UnitCost}`;
        shipping.innerHTML = `USD ${inputcantidad.value * UnitCost * 0.15}`

      }

      else if (metodoDeEnvio[1].checked) {
        totalCart[0].innerHTML = `USD ${(inputcantidad.value * UnitCost * 0.07) + inputcantidad.value * UnitCost}`;
        shipping.innerHTML = `USD ${(inputcantidad.value * UnitCost * 0.07).toFixed()}`

      }

      else if (metodoDeEnvio[2].checked) {
        totalCart[0].innerHTML = `USD ${(inputcantidad.value * UnitCost * 0.05) + inputcantidad.value * UnitCost}`;
        shipping.innerHTML = `USD ${inputcantidad.value * UnitCost * 0.05}`

      }

    })

    totalCart[0].innerHTML = `USD ${(inputcantidad.value * UnitCost * 0.15) + inputcantidad.value * UnitCost}`;
    shipping.innerHTML = `USD ${inputcantidad.value * UnitCost * 0.15}`


    for (let i = 0; i < metodoDeEnvio.length; i++) {
      metodoDeEnvio[i].addEventListener("click", () => {
        if (i == 0) {
          totalCart[0].innerHTML = `USD ${(inputcantidad.value * UnitCost * 0.15) + inputcantidad.value * UnitCost}`;
          shipping.innerHTML = `USD ${inputcantidad.value * UnitCost * 0.15}`
        }
        else if (i == 1) {
          totalCart[0].innerHTML = `USD ${(inputcantidad.value * UnitCost * 0.07) + inputcantidad.value * UnitCost}`;
          shipping.innerHTML = `USD ${(inputcantidad.value * UnitCost * 0.07).toFixed()}`
        }
        else if (i == 2) {
          totalCart[0].innerHTML = `USD ${(inputcantidad.value * UnitCost * 0.05) + inputcantidad.value * UnitCost}`;
          shipping.innerHTML = `USD ${inputcantidad.value * UnitCost * 0.05}`
        }
      })
    }

    let row = document.getElementsByClassName("product-row");
    let acceptcart = document.getElementById("acceptcart")
    let methodP = document.getElementById("methodP")
    let botones = document.getElementsByClassName("remover");
    for (let i = 0; i < botones.length; i++) {
      botones[i].addEventListener("click", () => {
        row[i].style.display = "none";
        total = 0
        subtotal = 0
        subtotalCart[0].innerHTML = `USD ${0}`;
        totalCart[0].innerHTML = `USD ${0}`;
        shipping.innerHTML = `USD ${0}`
        metodoDeEnvio[0].disabled = true
        metodoDeEnvio[1].disabled = true
        metodoDeEnvio[2].disabled = true
        methodP.disabled = true
        acceptcart.disabled = true
      })
    }
  }

}

function cambiarvalue() {
  for (let addcart of carrito) {
    let array = [];
    array.push(addcart.unitCost * addcart.count)


    for (let i = 0; i < valor.length; i++) {

      let inputcantidad = document.getElementById("cartQty1")
      inputcantidad.addEventListener('input', function () {

        subtotalInd[i].innerHTML = `USD ${valor[i].value * addcart.unitCost}`;
        array[i] = valor[i].value * addcart.unitCost;


        let total = 0;
        for (let j = 0; j < valor.length; j++) {
          total += array[j];
        }
        subtotalCart[0].innerHTML = `USD ${total}`
      })
    }
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault()
  getJSONData(Mycart).then(function (resultObj) {
    if (resultObj.status === "ok") {
      carrito = resultObj.data.articles
      showcarrito()
      cambiarvalue()


    }

  })

})