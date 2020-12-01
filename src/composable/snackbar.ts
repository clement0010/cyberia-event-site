import { ref } from '@vue/composition-api';

function snackBarComposition() {
  const timeout = 3000;
  const snackbar = ref(false);
  const message = ref('');
  function snackbarHandler(text: string) {
    if (!snackbar.value) {
      message.value = text;
      snackbar.value = true;
      setTimeout(() => {
        snackbar.value = false;
      }, timeout);
    }
  }

  return {
    timeout,
    snackbar,
    message,
    snackbarHandler,
  };
}

export default snackBarComposition;
