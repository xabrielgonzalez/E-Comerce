function imagesProduct(){
    let htmlContentToAppend = "";
    
                htmlContentToAppend += `
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="${product.images[0]}" width="100%"  class="img-thumbnail">
    </div>
    <div class="carousel-item">
    <img src="${product.images[1]}" width="100%"  class="img-thumbnail">
    </div>
    <div class="carousel-item">
    <img src="${product.images[2]}" width="100%"  class="img-thumbnail">
    </div>
    <div class="carousel-item">
    <img src="${product.images[3]}" width="100%"  class="img-thumbnail">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>` 
                
        document.getElementById("product-list-images").innerHTML = htmlContentToAppend;
    }


    


function productinfo(id){
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
}

 

function showProductInfo(){
    // Se extrae el nombre de la categoria almacenado dentro del objeto del JSON dependiendo del ID que esta almacene, siendo variable para todas las categorias existentes.    Se emplea el mismo formato de "Products" para presentar su nombre.
    document.getElementById("title-product").innerHTML = `
        <h2>${product.name}</h2>
        `;
    // Reutilización del código ya creado en "Products", esto se debe a que la visualización que se solicita es idéntica, sustituyendo en este caso las distintas categorias, por los distintos productos pertenecientes a la categoría solicitada.
    let htmlContentToAppend = "";
                htmlContentToAppend += `
                <div class="row" id="addprod">
                    <div class="col-8" id="product-info-container">
                    </div>
                    <div class="col-4">
                        <div class="col mt-3">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1 product-header">${product.name}</h4>
                                <small class="text-muted">${product.soldCount} vendidos</small>
                            </div>
                            <p class="mb-1">${product.description}</p>
                        </div>
                        <div class="row pe-2 pb-3">
                            <p class="product-price col">${product.currency} ${product.cost}</p>
                            
                    </div>  
                </div>
                <div class="row" id="product-list-images" >
                    
                </div>
                ` 
        document.getElementById("product-container").innerHTML = htmlContentToAppend;
             
     

}

function showRelatedProducts(){
   
    let htmlContentToAppend = "";
    for(let i = 0; i < product.relatedProducts.length; i++){
        let relatedProduct = product.relatedProducts[i];
                htmlContentToAppend += `
                <li class="cursor-active col-md-6 col-lg-4 p-4">
                <div class="row pb-4 pt-2 px-1 product-card" onclick="productinfo(${relatedProduct.id})">
                    <div class="col-">
                        <div>
                            <img id="main-image-product" src="${relatedProduct.image}" class="img-thumbnail">
                        </div>
                    </div>
                    <div class="col mt-3">
                        <div class="d-flex w-100 justify-content-between flex-column">
                            <h4 class="mb-1 product-header">${relatedProduct.name}</h4>
                            <a class="btn-productRelated mt-4"> Ver más</a>
                        </div>
                    </div>
                    </div>
                </div>
            </li>
                ` 
        
        document.getElementById("related-products").innerHTML = htmlContentToAppend;
    
    }
}

function obtenerEstrellasVacia(puntaje) {
    let estrellasVacias = "";
    for (let i = puntaje; i < 5; i++) {
        estrellasVacias += `<span class="fa fa-star"></span>`
    }
    return estrellasVacias;
}

function obtenerEstrellas(puntaje) {
    let estrellas = "";
    for (let i = 0; i < puntaje; i++) {
        estrellas += `<span class="fa fa-star checked"></span>`
    }
    return estrellas;
}


function showCommentsList(array) {
    let htmlComments = "";
    let html = "";
    for (let i = 0; i < array.length; i++) {
        let comment = array[i];

        htmlComments += `
        <div class="row">
            <div class="list-group-item list-group-item-action">
                <div class="text-center p-4"> 
                <div class="row text-center text-lg-left pt-2 "> 
                <h5 class="text-center">`+ `<i class="fas fa-user"></i>` + ` ` + comment.user + `</h> 
            </div>  
                    <div class="row text-center text-lg-left pt-6 "> 
                     <p id="commentScore">` + comment.score + `
                            <div class="stars-outer">` + obtenerEstrellas(comment.score) + obtenerEstrellasVacia(comment.score) + ` </div>
                        </p>
                    </div>  

                    <div class="row text-center text-lg-left pt-2 "> 
                        <p class="mb-1">` + comment.description + `</p>
                    </div>
                    <div class="d-flex w-100 justify-content-between  pt-2">
                        <h4 class="mb-1">`+ " " + `</h4>
                        <small class="float-right">`+ `<i class="fas fa-calendar-alt"></i>` + ` ` + comment.dateTime + `</small>
                    </div>
                </div>
            </div>  
    </div>`
    }
    html += `Comentarios (` + array.length + `) `;
    document.getElementById("comments").innerHTML = htmlComments;
    document.getElementById("cantidad").innerHTML = html;
}

var currentDate = new Date();
var dateTime = currentDate.getFullYear() + "-"
    + (currentDate.getMonth() + 1) + "-"
    + currentDate.getDate() + " "
    + currentDate.getHours() + ":"
    + currentDate.getMinutes() + ":"
    + currentDate.getSeconds();

//Agregar un nuevo comentario
document.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let comentario = {
        description: document.getElementById("coment").value,
        puntaje: document.querySelector('input[type=radio]:checked').value
    }
    let html = `
        <div class="row">
            <div class="list-group-item list-group-item-action">
                <div class="text-center p-4"> 
                <div class="row text-center text-lg-left pt-2 "> 
                <h5 class="text-center">`+ `<i class="fas fa-user"></i>` + ` ` + JSON.parse(localStorage.getItem("mai")).mail + `</h> 
            </div>  
                    <div class="row text-center text-lg-left pt-6 "> 
                        <p id="commentScore">` + comentario.puntaje + `
                            <div class="stars-outer">` + obtenerEstrellas(comentario.puntaje) + obtenerEstrellasVacia(comentario.puntaje) + ` </div>
                        </p>
                    </div>  
                    <div class="row text-center text-lg-left pt-2 "> 
                        <p class="mb-1">` + comentario.description + `</p>
                    </div>
                    <div class="d-flex w-100 justify-content-between  pt-2">
                        <h4 class="mb-1">`+ " " + `</h4>
                        <small class="float-right">`+ `<i class="fas fa-calendar-alt"></i>` + ` ` + dateTime + `</small>
                    </div>
                </div>
            </div>  
        </div>`
        
    document.getElementById("comments").innerHTML += html;
    document.getElementById("coment").value=""
    document.querySelector('input[type=radio]:checked').checked=false
    
}) 





document.addEventListener("DOMContentLoaded", function(){
    let id = localStorage.productID;
    if(id){
        getJSONData("https://japceibal.github.io/emercado-api/products/"+id+".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            product = resultObj.data;
            showProductInfo();
            showRelatedProducts();
            imagesProduct();
        }
    });
    }
    getJSONData("https://japceibal.github.io/emercado-api/products_comments/"+id+".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            showCommentsList(resultObj.data);
        }
    });
});


  