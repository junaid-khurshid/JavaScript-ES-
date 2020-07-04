// The rest parameter, also written with three consecutive dots ( ... ), 
// allows you to represent an indefinite number of elements as an array. 
// This can be helpful in a couple of different situations.

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

//Prints: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

function average(...nums) {
    let total = 0;
    for(const num of nums){
        total += num;
    }
    if(total == 0)
    {
        return 0;
    }
    return total/nums.length;
    
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());