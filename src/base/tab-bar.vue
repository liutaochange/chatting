<template>
  <div class="fixed-foot">
    <div>
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="recents" title="Recents" icon="restore"/>
          <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite"/>
          <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on"/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less" scoped>

</style>
