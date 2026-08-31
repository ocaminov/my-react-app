const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Keyboard", price: 80 },
  { id: 4, name: "Monitor", price: 400 },
];


function getExpensiveProducts(products){
 return products.filter(product => product.price >= 100);    

}

console.log(getExpensiveProducts(products));