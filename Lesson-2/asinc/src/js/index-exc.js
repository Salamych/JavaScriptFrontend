const STORAGE_PROPABILITY = 1;
const CALC_PROPABILITY = 1;

function getItemsFromDB(onDone){
	if(Math.random() > STORAGE_PROPABILITY){

	}

	setTimeout(() => {
		onDone([
			{ id: 5, price: 1000 },
			{ id: 7, price: 2000 },
			{ id: 8, price: 4000 }
		]);
	}, 300);
	
}

function calcTotal(items, onDone){
	if(Math.random() > CALC_PROPABILITY){

	}

	const res = items.reduce((total, item) => {
		return total + item.price;
	}, 0);

	setTimeout(() => {
		onDone(res);
	}, 300);

}

function calcYearBalance(total, onDone){
	if(Math.random() > CALC_PROPABILITY){
		
	}
	setTimeout(() => {
		onDone(Math.floor(total * Math.random()));
	}, 300);
}

function main(){
	getItemsFromDB(items => {
		calcTotal(items, total =>{
			calcYearBalance(total, balance => {
				document.body.innerHTML = `Nice! ${balance}`;
			});
		});
	});
		// let items = getItemsFromDB();
		// let total = calcTotal(items);
		// let balance = calcYearBalance(total);
		// document.body.innerHTML = `Nice! ${balance}`;

	
	
}

class CustomError extends Error{};

main();