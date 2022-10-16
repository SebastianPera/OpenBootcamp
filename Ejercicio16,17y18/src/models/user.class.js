import { ROLES } from './roles.enum';

export class User{
  username = '';
  email = '';
  password = '';
  role = ROLES.USER;
  conected = false

  constructor(username, email, password, role, conected){
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.conected = conected
  }
 
}