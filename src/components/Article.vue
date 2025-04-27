<template>
    <div class="article-container">
        <article-header title="Navigating Challenges and Opportunities: AI in Medical Imaging"
            subtitle="Exploring innovations and ethical considerations in healthcare AI" author="SN: 24076677" />

        <div class="article-content">
            <article-section id="niivue-demo" title="NiiVue Demo">
                <p>
                    Below is an interactive demo of NiiVue, showcasing its ability to visualize medical imaging data.
                </p>
                <div class="niivue-container">
                    <canvas id="niivue-canvas" style="width: 100%; height: 600px;"></canvas>
                </div>
            </article-section>
            <article-section id="introduction" title="Introduction">
                <p>
                    Artificial intelligence is transforming healthcare, with medical imaging at the forefront
                    of this revolution. AI promises to enhance diagnostics, improve treatment planning,
                    and ultimately lead to better patient outcomes. However, significant barriers remain,
                    particularly in data availability and privacy protection.
                </p>
                <div class="hero-image">
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3"
                        alt="Medical AI imaging concept" />
                    <p class="image-caption">AI-assisted analysis of medical scans</p>
                </div>
            </article-section>

            <article-section id="data-scarcity" title="Data Scarcity in Medical Imaging">
                <p>
                    Medical imaging AI models require vast, diverse datasets to achieve high accuracy.
                    However, acquiring such data is fraught with difficulties:
                </p>
                <div class="key-points">
                    <div class="key-point">
                        <div class="point-header">
                            <span class="point-icon">📊</span>
                            <h3>Annotated Data Limitations</h3>
                        </div>
                        <p>
                            Unlike general-purpose images, medical scans demand expert annotations from specialists
                            like radiologists, which are time-consuming and costly. For rare diseases, datasets may
                            consist of only a few hundred cases—insufficient for robust model training.
                        </p>
                    </div>
                    <div class="key-point">
                        <div class="point-header">
                            <span class="point-icon">⚖️</span>
                            <h3>Bias and Representativeness</h3>
                        </div>
                        <p>
                            Many publicly available datasets skew toward populations in high-income countries, leading
                            to models that underperform for underrepresented groups. A 2023 study revealed that melanoma
                            detection algorithms trained predominantly on lighter skin tones showed 30% lower accuracy
                            for darker-skinned patients.
                        </p>
                    </div>
                </div>
            </article-section>

            <article-section id="privacy-concerns" title="Privacy Concerns and Regulatory Hurdles">
                <p>
                    Medical imaging data is inherently sensitive, often containing personally identifiable information.
                    Strict regulations like GDPR and HIPAA restrict data sharing across institutions, stifling
                    collaboration.
                    Even anonymization techniques may fail to prevent re-identification.
                </p>
                <div class="diagram">
                    <img src="https://www.researchgate.net/publication/341577501/figure/fig1/AS:896382728970242@1590747889179/A-diagram-depicting-privacy-preserving-machine-learning-in-health-care-A-trusted-third.png"
                        alt="Privacy preservation in healthcare AI" />
                    <p class="image-caption">Privacy preservation techniques in healthcare AI systems</p>
                </div>
            </article-section>

            <article-section id="ml-technologies" title="Machine Learning Technologies">
                <h3 class="subsection-title">Federated Learning: Collaboration Without Data Sharing</h3>
                <p>
                    Federated learning enables hospitals to collaboratively train AI models without exchanging raw data.
                    Instead, models are trained locally on institutional servers, and only model updates are shared.
                    NVIDIA Clara's FL platform has been adopted by 20+ U.S. hospitals to improve liver tumor
                    segmentation
                    accuracy by 15% while maintaining compliance with HIPAA.
                </p>

                <h3 class="subsection-title">Synthetic Data: Bridging the Gap</h3>
                <p>
                    Generative adversarial networks (GANs) and diffusion models are being used to create synthetic
                    medical images that mimic real patient data. Projects like MIT's SynthMed have generated
                    synthetic brain MRIs with realistic tumors, enabling researchers to augment small datasets.
                </p>

                <div class="diagram">
                    <img src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-022-13636-w/MediaObjects/41598_2022_13636_Fig1_HTML.png"
                        alt="GAN-based synthetic data generation" />
                    <p class="image-caption">Synthetic data generation using GANs</p>
                </div>
            </article-section>

            <article-section id="ethical-issues" title="Ethical Considerations">
                <p>
                    Beyond technical challenges, AI in medical imaging raises important ethical, regulatory, and
                    societal questions:
                </p>
                <div class="key-points">
                    <div class="key-point">
                        <div class="point-header">
                            <span class="point-icon">⚠️</span>
                            <h3>Bias and Fairness</h3>
                        </div>
                        <p>
                            AI models trained on biased data risk exacerbating healthcare disparities. A 2024 audit
                            found that
                            lung nodule detection accuracy dropped by 22% for Asian patients compared to Caucasian
                            cohorts.
                        </p>
                    </div>
                    <div class="key-point">
                        <div class="point-header">
                            <span class="point-icon">📜</span>
                            <h3>Regulatory Frameworks</h3>
                        </div>
                        <p>
                            Regulators are racing to keep pace with AI innovation. The FDA's Software as a Medical
                            Device (SaMD)
                            guidelines now mandate rigorous validation for AI tools, including real-world performance
                            monitoring.
                        </p>
                    </div>
                    <div class="key-point">
                        <div class="point-header">
                            <span class="point-icon">🔍</span>
                            <h3>Transparency and Trust</h3>
                        </div>
                        <p>
                            A 2025 survey found that 62% of patients distrust AI for critical diagnoses, citing "black
                            box" decision-making.
                            Explainable AI tools aim to demystify predictions by highlighting regions of interest in
                            scans.
                        </p>
                    </div>
                </div>
            </article-section>

            <article-section id="conclusion" title="The Path Forward">
                <p>
                    Despite these challenges, the potential of AI in medical imaging remains immense. By addressing
                    data scarcity, privacy concerns, and ethical considerations, we can build AI systems that truly
                    enhance healthcare accessibility and quality worldwide.
                </p>
                <p>
                    The future lies in collaborative approaches that bring together technologists, healthcare
                    professionals,
                    policymakers, and patient advocates to create responsible, effective, and equitable AI solutions.
                </p>
            </article-section>
        </div>

        <footer-component />
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import ArticleHeader from './ArticleHeader.vue';
import ArticleSection from './ArticleSection.vue';
import FooterComponent from './Footer.vue';

// Import NiiVue
import { Niivue } from '@niivue/niivue';

// Initialize NiiVue on mount
onMounted(() => {
    const nv = new Niivue({
        isColorbar: true, // Show colorbar
        isOrientationCube: true, // Show orientation cube
        backColor: [0, 0, 0, 1], // Background color
    });

    // Attach NiiVue to the canvas
    nv.attachTo('niivue-canvas');

    // Load a sample volume
    const volumeList = [
        {
            url: 'https://niivue.github.io/niivue-demo-images/mni152.nii.gz', // Sample NIfTI file
            colormap: 'gray', // Colormap
            opacity: 1.0, // Opacity
            visible: true, // Visibility
        },
    ];

    nv.loadVolumes(volumeList);
});
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