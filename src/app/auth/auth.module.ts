import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  }
]

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule ]
})
export class AuthModule {}
