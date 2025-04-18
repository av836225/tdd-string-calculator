function add(numbers) {
    
    // if the input is empty return 0
    if (!numbers) return 0;

    // if the input is a single or multiple number return the number or sum of the numbers
    let delimiter = /,|\n/;

    // if the input starts with // then the delimiter is the character after the //
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts.slice(1).join("\n");
    }

    const numArray = numbers.split(delimiter).map(Number);

    // if the input contains a negative number throw an error
    const negatives = numArray.filter(n => n < 0);



    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }


    return numArray.reduce((sum, num) => sum + num, 0);
 

}

module.exports = add;