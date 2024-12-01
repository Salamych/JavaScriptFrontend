import { request, requestWithToken } from "./http";

export function all(){
	return request('/frontend-4-api/products.php');
}

export function setRating(id, mark){
		
}

export function getRating(id){
	return requestWithToken(`/frontend-4-api/ratings.php?id=${id}`);
}