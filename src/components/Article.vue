<template>
    <div class="article-container">
        <article-header title="Bridging the Data Gap: Leveraging AI to Address Data Scarcity in Medical Imaging"
            subtitle="Github Respositoties :https://github.com/yushiran/ELEC0139_BLOG_SN24076607"
            author="SN: 24076607" />

        <div class="article-content">
            <article-section id="application-domain" title="1. Application Domain and Challenges">
                <sub-section id="application-domin-medical-imaging" title="The Application Domain: Medical Imaging">
                    <p>
                        Medical imaging is a critical field in healthcare, providing essential tools for diagnosing and
                        monitoring diseases. It encompasses various imaging modalities, including X-rays, CT scans, MRI,
                        and ultrasound, each with its unique strengths and applications.
                    </p>
                    <p>
                        The segmentation process plays a fundamental role in medical image analysis by enabling
                        pixel-level identification of anatomical structures, facilitating precise diagnosis and
                        personalized treatment
                        <Reference citationKey="kumarTripleClippedHistogramBased2021" />. CT imaging, for instance, has
                        been extensively used in diagnosing lung infections during the COVID-19 pandemic
                        <Reference citationKey="LIU2020244" />
                        <Reference citationKey="9446143" />
                        <Reference citationKey="YI2019101552" />. While manual segmentation by radiologists is accurate,
                        it remains labor-intensive, time-consuming, and costly, driving demand for automated methods
                        using deep learning
                        <Reference citationKey="TAJBAKHSH2020101693" />. These computational approaches address
                        efficiency challenges while maintaining the diagnostic value that makes medical imaging
                        indispensable in contemporary healthcare systems.
                    </p>
                    <div class="niivue-container">
                        <canvas id="niivue-canvas" style="width: 50%; height: 300px;"></canvas>
                    </div>

                    <p class="image-caption">MNI152 brain MRI image. Click and drag to rotate; scroll to zoom.</p>

                </sub-section>
                <sub-section id="challenges-in-medical-imaging"
                    title="Current Challenges: Data Scarcity and Its Implications">
                    <p>
                        Medical image segmentation has witnessed tremendous progress with deep learning, yet its success
                        remains heavily dependent on the availability of large-scale, high-quality annotated datasets.
                        Unfortunately, several persistent challenges hinder the widespread deployment of AI models in
                        medical imaging, especially in real-world clinical environments.
                    </p>
                    <sub-sub-section id="limited-annotated-datasets" title="Limited Annotated Datasets">
                        <p>
                            Obtaining labeled medical imaging data is a labor-intensive and costly process, typically
                            requiring the expertise of trained radiologists and high-end equipment. Manual annotation,
                            such as pixel-wise segmentation, is especially time-consuming. As a result, the availability
                            of large annotated datasets remains limited​. Moreover, privacy regulations and patient
                            confidentiality further restrict data sharing and public
                            availability​
                            <Reference citationKey="TAJBAKHSH2020101693" />.
                        </p>
                    </sub-sub-section>
                    <sub-sub-section id="bias-and-generalizability-issues" title="Bias and Generalizability Issues">
                        <p>
                            Even when labeled datasets are available, they are often limited in diversity, both
                            demographically and technically (e.g., variation in scanner models or acquisition
                            protocols). This lack of heterogeneity leads to significant distribution shift problems when
                            models trained on one dataset are deployed on another, ultimately affecting their
                            generalization performance across populations and institutions​.
                        </p>
                    </sub-sub-section>
                    <sub-sub-section id="resource-constraints" title="Resource Constraints">
                        <p>
                            Healthcare systems in low- and middle-income regions face acute shortages in data collection
                            infrastructure and medical imaging resources. The high costs of annotation and hardware
                            requirements for data processing place an additional burden on AI development in such
                            contexts. While deep learning architectures like U-Nets are widely adopted in academic
                            research, deploying them in under-resourced settings remains a formidable challenge​.
                        </p>
                    </sub-sub-section>
                </sub-section>
                <sub-section id="the-case-for-technologies" title="The Case for AI/ML Technologies">
                    <p>
                        This subsection makes the case for adopting machine learning and artificial intelligence
                        technologies to address the challenges and improve outcomes in the application domain.
                    </p>
                    <sub-sub-section id="efficient-data-utilization" title="Efficient Data Utilization">
                        <p>
                            AI techniques, especially deep learning architectures like U-Nets, are capable of learning
                            meaningful spatial and semantic patterns even from limited labeled data. When designed
                            appropriately, such models can achieve strong segmentation performance despite inherent
                            challenges like noise and distribution shift​
                            <Reference citationKey="vermaRoleDeepLearning2023" />. Moreover, hybrid architectures such
                            as U-Net++ and
                            attention mechanisms have further improved efficiency and robustness​
                            <Reference citationKey="zhouUNetNestedUNet2018" />.
                        </p>
                    </sub-sub-section>
                    <sub-sub-section id="synthetic-data-generation" title="Synthetic Data Generation">
                        <p>
                            Synthetic data generation using generative adversarial networks (GANs) is one of the most
                            promising avenues for alleviating labeled data scarcity. For instance, models like
                            Cycle-GANs and conditional GANs have been used to generate high-fidelity synthetic MRI and
                            ultrasound images that closely resemble real samples, including segmentation labels. These
                            synthetic datasets, when used in model training, have shown comparable performance to real
                            data
                            <Reference citationKey="9324763" />
                            <Reference citationKey="shinMedicalImageSynthesis2018" />​.

                        </p>
                        <div class="video-container">
                            <iframe 
                                width="70%" 
                                height="auto" 
                                style="aspect-ratio: 16/9;" 
                                src="https://www.youtube.com/embed/YHTSdd8-bnc?si=P-RpcNtfG3P1h1bj" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <!-- <p class="video-caption">CycleGAN for MRI image synthesis. The model learns to translate between
                            different MRI modalities, generating realistic images that can be used for training and
                            evaluation.</p> -->
                    </sub-sub-section>
                    <sub-sub-section id="self-supervised-learning" title="Self-Supervised Learning">
                        <p>
                            Self-supervised learning (SSL) has gained traction in medical image analysis due to its
                            ability to leverage vast amounts of unlabeled data. Techniques such as context restoration,
                            multi-modal feature fusion, and attention-based pseudo labeling enable models to learn
                            robust representations without requiring ground-truth masks​
                            <Reference citationKey="CHAITANYA2021101934" />
                            <Reference citationKey="zhengHierarchicalSelfsupervisedLearning2021" />.
                        </p>
                    </sub-sub-section>
                </sub-section>

            </article-section>

            <article-section id="solutions-to-data-scarcity-in-medical-imaging"
                title="2. AI/ML Solutions to Data Scarcity in Medical Imaging">
                <sub-section id="self-supervised-learning" title="Self-Supervised Learning (SSL)">
                    <p>
                        Self-supervised learning (SSL) enables the use of large amounts of unlabeled data to pretrain
                        neural networks by defining pretext tasks—artificial supervision signals derived from the data
                        itself. In medical imaging, this is particularly valuable, as obtaining labeled data is
                        expensive and requires expert input​.

                        Chen et al. (2019)
                        <Reference citationKey="chenSelfsupervisedLearningMedical2019" /> proposed a context restoration
                        strategy tailored to the characteristics of medical images. The method corrupts the spatial
                        arrangement of an image by swapping randomly selected patches and then trains a convolutional
                        neural network (CNN) to restore the original image. This process forces the network to learn
                        semantic-level image representations, which are transferable to downstream tasks such as
                        classification, localization, and segmentation​.

                        Context restoration SSL offers key advantages in medical imaging applications. The method
                        encourages networks to learn semantic representations by correcting structural inconsistencies.
                        The learned features can effectively initialize both encoder and decoder components of
                        downstream CNNs, which is particularly valuable for segmentation tasks requiring image-to-image
                        mapping. This approach is also implementation-friendly, requiring minimal modifications to
                        existing architectures and training pipelines, facilitating adoption in contexts where annotated
                        data is scarce.
                    </p>
                    <sub-sub-section id="methodology" title="Methodology">
                        <p>
                            Let
                            <KatexInline formula="\mathcal{X} = \{x_1, x_2, \ldots, x_N\}" /> be a set of unlabeled
                            medical images. A
                            corruption function
                            <KatexInline formula="\mathcal{R}" /> generates a disordered image
                            <KatexInline formula="\tilde{x}_i" />:
                            <KatexDisplay formula="\tilde{x}_i = \mathcal{R}(x_i)" />
                            A CNN model
                            <KatexInline formula="g(\cdot)" /> has two parts:
                            <KatexDisplay formula="x_i = g(\tilde{x}_i) \approx f^{-1}(\tilde{x}_i)" />
                            The training objective is to minimize the pixel-wise L2 reconstruction loss:
                            <KatexDisplay
                                formula="\mathcal{L}_{\text{SSL}} = \left\| x_i - g(\tilde{x}_i) \right\|_2^2" />
                        </p>

                        <p>
                            The corruption function
                            <KatexInline formula="\mathcal{R}" /> randomly selects and swaps image patches:
                        </p>

                        <div class="algorithm-container">
                            <div class="algorithm-box">
                                <div class="algorithm-title">Algorithm 1 Image Context Disordering</div>
                                <div class="algorithm-content">
                                    <div class="algorithm-line">
                                        <span class="line-number">1:</span> <span class="algorithm-keyword">Input:</span> original image <KatexInline formula="x_i" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">2:</span> <span class="algorithm-keyword">Output:</span> image with disordered context <KatexInline formula="\tilde{x}_i" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">3:</span> <span class="algorithm-keyword">for</span> <KatexInline formula="t = 1" />  to  <KatexInline formula="T" /> <span class="algorithm-keyword">do</span>
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">4:</span> <span class="algorithm-indent"></span>randomly select patch <KatexInline formula="p_1 \in x_i" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">5:</span> <span class="algorithm-indent"></span>randomly select patch <KatexInline formula="p_2 \in x_i" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">6:</span> <span class="algorithm-indent"></span><span class="algorithm-keyword">if</span> <KatexInline formula="p_1 \cap p_2 = \emptyset" /> <span class="algorithm-keyword">then</span>
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">7:</span> <span class="algorithm-indent"></span><span class="algorithm-indent"></span>swap <KatexInline formula="p_1" /> and <KatexInline formula="p_2" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">8:</span> <span class="algorithm-indent"></span><span class="algorithm-keyword">end if</span>
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">9:</span> <span class="algorithm-keyword">end for</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            The CNN model
                            <KatexInline formula="g(\cdot)" /> has two parts:
                        </p>

                        <div class="diagram" style="max-width: 70%; margin: 1rem auto;">
                            <img src="../assets/General_CNN_architecture_for_the_context_restoration_self_supervised_learning.jpg"
                                alt="General CNN architecture for context restoration SSL">
                            <p class="image-caption">General CNN architecture for context restoration SSL. Blue, green,
                                and orange strides represent convolutional, downsampling, and upsampling units,
                                respectively.</p>
                        </div>

                        <ul>
                            <li><strong>Analysis Part:</strong> an encoder that extracts features from the disordered
                                image. It may include convolutional layers, residual blocks
                                <Reference citationKey="He2015DeepRL" />, or inception modules
                                <Reference citationKey="Szegedy2015RethinkingTI" />.
                            </li>
                            <li><strong>Reconstruction Part:</strong> a decoder that upsamples the features and
                                reconstructs the image in correct spatial order.</li>
                        </ul>

                        <div class="diagram" style="max-width: 50%; margin: 1rem auto;">
                            <img src="../assets/Generating_training_images_for_self_supervised_context_disordering.jpg"
                                alt="Examples of training images for self-supervised context disordering">
                            <p class="image-caption">Examples of training images for self-supervised context
                                disordering. The second column highlights swapped patches after the first iteration.</p>
                        </div>
                    </sub-sub-section>
                    <sub-sub-section id="applications-and-evaluation" title="Applications and Evaluation">
                        <ul>
                            <li><strong>Classification:</strong> On fetal ultrasound images, context restoration
                                pretraining improved the F1-score by over 7 percentage points compared to random
                                initialization with only 25% of training data​.</li>
                            <li><strong>Localization:</strong> For abdominal organ localization in CT images, models
                                initialized via context restoration outperformed those trained with auto-encoders or
                                relative position tasks, especially under data-limited settings​.</li>
                            <li><strong>Segmentation:</strong> In brain tumor segmentation using multi-modal MRI, models
                                with context restoration pretraining achieved higher Dice scores and lower Hausdorff
                                distances than all other SSL and baseline methods​.</li>
                        </ul>
                    </sub-sub-section>
                </sub-section>

                <sub-section id="reinforcement-learning" title="Reinforcement Learning (RL)">
                    <p>
                        Reinforcement Learning (RL) is a powerful machine learning paradigm in which an agent learns to
                        interact with its environment by receiving feedback in the form of rewards. Unlike supervised
                        learning, which relies heavily on large-scale annotated datasets, RL can operate effectively
                        with minimal labeled data, making it particularly attractive in medical imaging domains where
                        data scarcity is a major challenge
                        <Reference citationKey="huReinforcementLearningMedical2023" />.
                    </p>
                    <p>
                        An RL framework is typically defined by a set of core components: <strong>state</strong> (the
                        environment observation), <strong>action</strong> (possible moves the agent can make),
                        <strong>reward</strong> (feedback signal guiding learning), and <strong>policy</strong> (the
                        decision-making strategy). Depending on whether the environment is explicitly modeled, RL
                        approaches are broadly categorized into <em>model-free</em> and <em>model-based</em> methods.
                        Model-free methods, such as DQN
                        <Reference citationKey="mnihHumanlevelControlDeep2015a" /> and A2C
                        <Reference citationKey="Schulman2017ProximalPO" />
                        <Reference citationKey="Mnih2016AsynchronousMF" />, learn policies directly through interaction,
                        while model-based approaches attempt to learn a transition model to improve sample
                        efficiency—particularly important in low-data regimes.
                    </p>
                    <div class="video-container">
                        <iframe 
                            width="70%" 
                            height="auto" 
                            style="aspect-ratio: 16/9;" 
                            src="https://www.youtube.com/embed/vXtfdGphr3c?si=g_E4nt8O0P03Fxum" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <p class="video-caption">Demonstration of reinforcement learning applied to medical image analysis, showing how agents learn optimal policies through environmental feedback.</p>
                    <sub-sub-section id="rl-methodology" title="Methodology">
                        <p>
                            Reinforcement learning problems are often modeled as a Markov Decision Process (MDP),
                            defined by a tuple
                            <KatexInline formula="\langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma
                            \rangle" />, where:
                        </p>
                        <ul>
                            <li>
                                <KatexInline formula="\mathcal{S}" /> is the set of possible states,
                            </li>
                            <li>
                                <KatexInline formula="\mathcal{A}" /> is the set of actions,
                            </li>
                            <li>
                                <KatexInline formula="\mathcal{P}(s' | s, a)" /> is the transition probability function,
                            </li>
                            <li>
                                <KatexInline formula="\mathcal{R}(s, a)" /> is the reward received after taking action
                                <KatexInline formula="a" /> in state
                                <KatexInline formula="s" />,
                            </li>
                            <li>
                                <KatexInline formula="\gamma \in [0, 1]" /> is the discount factor for future rewards.
                            </li>
                        </ul>
                        <p>
                            The goal is to learn a policy
                            <KatexInline formula="\pi(a|s)" /> that maximizes the expected cumulative reward:
                            <KatexDisplay
                                formula="J(\pi) = \mathbb{E}_{\pi} \left[ \sum_{t=0}^{\infty} \gamma^t r_t \right]" />
                        </p>
                        <p>
                            The value function for a state under policy
                            <KatexInline formula="\pi" /> is:
                            <KatexDisplay
                                formula="V^{\pi}(s) = \mathbb{E}_{\pi} \left[ \sum_{t=0}^{\infty} \gamma^t r_t \mid s_0 = s \right]" />
                        </p>
                        <p>
                            The action-value function (Q-function) is:
                            <KatexDisplay formula="Q^{\pi}(s, a) = \mathbb{E}_{\pi} \left[ \sum_{t=0}^{\infty} \gamma^t r_t \mid s_0 = s, a_0 =
                            a \right]" />
                        </p>
                        <p>
                            An optimal policy
                            <KatexInline formula="\pi^*" /> satisfies:
                            <KatexDisplay formula="Q^{\pi^*}(s, a) = \max_{\pi} Q^{\pi}(s, a)" />
                            This formulation enables reinforcement learning agents to develop optimal decision-making
                            strategies through experiential learning, significantly reducing dependence on labeled
                            datasets. Such capability addresses a critical need in medical imaging applications like
                            classification, registration, and synthesis, where annotated data remains scarce.
                        </p>

                        <div class="algorithm-container">
                            <div class="algorithm-box">
                                <div class="algorithm-title">Algorithm 2 Generic Reinforcement Learning Procedure</div>
                                <div class="algorithm-content">
                                    <div class="algorithm-line">
                                        <span class="line-number">1:</span> <span class="algorithm-keyword">Input:</span> Environment <KatexInline formula="\mathcal{E}" />, initial policy <KatexInline formula="\pi_\theta" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">2:</span> Initialize policy parameters <KatexInline formula="\theta" /> randomly
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">3:</span> <span class="algorithm-keyword">for</span> each episode <span class="algorithm-keyword">do</span>
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">4:</span> <span class="algorithm-indent"></span>Initialize state <KatexInline formula="s_0" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">5:</span> <span class="algorithm-indent"></span><span class="algorithm-keyword">for</span> each step <KatexInline formula="t = 0, 1, 2, \dots" /> until terminal state <span class="algorithm-keyword">do</span>
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">6:</span> <span class="algorithm-indent"></span><span class="algorithm-indent"></span>Select action <KatexInline formula="a_t \sim \pi_\theta(a_t|s_t)" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">7:</span> <span class="algorithm-indent"></span><span class="algorithm-indent"></span>Execute <KatexInline formula="a_t" />, observe reward <KatexInline formula="r_t" /> and next state <KatexInline formula="s_{t+1}" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">8:</span> <span class="algorithm-indent"></span><span class="algorithm-indent"></span>Update policy parameters <KatexInline formula="\theta" /> using transition <KatexInline formula="(s_t, a_t, r_t, s_{t+1})" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">9:</span> <span class="algorithm-indent"></span><span class="algorithm-keyword">end for</span>
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">10:</span> <span class="algorithm-keyword">end for</span>
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">11:</span> <span class="algorithm-keyword">Output:</span> Trained policy <KatexInline formula="\pi_\theta" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            What distinguishes RL from traditional supervised approaches is its ability to learn
                            directly from environmental feedback rather than predefined labels. This fundamental
                            difference makes RL particularly valuable for medical imaging applications, where obtaining
                            high-quality labeled data remains costly and challenging.
                        </p>
                    </sub-sub-section>
                    <sub-sub-section id="rl-applications"
                        title="Applications of Reinforcement Learning in Medical Imaging">
                        <p>
                            RL has been successfully applied to a wide range of medical imaging tasks, including image
                            classification, landmark localization, lesion detection, segmentation, image registration,
                            and radiotherapy planning. These applications span multiple anatomical sites (e.g., brain,
                            lung, prostate) and imaging modalities (e.g., MRI, CT, ultrasound).
                        </p>

                        <div class="diagram" style="max-width: 70%; margin: 1rem auto;">
                            <img src="../assets/Blue.jpg" alt="Applications of RL in medical imaging">
                            <p class="image-caption">Blue box covers image analysis tasks; green box covers anatomical
                                sites; yellow box covers imaging modalities.</p>
                        </div>

                        <p>
                            Importantly, RL offers several key mechanisms to alleviate data scarcity in medical imaging:
                        </p>
                        <ul>
                            <li><strong>Minimal dependence on annotations:</strong> RL agents can learn optimal
                                behaviors by interacting with environments, reducing reliance on large-scale annotated
                                datasets.</li>
                            <li><strong>Higher sample efficiency:</strong> Especially in model-based RL, agents require
                                fewer interactions to achieve comparable performance, making them well-suited for small
                                datasets.</li>
                            <li><strong>Active data selection:</strong> RL-based frameworks have been proposed to select
                                the most informative samples for annotation or training, optimizing the use of limited
                                labeled data.</li>
                            <li><strong>Combination with generative models:</strong> RL can be integrated with GANs or
                                VAEs to select high-quality synthetic samples for augmentation, effectively enhancing
                                dataset diversity.</li>
                        </ul>
                        <p>
                            Overall, reinforcement learning not only reduces the burden of manual annotation but also
                            promotes the development of data-efficient, adaptive, and goal-driven medical image analysis
                            systems. Its ability to model complex sequential decision-making makes it a promising tool
                            for next-generation clinical AI.
                        </p>
                    </sub-sub-section>
                </sub-section>

                <sub-section id="generative-models" title="Generative Models for Medical Image Synthesis">
                    <p>
                        Data scarcity presents a significant challenge in developing robust AI systems for medical
                        imaging. Generative models—particularly Generative Adversarial Networks (GANs)
                        <Reference citationKey="Goodfellow2014GenerativeAN" /> and diffusion models
                        <Reference citationKey="SohlDickstein2015DeepUL" />—offer powerful solutions by synthesizing
                        realistic medical images that can augment limited datasets
                        <Reference citationKey="koetzierGeneratingSyntheticData2024" />. By learning the underlying
                        distribution of training data, these models generate novel samples that maintain critical
                        anatomical and pathological features while simultaneously preserving patient privacy.
                    </p>

                                        

                    <sub-sub-section id="gans" title="Generative Adversarial Networks (GANs)">
                        <p>
                            GANs consist of a generator that creates synthetic images and a discriminator that
                            distinguishes real from synthetic samples. Through adversarial training, these components
                            compete, gradually improving the generator's ability to produce realistic images
                            <Reference citationKey="Goodfellow2014GenerativeAN" />.
                        </p>
                        <p>
                            Upadhyay et al. (2024)
                            <Reference citationKey="wangGenerationSyntheticGround2022" /> developed a GAN-based
                            framework specifically for generating synthetic lung lesions resembling ground glass nodules
                            (GGNs). This approach directly addresses data scarcity in computer-aided diagnosis systems
                            by creating realistic synthetic nodules for training and evaluation purposes.
                        </p>
                        <p>
                            The generator employs a U-Net-like architecture to synthesize GGNs
                            <Reference citationKey="8099502" />, while the discriminator uses convolutional layers
                            <Reference citationKey="He2015DeepRL" /> to distinguish real from synthetic images. The loss
                            function combines adversarial loss with pixel-wise reconstruction loss to ensure both
                            realism and anatomical accuracy.
                        </p>
                        <p>
                            The model consists of three key components:
                        </p>
                        <ul>
                            <li><strong>Generator (G)</strong>: SRGAN-based network that synthesizes pulmonary nodules
                                from masked input images</li>
                            <li><strong>ROI Discriminator (D<sub>ROI</sub>)</strong>: ResNet-based classifier operating
                                on nodule regions (red path in Fig.)</li>
                            <li><strong>Whole Image Discriminator (D<sub>whole</sub>)</strong>: Parallel ResNet
                                evaluating full contextual realism (blue path)</li>
                        </ul>

                        <div class="diagram" style="max-width: 75%; margin: 1rem auto;">
                            <img src="../assets/GAN_model.jpg" alt="Model training pipeline for GAN">
                            <p class="image-caption">Model training pipeline. The generator synthesizes ground glass
                                nodules on the input background image. Two parallel discriminators then evaluate
                                realism: the ROI discriminator (red path) focuses only on the nodule region, while the
                                whole image discriminator (blue path) assesses the complete image context</p>
                        </div>

                        <p>
                            The composite loss combines adversarial and similarity terms for both discriminators:
                        </p>
                        <p>
                            <KatexDisplay formula="\mathcal{L}_{DSRGAN} = (\mathcal{L}_{sim} + \mathcal{L}_{adv})_{whole} + (\mathcal{L}_{sim}
                            + \mathcal{L}_{adv})_{ROI}" />
                        </p>
                        <p>
                            <KatexDisplay formula="\mathcal{L}_{adv} = \sum_{n=1}^N -\log D(G(x))" />
                        </p>
                        <p>
                            <KatexDisplay formula="\mathcal{L}_{sim}(x,y) = 1 - \frac{(2\mu_x\mu_y + C_1) + (\sigma_{xy} + C_2)}{(\mu_x^2 +
                            \mu_y^2 + C_1)(\sigma_x^2 + \sigma_y^2 + C_2)}" />
                        </p>
                        <p>
                            where
                            <KatexInline formula="\mu,\sigma" /> denote mean/variance of image patches,
                            <KatexInline formula="C_1,C_2" /> stabilize division.
                        </p>
                        <p>
                            The result of the GAN training is a generator capable of producing synthetic GGNs that
                            closely resemble real lesions, as shown in Figure below. The generated images can be used to
                            augment existing datasets, improving the performance of downstream tasks such as
                            classification and segmentation.
                        </p>

                        <div class="diagram" style="max-width: 60%; margin: 1rem auto;">
                            <img src="../assets/gan_result.jpg" alt="Examples of synthetic ground glass nodules">
                            <p class="image-caption">Examples of synthetic ground glass nodules (GGNs) evaluated by
                                physicians on a four-point authenticity scale. (a) High-quality synthetic GGNs
                                classified as "confidently real" by clinicians. (b) Lower-quality synthetic GGNs
                                classified as "leaning fake." (c) Actual GGNs from the original LIDC-IDRI dataset for
                                comparison.</p>
                        </div>
                    </sub-sub-section>
                    <sub-sub-section id="diffusion-models" title="Diffusion Models">
                        <p>
                            Diffusion models are a class of generative models that learn to generate data by reversing a
                            diffusion process. They have gained popularity due to their ability to produce high-quality
                            samples and have been successfully applied in various domains, including image synthesis,
                            text generation, and audio processing
                            <Reference citationKey="songScoreBasedGenerativeModeling2021" />.
                        </p>

                        <div class="huggingface-container">
                            <h4>Interactive Demo: EchoNet-Synthetic Echocardiogram Synthesis</h4>
                            <div class="demo-image" style="max-width: 75%; margin: 1rem auto;">
                                <img src="../assets/huggingface_demoimage.png" alt="Echocardiogram example image" />
                            </div>
                            <div class="demo-link">
                                <a href="https://huggingface.co/spaces/HReynaud/EchoNet-Synthetic" target="_blank" rel="noopener noreferrer" class="huggingface-button">
                                    <span class="button-icon">🤗</span>
                                    Try EchoNet-Synthetic on Hugging Face
                                </a>
                            </div>
                            <!-- <p class="demo-caption">
                                EchoNet-Synthetic is an implementation of diffusion models that can generate echocardiogram sequences.
                            </p> -->
                        </div>



                        <p>
                            Consider a sequence of positive noise scales
                            <KatexInline formula="0 < \beta_1, \dots, \beta_N < 1" />. For each
                            training data point
                            <KatexInline formula="x_0 \sim p_{data}(x)" />, construct a discrete Markov chain
                            <KatexInline formula="\{X_0,
                                X_1, \dots, X_N\}" /> where:
                        </p>
                        <p>
                            <KatexDisplay
                                formula="p(x_t|x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t}x_{t-1}, \beta_t\mathbf{I})" />
                        </p>
                        <p>
                            The marginal distribution after
                            <KatexInline formula="t" /> steps becomes:
                        </p>
                        <p>
                            <KatexDisplay formula="q_t(x_t|x_0) = \mathcal{N}(x_t; \sqrt{\alpha_t}x_0, (1-\alpha_t)\mathbf{I}), \quad
                                    \alpha_t = \prod_{s=1}^t (1-\beta_s)" />
                        </p>
                        <p>
                            The perturbed data distribution is defined as:
                        </p>
                        <p>
                            <KatexDisplay
                                formula="p_{\alpha_t}(\tilde{x}) = \int p_{data}(x)q_{\alpha_t}(\tilde{x}|x)dx" />
                        </p>
                        <p>
                            with noise scales chosen such that
                            <KatexInline formula="X_N \approx \mathcal{N}(0,\mathbf{I})" />.
                        </p>
                        <p>
                            The variational Markov chain in the reverse direction is parameterized as:
                        </p>
                        <p>
                            <KatexDisplay formula="p_\theta(x_{t-1}|x_t) = \mathcal{N}\left(x_{t-1}; \frac{1}{\sqrt{1-\beta_t}}(x_t +
                                    \beta_t s_\theta(x_t,t)), \beta_t\mathbf{I}\right)" />
                        </p>
                        <p>
                            After obtaining the optimal model
                            <KatexInline formula="s_\theta^*" />, samples's generation is as shown in
                            Algorithm 3 DDPM Ancestral Sampling.
                        </p>

                        <div class="algorithm-container">
                            <div class="algorithm-box">
                                <div class="algorithm-title">Algorithm 3 DDPM Ancestral Sampling</div>
                                <div class="algorithm-content">
                                    <div class="algorithm-line">
                                        <span class="line-number">1:</span> Initialize <KatexInline formula="x_N \sim \mathcal{N}(0,\mathbf{I})" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">2:</span> <span class="algorithm-keyword">for</span> <KatexInline formula="t = N" /> downto <KatexInline formula="1" /> <span class="algorithm-keyword">do</span>
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">3:</span> <span class="algorithm-indent"></span><KatexInline formula="x_{t-1} = \frac{1}{\sqrt{1-\beta_t}}(x_t + \beta_t s_\theta^*(x_t,t)) + \sqrt{\beta_t}z_t" />, <KatexInline formula="z_t \sim \mathcal{N}(0,\mathbf{I})" />
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">4:</span> <span class="algorithm-keyword">end for</span>
                                    </div>
                                    <div class="algorithm-line">
                                        <span class="line-number">5:</span> Return <KatexInline formula="x_0" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="diagram" style="max-width: 75%; margin: 1rem auto;">
                            <img src="../assets/diffusion_model.jpg" alt="Schematic overview of a diffusion model">
                            <p class="image-caption">A schematic overview of a diffusion model in training and sampling
                                settings. In the top row, the diffusion model is trained and creates a Markov chain to
                                add Gaussian noise to the real images, resulting in a noise vector z'. The model then
                                reverses the Markov chain by predicting the next state of the image from the current
                                noisy state, which is equivalent to denoising the image. During sampling (bottom row),
                                the model can generate synthetic images by starting from a random noise vector and
                                applying the reverse Markov chain.</p>
                        </div>

                        <p>
                            Diffusion models are particularly well-suited for medical image generation due to
                            their ability to produce high-quality, diverse, and anatomically accurate synthetic
                            images. Their iterative denoising process ensures fine-grained control over the
                            generated data, preserving critical medical details. Additionally, diffusion models
                            are robust to noise and can effectively model complex data distributions, making
                            them ideal for handling the variability and precision required in medical imaging.
                            These characteristics make diffusion models a powerful tool for augmenting datasets,
                            improving model generalization, and addressing data scarcity challenges in medical
                            imaging applications.
                        </p>
                        
                        
                    </sub-sub-section>
   
                </sub-section>

            </article-section>

            <article-section id="ethical-considerations"
                title="3. Ethical Considerations in Applying AI to Medical Imaging">
                <p>
                    The integration of AI into medical imaging has yielded impressive results, but also raises several
                    ethical concerns. These issues must be thoroughly addressed to ensure safe, equitable, and
                    trustworthy deployment of AI systems in healthcare.
                </p>

                <sub-section id="data-privacy-and-security" title="Data Privacy and Security">
                    <p>
                        Medical imaging data contains sensitive personal health information protected by regulations
                        like HIPAA (US) and GDPR (Europe), which restrict data sharing and access. These constraints
                        significantly impede AI model development in healthcare
                        <Reference citationKey="koetzierGeneratingSyntheticData2024" />.
                    </p>
                    <p>
                        Synthetic data generation techniques, as discussed earlier, offer an elegant solution to these
                        privacy challenges. By creating artificial medical images that maintain the statistical
                        properties and clinical relevance of real data without containing actual patient information,
                        these approaches effectively address privacy concerns:
                    </p>
                    <ul>
                        <li><strong>Risk Mitigation</strong>: Synthetic data eliminates the risk of exposing protected
                            health information (PHI), as the generated images do not correspond to real patients. This
                            significantly reduces the regulatory burden and potential legal liability associated with
                            data breaches.</li>
                        <li><strong>Enhanced Data Sharing</strong>: Synthetic datasets can be more freely shared across
                            institutions and international boundaries, facilitating collaborative research and
                            development without privacy impediments.</li>
                        <li><strong>Data Augmentation</strong>: As demonstrated in our GAN and diffusion model
                            implementations, synthetic images can augment limited real datasets, addressing both privacy
                            concerns and data scarcity simultaneously.</li>
                    </ul>
                    <p>
                        However, synthetic data is not without its own security considerations. Particularly, models
                        like GANs might inadvertently memorize training examples, potentially leading to data leakage if
                        not properly safeguarded. Additionally, adversarial attacks on these generative models could
                        potentially extract sensitive information from the training data. Rigorous security measures,
                        including proper model evaluation for memorization, differential privacy techniques during
                        training, and robust access controls, must be implemented to ensure synthetic data approaches
                        maintain strong privacy guarantees
                        <Reference citationKey="koetzierGeneratingSyntheticData2024" />.
                    </p>
                    <p>
                        The self-supervised learning approaches described earlier provide another privacy-preserving
                        advantage: they can extract valuable information from unlabeled data without requiring detailed
                        annotations that might contain sensitive information. By learning from the inherent structure of
                        images rather than explicit labels, techniques like context restoration minimize exposure to
                        privacy-sensitive metadata.
                    </p>
                </sub-section>

                <sub-section id="bias-and-fairness" title="Bias and Fairness">
                    <p>
                        AI systems for medical imaging are inherently shaped by the data used to train them, making them
                        susceptible to perpetuating or even amplifying existing biases in healthcare. This is
                        particularly concerning in the context of data scarcity, where models might be developed using
                        imbalanced or non-representative datasets
                        <Reference citationKey="koetzierGeneratingSyntheticData2024" />.
                    </p>
                    <p>
                        Several types of bias can manifest in medical imaging AI:
                    </p>
                    <ul>
                        <li><strong>Demographic Bias</strong>: When training data lacks diversity across age, gender,
                            ethnicity, or socioeconomic factors, resulting models may perform disproportionately poorly
                            on underrepresented groups. For example, models trained predominantly on data from certain
                            ethnic populations may show reduced accuracy when applied to different demographic groups.
                        </li>
                        <li><strong>Technical Bias</strong>: Variations in imaging equipment, acquisition protocols, and
                            institutional practices introduce substantial heterogeneity in medical images. Models
                            trained on data from high-end scanners may perform poorly on images from lower-resource
                            settings, potentially exacerbating healthcare disparities.</li>
                        <li><strong>Selection Bias</strong>: The process of collecting training data often introduces
                            sampling biases. For instance, data from academic medical centers may overrepresent rare or
                            complex cases compared to community hospitals.</li>
                    </ul>
                    <p>
                        The generative approaches discussed earlier, while addressing data scarcity, introduce their own
                        fairness considerations. GANs and diffusion models tend to capture and potentially amplify
                        patterns present in their training data. If the training data contains biases, synthetic data
                        generated from these models may inherently encode and propagate these biases, potentially
                        worsening the problem rather than solving it.
                    </p>
                    <p>
                        To mitigate these risks, synthetic data generation should be specifically designed with fairness
                        in mind:
                    </p>
                    <ul>
                        <li><strong>Balanced Data Generation</strong>: Generative models can be explicitly conditioned
                            to produce balanced distributions across demographic factors or modalities, potentially
                            oversampling underrepresented groups.</li>
                        <li><strong>Fairness-Aware Training</strong>: Incorporating fairness constraints or adversarial
                            debiasing techniques into generative model training can help reduce the transfer of biases
                            to synthetic data.</li>
                        <li><strong>Diverse Data Sources</strong>: Incorporating data from diverse sites and
                            populations, even if in small quantities, can help generative models capture broader
                            variations in anatomical structures and pathologies.</li>
                    </ul>
                </sub-section>

                <sub-section id="transparency-and-explainability" title="Transparency and Explainability">
                    <p>
                        The complex "black-box" nature of advanced AI systems in medical imaging creates significant
                        barriers to clinical adoption and regulatory approval. Deep generative networks and
                        self-supervised learning approaches typically lack transparency in their internal processes,
                        making it challenging for healthcare professionals to understand and trust their outputs
                        <Reference citationKey="vermaRoleDeepLearning2023" />.
                    </p>
                    <p>
                        In medical contexts, where decisions directly impact patient outcomes, this lack of
                        explainability is particularly problematic:
                    </p>
                    <ul>
                        <li><strong>End-to-end Generative Models</strong>: GANs and diffusion models operate as black
                            boxes, taking inputs and producing synthetic images through complex transformations that are
                            not easily interpretable. The multi-layer, non-linear nature of these models makes it
                            virtually impossible to trace exactly how specific features in the generated images were
                            constructed.</li>
                        <li><strong>Self-Supervised Learning</strong>: While SSL methods effectively learn from
                            unlabeled data, the representations they develop are often abstract and difficult to map to
                            clinically meaningful features. The pretext tasks (like context restoration) may have little
                            direct relationship to the downstream diagnostic tasks.</li>
                        <li><strong>Reinforcement Learning</strong>: Among the approaches discussed, RL may offer
                            slightly better explainability through its explicit reward functions and state-action
                            mappings, but complex neural network policies still suffer from opacity in their internal
                            reasoning.</li>
                    </ul>
                    <p>
                        To address these challenges, several approaches are being developed to enhance the
                        explainability of AI in medical imaging:
                    </p>
                    <ul>
                        <li><strong>Counterfactual Explanations</strong>: Generating "what-if" scenarios that
                            demonstrate how changes to the input would affect the output helps users understand the
                            model's decision boundaries.</li>
                        <li><strong>Layer-wise Relevance Propagation</strong>: This technique decomposes predictions
                            into contributions from individual input features, creating heatmaps that visualize
                            important regions.</li>
                        <li><strong>Feature Disentanglement</strong>: Particularly for generative models, encouraging
                            the separation of clinically relevant features (e.g., anatomical structures, pathologies)
                            into interpretable latent dimensions improves transparency.</li>
                    </ul>
                </sub-section>

                <sub-section id="accountability-and-governance" title="Accountability and Governance">
                    <p>
                        In medical imaging, where AI impacts patient care, robust accountability and governance
                        frameworks are critical. The discussed AI approaches—generative models, self-supervised
                        learning, and reinforcement learning—pose unique challenges, especially in data-scarce contexts.
                    </p>
                    <p>
                        Governance of synthetic data requires attention to:
                    </p>
                    <ul>
                        <li><strong>Quality Control</strong>: Ensure synthetic images meet clinical standards and
                            represent pathological features accurately.</li>
                        <li><strong>Provenance Tracking</strong>: Maintain records distinguishing real and synthetic
                            data for transparency.</li>
                        <li><strong>Continuous Evaluation</strong>: Regularly reassess models trained on synthetic data
                            to ensure reliability.</li>
                    </ul>
                    <p>
                        For self-supervised and reinforcement learning:
                    </p>
                    <ul>
                        <li><strong>Pretext Task Validation</strong>: Ensure self-supervised tasks produce clinically
                            relevant representations.</li>
                        <li><strong>Reward Function Oversight</strong>: Design RL reward functions collaboratively with
                            clinicians to ensure meaningful outcomes.</li>
                        <li><strong>Update Protocols</strong>: Define clear guidelines for model updates and
                            recertification.</li>
                    </ul>
                    <p>
                        Multidisciplinary committees and international standards are essential to ensure safety,
                        efficacy, and equity in deploying AI in data-scarce medical domains.
                    </p>
                </sub-section>
            </article-section>

            <article-section id="conclusion" title="Conclusion">
                <p>
                    This paper explored how artificial intelligence and machine learning technologies can address data
                    scarcity challenges in medical imaging. We examined three key approaches: self-supervised learning,
                    reinforcement learning, and generative models. Self-supervised learning effectively leverages
                    unlabeled data through pretext tasks like context restoration. Reinforcement learning offers
                    learning from limited feedback rather than extensive labeled datasets. Generative models, including
                    GANs and diffusion models, synthesize realistic medical images to augment limited datasets while
                    preserving patient privacy.
                </p>
                <p>
                    While these technologies show great promise, ethical considerations around privacy, bias,
                    transparency, and governance remain crucial. With continued research and responsible implementation,
                    AI technologies can help overcome data limitations, potentially improving healthcare access and
                    outcomes across diverse clinical settings.
                </p>
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
import KatexInline from './KatexInline.vue';
import KatexDisplay from './KatexDisplay.vue';

import { onMounted } from 'vue';
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
    margin: 2rem auto;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.9rem var(--shadow-color);
    max-width: 700px;
    width: 100%;
    aspect-ratio: 16 / 9;
}

@media (max-width: 768px) {
    .niivue-container {
        max-width: 100%;
    }
    
    .niivue-container canvas {
        width: 100% !important;
        height: auto !important;
    }
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

.article-content ul {
    max-width: 85ch;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
}

.article-content ul li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
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
    max-width: 800px;
    margin: 25px auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px var(--shadow-color);
    display: flex;
    justify-content: center;
}

.video-container video {
    width: 100%;
    height: auto;
}

.algorithm-container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    width: 100%;
}

.algorithm-box {
    width: 90%;
    max-width: 600px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 0.5rem 0;
}

.algorithm-title {
    font-weight: bold;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #000;
}

.algorithm-content {
    padding: 0.5rem 0;
}

.algorithm-line {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.25rem;
    line-height: 1.6;
}

.line-number {
    min-width: 1.5rem;
    margin-right: 0.5rem;
}

.algorithm-keyword {
    font-weight: bold;
    color: var(--text-color);
}

.algorithm-indent {
    display: inline-block;
    width: 2rem;
}

.huggingface-container {
    margin: 2.5rem auto;
    width: 95%;
    max-width: 900px;
    background-color: var(--card-background);
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0.25rem 0.75rem var(--shadow-color);
}

.huggingface-container h4 {
    text-align: center;
    margin-bottom: 1rem;
    color: var(--heading-color);
    font-size: 1.3rem;
}

.demo-description {
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 0.95rem;
    line-height: 1.6;
}

.demo-image {
    width: 100%;
    margin: 1rem auto;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
}

.demo-image img {
    width: 100%;
    height: auto;
}

.demo-link {
    margin: 1rem auto;
    text-align: center;
}

.huggingface-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.huggingface-button:hover {
    background-color: #0056b3;
}

.button-icon {
    margin-right: 0.5rem;
}

.demo-caption {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.85rem;
    color: #777;
    font-style: italic;
}
</style>