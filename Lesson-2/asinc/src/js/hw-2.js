let url = 'https://faceprog.ru/reactcourseapi/products/all.php';
let method = 'GET';
let body = null;
let token = localStorage.getItem('token')

// let xhr = new XMLHttpRequest();

// xhr.open(method, url);

// xhr.onreadystatechange = function(){
// 	if(xhr.readyState === 4){
// 		if(xhr.status === 200){
// 			console.log(xhr.responseText)
// 		}
// 		else{
// 			console.log('some error');
// 		}
// 	}
// }

// xhr.send(body);

sendRequest(url)
.then(data => {
	console.log(data);
	return JSON.parse(data);
})
.then(js => {
	let index = randomInteger(0, js.length-1);
	return js[index].id;
})
.then(id => {
	console.log(id);
	sendRequest("https://faceprog.ru/reactcourseapi/cart/load.php")
	.then(token => {
		return JSON.parse(token).token;
	})
	.then(tok => {
		console.log(id);
		sendRequest(`https://faceprog.ru/reactcourseapi/cart/add.php?id=${id}&token=${tok}`)
		.then(res => console.log(res))
	})
})
.catch()


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}






function sendRequest(url, method = 'GET', body = null){
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					resolve(xhr.responseText)
				}
				else{
					reject('some error');
				}
			}
		}
		 xhr.send(body);

	});
}


/*
function sendRequest(url, method = 'GET', body = null){
	return new Promise(() => {})
}
*/

// https://faceprog.ru/reactcourseapi/products/all.php
// rand id
// https://faceprog.ru/reactcourseapi/cart/load.php -> token
// https://faceprog.ru/reactcourseapi/cart/add.php?id=100&token=[token]