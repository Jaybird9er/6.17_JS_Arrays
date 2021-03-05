// Put your solution here
function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];
    // divide even numbers into evenNums and vice versa
    for (let x = 0; x < numbers.length; x++) {
        if (numbers[x] % 2 == 0)
            evenNums.push(numbers[x]);
            else
            oddNums.push(numbers[x]);
        }
    // sort the two arrays and output the array values to the console
    evenNums.sort(function(a, b) {
        return a - b;
    });
    oddNums.sort(function(a, b) {
        return a - b;
    });

    console.log("Even numbers:");
    if (evenNums.length == 0)
        console.log("None");
    else {
        for (let num of evenNums)
        console.log(num);
    }
    console.log("Odd numbers:");
    if (oddNums.length == 0)
        console.log("None");
    else {
        for (let num of oddNums)
        console.log(num);
    }
}

let nums = [4, 2, 9, 1, 8];
divideArray(nums);