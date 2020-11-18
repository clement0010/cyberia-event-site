<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          large
          v-bind="attrs"
          v-on="on"
        >
          Add Submission
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Submission</span>
        </v-card-title>
        <v-card-text>
          <v-file-input
            placeholder="Upload file"
            name="imageFileSubmission"
            show-size
            accept="image/*"
            @change="selectFile"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            type="submit"
            color="primary"
            @click="upload"
          >
            Submit
          </v-btn>
          <SnackBar
            :text="message"
            :timeout="timeout"
            :snackbar="snackbar"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import SnackBar from '@/components/atoms/Snackbars.vue';
import uploadService from '@/services/fileSystem';

export default defineComponent({
  name: 'ContestSubmissionForm',

  components: {
    SnackBar,
  },

  setup() {
    const dialog = ref(false);

    const timeout = 2000;
    const snackbar = ref(false);
    const message = ref('');
    function snackbarHandler(text: string) {
      console.log(snackbar.value);
      if (!snackbar.value) {
        message.value = text;
        snackbar.value = true;
        setTimeout(() => {
          snackbar.value = false;
        }, timeout);
      }
    }

    const currentFile = ref();
    const imageURL = ref('');
    function selectFile(file: Blob) {
      console.log('Selected File: ', file);
      currentFile.value = file;
    }

    async function upload() {
      if (!currentFile.value) {
        snackbarHandler('Please select a file!');
        return;
      }

      try {
        const { data, status } = await uploadService(currentFile.value, 'auth0|12345678910');
        if (status === 200) {
          imageURL.value = data.imageURL;
          console.log(imageURL.value, 'Image URL==============');
          dialog.value = false;
          return;
        }
        throw new Error('Submission Server Error');
      } catch (error) {
        snackbarHandler('Something is wrong. Please try again later.');
        console.log('ERROR: ', error);
      }
    }

    return {
      dialog,
      upload,
      selectFile,
      currentFile,
      snackbar,
      timeout,
      message,
    };
  },
});
</script>
