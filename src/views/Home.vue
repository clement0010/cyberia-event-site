<template>
  <Background>
    <v-container>
      <v-container>
        <v-row justify="center">
          <transition
            appear
            name="slide-fade-down"
          >
            <v-img
              src="@/assets/logo-white.png"
              :max-width="$vuetify.breakpoint.xsAndDown ? '100vw' : $vuetify.breakpoint.mdAndDown ? '65vw' : '45vw'"
              class="mb-5"
            />
          </transition>
        </v-row>
      </v-container>
      <v-row justify="center">
        <div class="mx-10 my-5">
          <router-link
            to="/contest-gallery"
            class="text-decoration-none"
          >
            <transition
              appear
              name="slide-fade-left"
            >
              <v-btn
                class="black--text"
                :x-large="$vuetify.breakpoint.smAndUp"
                color="secondary"
              >
                Contest Gallery
              </v-btn>
            </transition>
          </router-link>
        </div>
        <div class="mx-10 my-5">
          <router-link
            to="/information-page/general"
            class="text-decoration-none"
          >
            <transition
              appear
              name="slide-fade-up"
            >
              <v-btn
                class="black--text"
                :x-large="$vuetify.breakpoint.smAndUp"
                color="secondary"
              >
                About the Event
              </v-btn>
            </transition>
          </router-link>
        </div>
        <div class="mx-10 my-5">
          <router-link
            to="/leaderboard"
            class="text-decoration-none"
          >
            <transition
              appear
              name="slide-fade-right"
            >
              <v-btn
                class="black--text"
                :x-large="$vuetify.breakpoint.smAndUp"
                color="secondary"
              >
                Leaderboard
              </v-btn>
            </transition>
          </router-link>
        </div>
      </v-row>
    </v-container>
  </Background>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Background from '@/components/atoms/Background.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Background,
  },
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-left-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-left-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-left-enter, .slide-fade-left-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-right-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-right-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-right-enter, .slide-fade-right-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-up-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-up-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-up-enter, .slide-fade-up-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}
.slide-fade-down-enter-active {
  transition: all 2s ease;
}
.slide-fade-down-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-down-enter, .slide-fade-down-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
