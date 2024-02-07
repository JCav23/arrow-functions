let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l']

console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    for(let i of letters){
        arr.push(i);
    }
    
    return arr.sort().reverse()
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log(reverseSort);
console.log(mixedLetters);