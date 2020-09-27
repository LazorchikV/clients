export class Post {
    constructor(config) {
    this.id = config.id || uuid();
    this.date = config.date || new Date().getTime();
    this.firstName = config.firstName;
    this.lastName = config.lastName;
    this.gender = config.gender;  
      this.state = config.state
    }
   }