<template>
  <div class="about">
    <h1>Home</h1>
    <cv-button-set>
      <CvButton kind="primary">button 1</CvButton>
      <CvButton kind="secondary">button 2</CvButton>
      <CvButton kind="danger">button 3</CvButton>
    </cv-button-set>
  </div>
</template>

<script>
import { CvButton } from "@/components/bundles/cv-button";
// @ is an alias to /src
export default {
  components: {
    CvButton,
  },
};
</script>
