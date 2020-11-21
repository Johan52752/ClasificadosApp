function init(){
    getProducts();
}
function getProducts(){
    const id=window.location.search.split("?id=");
    fetch('http://localhost:5000/product/'+id[1],{method:'GET'})
    .then(res=>res.json())
    .then(response=>renderProduct(response))
}
function renderProduct(product){
    const product_card=document.getElementById('product-card')
    const button=document.getElementById('button')
    const producthtml=`<div id="tittle-product" class="tittle-product">
                            <h2>Nombre del producto o servicio</h2>
                        </div>
                        <div id="image-product" class="image-product">
                            <img src="../${product.img}" alt="">
                        </div>
                        <div class="description-product" id="description-product">
                            <p>${product.description}</p>
                        </div>
                        <div class="direccion-product" id="direccion-product">
                            <div class="ubication-product-img" id="ubication-product-img">
                                <img src="../images/ubication.svg" alt="">
                            </div>
                            <div class="ubication-description" id="ubication-description">
                                <p>${product.direccion}</p>
                            </div>
                        </div>
                        <div class="numberphone-product" id="numberphone-product">
                            <div class="cel-product-img" id="cel-product-img">
                                <img src="../images/cel.svg" alt="">
                            </div>
                            <div class="cel-description" id="cel-description">
                                <p>${product.number}</p>
                            </div>
                        </div>
                        <div class="email-product" id="email-product">
                            <div class="email-product-img" id="email-product-img">
                                <img src="../images/email.svg" alt="">
                            </div>
                            <div class="email-description" id="email-description">
                                <p>${product.email}</p>
                            </div>
                        </div>
                        <div class="fb-product" id="fb-product">
                            <div class="fb-product-img" id="fb-product-img">
                                <img src="../images/social.svg" alt="">
                            </div>
                            <div class="fb-description" id="fb-description">
                                <p>${product.social}</p>
                            </div>
                        </div>`
    product_card.innerHTML=producthtml
    const link="https://wa.me/57"+product.number;
    button.addEventListener("click", ()=>{
        window.location.assign(link)
    })
}

init()