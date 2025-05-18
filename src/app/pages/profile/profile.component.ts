import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../services/user-service.service';
import { AuthService } from '../../services/authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatSnackBarModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: User = {
      name: '',
      email: '',
      password: ''
    };
  
    constructor(private userService: UserService, 
      private authService: AuthService,
      private router: Router) {}

    ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {
          console.error('Nem sikerült betölteni a felhasználót:', err);
        }
      });
    }
  }
  
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
    onSave() {
    const userId = localStorage.getItem('userId'); // vagy máshonnan jön
    if (!userId) return;

    this.userService.updateUser(userId, this.user).subscribe({
      next: () => {
        console.log('Felhasználó frissítve');
      },
      error: (err) => {
        console.error('Hiba történt:', err);
      }
    });
  }
  onDelete() {
  const userId = localStorage.getItem('userId'); // vagy ahogy elmented
  if (!userId) return;

  this.userService.deleteUser(userId).subscribe({
    next: () => {
      console.log('Felhasználó törölve');
      localStorage.removeItem('userId'); // kijelentkeztetés
      this.router.navigate(['/home']);
    },
    error: (err) => {
      console.error('Hiba történt:', err);
    }
  });
}
}
