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
    const name=window.location.search.split("?name=");
    let messageHtml=`
    <h2>¡Bienvenid@!</h2>
    <h3>${name[1]}</h3>`;
    const message=document.getElementById('welcome message');
    const productWrapper=document.getElementById('product-card');
    products.forEach(products=> {
        const id= products._id;
        productsHtml+=`
        <a class="products-info" href="../html/product-card.html?id=${id.$oid}">
            <div class="card" id="card">
                <img src="../${products.img}" alt="tarjeta">
                <div class="card-text" id="card-text">
                    <h3>${products.name}</h3>
                    <p>${products.description}</p>
                </div>
            </div>
        </a>`
    });
    message.innerHTML=messageHtml;
    productWrapper.innerHTML=productsHtml;
    }

init();