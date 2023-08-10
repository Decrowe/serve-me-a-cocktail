import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserService } from "@facades";
import { map } from "rxjs";

export const LoggedInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);
  return userService.user$.pipe(map((user)=> !!user))
};