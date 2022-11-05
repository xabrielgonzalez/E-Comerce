const ORDER_ASC_BY_COST = "Mincost";
const ORDER_DESC_BY_COST = "Maxcost";
const ORDER_BY_PROD_REL = "Relevance";
let ListProduct = [];
let ProductName = null;
let productCriterial = undefined;
let minCost = undefined;
let maxCost = undefined;


function sortCategoriesProduct(CriteriaOrder, array){
    let result = [];
    if (CriteriaOrder === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (CriteriaOrder === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (CriteriaOrder === ORDER_BY_PROD_REL){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}


function productinfo(id){
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
}

function showProductsList(){
    document.getElementById("title-product").innerHTML = `
    <h2>Productos</h2>
    <p class="lead" >Verás aquí todos los artículos de la categoría ${ProductName}</p>
    
    `

    let htmlContentToAppend = "";
    for (let i= 0; i< ListProduct.length; i++){
        let product = ListProduct[i]
    
        if (((minCost == undefined) || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(product.cost) <= maxCost))){

        
        htmlContentToAppend += `
        <div onclick="productinfo(${product.id})" class="list-group cursor-active">
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                        <small class="text-muted">${product.soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${product.description}</p>
                </div>
            </div>
        </div>
        </div>
        `
            }
            
            document.getElementById("productlist").innerHTML = htmlContentToAppend;
    }

}

function sortAndShowProductsList(sortCriteria){
     productCriterial = sortCriteria;

    ListProduct = sortCategoriesProduct(productCriterial, ListProduct);

    showProductsList();
}

let arrayOriginal = ListProduct;
document.getElementById("searchBar").addEventListener("keyup", function () {
    filterSerch = document.getElementById("searchBar").value;

    if (filterSerch != undefined) {
        arrayOriginal = ListProduct;
        ListProduct = ListProduct.filter(function (elemento) {
            return elemento.name.toLowerCase().includes(filterSerch.toLowerCase()) || elemento.description.toLowerCase().includes(filterSerch.toLowerCase())

        })
    }
    showProductsList();

    ListProduct = arrayOriginal;
}) 

document.addEventListener("DOMContentLoaded", function(e){
    let id = localStorage.catID;
    if(id){
        getJSONData("https://japceibal.github.io/emercado-api/cats_products/"+id+".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            ListProduct = resultObj.data;
            ProductName = ListProduct.catName;
            ListProduct = ListProduct.products;
            showProductsList()
            
        }
    });
    }
    

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProductsList(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProductsList(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProductsList(ORDER_BY_PROD_REL);
    });
});
   
    document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCost = undefined;
    maxCost = undefined;

    showProductsList();
});


document.getElementById("rangeFilterCount").addEventListener("click", function(){
 minCost = document.getElementById("rangeFilterCountMin").value;
 maxCost = document.getElementById("rangeFilterCountMax").value;

    if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
        minCost = parseInt(minCost);
    }
    else{
        minCost = undefined;
    }

    if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
        maxCost = parseInt(maxCost);
    }
    else{
        maxCost = undefined;
    }

    showProductsList();
});