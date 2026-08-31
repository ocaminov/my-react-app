const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Keyboard", price: 80 },
  { id: 4, name: "Monitor", price: 400 },
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


console.log(user);
console.log(updateRole(user));

