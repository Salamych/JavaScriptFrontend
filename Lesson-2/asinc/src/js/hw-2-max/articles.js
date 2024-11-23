import * as serverApi from './db';

function proccessResult(response){
	let info = JSON.parse(response);

	if(info.code !== 200){
		throw new Error(info);
	}

	return info.data;
}

function all(){
	return serverApi.all().then(proccessResult);
}


function one(id){
	return serverApi.get(id).then(proccessResult);
}


function remove(id){
	return serverApi.remove(id).then(proccessResult);
}


export {all, one, remove};