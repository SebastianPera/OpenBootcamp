export default class Contact {
  name = '';
  lastname = '';
  email = '';
  connected = false;
  constructor(name, email, connected) {
      this.name = name;
      this.email = email;
      this.connected = connected;
  }
}