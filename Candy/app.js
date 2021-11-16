var colorChocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver", "crimson",
    "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple", "purple",
    "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple", "red", "purple",
    "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson", "purple", "green",
    "pink", "green", "red", "silver", "crimson", "blue", "green", "red", "red", "pink", "blue", 
    "silver", "pink", "crimson", "purple", "green", "red", "blue", "red", "purple", "silver",
    "blue", "pink", "silver", "crimson", "silver", "blue", "purple", "purple", "green", "blue",
    "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

addChocolates = (chocolates, color, count) => {
    chocolates.reverse();
    for(let i = 0;i < count;i++){
        chocolates.push(color);
    }
    chocolates.reverse();
    return chocolates;
}
//console.log(addChocolates(colorChocolates, 'green', 3));

removeChocolates = (count, chocolates) => {
    chocolates.reverse();
    for(let i = 0;i < count;i++){
        chocolates.pop();
    }
    chocolates.reverse();
    return chocolates
}
//console.log(removeChocolates(3, colorChocolates));

dispenseChocolates = (count, chocolates) => {
    for(let i = 0;i < count;i++){
        chocolates.pop();
    }
    return chocolates
}
//console.log(dispenseChocolates(3, colorChocolates));

dispenseChocolatesOfColor = (chocolates, number, color) => {
    chocolates.reverse();
    let preferedChocolate = [];
    let j = 0;
    for(i = 0;i < chocolates.length;i++){
        if(chocolates[i] == color && count < number){
            preferedChocolate[j] = chocolates[i];
            j++;
        }
    }
    chocolates.reverse();
    return preferedChocolate;
}
//console.log(dispenseChocolatesOfColor(chocolates, 5 ,'blue'));

let Chocolates = [
    {'name' : 'green',
    'count' : 0},
    {'name' : 'silver',
    'count' : 0},
    {'name' : 'blue',
    'count' : 0},
    {'name' : 'crimson',
    'count' : 0},
    {'name' : 'purple',
    'count' : 0},
    {'name' : 'red',
    'count' : 0},
    {'name' : 'pink',
    'count' : 0}
];
noOfChocolates = (chocolates, chocolatesCount) => {
    for(let i = 0;i < chocolatesCount.length;i++){
        let count = chocolates.filter(ele => ele == chocolatesCount[i].name).length;
        chocolatesCount[i].count = count;
    }
    return chocolatesCount
}
// console.log(noOfChocolates(colorChocolates, Chocolates));

sortChocolateBasedOnCount = (chocolates) => {
    chocolates.sort(function(a, b){
        return a.count - b.count;
    })
    return chocolates
}
// console.log(sortChocolateBasedOnCount(Chocolates));

changeChocolateColor = (chocolates, number, color, finalColor)=>{
    let j = 0;
    for(let i = 0;i < number;i++){
        if(chocolates[i] == color && j < number){
            chocolates[i] = finalColor;
            j++;
        }
    }
    return chocolates;
}
// console.log(changeChocolateColor(colorChocolates, 3, 'red', 'green'));

let colorOfchocolates = ['green', 'red', 'pink', 'blue', 'silver', 'purple', 'crimson', ]

changeChocolateColorAllOfxCount = (chocolates, color, finalColor) => {
    let choco = changeChocolateColor(chocolates, chocolates.length, color, finalColor);
    let colorOfAChocolate = [
        {'name' : color,
        'count' : 0},
    ];
    let chocoCount = noOfChocolates(choco, colorOfAChocolate);
    console.log(choco);
    console.log(chocoCount);
    return [chocoCount[0].count, choco];
}
// console.log(changeChocolateColorAllOfxCount(colorChocolates, 'red', 'blue'));

removeChocolatesOfColor = (chocolates, color) => {
    for(let i = 0;i < chocolates.length;i++){
        if(chocolates[i] == color){
            chocolates.pop();
        }
    }
    return chocolates;
}
// console.log(removeChocolatesOfColor(colorChocolates, 'red'));