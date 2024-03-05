import { Component, OnInit, computed, signal } from '@angular/core';
import { UserType } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styles: ``,
})
export class UserInfoPageComponent implements OnInit {
  currentUser = signal<UserType | undefined>(undefined);
  userActive = signal(1);
  isUserExist = signal(true);
  fullName = computed(
    () => `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`
  );

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUser(this.userActive());
  }

  loadUser(id: number) {
    if (this.userActive() === 0) return;
    this.userActive.set(id);
    this.currentUser.set(undefined);

    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.isUserExist.set(true);
      },
      error: () => {
        this.isUserExist.set(false);
      },
    });
  }
}
