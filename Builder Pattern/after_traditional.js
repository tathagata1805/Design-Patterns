class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(addres) {
    this.user.addres = addres;
    return this;
  }

  build() {
    return this.user;
  }
}

// ONLY THE NAME FIELD WILL BE SET
let user = new UserBuilder("Bob").build();

// THE NAME AND THEE AGE WILL BE CHAINED TOGETHER
let userWithAge = new UserBuilder("Bob").setAge(10).build();

// THE PHONE WILL BE CHAINED TOGETHER WITH NAME AND AGE
let userWithPhone = new UserBuilder("Bob")
  .setAge(10)
  .setPhone("1234567890")
  .build();

// THE ADDRESS WILL BE CHAINED TOGETHER WITH ALL OTHER FIELDS
let userWithAddress = new UserBuilder("Bob")
  .setAge(10)
  .setPhone("1234567890")
  .setAddress("Main St")
  .build();

console.log(user);
