import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: [
      {
        id: 1,
        name: "column name",
        tasks: [
          {
            id: 1,
            name: "task name 1",
          },
          {
            id: 2,
            name: "task name 2",
          },
        ],
      },
      {
        id: 2,
        name: "column name 2",
        tasks: [
          {
            id: 3,
            name: "task name 3",
          },
        ],
      },
      {
        id: 3,
        name: "column name 3",
        tasks: [
          {
            id: 4,
            name: "task name 4",
          },
          {
            id: 5,
            name: "task name 5",
          },
          {
            id: 6,
            name: "task name 6",
          },
        ],
      },
    ],
  },
  mutations: {
    ADD_COLUMN(state, value) {
      state.columns.push(value);
    },
    ADD_TASK(state, { columnId, value }) {
      const columnIndex = state.columns.findIndex(
        (column) => column.id === columnId
      );
      console.log(value);
      state.columns[columnIndex].tasks.push(value);
    },
    SET_COLUMN(state, value) {
      const columnIndex = state.columns.findIndex(
        (column) => column.id === value.id
      );
      state.columns[columnIndex] = value;
    },
    SET_TASK(state, columnId, taskId, value) {
      const columnIndex = state.columns.findIndex(
        (column) => column.id === columnId
      );
      const tasks = state.columns[columnIndex].tasks.filter(
        (task) => task.id !== taskId
      );
      state.columns[columnId].tasks = [...tasks, value];
    },
  },
  actions: {
    getTasksLength({ state: { columns } }) {
      let tasksLength = 0;
      columns.map((column) => {
        tasksLength += column.tasks.length;
      });

      return tasksLength;
    },
    addColumn({ commit, state: { columns } }) {
      const column = {
        id: columns.length + 1,
        name: "new column",
        tasks: [],
      };

      commit("ADD_COLUMN", column);
    },
    async addTask({ commit, dispatch }, columnId) {
      const value = {
        id: (await dispatch("getTasksLength")) + 1,
        name: "new task",
      };

      commit("ADD_TASK", { columnId, value });
    },
    updateTasks({ commit, state: { columns } }, { columnId, value }) {
      const column = columns.find((column) => column.id === columnId);
      column.tasks = value;

      commit("SET_COLUMN", column);
    },
  },
  getters: {
    getColumns: ({ columns }) => columns,
    getTasks:
      ({ columns }) =>
      (columnId) => {
        const column = columns.find((column) => column.id === columnId);
        return column.tasks;
      },
  },
});
