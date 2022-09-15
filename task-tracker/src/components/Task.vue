<template>
  <div class="task">
    <div class="task-name">
      <span>{{ name }}</span>
      <div class="change-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tracker-task",
  props: {
    id: Number,
    name: String,
  },
};
</script>

<style scoped lang="scss">
.task {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #2c3e50;
  border-radius: 10px;

  &-name {
    font-size: 18px;
    display: flex;
    align-items: center;

    & > span {
      padding-right: 10px;
      flex: 1 1 auto;
    }
  }
}
</style>
