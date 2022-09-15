<template>
  <div class="column">
    <div class="column-name">
      <span>{{ name }}</span>
      <div class="change-icon"></div>
    </div>
    <div class="column-body">
      <draggable
        v-model="tasks"
        group="tasks"
        @start="drag = true"
        @end="drag = false"
      >
        <Task v-for="task in tasks" :key="task.id" v-bind="task" />
      </draggable>
      <CreateTask :columnId="id" />
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import CreateTask from "@/components/CreateTask.vue";
import draggable from "vuedraggable";

export default {
  name: "tracker-column",
  components: {
    Task,
    CreateTask,
    draggable,
  },
  props: {
    id: Number,
    name: String,
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.getTasks(this.id);
      },
      set(value) {
        this.$store.dispatch("updateTasks", { columnId: this.id, value });
      },
    },
  },
};
</script>

<style scoped lang="scss">
.column {
  padding: 20px;
  border-radius: 20px;
  background-color: #b1ccc7;

  &-name {
    font-size: 24px;
    display: flex;
    align-items: center;

    & > span {
      padding-right: 10px;
    }
  }

  &-body {
    margin-top: 30px;
  }
}
</style>
