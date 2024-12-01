

export class HttpError extends Error{
	constructor(message, status, text){
		super(message);
		this.status = status;
		this.text = text;
	}
} 

export async function requestWithToken(url, options = {}){
	if(options.headers === undefined){
		options.headers = {};
	}

	let token = localStorage.getItem('TOKEN');
	

	// what if token is null

	options.headers.Authorization = `Bearer ${token}`;


	try{
		return await request(url, options);
		
	}
	catch(e){

		if(e instanceof HttpError && e.status === 401){
			let refreshRes = await request('/frontend-4-api/auth/refresh/refresh.php');

			if(!refreshRes.res){
				throw e;
			}

			localStorage.setItem('TOKEN', refreshRes.accessToken);
			return await requestWithToken(url, options);
		}
		else {
			throw e;
		}
		/*
		if(e.status === 401){

			try {
				let rt = await refreshToken().then(data => {return data});
			
				if(rt.res){
					localStorage.setItem('TOKEN', rt.accessToken);
					return await requestWithToken(url, options);
				}
				else{
					throw new Error('refresh token is not true');
				}
	
			} 
			catch (errorRefresh) {
				console.log(errorRefresh);
				throw e;			
			}
		}
		*/
		
		}
	}
	 


export async function request(url, options = {}){
	if(options.headers === undefined){
		options.headers = {};
	}

	options.headers['Content-Type'] = 'application/json';

	try{
		const response = await fetch(url, options);

		if(response.status < 200 || response.status >= 400){
			throw new HttpError('Status exc', response.status, await response.text());
		}

		const data = await response.json();
		return data;
	}
	catch(e){
		console.dir(e);
		throw e;
	}
}


// export async function refresh(url, options = {}) {
// 	if(options.headers === undefined){
// 		options.headers = {};
// 	}

// 	let token = localStorage.getItem('TOKEN');

// 	options.headers.Authorization = `Bearer ${token}`;
// 	options.method = "PUT";
// 	return request(url, options);
// }