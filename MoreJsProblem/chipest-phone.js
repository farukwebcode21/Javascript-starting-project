const phones =[
    {name:'samsung s31', price:15000, camera:10, storage:32},
    {name:'samsung s30', price:4000, camera:10, storage:8},
    {name:'samsung s32', price:10000, camera:10, storage:3},
    {name:'samsung A11', price:5000, camera:10, storage:16},
    {name:'samsung A51', price:35000, camera:10, storage:12},
    {name:'samsung ST01', price:50000, camera:10, storage:22}

];

let cheapest = phones[0];
for(const phone of phones){
    if (phone.price < cheapest.price) {
        cheapest = phone;
        
    }
}
console.log(cheapest);

let topPrice = phones[0];
for(const phone of phones){
    if (phone.price > topPrice.price) {
        topPrice = phone;
        
    }
}
console.log(topPrice);
