function add(numbers) {
    
    // if the input is empty return 0
    if (!numbers) return 0;

    // if the input is a single or multiple number return the number or sum of the numbers
    let delimiter = /,/;
    const numArray = numbers.split(delimiter).map(Number);

    return numArray.reduce((sum, num) => sum + num, 0);
 

}

module.exports = add;