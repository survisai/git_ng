import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Masters } from '../masters';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private masterService: Masters) {}
username: string = '';
  password: string = '';

  async onSubmit() {
    // Handle login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    alert('hello')
    let res = await this.masterService.postData({username: this.username, password: this.password})
  }
}
