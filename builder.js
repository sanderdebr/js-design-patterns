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

  build() {
    return this.user;
  }
}

let user = new UserBuilder("Bob").setAge(10).build();
console.log(user);
