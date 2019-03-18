import { choice, remove } from './helpers';
import fruits  from './foods';


let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}, please.`)

let newFruitArr = remove(fruits, randomFruit);


console.log(`Here you go: ${randomFruit}`);

console.log('Delicious, May I have another?');



console.log(`I'm sorry, we're all out. We have ${newFruitArr.length} left fool! `)