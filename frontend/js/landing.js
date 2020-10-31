function init(){
    getProducts();
}
function getProducts(){
    fetch('http://localhost:5000/products',{method:'GET'})
    .then(response=>response.json())
    .then(products=>renderProduct(products))
}
function renderProduct(products){
    let productsHtml=``;
    const productWrapper=document.getElementById('product-card');
    products.forEach(products=> {
        productsHtml+=`
        <a class="products-info" href="">
            <img src="${products.img}" alt="tarjeta">
            <aside class="text-right">
                <h3>${products.name}</h3>
                <p>${products.description}</p>
            </aside>
        </a>`
    });
    productWrapper.innerHTML=productsHtml;
    }

init();