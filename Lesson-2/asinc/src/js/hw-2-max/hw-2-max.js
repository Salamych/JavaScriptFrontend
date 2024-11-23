import * as ArticlesModel from './articles';

ArticlesModel.all()
.then((articles) => {
	console.log('articles count = ' + articles.length);

	//берём случайный индекс
	let ind = Math.floor(Math.random() * articles.length);
	console.log('select index ' + ind + ', id = ' + articles[ind].id)
	return articles[ind].id;
})
.then((id) => {
	// получаем статью по id
	ArticlesModel.one(id)
	.then((article) => console.log(article))
	.catch(error => console.log(error + ' in articles one'))
	return id;
})
.then(id => { 
	// пробуем удалить её
	ArticlesModel.remove(id)
	.then((res) => console.log('что с удалением? - ' + res))
	.catch(error => console.log(error + ' in articles delete'))
})
.then(() => {
	// а сколько статей в базе сейчас
	ArticlesModel.all()
	.then(articles => console.log('articles count = ' + articles.length))
	.catch(error => console.log(error + ' in articles list after delete'))
})
.catch(error => console.log(error + ' in articles list'))

