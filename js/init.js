const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`;
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
const CART_BUY_ITEMS_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";


let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}


let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();

      }else{
        
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}



  document.addEventListener("DOMContentLoaded", function () {
    if ((!localStorage.getItem("mai")) && !(window.location.href.endsWith("index.html"))) {
      window.location.href = "index.html"
    }
    else {
      
      let user = JSON.parse(localStorage.getItem("mai"));
      
      let html = document.createElement("a");
      html.innerHTML += `<div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav justify-content-between">
        <li class="nav-item dropdown">
        
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

          ${user.mail}
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="cart.html"><i class="fas fa-shopping-cart mr-2"></i> Ver mi carrito</a>          
            </li>
            <li><a class="dropdown-item" href="my-profile.html"> <i class="fas fa-user mr-2"></i> Mi perfil</a></li>
            <li> <a class="dropdown-item" id="logout" href="#"><i class="fas fa-sign-out-alt mr-2"></i> Cerrar sesión</a></li>
          </ul>
        </li>
      </ul>
    </div>`


      let navuser = document.getElementsByTagName("nav")[0];
      navuser.children[0].appendChild(html);
      html.style.color = 'white';
      document.getElementById('logout').addEventListener("click", function(){
        localStorage.removeItem("mai");
        window.location.replace("index.html");
      })
    }
  });



