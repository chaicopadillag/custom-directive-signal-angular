import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserResponseType, UserType } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl: string = 'https://reqres.in/api';

  httpClient = inject(HttpClient);

  getUserById(id: number): Observable<UserType> {
    return this.httpClient
      .get<UserResponseType>(`${this.apiUrl}/users/${id}`)
      .pipe(map((res) => res.data));
  }
}
