<script setup>
import { ref, onMounted, provide } from 'vue';
import Article from './components/Article.vue';
import Navigation from './components/Navigation.vue';

const useDarkMode = ref(false); // 默认浅色模式
const isNavActive = ref(false); // 导航栏状态

// 切换主题模式
const toggleDarkMode = () => {
  useDarkMode.value = !useDarkMode.value;
  document.documentElement.setAttribute(
    'data-theme',
    useDarkMode.value ? 'dark' : 'light'
  );
};

// 切换导航栏状态
const toggleNav = (value) => {
  isNavActive.value = value;
};

// 提供导航状态给子组件
provide('isNavActive', isNavActive);
provide('toggleNav', toggleNav);

// 检测系统主题
onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  useDarkMode.value = prefersDark;
  document.documentElement.setAttribute(
    'data-theme',
    prefersDark ? 'dark' : 'light'
  );
  
  // 检测是否为iPad/平板设备
  const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;
  if (isTablet) {
    isNavActive.value = false; // 在平板设备上默认隐藏导航栏
  } else {
    isNavActive.value = true; // 在其他设备上默认显示
  }
});
</script>



<template>
  <div class="app-container" :class="{'nav-active': isNavActive}">
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
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
}

.content {
  flex: 1;
  max-width: 95%;
  width: 100%;
  margin: 0 auto;
  margin-left: calc(18% + 1rem); /* 添加左侧边距，等于导航栏宽度加一些间距 */
  background-color: var(--content-background);
  box-shadow: 0 4px 12px var(--shadow-color);
  border-radius: 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.theme-toggle {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  z-index: 90;
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
  height: auto;
}

/* 小屏幕优化 */
@media (max-width: 768px) {
  .content {
    max-width: 100%;
    margin-left: 0; /* 移动设备上移除左侧边距 */
    padding: 0.75rem;
    margin-top: 2rem;
  }

  .app-container {
    flex-direction: column;
    padding: 0.5rem;
  }
  
  .theme-toggle {
    top: 1rem;
    right: 1rem;
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}

/* 平板设备专用优化 */
@media (min-width: 769px) and (max-width: 1024px) {
  .content {
    margin-left: 0; /* 默认不预留导航栏的空间 */
    max-width: 100%; /* 使内容区域占满整个容器 */
    padding: 0.75rem;
  }
  
  .theme-toggle {
    top: 0.8rem;
    right: 0.8rem;
  }
  
  /* 当导航栏显示时的内容区域 */
  .nav-active .content {
    margin-left: 250px;
    max-width: calc(100% - 250px);
  }
}

/* 针对更大屏幕进行优化 */
@media (min-width: 1600px) {
  .app-container {
    max-width: 1400px;
  }
  
  body {
    font-size: 17px;
  }
  
  h1 {
    font-size: 2.8rem;
  }
  
  h2 {
    font-size: 2.2rem;
  }
  
  h3 {
    font-size: 1.8rem;
  }
}

/* 打印样式优化 */
@media print {
  .theme-toggle,
  .vertical-navigation,
  .nav-toggle {
    display: none !important;
  }
  
  .content {
    margin: 0;
    padding: 0;
    box-shadow: none;
    max-width: 100%;
  }
  
  .app-container {
    padding: 0;
    margin: 0;
  }
}
</style>