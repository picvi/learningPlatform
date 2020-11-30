export class User {
  email: string;
  pass: string;
  name?: string;
  constructor(email: string, pass: string, name?: string) {
    this.email = email;
    this.pass = pass;
    this.name = name;
  }
}
