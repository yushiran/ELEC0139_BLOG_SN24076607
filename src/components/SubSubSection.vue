<template>
  <div class="subsubsection" :id="id">
    <div class="subsubsection-title">
      <h4>{{ title }}</h4>
    </div>
    <div class="subsubsection-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.subsubsection {
  margin-bottom: 1.5rem;
  width: 100%;
}

.subsubsection-title {
  color: var(--heading-color);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

.subsubsection-title h4 {
  font-size: 1.25rem;
  color: var(--heading-color);
  margin-bottom: 0.4rem;
  position: relative;
}

.subsubsection-content {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
</style>