<script lang="ts">
  import Profile from "../classes/Profile";
  import Sport from "../classes/Sports";

  export default {
    emits: ["add-profile"],
    data() {
      return {
        profile: new Profile(),
        sports: Object.values(Sport) as string[]
      }
    },
    methods: {
      navigateHome() {
        alert("Going home!");
      }
    }
  }
</script>

<template>
  <div class="large-6 large-offset-3">
    <h1 class="display-3 text-center">Athlete Information</h1>
    <div class="container bg-white rounded border shadow" style="width: 50%;">
      <form name="basic" id="basicForm" @submit.prevent="$emit('add-profile', profile)">
        <div class="row justify-content-center pt-5">
          <div class="col-9">
            <label for="firstName" class="form-label fw-bold">First Name</label>
            <input type="text" class="form-control" id="firstName" name="firstName" v-model="profile.firstName" required>
            <span class="text-danger" v-show="!profile.firstName">
              Please provide first name.
            </span><br>

            <label for="lastName" class="form-label fw-bold">Last Name</label>
            <input type="text" class="form-control" id="lastName" name="lastName" v-model="profile.lastName" required>
            <span class="text-danger" v-show="!profile.lastName">
              Please provide last name.
            </span><br>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-5">
            <label for="dateOfBirth" class="form-label fw-bold">Date of Birth</label>
            <input type="date" class="form-control" id="dateOfBirth" v-model="profile.dateOfBirth">
          </div>
          <div class="col-4">
            <label for="gender" class="form-label fw-bold">Gender</label>
            <select class="form-select" v-model="profile.gender" required>
              <option value="" selected disabled>Select One</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div class="row justify-content-center mt-2">
          <div class="col-9">
            <label for="team" class="form-label mb-0 fw-bold">Team</label><br>
            <small id="teamHelp" class="form-text text-muted">Add current team.</small>
            <input class="form-control" id="team" v-model="profile.team" />
          </div>
        </div>
        <div class="row justify-content-center mt-2">
          <div class="col-9">
            <label for="sport" class="form-label mb-0 fw-bold">Sports</label><br>
            <small id="sportHelp" class="form-text text-muted">Select all that apply.</small>
            <select class="form-select" id="sport" v-model="profile.sports" multiple>
              <option v-for="sport in sports" :value="sport">{{sport}}</option>
            </select>
            <small id="sportHelp" class="form-text text-muted">Hold <code>ctrl</code> while clicking to select multiple sports.</small>
          </div>
        </div>
        <div class="row justify-content-center mt-2">
          <div class="col-9">
            <label for="about-me" class="form-label fw-bold">About Me</label><br>
            <textarea class="form-control" id="about-me" style="height: 100px" v-model="profile.aboutMe" />
          </div>
        </div>
        <div class="row mt-3 justify-content-center pb-5">
          <div class="col-9">
            <button class="btn btn-danger me-2" @click="navigateHome" disable>Back</button>
            <input type="submit" class="btn btn-success" value="Save" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>