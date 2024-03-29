import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { UserService } from './services/user.service';
import { SignalsRoutingModule } from './signals-routing.module';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent,
  ],
  imports: [CommonModule, HttpClientModule, SignalsRoutingModule],
  providers: [UserService],
})
export class SignalsModule {}
