<script setup>
import { ref, onMounted } from 'vue';
import Article from './components/Article.vue';
import Navigation from './components/Navigation.vue';

const useDarkMode = ref(false); // 默认浅色模式

// 切换主题模式
const toggleDarkMode = () => {
  useDarkMode.value = !useDarkMode.value;
  document.documentElement.setAttribute(
    'data-theme',
    useDarkMode.value ? 'dark' : 'light'
  );
};

// 检测系统主题
onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  useDarkMode.value = prefersDark;
  document.documentElement.setAttribute(
    'data-theme',
    prefersDark ? 'dark' : 'light'
  );
});
</script>



<template>
  <div class="app-container">
    <Navigation />
    <main class="content">
      <button class="theme-toggle" @click="toggleDarkMode">
        {{ useDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
      </button>
      <Article />
    </main>
  </div>
</template>


<style>
:root {
  --primary-color: #2b6cb0;
  --secondary-color: #4a6fa5;
  --background-color: #f7fafc;
  --text-color: #2d3748;
  --heading-color: #1a365d;
  --content-background: #fff;
  --card-background: #f8fafc;
  --border-color: #e2e8f0;
  --shadow-color: rgba(0, 0, 0, 0.05);
}

/* 浅色模式 */
[data-theme='light'] {
  --background-color: #f7fafc;
  --text-color: #2d3748;
  --heading-color: #1a365d;
  --content-background: #fff;
  --card-background: #f8fafc;
  --border-color: #e2e8f0;
  --shadow-color: rgba(0, 0, 0, 0.05);
}

/* 深色模式 */
[data-theme='dark'] {
  --background-color: #1a202c;
  --text-color: #e2e8f0;
  --heading-color: #cbd5e0;
  --content-background: #2d3748;
  --card-background: #283141;
  --border-color: #4a5568;
  --shadow-color: rgba(0, 0, 0, 0.2);
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
  transition: background-color 0.3s, color 0.3s;
}

.app-container {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  /* 保持这个属性确保整体居中 */
  padding: 1rem;
  /* 增加内边距以避免内容过于贴边 */
  max-width: 1200px;
  /* 设置最大宽度以限制内容区域 */
  margin: 0 auto;
  /* 居中对齐 */
  box-sizing: border-box;
}

.content {
  flex: 1;
  max-width: 95%;
  /* 将最大宽度设置为屏幕的90% */
  width: 100%;
  /* 确保内容区域占满可用宽度 */
  margin: 0 auto;
  /* 居中显示 */
  background-color: var(--content-background);
  box-shadow: 0 4px 12px var(--shadow-color);
  border-radius: 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.theme-toggle {
  position: fixed;
  top: 1.25rem;
  /* 使用相对单位代替20px */
  right: 1.25rem;
  /* 使用相对单位代替20px */
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  /* 使用相对单位代替4px */
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.theme-toggle:hover {
  background-color: var(--secondary-color);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', 'Segoe UI', sans-serif;
  color: var(--heading-color);
}

img {
  max-width: 100%;
}

/* 小屏幕优化 */
@media (max-width: 768px) {
  .content {
    max-width: 95%;
    /* 小屏幕时内容区域更宽 */
    padding: 1rem;
  }

  .app-container {
    flex-direction: column;
  }
}
</style>