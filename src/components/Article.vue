<template>
    <div class="article-container">
        <article-header title="Bridging the Data Gap: Leveraging AI to Address Data Scarcity in Medical Imaging"
            subtitle="" author="SN: 24076607" />

        <div class="article-content">
            <article-section id="application-domain" title="Application Domain and Challenges">
                <p>
                    Medical imaging is pivotal in modern diagnostics, providing non-invasive methods to visualize internal structures of the human body. It encompasses a wide range of imaging modalities, including magnetic resonance imaging (MRI), computed tomography (CT), and X-rays, each offering different contrast mechanisms and spatial resolutions to support clinical diagnosis and treatment planning.
                    <Reference citationKey="8730517" />.
                </p>
                <p>
                    In recent years, medical imaging has been revolutionized by the advances in computer vision and deep learning technologies. These technologies have significantly enhanced the capability of automatic image analysis systems, particularly in tasks like medical image segmentation (MedSeg), which involves partitioning images into regions corresponding to specific organs or lesions such as the chest, brain, abdomen, eye, and heart.
                </p>
                <div class="hero-image">
                    <img src="/src/assets/Roberts_building.jpg" alt="Roberts Building" />
                    <p class="image-caption">Roberts Building - A key location for medical imaging research</p>
                </div>
            </article-section>

            <article-section id="data-scarcity" title="Current Challenges: Data Scarcity and Its Implications">
                <p>
                    Medical image segmentation has witnessed tremendous progress with deep learning, yet its success remains heavily dependent on the availability of large-scale, high-quality annotated datasets. Unfortunately, several persistent challenges hinder the widespread deployment of AI models in medical imaging, especially in real-world clinical environments.
                </p>
                <ul>
                    <li><strong>Limited Annotated Datasets:</strong> Obtaining labeled medical imaging data is a labor-intensive and costly process, typically requiring the expertise of trained radiologists and high-end equipment.</li>
                    <li><strong>Bias and Generalizability Issues:</strong> Even when labeled datasets are available, they are often limited in diversity, both demographically and technically.</li>
                </ul>
            </article-section>
        </div>

        <footer-component />
    </div>
</template>

<script setup>
import ArticleHeader from './ArticleHeader.vue';
import ArticleSection from './ArticleSection.vue';
import FooterComponent from './Footer.vue';
import Reference from './Reference.vue';

</script>

<style scoped>
.niivue-container {
    margin: 2rem auto; /* 增加顶部和底部的间距 */
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.9rem var(--shadow-color);
    max-width: 1200px; /* 限制最大宽度 */
    aspect-ratio: 16 / 9; /* 设置宽高比为 16:9 */
}

.article-container {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0.75rem;
    background-color: var(--content-background);
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.75rem var(--shadow-color);
    transition: background-color 0.3s, color 0.3s;
}

/* 调整段落宽度，确保更好的阅读体验 */
.article-content p {
    max-width: 100%;
    /* 确保占满父容器 */
    max-width: 85ch;
    /* 限制段落宽度为75个字符 */
    margin-left: auto;
    margin-right: auto;
}

.hero-image,
.diagram {
    width: 100%;
    margin: 1.5rem auto;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.9rem var(--shadow-color);
}

.hero-image img,
.diagram img {
    width: 100%;
    height: auto;
    display: block;
}

.image-caption {
    padding: 0.625rem 0.9rem;
    /* 使用相对单位 */
    background-color: var(--card-background);
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-color);
    text-align: center;
    border-bottom-left-radius: 0.5rem;
    /* 使用相对单位 */
    border-bottom-right-radius: 0.5rem;
    /* 使用相对单位 */
}

.key-points {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 1.5rem 0;
    width: 95%;
    /* 从90%增加到95% */
    margin-left: auto;
    margin-right: auto;
}


@media (min-width: 768px) {
    .key-points {
        grid-template-columns: 1fr 1fr;
    }
}

.key-point {
    background-color: var(--card-background);
    border-radius: 0.5rem;
    /* 使用相对单位代替8px */
    padding: 1.25rem;
    /* 使用相对单位代替20px */
    border-left: 0.25rem solid var(--secondary-color);
    /* 使用相对单位代替4px */
    box-shadow: 0 0.125rem 0.625rem var(--shadow-color);
    /* 使用相对单位 */
    transition: background-color 0.3s;
}

.point-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    /* 使用相对单位代替12px */
}

.point-icon {
    font-size: 1.5rem;
    margin-right: 0.625rem;
    /* 使用相对单位代替10px */
}

.key-point h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--heading-color);
}

.subsection-title {
    color: var(--heading-color);
    margin-top: 1.875rem;
    /* 使用相对单位代替30px */
    margin-bottom: 0.9rem;
    /* 使用相对单位代替15px */
    padding-bottom: 0.5rem;
    /* 使用相对单位代替8px */
    border-bottom: 1px solid var(--border-color);
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

.video-container {
    width: 100%;
    margin: 25px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px var(--shadow-color);
}

.video-container video {
    width: 100%;
    height: auto;
}
</style>