<template>
  <section class="profile">
    <h1 class="title profile__title">Profile</h1>
    <p class="profile__content">Information about the user of the service will be placed here</p>
    <form class="profile__form container p-0" action="javascript:void(0);">
      <CustomInputText></CustomInputText>
      <CustomTextarea></CustomTextarea>
      <CustomBtn></CustomBtn>
    </form>
  </section>
</template>
<script>
import CustomInputText from '@/components/ui/CustomInputText.vue';
import CustomTextarea from '@/components/ui/CustomTextarea.vue';
import CustomBtn from '@/components/ui/CustomBtn.vue';

export default {
  name: "Profile",
  components: {
    CustomInputText,
    CustomTextarea,
    CustomBtn
  }
}
</script>

<style scoped>
.profile__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>