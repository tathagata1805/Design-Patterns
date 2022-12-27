class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

// WILL ONLY PRINT THE NAME WITH OTHER UNDEFINED
let user = new User("Bob");
console.log(user);

// WILL ONLY PRINT THE NAME AND AGE WITH OTHER UNDEFINED
let userWithAge = new User("Bob", { age: 10 });
console.log(userWithAge);

// WILL ONLY PRINT THE NAME, AGE AND PHONE WITH OTHER UNDEFINED
let userWithPhone = new User("Bob", { age: 20, phone: "1234567890" });
console.log(userWithPhone);

// WILL ONLY PRINT ALL THE REQUIRED PARAMETERS
let userWithAddress = new User("Bob", {
  age: 30,
  phone: "0987654321",
  addres: new Address(1, "Main St."),
});
console.log(userWithAddress);
