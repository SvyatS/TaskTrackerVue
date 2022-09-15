<template>
  <div class="create-task" @click="createTask">Create new task</div>
</template>

<script>
export default {
  name: "tracker-create-task",
  props: {
    columnId: Number,
  },
  methods: {
    createTask() {
      this.$store.dispatch("addTask", this.columnId);
    },
  },
};
</script>

<style scoped lang="scss">
.create-task {
  border: 1px solid #2c3e50;
  border-radius: 10px;
  margin-top: 30px;
  padding: 10px;
  transition: background-color 0.4s;

  &:hover {
    background-color: #90b4ae;
  }
}
</style>
