// export const matchLettersCount = (guessed, secretword) => {
// const guessedArr = [].slice.call(guessed);
// const secretworddArr = [].slice.call(secretword);
// return guessedArr.reduce((acc, letter) => {
//     secretworddArr.indexOf(letter) > -1 && acc.indexOf(letter) === -1 ? acc.push(letter) : null;
//     return acc;
// }, []).length;
// }



export const matchLettersCount = (guessed, secretword) => { 
    const guessedSet = new Set(guessed.split(''))
    const secretwordSet = new Set(secretword.split(''))

    return [...secretwordSet].filter(letter => guessedSet.has(letter)).length;

}

// export const matchLettersCount = (guessed, secretword) => { 
//     const guessedArr = [].slice.call(guessed);
//      const secretworddArr = [].slice.call(secretword);

//     return secretworddArr.filter(letter => guessedArr.has(letter)).length;

// }