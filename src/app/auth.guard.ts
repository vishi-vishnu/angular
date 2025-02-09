import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // const user = localStorage.getItem('data');

  // if (user) {
  //   console.log(user, 'user');
  //   return false;
  // }
  return true;
};
