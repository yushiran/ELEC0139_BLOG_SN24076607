<template>
  <section class="article-section" :id="id">
    <div class="section-header" v-if="title">
      <h2>{{ title }}</h2>
    </div>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
});
</script>
<style scoped>
.article-section {
  margin-bottom: 3.5rem;
  animation: fadeIn 0.5s ease-in-out;
  width: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(0.625rem);
    /* 使用相对单位代替10px */
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.section-header {
  margin-bottom: 1.5rem;
  position: relative;
  width: 95%; /* 从90%增加到95% */
  margin-left: auto;
  margin-right: auto;
}


.subsection-title {
  color: var(--heading-color);
  margin-top: 1.875rem;
  margin-bottom: 0.9rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
  width: 95%; /* 如果有这个元素也从90%增加到95% */
  margin-left: auto;
  margin-right: auto;
}

h2 {
  font-size: 1.9rem;
  color: var(--heading-color);
  margin-bottom: 0.5rem;
  padding-bottom: 0.8rem;
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 3.75rem;
  /* 使用相对单位代替60px */
  height: 0.25rem;
  /* 使用相对单位代替4px */
  background: linear-gradient(90deg, #4299e1, #63b3ed);
  border-radius: 0.125rem;
  /* 使用相对单位代替2px */
}

.section-content {
  line-height: 1.8;
  color: var(--text-color);
  width: 100%;
}

.section-content p {
  margin-bottom: 1.2rem;
}

.section-content h3 {
  color: var(--heading-color);
  margin: 1.5rem 0 0.8rem;
  font-size: 1.4rem;
}

.section-content ul,
.section-content ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.section-content li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.6rem;
  }

  .section-content h3 {
    font-size: 1.25rem;
  }
}
</style>