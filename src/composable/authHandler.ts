import { ref } from '@vue/composition-api';

function authComposition(root: any) {
  const isAuthenticated = ref(false);
  const role = ref('crewmate');
  const authInstance = root.$auth;

  async function login() {
    root.$auth.loginWithRedirect({});
  }
  async function logout() {
    root.$auth.logout({
      returnTo: window.location.origin,
    });
  }
  const watcher = setInterval(() => {
    if (!root.$auth.loading) {
      isAuthenticated.value = authInstance.isAuthenticated;
      role.value = authInstance.role;
      clearInterval(watcher);
    }
  }, 500);

  return {
    login,
    logout,
    role,
    isAuthenticated,
  };
}

export default authComposition;
