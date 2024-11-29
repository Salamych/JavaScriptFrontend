
function getWords(baseStr) {
  const str = baseStr.trim() + ' ';

  return {
    [Symbol.iterator](){
      let start = 0;
      let end = str.indexOf(' ', start);
      return {
        next(){
          if(end === -1){
            return {done: true};
          }
          else {
            const word = str.substring(start, end);
            start = end + 1;
            end = str.indexOf(' ', start);
            return {done: false, value: word};
          }
        }
      }
    }
  }
}


const words = getWords(' From to do do ');
let i = 0;
for(const word of words){
  console.log(i++)
  console.log(word);
}












// function getWords(str) {
//   str = str.trim();
//   let currentIndex = 0;
//   return {
//     next: function () {  

//       let nextIndex = str.indexOf(' ', currentIndex); 

//       if(nextIndex == -1){
//         const result = { value: str.substring(currentIndex), done: true };
//         currentIndex = str.length;
//         return result;
//       }
//       if (currentIndex < str.length) {
//         const result = { value: str.substring(currentIndex, nextIndex), done: false };
//         currentIndex = nextIndex + 1;
//         return result;
//       } 
//     }
//   }
// }

// let iterator = false;
// let words= getWords(' From to do do ');

// while(!iterator){
//   iterator = words.next();
//   console.log(iterator.value);
//   iterator = iterator.done;
// }

/*
function makeIterator(array) {
  let nextIndex = 0

  return {
    next: function () {
      if (nextIndex < array.length) {
        const result = { value: array[nextIndex], done: false }
        nextIndex++
        return result
      } else {
        return { done: true }
      }
    }
  }
}

let iterator = makeIterator(['Hello', 'world'])
console.log(iterator.next().value)
// 'Hello'
console.log(iterator.next().value)
// 'world'
console.log(iterator.next().done)
// true
*/