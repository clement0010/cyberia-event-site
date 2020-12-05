import { ref } from '@vue/composition-api';

function authComposition(root: any) {
  const isAuthenticated = ref(false);
  const role = ref('crewmate');
  const auth0_id = ref('');
  const authInstance = root.$auth;

  async function login() {
    root.$auth.loginWithRedirect({});
  }
  async function logout() {
    root.$auth.logout({
      returnTo: process.env.NODE_ENV === 'production' ? `${window.location.origin}/cyberia-event-site/` : `${window.location.origin}`,
    });
  }
  const watcher = setInterval(() => {
    if (!root.$auth.loading) {
      isAuthenticated.value = authInstance.isAuthenticated;
      role.value = authInstance.role;
      auth0_id.value = authInstance.user.sub;
      clearInterval(watcher);
    }
  }, 0);

  return {
    login,
    logout,
    role,
    isAuthenticated,
    auth0_id,
  };
}

export default authComposition;
