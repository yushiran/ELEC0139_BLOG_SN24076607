<template>
    <nav class="vertical-navigation" :class="{ 'active': isNavActive }">
        <div class="nav-content">
            <div class="logo">MedAI Blog</div>
            <ul class="nav-links">
                <li>
                    <a href="#application-domain" class="nav-link main-link" @click="closeNav">Application Domain & Challenges</a>
                    <ul class="sub-nav">
                        <li><a href="#application-domin-medical-imaging" class="nav-link sub-link" @click="closeNav">Medical Imaging Domain</a></li>
                        <li><a href="#challenges-in-medical-imaging" class="nav-link sub-link" @click="closeNav">Data Scarcity & Implications</a></li>
                        <li><a href="#the-case-for-technologies" class="nav-link sub-link" @click="closeNav">Case for AI/ML Technologies</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#solutions-to-data-scarcity-in-medical-imaging" class="nav-link main-link" @click="closeNav">Solutions to Data Scarcity</a>
                    <ul class="sub-nav">
                        <li><a href="#self-supervised-learning" class="nav-link sub-link" @click="closeNav">Self-Supervised Learning</a></li>
                        <li><a href="#reinforcement-learning" class="nav-link sub-link" @click="closeNav">Reinforcement Learning</a></li>
                        <li><a href="#generative-models" class="nav-link sub-link" @click="closeNav">Generative Models</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#ethical-considerations" class="nav-link main-link" @click="closeNav">Ethical Considerations</a>
                    <ul class="sub-nav">
                        <li><a href="#data-privacy-and-security" class="nav-link sub-link" @click="closeNav">Data Privacy & Security</a></li>
                        <li><a href="#bias-and-fairness" class="nav-link sub-link" @click="closeNav">Bias & Fairness</a></li>
                        <li><a href="#transparency-and-explainability" class="nav-link sub-link" @click="closeNav">Transparency & Explainability</a></li>
                        <li><a href="#accountability-and-governance" class="nav-link sub-link" @click="closeNav">Accountability & Governance</a></li>
                    </ul>
                </li>
                <li><a href="#conclusion" class="nav-link main-link" @click="closeNav">Conclusion</a></li>
            </ul>
        </div>
    </nav>
    <button class="nav-toggle" @click="toggleNavigation">☰</button>
    <div class="nav-overlay" :class="{ 'active': isNavActive }" @click="toggleNavigation"></div>
</template>

<script setup>
import { ref, inject, watch } from 'vue';

// 从父组件注入导航状态
const sharedIsNavActive = inject('isNavActive');
const toggleNav = inject('toggleNav');

// 本地导航状态
const isNavActive = ref(false);

// 监听共享状态变化，同步到本地状态
watch(sharedIsNavActive, (newValue) => {
    isNavActive.value = newValue;
});

function toggleNavigation() {
    isNavActive.value = !isNavActive.value;
    // 同步到共享状态
    toggleNav(isNavActive.value);
    
    // 当导航打开时，防止背景滚动
    if (isNavActive.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeNav() {
    isNavActive.value = false;
    // 同步到共享状态
    toggleNav(false);
    document.body.style.overflow = '';
}
</script>

<style scoped>
.vertical-navigation {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 18%; 
  max-width: 250px;
  background-color: var(--card-background);
  box-shadow: 2px 0 10px var(--shadow-color);
  padding: 1rem;
  z-index: 100;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}

.nav-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.logo {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--heading-color);
    margin-bottom: 1.5rem;
}

.nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.nav-links li {
    margin-bottom: 0.75rem;
}

.nav-link {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.2s, background-color 0.2s;
    display: block;
    border-radius: 0.25rem;
}

.main-link {
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 0.75rem;
    background-color: rgba(0, 0, 0, 0.05);
}

.sub-nav {
    list-style: none;
    padding-left: 1rem;
    margin: 0.5rem 0 0.75rem 0;
}

.sub-link {
    font-size: 0.9rem;
    padding: 0.3rem 0.5rem;
    margin-bottom: 0.3rem;
}

.nav-link:hover {
    color: var(--heading-color);
    background-color: var(--border-color);
}

/* 添加一个导航切换按钮，默认隐藏 */
.nav-toggle {
    display: none;
    position: fixed;
    left: 1rem;
    top: 1rem;
    z-index: 101;
    padding: 0.5rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .vertical-navigation {
        transform: translateX(-100%);
        width: 80%;
        max-width: 300px;
    }
    
    .vertical-navigation.active {
        transform: translateX(0);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
    
    .nav-toggle {
        display: block;
    }
    
    .sub-nav {
        display: block; /* 在移动视图中显示子导航 */
        padding-left: 0.75rem;
    }
    
    .nav-content {
        padding-top: 3rem;
    }
    
    /* 添加背景遮罩，在导航打开时显示 */
    .nav-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99;
    }
    
    .nav-overlay.active {
        display: block;
    }
}

/* 平板设备专用优化 */
@media (min-width: 769px) and (max-width: 1024px) {
    .vertical-navigation {
        width: 240px;
        max-width: 240px;
        transform: none;
        box-shadow: 1px 0 5px var(--shadow-color);
    }
    
    /* 平板设备上显示导航切换按钮，以便用户可以随时隐藏侧边栏 */
    .nav-toggle {
        display: block;
        position: fixed;
        left: 240px; /* 位于导航栏右侧 */
        top: 1rem;
        background-color: var(--card-background);
        color: var(--text-color);
        border: 1px solid var(--border-color);
        padding: 0.3rem 0.5rem;
        font-size: 0.9rem;
    }
    
    /* 当导航折叠时的样式 */
    .vertical-navigation:not(.active) {
        transform: translateX(-100%);
    }
    
    .vertical-navigation:not(.active) + .nav-toggle {
        left: 0.5rem;
    }
}
</style>