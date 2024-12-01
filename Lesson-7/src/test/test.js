import { login, refresh} from "../http/auth"; 

let token = null;

async function doTest() {
  let refreshTok = await refreshTest().then(data => {return data});
  console.log(token);

  if(!refreshTok.res && token=== null){
    token = await loginTest();
  }
  else{
    console.log(2)
    token = refreshTok.accessToken;
  }

  let app = document.querySelector('#app');
  let divBtn = document.createElement("div");
  let divBtnAcc = document.createElement("div");


// ------Html
  divBtn.innerHTML = `
    <div class="registry">
      <button class="btn">Get refresh token</button>
    </div>
    <br>
    <br>
  `;
  divBtnAcc.innerHTML = `
    <div class="registry">
      <button class="btn-acc">Get access token now</button>
    </div>
  `;
  app.appendChild(divBtn);
  app.appendChild(divBtnAcc);

  document.querySelector('.btn').addEventListener('click', async function(){
    console.log(token);   
  })

  document.querySelector('.btn-acc').addEventListener('click', async function(){
    console.log(token);   
  })

}
doTest();

async function loginTest() {
  return await login('manager', 'qwerty!q').then(data => {return data});

}

async function refreshTest() {
  return await refresh().then(data => {return data});
}