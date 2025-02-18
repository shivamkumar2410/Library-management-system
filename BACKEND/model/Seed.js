const Book = require("./Book");
const User = require("./User");

const seedDatabase = async () => {
  try {
    // Add initial books
    const books = [
      { title: "Book 1", Quantity: 10, Issued: 0 },
      { title: "Book 2", Quantity: 5, Issued: 0 },
      // Add more books as needed
    ];
    await Book.insertMany(books);

    // Add initial users
    const users = [
      { name: "User 1", cart: [] },
      { name: "User 2", cart: [] },
      // Add more users as needed
    ];
    await User.insertMany(users);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

module.exports = { seedDatabase };
