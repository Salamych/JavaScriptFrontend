
export class RaitStar{
  constructor(){
    this.rating = document.querySelector('.product-raiting__list');
    console.log(this.rating)
    this.ratingItem = document.querySelectorAll('.product-raiting__item');
    console.log(this.ratingItem)

    this.rating.addEventListener('click', (e) => {
      let target = e.target;
      if(target.classList.contains('product-raiting__item')){
        this.removeClass(this.ratingItem,'current-active')
        target.classList.add('active','current-active');
      }
    })

    this.rating.addEventListener('mouseover', (e) =>{
      let target = e.target;
      if(target.classList.contains('product-raiting__item')){
        this.removeClass(this.ratingItem,'active')
        target.classList.add('active');
        this.mouseOverActiveClass(this.ratingItem)
      }
    })

    this.rating.addEventListener('mouseout', () => {
      this.addClass(this.ratingItem,'active');
      this.mouseOutActiveClas(this.ratingItem);
    })
  }

  removeClass(arr) {
    for(let i = 0, iLen = arr.length; i <iLen; i ++) {
      for(let j = 1; j < arguments.length; j ++) {
        this.ratingItem[i].classList.remove(arguments[j]);
      }
    }
  }

  addClass(arr) {
    for(let i = 0, iLen = arr.length; i <iLen; i ++) {
      for(let j = 1; j < arguments.length; j ++) {
        this.ratingItem[i].classList.add(arguments[j]);
      }
    }
  }

  mouseOverActiveClass(arr){
    for(let i = 0, iLen = arr.length; i < iLen; i++) {
      if(arr[i].classList.contains('active')){
        break;
      }else {
        arr[i].classList.add('active');
      }
    }
  }
  mouseOutActiveClas(arr){
    for(let i = arr.length-1; i >=1; i--) {
      if(arr[i].classList.contains('current-active')){
        break;
      }else {
        arr[i].classList.remove('active');
      }
    }
  }
}