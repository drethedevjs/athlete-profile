<script lang="ts" setup>
import NewProfile from "./NewProfile.vue";
</script>

<script lang="ts">
import profilesData from "../data/profiles";
import IProfile from "../classes/Profile";

export default {
  data() {
    return {
      profiles: [...profilesData] as IProfile[]
    }
  },
  methods: {
    viewProfile(profileId: number) {
      console.log("view profile!", profileId);
    },
    deleteProfile(idx: number) {
      this.profiles.splice(idx, 1);
    },
    navigateToBasicInfoPage() {
      alert("Feature not yet supported.");
    },
    addProfile(profile: IProfile) {
      this.profiles.push(profile);
      console.log("profile added!");
    }
  }
}
</script>

<template>
  <section>
    <div class="mb-5">
      <div id="home" class="row">
        <div class="large-6 large-offset-3">
          <h1 class="mt-3">Athlete Profiles</h1>
          <div class="container">
            <button class="btn btn-success" @click="navigateToBasicInfoPage()" disable>Add Profile</button>
            <table class="table table-hover mt-3">
              <thead>
                <tr class="text-center">
                  <th scope="col">Name</th>
                  <th scope="col">Sports</th>
                  <th scope="col">Team</th>
                  <th scope="col">About</th>
                  <th scope="col" id="button-column" style="width: 10%;" class="opacity-25">Actions</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-if="!profiles.length">
                  <td colspan="5">
                    You have no profiles created. Click the Add Profile button to get started.
                  </td>
                </tr>
                <tr v-for="(profile, idx) in profiles" :key="profile.id">
                  <td>{{ profile.firstName }} {{ profile.lastName }}</td>
                  <td>
                    <span
                      v-for="sport in profile.sports"
                      class="bg-dark text-white rounded p-1 mx-1"
                    >
                      {{ sport }}
                    </span>
                  </td>
                  <td>{{ profile.team }}</td>
                  <td class="text-truncate">
                    <div class="overflow-auto text-wrap" style="max-width: 620px; max-height: 100px;">{{ profile.aboutMe }}</div>
                  </td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-warning" @click="viewProfile(profile.id)">View</button>
                      <button type="button" class="btn btn-danger" @click="deleteProfile(idx)">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <NewProfile @add-profile="addProfile" />
  </section>
</template>
