<template>
  <div class="content">
    <h1>teste</h1>
    <Welcome />
    <PhysicalPerson />
    <LegalPerson />
    <Password />
    <ReviewInformation />
  </div>
</template>

<script>
import Welcome from "@/pages/Welcome";
import PhysicalPerson from "@/pages/PhysicalPerson";
import LegalPerson from "@/pages/LegalPerson";
import Password from "@/pages/Password";
import ReviewInformation from "@/pages/ReviewInformation";

export default {
  name: 'Content',
  components: { Welcome, PhysicalPerson, LegalPerson, Password, ReviewInformation },
}
</script>

<style>
  @import './style.scss';
</style>