import { VueAuth } from '@/plugins/auth0/authWrapper';

declare module 'vue/types/vue' {
  interface Vue {
    $auth: VueAuth;
  }
}
