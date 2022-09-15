<template>
  <div id="app">
    <div class="head">
      <div class="title">Task tracker test</div>
    </div>
    <div class="content">
      <Column v-for="column in columns" :key="column.id" v-bind="column" />
      <CreateColumn />
    </div>
  </div>
</template>

<script>
import Column from "@/components/Column.vue";
import CreateColumn from "@/components/CreateColumn.vue";

export default {
  name: "App",
  components: {
    Column,
    CreateColumn,
  },
  computed: {
    columns() {
      return this.$store.getters["getColumns"];
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.change-icon {
  width: 18px;
  height: 18px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAAX0lEQVQ4jc3SsQ1AUBRG4c8gQvEqa1jIKhrbqMxgALGIAomay3PKW5yc5L9kZkCKENWYXpEVx7FHc0NWYUUbVpRVQuBq35Hs2Y/4xwrnQ44osdxwzOjCiq6EykJWe8QGAQkQI4wcQ1gAAAAASUVORK5CYII=");

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAAX0lEQVQ4jc3SsQ1AUBRG4c8gQvEqa1jIKhrbqMxgALGIAomay3PKW5yc5L9kZkCKENWYXpEVx7FHc0NWYUUbVpRVQuBq35Hs2Y/4xwrnQ44osdxwzOjCiq6EykJWe8QGAQkQI4wcQ1gAAAAASUVORK5CYII=");
  }
}

.head > .title {
  font-size: 48px;
}

.content {
  padding: 50px;
  display: inline-flex;
  align-content: flex-start;
  overflow-x: auto;

  & > div {
    margin: 10px;
  }
}
</style>
