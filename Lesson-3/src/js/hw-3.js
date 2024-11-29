import { productHtml } from './functions/productCard';
import {formReg} from './functions/formReg';
import { ProductServices } from './functions/ProductService';




window.addEventListener('load', async function(){
  let app = document.querySelector('#app');
  let divForm = document.createElement("div");
  let divProductsList = document.createElement("div");
  let services = new ProductServices();
  let token = localStorage.getItem('token');
  let id;
  let mark;

  //Get products
  let products = await services.getProducts().then(data => {return data});
  
  console.log(products);

  //Add Html
  await productHtml(divProductsList, products);

  formReg(divForm);
   
  
  app.appendChild(divForm);
  app.appendChild(divProductsList);


//Authorisation

  let name = document.querySelector('#name');
  let pass = document.querySelector('#pass');

  let form = document.querySelector('.form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isAuthGetRes = await services.isAuth(token).then(res => {return res});
    if(!isAuthGetRes){
      let log = name.value;
      let pswd = pass.value;

      let res = await services.getToken(log, pswd).then(data => {return data});
      localStorage.setItem('token', res);
      token = localStorage.getItem('token');
      console.log(token);
    }
    

    console.log(isAuthGetRes.auth);
      if(isAuthGetRes.auth){
        console.log('To-do');
      }

  });


//Raiting send

  let productItems = document.querySelector('.product-list');
  console.log(productItems);

  productItems.addEventListener('click', async (e) => {

    console.log(token);
    if (e.target.classList.contains('product-raiting__item')){
      id = parseInt(e.target.parentElement.parentElement.parentElement.id);
      mark = parseInt(e.target.dataset.rate); 
    }

    if(e.target.classList.contains('product-raiting__btn-like')){
      let currentId = parseInt(e.target.parentElement.parentElement.id);
      if(id !== currentId){
        console.log( 'Вы не выбрали значение рейтинга');
      }
      else{
        await services.setRaiting(id, mark, token).then(console.log);
        await services.getRaiting(id).then(data => console.log(data.your));

      }
    }

    if(e.target.classList.contains('product-raiting__count')){
      id = parseInt(e.target.parentElement.parentElement.id);
      await services.getRaiting(id, token).then(console.log);
    }
  })


  
});











