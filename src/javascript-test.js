const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Keyboard", price: 80 },
  { id: 4, name: "Monitor", price: 400 },
];


function getExpensiveProducts(products){
 return products.filter(product => product.price >= 100);    

}

function getProductNames(products){
  let productsNames = [];
  products.map(product => productsNames.push(product.name));
  return productsNames;
}

console.log(getExpensiveProducts(products));
console.log(getProductNames(products));