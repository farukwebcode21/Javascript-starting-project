const products =[
    {name : 'samsung s3', price: 1200},
    {name :'asus laptop d34', price : 12000},
    {name : 'basundahra bining paper', Price: 100},
    {name : 'Lg Smart Phone', price: 10000},
    {name : 'Old Land Phone', price: 100},
    {name : 'apple smart watch', price: 18000},
]

function searchProducts(products, searchText){
    const matched=[];
    for(const product of products){
        // const name = product.name;
        if (product.name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products, 'Phone');
console.log(matched);