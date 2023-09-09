import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Roles } from '@enteties';
import { UserService } from '@facades';
import { map } from 'rxjs';

export const BarkeeperGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);
  return userService.user$.pipe(map((user) => user?.role === Roles.barkeeper));
};
