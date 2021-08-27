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

const prepardDelivery = deliveryCost(100);
console.log(prepardDelivery);
