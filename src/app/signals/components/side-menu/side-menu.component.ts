import { Component, WritableSignal, signal } from '@angular/core';

type MenuItemType = {
  path: string;
  title: string;
};

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {
  // items: MenuItemType[] = [
  //   {
  //     title: 'Counter',
  //     path: '/signals/counter',
  //   },
  //   {
  //     title: 'User',
  //     path: '/signals/user',
  //   },
  //   {
  //     title: 'Mutaciones',
  //     path: '/signals/properties',
  //   },
  // ];

  items: WritableSignal<MenuItemType[]> = signal<MenuItemType[]>([
    {
      title: 'Counter',
      path: '/signals/counter',
    },
    {
      title: 'User',
      path: '/signals/user',
    },
    {
      title: 'Mutaciones',
      path: '/signals/properties',
    },
  ]);
}
