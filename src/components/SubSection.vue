<template>
  <div class="subsection" :id="id">
    <div class="subsection-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="subsection-content">
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
.subsection {
  margin-bottom: 2.5rem;
  width: 100%;
}

.subsection-title {
  color: var(--heading-color);
  margin-top: 1.875rem;
  margin-bottom: 0.9rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

.subsection-title h3 {
  font-size: 1.6rem;
  color: var(--heading-color);
  margin-bottom: 0.5rem;
  position: relative;
}

.subsection-content {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
</style>