<template>
    <div class="article-container">
        <article-header title="Bridging the Data Gap: Leveraging AI to Address Data Scarcity in Medical Imaging"
            subtitle="" author="SN: 24076607" />

        <div class="article-content">
            <article-section id="application-domain" title="Application Domain and Challenges">
                <sub-section id="application-domin-medical-imaging" title="The Application Domain: Medical Imaging">
                    <p>
                        Medical imaging is a critical field in healthcare, providing essential tools for diagnosing and monitoring diseases. It encompasses various imaging modalities, including X-rays, CT scans, MRI, and ultrasound, each with its unique strengths and applications.
                    </p>
                    <p>
                    The segmentation process plays a fundamental role in medical image analysis by enabling pixel-level identification of anatomical structures, facilitating precise diagnosis and personalized treatment<Reference citationKey="kumarTripleClippedHistogramBased2021" />. CT imaging, for instance, has been extensively used in diagnosing lung infections during the COVID-19 pandemic<Reference citationKey="LIU2020244" /><Reference citationKey="9446143" /><Reference citationKey="YI2019101552" />. While manual segmentation by radiologists is accurate, it remains labor-intensive, time-consuming, and costly, driving demand for automated methods using deep learning<Reference citationKey="TAJBAKHSH2020101693" />. These computational approaches address efficiency challenges while maintaining the diagnostic value that makes medical imaging indispensable in contemporary healthcare systems.
                    </p>
                </sub-section>
                <sub-section id="challenges-in-medical-imaging" title="Current Challenges: Data Scarcity and Its Implications">
                    <p>
                        Medical image segmentation has witnessed tremendous progress with deep learning, yet its success remains heavily dependent on the availability of large-scale, high-quality annotated datasets. Unfortunately, several persistent challenges hinder the widespread deployment of AI models in medical imaging, especially in real-world clinical environments.
                    </p>
                    <sub-sub-section id="limited-annotated-datasets" title="Limited Annotated Datasets">
                        <p>
                            Obtaining labeled medical imaging data is a labor-intensive and costly process, typically requiring the expertise of trained radiologists and high-end equipment. Manual annotation, such as pixel-wise segmentation, is especially time-consuming. As a result, the availability of large annotated datasets remains limited​. Moreover, privacy regulations and patient confidentiality further restrict data sharing and public availability​\cite{TAJBAKHSH2020101693}.
                        </p>
                    </sub-sub-section>
                    <sub-sub-section id="bias-and-generalizability-issues" title="Bias and Generalizability Issues">
                        <p>
                            Even when labeled datasets are available, they are often limited in diversity, both demographically and technically (e.g., variation in scanner models or acquisition protocols). This lack of heterogeneity leads to significant distribution shift problems when models trained on one dataset are deployed on another, ultimately affecting their generalization performance across populations and institutions​.
                        </p>
                    </sub-sub-section>
                    <sub-sub-section id="resource-constraints" title="Resource Constraints">
                        <p>
                            Healthcare systems in low- and middle-income regions face acute shortages in data collection infrastructure and medical imaging resources. The high costs of annotation and hardware requirements for data processing place an additional burden on AI development in such contexts. While deep learning architectures like U-Nets are widely adopted in academic research, deploying them in under-resourced settings remains a formidable challenge​.
                        </p>
                    </sub-sub-section>
                </sub-section>
              
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
import SubSection from './SubSection.vue';
import SubSubSection from './SubSubSection.vue';
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