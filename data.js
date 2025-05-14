const products = [
{ id: 1, name: "iPhone 14", price: 999, categoryId: 1 },
{ id: 2, name: "Samsung Galaxy S22", price: 899, categoryId: 1 },
{ id: 3, name: "MacBook Pro", price: 1999, categoryId: 2 }
];
const categories = [
{ id: 1, name: "Phones" },
{ id: 2, name: "Laptops" }
];
const users = [
{ id: 1, name: "Alice", email: "alice@example.com" },
{ id: 2, name: "Bob", email: "bob@example.com" }
];
const cart = [
{ userId: 1, items: [{ productId: 1, quantity: 2 }] },
{ userId: 2, items: [] }
];
module.exports = { products, categories, users, cart };