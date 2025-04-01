import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
        greeting = 'World';
        firstName;
        lastName;
        baseURL = 'https://www.google.com';
        changeHandler(event) {
        this.greeting = event.target.value;
        }

        changeNameHandler(event) {
          const name =event.target.name;
          if (name === 'firstName') {
                this.firstName = event.target.value;
          } else {
                this.lastName = event.target.value;
          }
        }

        get getFullname() {
                return `${this.firstName} ${this.lastName}`.toUpperCase();
        }

        get isHellow() {
                return this.firstName === "hello"
        }
}