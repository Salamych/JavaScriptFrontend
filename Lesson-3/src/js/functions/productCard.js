import { ProductServices } from "./ProductService";
let services = new ProductServices();
  
async function productCard(arr){
  let rawProd = '';
  for(const el of arr){
    // let arrRaits = await services.getRaiting(el.id);
    // let rait = arrRaits.average.toFixed(1);
    
    rawProd += 
    `<li class="product-item" id="${el.id}">
    <div class="product-img">Img</div>
    <div class="product-title">${el.title}</div>
    <div class="product-price">Price: ${el.price} y.e.</div>
    <div class="product-rest">Rest: ${el.rest}</div>
    <div class="product-raiting">
      <div class="product-raiting__count"> Raiting: getRaiting </div> 

      <div class="product-raiting__list">
        <div class="product-raiting__item" data-rate="1">1</div> 
        <div class="product-raiting__item" data-rate="2">2</div> 
        <div class="product-raiting__item" data-rate="3">3</div> 
        <div class="product-raiting__item" data-rate="4">4</div> 
        <div class="product-raiting__item" data-rate="5">5</div> 
      </div> 
      
      <div class="product-raiting__btn-like">Like</div> 
    </div>
    </li>`;
  };
  return rawProd;
}
  
export async function productHtml(el, arr){
  let rawProd = await productCard(arr);
  return el.innerHTML = 
  `<div class="products">
    <div class="container">
      <ul class="product-list">${rawProd}</ul>
    </div>
  </div>
  `;
}