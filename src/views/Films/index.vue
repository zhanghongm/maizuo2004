<template>
  <div>
      <header>
        <router-link to='/films/nowPlaying'>正在热映</router-link>
        <router-link to='/films/comingSoon'>即将上映</router-link>
      </header>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;

}
</style>
