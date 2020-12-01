/* eslint-disable */
import { NavigationGuard } from 'vue-router';
import { getInstance } from './auth';

type Roles = 'admin' | 'crewmate'

export const authGuard: NavigationGuard = (to, from, next) => {
  const authService = getInstance();
  console.log(`To values == ${to.fullPath}`);
  console.log(`toName === ${to.name}`);
  console.log(`fromName === ${from.name}`);
  const fn = () => {
    // Unwatch loading
    clearInterval(watcher);
    const role = authService.role
    // If the user is authenticated, continue with the route
    if (authService.isAuthenticated) {
      if (!to.meta.requiresAuth) {
        return next();
      } else {
        if (to.meta.role === role) {
          return next();
        } else {
          return next({path:"/"})
        }
      }
    }

    // Otherwise, log in
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
    return next();
  };

  // If loading has already finished, check our auth state using `fn()`
  // if (!authService.loading) {
  //   return fn();
  // }
  
  // Need Optimisation =============================
  // Watch for the loading property to change before we check isAuthenticated
  const watcher = setInterval(() => {
    if (authService.loading === false) {
      return fn();
    }
  },0)
};
