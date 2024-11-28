export function formReg(el){
  return el.innerHTML = `
    <div class="registry">
      <div class="container">
        <form class="form">
          <div>
            <label for="name">Введите имя</label> 
            <input type="text" id="name">
          </div>
          <br>
          <div>
            <label for="pass">Введите пароль</label> 
            <input type="password" id="pass">
          </div>
          <br>
          <input type="submit" value="Отправить">
        </form>
      </div>
    </div>
  `;
}
