import { getFingerPrint } from "./fingerPrint";
import {  request } from "./http";


let fingerP = await getFingerPrint();




export function login(login, password){
	return request('/frontend-7-api/auth/login.php', {
		method: 'POST',
		body: JSON.stringify({ login, password, "device": fingerP })
		
	});
}

export function refresh(){
	return request('/frontend-7-api/auth/refresh/refresh.php', {
		method: 'PUT',
		body: fingerP	
	});
}


