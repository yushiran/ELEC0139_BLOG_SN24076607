<template>
    <nav class="vertical-navigation">
        <div class="nav-content">
            <div class="logo">MedAI Blog</div>
            <ul class="nav-links">
                <li>
                    <a href="#application-domain" class="nav-link main-link">Application Domain & Challenges</a>
                    <ul class="sub-nav">
                        <li><a href="#application-domin-medical-imaging" class="nav-link sub-link">Medical Imaging Domain</a></li>
                        <li><a href="#challenges-in-medical-imaging" class="nav-link sub-link">Data Scarcity & Implications</a></li>
                        <li><a href="#the-case-for-technologies" class="nav-link sub-link">Case for AI/ML Technologies</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#solutions-to-data-scarcity-in-medical-imaging" class="nav-link main-link">Solutions to Data Scarcity</a>
                    <ul class="sub-nav">
                        <li><a href="#self-supervised-learning" class="nav-link sub-link">Self-Supervised Learning</a></li>
                        <li><a href="#reinforcement-learning" class="nav-link sub-link">Reinforcement Learning</a></li>
                        <li><a href="#generative-models" class="nav-link sub-link">Generative Models</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#ethical-considerations" class="nav-link main-link">Ethical Considerations</a>
                    <ul class="sub-nav">
                        <li><a href="#data-privacy-and-security" class="nav-link sub-link">Data Privacy & Security</a></li>
                        <li><a href="#bias-and-fairness" class="nav-link sub-link">Bias & Fairness</a></li>
                        <li><a href="#transparency-and-explainability" class="nav-link sub-link">Transparency & Explainability</a></li>
                        <li><a href="#accountability-and-governance" class="nav-link sub-link">Accountability & Governance</a></li>
                    </ul>
                </li>
                <li><a href="#conclusion" class="nav-link main-link">Conclusion</a></li>
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
  width: 18%; /* 稍微增加宽度以适应层级导航 */
  max-width: 250px; /* 增加最大宽度 */
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

@media (max-width: 768px) {
    .vertical-navigation {
        position: static;
        width: 100%;
        max-width: none;
        height: auto;
    }

    .nav-content {
        flex-direction: column;
        align-items: center;
    }

    .logo {
        margin-bottom: 0.5rem;
    }

    .nav-links {
        width: 100%;
    }

    .sub-nav {
        display: none; /* 在移动视图中隐藏子导航 */
    }
}
</style>