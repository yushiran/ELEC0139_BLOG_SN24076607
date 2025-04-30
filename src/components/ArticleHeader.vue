<template>
  <header class="article-header">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="subtitle" v-html="formattedSubtitle"></p>
      <div class="author-info" v-if="author">
        <span>By: {{ author }}</span>
        <span class="publication-date">May 01, 2025</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
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

// Format subtitle to add GitHub icon and make the link clickable
const formattedSubtitle = computed(() => {
  if (props.subtitle && props.subtitle.includes('github.com')) {
    // Extract the GitHub URL from the subtitle
    const githubUrlMatch = props.subtitle.match(/https:\/\/github\.com\/[^\s"]*/);
    if (githubUrlMatch) {
      const githubUrl = githubUrlMatch[0];
      return props.subtitle.replace(
        githubUrl,
        `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="github-link">
          <svg class="github-icon" viewBox="0 0 24 24" aria-hidden="true" style="width: 20px; height: 20px;">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
          ${githubUrl}
        </a>`
      );
    }
  }
  return props.subtitle;
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

.github-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #0366d6;
  font-weight: 500;
  transition: color 0.2s ease;
}

.github-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.github-icon {
  width: 14px;
  height: 14px;
  margin-right: 4px;
  fill: currentColor;
  vertical-align: middle;
  margin-top: -2px;
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