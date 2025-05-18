import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService, User } from '../../services/user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatSnackBarModule, FormsModule]
})
export class SignupComponent {
  user: User = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(this.user).subscribe({
      next: (res) => {
        console.log('User created with ID:', res.id);
      },
      error: (err) => {
        console.error('Hiba történt:', err);
      }
    });
  }
}

