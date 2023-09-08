import { Component, OnDestroy, inject, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Subject } from 'rxjs';
import { UserService } from '@facades';
import { Role, Roles, User } from 'src/app/shared/enteties';
import { ButtonComponent } from '@components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy {
  private readonly _destroyed = new Subject<void>();
  private readonly _userService = inject(UserService);

  public readonly usernameControl = new FormControl<string>(isDevMode() ? "DEV" : "");
  public readonly roleControl = new FormControl<Role>(Roles.guest);
  public readonly roles = Roles;

  public readonly loginGroup: FormGroup;

  constructor() {
    this.usernameControl.addValidators(Validators.required);

    this.roleControl = new FormControl();
    this.roleControl.addValidators(Validators.required);

    this.loginGroup = new FormGroup([this.usernameControl, this.roleControl]);
  }
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  public login() {
    if (this.loginGroup.valid)
      this._userService.login({
        name: this.usernameControl.value,
        role: this.roleControl.value,
      } as User);
  }
}
