<template>
  {{ userinfo }}
  aaa
  <el-button @click="setUser">设置用户</el-button>
</template>
<script lang="ts" setup>
  import { computed } from "vue";
  import { useUserStore } from "setaria-vue-component-library-ts";
  // //
  const userStore = useUserStore();
  const userinfo = computed(() => userStore.getUserInfo);
  function setUser() {
    userStore.setUserInfo({ userId: 1 });
  }
</script>
