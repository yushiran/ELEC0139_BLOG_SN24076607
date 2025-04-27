<template>
  <header class="article-header">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      <div class="author-info" v-if="author">
        <span>By: {{ author }}</span>
        <span class="publication-date">April 4, 2025</span>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  }
});
</script>
<style scoped>
.article-header {
  margin-bottom: 2.5rem;
  text-align: center;
  position: relative;
  padding: 3.5rem 1.5rem 2rem;
  background: linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 100%);
  border-radius: 8px;
  overflow: hidden;
}

[data-theme='dark'] .article-header {
  background: linear-gradient(135deg, #203A43 0%, #2C5364 100%);
}

.article-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://c1.wallpaperflare.com/preview/862/616/898/analysis-anatomy-brain-cad.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  z-index: 0;
}

.header-content {
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
  color: var(--heading-color);
  font-weight: 700;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.author-info {
  font-style: italic;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 0.95rem;
}

.publication-date {
  position: relative;
}

.publication-date:before {
  content: '•';
  position: absolute;
  left: -12px;
}

@media (max-width: 768px) {
  .article-header {
    padding: 2rem 1rem 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .author-info {
    flex-direction: column;
    gap: 5px;
  }

  .publication-date:before {
    display: none;
  }
}
</style>