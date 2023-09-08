class person{
    constructor(firstName,lastName,age,address,email,mobile){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.email = email;
        this.mobile = mobile;
    }
    getName(){
        console.log(`The name of the person is ${this.firstName} ${this.lastName}`);
    }
    getFullDetails(){
        console.log(`
        Name: ${this.firstName} ${this.lastName}
        Age: ${this.age}
        Address: ${this.address}
        Email: ${this.email}
        Mobile: ${this.mobile}
        `);
    }
}

const ravi = new person("Ravi","Kumar",25,"123,Anna nagar,Chennai","ravi7845@gmail.com","7845123145");
ravi.getName();
ravi.getFullDetails();