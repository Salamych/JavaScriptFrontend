import { login} from "../http/auth"; 
import { getRating } from "../http/products";




window.addEventListener('load', async function(){
  let app = document.querySelector('#app');
  let divBtn = document.createElement("div");

// ------Html
  divBtn.innerHTML = `
    <div class="registry">
      <button class="btn">Get rating</button>
    </div>
  `;

  app.appendChild(divBtn);
//-----Html
  const token = await login('some', 'qwerty!q').then(data => {return data});
  console.log(token); 
  
  localStorage.setItem('TOKEN', token);

  let raiting = await getRating(100);



  document.querySelector('.btn').addEventListener('click', function(){
    console.log(raiting);
  })

// let refreshTo = await refreshToken().then(data => {return data});
// console.log(refreshTo);
  
});


