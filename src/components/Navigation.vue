<template>
    <nav class="vertical-navigation">
        <div class="nav-content">
            <div class="logo">MedAI Blog</div>
            <ul class="nav-links">
                <li><a href="#introduction" class="nav-link">Introduction</a></li>
                <li><a href="#data-scarcity" class="nav-link">Data Challenges</a></li>
                <li><a href="#privacy-concerns" class="nav-link">Privacy</a></li>
                <li><a href="#ml-technologies" class="nav-link">Technologies</a></li>
                <li><a href="#ethical-issues" class="nav-link">Ethics</a></li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
// Navigation component
</script>
<style scoped>
.vertical-navigation {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 15%; /* 使用百分比宽度，确保与内容区域协调 */
  max-width: 200px; /* 限制最大宽度 */
  background-color: var(--card-background);
  box-shadow: 2px 0 10px var(--shadow-color);
  padding: 1rem;
  z-index: 100;
  overflow-y: auto;
  transition: background-color 0.3s;
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
    margin-bottom: 1rem;
}

.nav-link {
    color: var(--text-color);
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s, background-color 0.2s;
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    /* 使用相对单位代替4px */
}

.nav-link:hover {
    color: var(--heading-color);
    background-color: var(--border-color);
}

@media (max-width: 768px) {
    .vertical-navigation {
    position: static;
    width: 100%;
    max-width: none;
    height: auto;
  }

    .nav-content {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .logo {
        margin-bottom: 0.5rem;
    }

    .nav-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nav-links li {
        margin: 0 0.5rem 0.5rem 0;
    }
}
</style>