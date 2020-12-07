<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="black--text"
          color="secondary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Emergency Meeting</span>
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="updateData.participant_id"
            label="Participants"
            :items="participants"
            item-text="name"
            item-value="id"
            color="white"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            class="black--text"
            color="secondary"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            class="black--text"
            color="primary"
            @click="editWrapper"
          >
            Kill
          </v-btn>
          <v-btn
            v-if="emergencyMeeting"
            class="black--text"
            color="primary"
            @click="meetingControl(false)"
          >
            Stop Meeting
          </v-btn>
          <v-btn
            v-else
            class="black--text"
            color="primary"
            @click="meetingControl(true)"
          >
            Start Meeting
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
import { useKillParticipantsMutation, useEmergencyMeetingControlMutation } from '@/generated/graphql';
import SnackBar from '@/components/atoms/Snackbars.vue';
import snackBarComposition from '@/composable/snackbar';
import LoaderSpinMini from '@/components/atoms/LoaderSpinMini.vue';

export default defineComponent({
  name: 'EditEmergencyMeetingForm',

  components: {
    SnackBar,
    LoaderSpinMini,
  },
  props: {
    id: {
      type: String,
    },
    emergencyMeeting: {
      type: Boolean,
      default: false,
    },
    participants: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const dialog = ref(false);
    const loading = ref(false);

    const {
      timeout, snackbar, message, snackbarHandler,
    } = snackBarComposition();

    const { mutate: killParticipant } = useKillParticipantsMutation(() => ({}));
    const { mutate: changeEmergencyStatus } = useEmergencyMeetingControlMutation(() => ({}));

    const updateData = reactive({
      participant_id: '',
      team_id: props.id,
    });

    function editWrapper() {
      loading.value = true;
      console.log('Data', updateData);
      killParticipant(updateData).then((result) => {
        if (result.data.update_participants.affected_rows) {
          updateData.participant_id = '';
          updateData.team_id = '';
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

    function meetingControl(emergency_meeting: boolean) {
      loading.value = true;
      changeEmergencyStatus({
        team_id: props.id,
        emergency_meeting,
      }).then((result) => {
        if (result.data.update_participants.affected_rows) {
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

    return {
      dialog,
      loading,
      editWrapper,
      updateData,
      timeout,
      message,
      snackbar,
      meetingControl,
    };
  },
});
</script>
