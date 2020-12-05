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
          v-bind="attrs"
          v-on="on"
        >
          Send Hint
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Send Hint Message</span>
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="updateData.participant_id"
            label="Participants"
            :items="participants"
            item-text="name"
            item-value="id"
          />
          <v-text-field
            v-if="type === 'picometer'"
            v-model="updateData.picometer_hint"
            label="Picometer Hint"
            hint="Picomter hint for crewmate"
          />
          <v-text-field
            v-else-if="type === 'viewfinder'"
            v-model="updateData1.viewfinder_hint"
            label="Viewfinder Hint"
            hint="Viewfinder hint for crewmate"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="secondary"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editWrapper"
          >
            Confirm
          </v-btn>
        </v-card-actions>
        <LoaderSpinMini v-if="loading" />
      </v-card>
    </v-dialog>
    <SnackBar
      :text="message"
      :timeout="timeout"
      :snackbar="snackbar"
    />
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api';
import { useUpdateParticipantsPicometerMutation, useUpdateParticipantsViewfinderMutation } from '@/generated/graphql';
import SnackBar from '@/components/atoms/Snackbars.vue';
import snackBarComposition from '@/composable/snackbar';
import LoaderSpinMini from '@/components/atoms/LoaderSpinMini.vue';

export default defineComponent({
  name: 'EditGameForm',

  components: {
    SnackBar,
    LoaderSpinMini,
  },
  props: {
    participants: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
    },
  },

  setup(props) {
    const dialog = ref(false);
    const loading = ref(false);

    const {
      timeout, snackbar, message, snackbarHandler,
    } = snackBarComposition();

    const { mutate: updateHint } = useUpdateParticipantsPicometerMutation(() => ({}));
    const { mutate: updateHint1 } = useUpdateParticipantsViewfinderMutation(() => ({}));

    const updateData = reactive({
      participant_id: '',
      picometer_hint: '',
    });
    const updateData1 = reactive({
      participant_id: updateData.participant_id,
      viewfinder_hint: '',
    });

    function editWrapper() {
      loading.value = true;
      if (props.type === 'picometer') {
        updateHint(updateData).then((result) => {
          if (result.data.update_participants.affected_rows) {
            updateData.participant_id = '';
            updateData.picometer_hint = '';
            snackbarHandler('Update Successfully!');
          } else {
            snackbarHandler('Error! Try again later.');
          }
          loading.value = false;
          dialog.value = false;
        }).catch((err) => {
          loading.value = false;
          console.error(err);
          snackbarHandler('Error! Try again later!');
        });
      } else {
        updateHint1(updateData1).then((result) => {
          if (result.data.update_participants.affected_rows) {
            updateData1.participant_id = '';
            updateData1.viewfinder_hint = '';
            snackbarHandler('Update Successfully!');
          } else {
            snackbarHandler('Error! Try again later.');
          }
          loading.value = false;
          dialog.value = false;
        }).catch((err) => {
          loading.value = false;
          console.error(err);
          snackbarHandler('Error! Try again later!');
        });
      }
    }

    return {
      dialog,
      loading,
      editWrapper,
      updateData,
      updateData1,
      timeout,
      message,
      snackbar,
    };
  },
});
</script>
