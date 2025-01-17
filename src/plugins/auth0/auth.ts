import { VueConstructor } from 'vue';
import { VueAuth, Auth0Options, RedirectCallback } from './authWrapper';

type Auth0PluginOptions = {
  onRedirectCallback: RedirectCallback;
  domain: string;
  clientId: string;
  audience?: string;
  [key: string]: string | RedirectCallback | undefined;
}

/** Define a default action to perform after authentication */
const DEFAULT_REDIRECT_CALLBACK = (appState: any) => window.history.replaceState({}, document.title, window.location.pathname);

let instance: VueAuth;

/** Returns the current instance of the SDK */
export const getInstance = () => instance;

/** Creates an instance of the Auth0 SDK. If one has already been created, it returns that instance */
export const useAuth0 = ({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = process.env.NODE_ENV === 'production' ? `${window.location.origin}` : `${window.location.origin}/cyberia-event-site/`,
  ...options
}) => {
  if (instance) return instance;

  // The 'instance' is simply a Vue object
  instance = new VueAuth();
  instance.init(onRedirectCallback, redirectUri, options as Auth0Options);

  return instance;
};

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const Auth0Plugin = {
  install(Vue: VueConstructor, options: Auth0PluginOptions) {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    Vue.prototype.$auth = useAuth0(options);
  },
};
