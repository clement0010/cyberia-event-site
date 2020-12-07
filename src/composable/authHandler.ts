import { ref } from '@vue/composition-api';

function authComposition(root: any) {
  const isAuthenticated = ref(false);
  const role = ref('crewmate');
  const auth0_id = ref('');
  const authInstance = root.$auth;

  async function login() {
    root.$auth.loginWithRedirect({
      redirect_uri: process.env.NODE_ENV === 'production' ? `${window.location.origin}/cyberia-event-site/` : 'http://localhost:8080/cyberia-event-site/',
    });
  }
  async function logout() {
    root.$auth.logout({
      returnTo: `${window.location.origin}/cyberia-event-site/`,
    });
  }
  const watcher = setInterval(() => {
    if (!root.$auth.loading) {
      isAuthenticated.value = authInstance.isAuthenticated;
      role.value = authInstance.role;
      auth0_id.value = authInstance.user.sub;
      clearInterval(watcher);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(watcher);
  }, 7500);

  return {
    login,
    logout,
    role,
    isAuthenticated,
    auth0_id,
  };
}

export default authComposition;
