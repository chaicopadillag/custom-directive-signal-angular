import {
  Component,
  OnDestroy,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { UserType } from '../../interfaces/user.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styles: ``,
})
export class PropertiesPageComponent implements OnDestroy {
  counter = signal(10);

  user: WritableSignal<UserType> = signal<UserType>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  userChangeEffect = effect(() => {
    console.log(`${this.user().email} ${this.counter()}`);
  });

  onFieldUpdate(field: string, value: string) {
    const keys = Object.keys(this.user());
    if (keys.includes(field)) {
      this.user.update((_user) => ({ ..._user, [field]: value }));
    }
  }

  increaseBy(value: number) {
    this.counter.update((val) => val + value);
  }

  ngOnDestroy(): void {
    this.userChangeEffect.destroy();
  }
}
