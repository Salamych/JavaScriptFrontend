export class ProductServices{
  _apiBase = 'https://wp.dmitrylavrik.ru/frontend-4-api';

  async getResource(
                    url, 
                    method = 'GET',
                    headers = { "Content-Type": "application/json"},
                    body = null
                  ){
    let res = await  fetch(`${this._apiBase}${url}`, 
    {
     method: method,
     headers: headers,
     body: body 
    });

    if(!res.ok){
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  getToken(log, pass){
    let body = JSON.stringify({"login": log, "password": pass });
    let headers = { "Content-Type": "application/json"}

    return this.getResource("/auth/login.php", 'POST', headers, body);
  }

  isAuth(token){
    let headers = {
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}`
    };

    return this.getResource("/auth/check.php", 'GET', headers);    
  }

    
  getProducts(){
    return this.getResource(`/products.php`);
  }

  // getRaiting(id){
  //   return this.getResource(`/ratings.php?id=${id}`);
  // }
  getRaiting(id, token){
    let headers = {
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}`
    };
    
    return this.getResource(`/ratings.php?id=${id}`, "GET",headers);
  }

  setRaiting(id, mark, token){
    let headers = {
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}`
    };
    let body = JSON.stringify({"id": id, "mark": mark });

    return this.getResource('/ratings.php', 'PUT', headers, body);
  }
}

