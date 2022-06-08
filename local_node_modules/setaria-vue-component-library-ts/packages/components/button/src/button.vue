<template>
  <el-button>
    !!!!!!  <slot /> !!!!!
  </el-button>
</template>

<script lang="ts" setup>
// import { Text, computed, inject, ref, useSlots } from 'vue'

defineOptions({
  name: 'DButton',
})


// defineExpose({
//   /** @description button html element */
//   ref: _ref,
//   /** @description button size */
//   size: _size,
//   /** @description button type */
//   type: _type,
//   /** @description button disabled */
//   disabled: _disabled,
//   /** @description whether adding space */
//   shouldAddSpace,
// })
</script>
