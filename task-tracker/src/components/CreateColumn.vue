<template>
  <div class="create-column" @click="createColumn">Create new column</div>
</template>

<script>
export default {
  name: "tracker-create-column",
  methods: {
    createColumn() {
      this.$store.dispatch("addColumn");
    },
  },
};
</script>

<style scoped lang="scss">
.create-column {
  border: 4px solid #b1ccc7;
  border-radius: 20px;
  padding: 20px;
  height: 17px;
  transition: background-color 0.4s;

  &:hover {
    background-color: #90b4ae;
  }
}
</style>
