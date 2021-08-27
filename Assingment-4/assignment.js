// ===========>>>>>>>>>>seerToMon<<<<<<<<<<<<============= 

 function seerToMon(kg){
    const mon = kg/40;
    return mon;
} 

// let toal = 1000;
// console.log(seerToMon(toal)); 

// ========>>>>>>>>>>>totalSales<<<<<<<<<<=============

 function totalSales(shirt, pant, shoe){
   return sum = (shirt * 100)+ (pant * 200) +(shoe * 500);
}
 
// let todaySale =totalSales(30, 20, 10);
// console.log(todaySale); 

// ========>>>>>>>>>>>deliveryCost<<<<<<<<<<=============

 function deliveryCost(quantity){
    const lowQuantityTshirtDelivery = 100;
    const mediumQuantityTshirtDelivery = 80;
    const highQuantityTshirtDelivery = 50;

    if (quantity <= 100) {
        const totalDeliveryCost = quantity * lowQuantityTshirtDelivery;
        return totalDeliveryCost;
    }else if (quantity <= 200) {
        const firstDeliveryCost = 100 * lowQuantityTshirtDelivery;
        const actualDeliveryCost = quantity - 100;
        const secondDeliveryCost = actualDeliveryCost * mediumQuantityTshirtDelivery;
        const totalDeliveryCost = firstDeliveryCost + secondDeliveryCost;
        return totalDeliveryCost;   
    }else{
        const firstDeliveryCost = 100 * lowQuantityTshirtDelivery;
        const secondDeliveryCost = 100 * mediumQuantityTshirtDelivery;
        const actualDeliveryCost = quantity -200;
        const thiredDeliveryCost = actualDeliveryCost * highQuantityTshirtDelivery;
        const totalDeliveryCost = firstDeliveryCost + secondDeliveryCost + thiredDeliveryCost;
        return totalDeliveryCost;
    }
} 

// const prepardDelivery = deliveryCost(300);
// console.log(prepardDelivery); 

// ========>>>>>>>>>>>perfectFriend<<<<<<<<<<=============

const names = ['Fa', 'karm', 'Karim', 'Shago', 'Marufkhan']

function perfectFriend(names){
    for(let i = 0; i<names.length; i++){
        const element = names[i];
        if (element.length == 5) {
            return element; 
        }
        // return element;
    }
}

const bestFriend = perfectFriend(names);
console.log(bestFriend);



