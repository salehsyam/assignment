//! task 4 ts
interface Product {
  name: string;
  price: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

const productList: Product[] = [
  { name: "Book", price: 15 },
  { name: "Notebook", price: 8 },
];

const totalPrice = calculateTotalPrice(productList);
console.log("Total Price:", totalPrice);

//! task 5
function isValidEmail(email: string): boolean {
  // Regular expression for validating email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Example usage
console.log(isValidEmail("test@example.com"));
console.log(isValidEmail("test@example"));



// how to run ts file 
// 1 install  node.hs
//2 install npm install -g typescript
//3  Compile the TypeScript File -- tsc product.ts
// 4 Run the Compiled JavaScript File ---- node product.js