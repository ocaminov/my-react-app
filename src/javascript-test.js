const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 2, name: "Mouse", price: 30, category: "Electronics" },
  { id: 3, name: "T-Shirt", price: 25, category: "Clothing" },
  { id: 4, name: "Monitor", price: 400, category: "Electronics" },
  { id: 5, name: "Jeans", price: 60, category: "Clothing" },
];

const user = {
  id: 1,
  name: "Oleyda",
  role: "Frontend Developer",
  country: "Cuba"
};

function getUserInfo({name, role, country}){
  
  return `${name} is a ${role} from ${country}`;
}

function addExperience(user){
  return {...user, experience: 5};
}

function updateRole(user){
  return {...user, role: "React Developer"};
}


function getExpensiveProducts(products){
 return products.filter(product => product.price >= 100);    

}

function getProductNames(products){
  let productsNames = [];
  products.map(product => productsNames.push(product.name));
  return productsNames;
}

function getAffordableProductNames(products){
  let productPrice = products.filter(product => product.price <= 100);
  let result = getProductNames(productPrice);
  return result;

}

function getExpensiveProductNames(products){
  let productPrice = products.filter(product => product.price > 100);
  let result = getProductNames(productPrice);
  return result;
}

function calculateTotal(products){
  return products.reduce((accumulator, currentValue) => {
    
    return accumulator += currentValue.price;

}, 0);

}

function calculateAveragePrice(products){
  let result = calculateTotal(products)/products.length;
  return result;
}

function getProductsByCategory(products, category){
  return products.filter(product => product.category === category);
}

function getAffordableElectronics(products){

  let productCategory = getProductsByCategory(products, "Electronics");
  return productCategory.filter(product => product.price <= 500);
}


console.log(getAffordableElectronics(products));

