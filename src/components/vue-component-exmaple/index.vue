<template>
  <div id="vue">hello {{title}} world!</div>
</template>
<style lang="scss">
  #vue {
    color: orange;
  }
</style>
<script>
export default {
  data() {
    return {
      title: 'vue',
    };
  },
};
</script>
