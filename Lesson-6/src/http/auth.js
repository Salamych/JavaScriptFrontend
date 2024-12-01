import {  request } from "./http";

export function check(){
	return request('/articles.php');
}

export function login(login, password){
	return request('/frontend-4-api/auth/login.php', {
		method: 'POST',
		body: JSON.stringify({ login, password })
	});
}


export function logout(id){
	return request(`/articles.php?id=${id}`);
}

// export function refreshToken(){
// 	return refresh('/frontend-4-api/auth/refresh/refresh.php');
// }