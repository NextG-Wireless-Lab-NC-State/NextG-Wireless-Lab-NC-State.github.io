// Research areas, overviews, faculty membership, and highlighted publications.
// Publications are transcribed verbatim from the authoritative
// "Area 1–Area 5 Highlighted Publications" documents. Faculty membership is
// taken from the faculty lists in those same documents. No invented content.

export type PublicationGroup = {
  faculty: string; // group label as it appears in the source document
  items: string[];
};

export type ResearchArea = {
  slug: string;
  number: number;
  title: string;
  keywords: string[];
  overview: string;
  facultySlugs: string[];
  publicationGroups: PublicationGroup[];
};

export const researchIntro =
  "The convergence of AI, communications, and sensing is reshaping wireless networked systems. xGI leads this transformation through research spanning AI-native networks, integrated sensing and communications, intelligent infrastructure, and autonomous applications.";

export const researchPositioning =
  "xGI is the convergence of AI, communications, sensing, and autonomous systems for the FutureG era.";

export const researchAreas: ResearchArea[] = [
  {
    slug: "intelligent-wireless-networking-distributed-systems",
    number: 1,
    title: "Intelligent Wireless, Networking & Distributed Systems",
    keywords: [
      "5G/6G",
      "O-RAN",
      "AI-RAN",
      "Satellite and aerial networking",
      "Spectrum sharing",
      "Digital twins",
      "Wireless security",
      "Network optimization",
    ],
    overview:
      "xGI advances next-generation telecom networks, integrating intelligence directly into the radio access network, core, and protocols. It focuses on emerging O-RAN and AI-RAN architectures to enable more open, programmable, and adaptive networks that support ultra-low latency, massive connectivity, and autonomous optimization. Research spans 5G/6G systems, satellite and aerial networks, wireless security, digital twins, resource management, and distributed network intelligence.",
    facultySlugs: [
      "ismail-guvenc",
      "vijay-shah",
      "mihail-sichitiu",
      "ruozhou-yu",
      "yuchen-liu",
      "huaiyu-dai",
      "wenye-wang",
      "alexandra-duel-hallen",
      "dara-ron",
    ],
    publicationGroups: [
      {
        faculty: "Ruozhou Yu",
        items: [
          "Zhou, Fangtong, Sihao Liu, Xiaorui Liu, Ruozhou Yu, and Guoliang Xue. “Traffic engineering in large-scale networks with generalizable graph neural networks.” IEEE Transactions on Networking (2026).",
          "Wang, Xiaojian, Ruozhou Yu, and Dejun Yang. “Wormholes in Space: Unveiling Wormhole Attack in Low Earth Orbit Satellite Networks.” In 2026 International Conference on Computing, Networking and Communications (ICNC), pp. 491-497. IEEE, 2026.",
          "Wang, Xiaojian, Ruozhou Yu, Dejun Yang, Guoliang Xue, Qiushi Wei, Huayue Gu, and Zhouyu Li. “Space Booking: Enabling Performance-Critical Applications in Broadband Satellite Networks.” In 2025 IEEE 45th International Conference on Distributed Computing Systems (ICDCS), pp. 989-999. IEEE, 2025.",
          "Yu, Ruozhou, Guoliang Xue, Yinxin Wan, Jian Tang, Dejun Yang, and Yusheng Ji. “Robust resource provisioning in time-varying edge networks.” In Proceedings of the Twenty-First International Symposium on Theory, Algorithmic Foundations, and Protocol Design for Mobile Networks and Mobile Computing, pp. 21-30. 2020.",
          "Yu, Ruozhou, Guoliang Xue, Mehdi Bennis, Xianfu Chen, and Zhu Han. “HSDRAN: Hierarchical software-defined radio access network for distributed optimization.” IEEE Transactions on Vehicular Technology 67, no. 9 (2017): 8623-8636.",
        ],
      },
      {
        faculty: "Mihail L. Sichitiu",
        items: [
          "A. Gurses, M. L. Sichitiu, “ACHEM: A Real-Time Digital Twin Framework with Channel and Radio Emulation”, arXiv preprint arXiv:2604.04742, 2026.",
          "S. V. Villar, S. Singh, O. Ozdemir, M. L. Sichitiu, and I. Guvenc, “Real-World LoRaWAN Performance and Propagation Modeling Using UAV, Helikite, and Vehicle-Based Measurements”, in Proc. IEEE Aerospace Conference, Big Sky, MT, Mar. 2026.",
          "J. Kesler, A. Gürses, O. Özdemir, M. Mushi, M. L. Sichitiu, I. Güvenç, R. Dutta, Vuk Marojevic, “Demonstration of an Interactive Search and Rescue Scenario in AERPAW”, in Proc. IEEE Military Commun. Conf. (MILCOM), Los Angeles, CA, Oct. 2025.",
          "A. Gurses, G. Reddy, S. Masrur, O. Ozdemir, I. Guvenc, M. L. Sichitiu, A. Sahin, A. Alkhateeb, M. Mushi, and R. Dutta. “Digital Twins and Testbeds for Supporting AI Research with Autonomous Vehicle Networks”, IEEE Commun. Mag., 2024.",
          "A. Gürses, M. L. Sichitiu, “Air-to-ground channel modeling for UAVs in rural areas”, in Proc. IEEE 100th Vehicular Technology Conference (VTC2024-Fall), 1-6.",
        ],
      },
      {
        faculty: "Yuchen Liu",
        items: [
          "Z. Zhang, D. Chen, A. Gao, M. Wang, M. Chen, M. Fang, X. Yang, and Y. Liu, “Network Digital Untwinning: Towards Backward Optimization of Digital Twins,” IEEE International Conference on Distributed Computing Systems (ICDCS), 2026.",
          "Z. Li, X. Luo, M. Chen, C. Xu, S. Mao, and Y. Liu, “Contextual Combinatorial Beam Management via Online Probing for Multiple Access mmWave Wireless Networks,” IEEE Journal on Selected Areas in Communications (JSAC), 2025.",
          "Z. Zhang, Y. Liu, Z. Peng, M. Chen, D. Xu, and S. Cui, “Digital Twin-Assisted Data-Driven Optimization for Reliable Edge Caching in Wireless Networks,” IEEE Journal on Selected Areas in Communications (JSAC), 2024.",
          "Z. Li, M. Chen, G. Li, X. Lin, and Y. Liu, “Map-Driven mmWave Link Quality Prediction with Spatial-Temporal Mobility Awareness,” IEEE Transactions on Mobile Computing (TMC), 2024.",
          "H. Li, D. Xu, M. Chen, and Y. Liu, “Agentic Open RAN: A Deterministic and Auditable Framework for Intent-Driven Radio Control,” IEEE International Conference on Communications (ICC), 2026.",
        ],
      },
      {
        faculty: "Wenye Wang",
        items: [
          "Mengning Li and Wenye Wang, “UNI-FI: Integrated Multi-Task Wi-Fi Sensing,” IEEE INFOCOM 2026 - IEEE Conference on Computer Communications (Best Paper Award), Tokyo, Japan, 2026, pp. 1-10.",
          "Mengning Li and Wenye Wang, “Synergizing Acoustic and Wi-Fi Signals for Device-Free Gesture Recognition,” in IEEE Transactions on Mobile Computing, vol. 24, no. 9, pp. 8167-8179, Sept. 2025.",
          "Mengning Li, Haochen Zhu, Wenye Wang, and Eylem Ekici, “mSAC: Enhancing Localization with mmWave Sensing and Orthogonal Signals,” IEEE INFOCOM 2025 - IEEE Conference on Computer Communications, London, United Kingdom, 2025, pp. 1-10.",
          "Rui Zou and Wenye Wang, “FLuMe: Understanding Differential Spectrum Mobility Features in High Resolution,” in IEEE Transactions on Mobile Computing, vol. 23, no. 12, pp. 14186-14200, Dec. 2024.",
          "Mengning Li and Wenye Wang, “Hybrid Zone: Bridging Acoustic and Wi-Fi for Enhanced Gesture Recognition,” IEEE INFOCOM 2024 - IEEE Conference on Computer Communications (Best Paper Award), Vancouver, BC, Canada, 2024, pp. 981-990.",
        ],
      },
      {
        faculty: "Ismail Guvenc",
        items: [
          "T. Q. S. Quek, G. de la Roche, I. Guvenc, and M. Kountouris (Editors), “Small Cell Networks: Deployment, PHY Techniques, and Resource Management”, Cambridge University Press, April 2013.",
          "Y. Zeng, I. Guvenc, R. Zhang, G. Geraci, and D. Matolak (Editors), “UAV Communications for 5G and Beyond”, IEEE-Wiley, Feb. 2021.",
          "M. Rahman, S. J. Maeng, I. Guvenc, C. W. Wong, M. L. Sichitiu, J. A. Abrahamson, and A. Bhuyan, “UAV-Based 3D Spectrum Sensing Using Kriging and Matrix Completion: Insights on Altitude, Bandwidth, Trajectory, and Antenna Patterns”, IEEE Sensors, May 2026.",
          "D. Lee, S. J. Maeng, O. Ozdemir, M. B. Pandian, and I. Guvenc, “Reliability of Wi-Fi, LTE, and 5G-Based UAV RC Links in ISM Bands: Uplink Interference Asymmetry Analysis and HARQ Design”, IEEE Open J. Commun. Systems, Aug. 2025.",
          "S. Masrur, I. Guvenc, and D. Lopez-Perez, “Energy-Efficient Sleep Mode Optimization in 5G mmWave Networks via Multi-Agent Deep Reinforcement Learning”, IEEE Trans. Green Commun. Netw., Dec. 2025.",
        ],
      },
      {
        faculty: "Vijay K. Shah",
        items: [
          "Chiejina, A., Muruganandham, D., Chaudhary, V., Chowdhury, K., & Shah, V. K. (2026). O-DSS: An Open Dynamic Spectrum Sharing Framework for Cellular-Radar Coexistence in Mid-band Frequencies., IEEE INFOCOM 2026-IEEE Conference on Computer Communications (pp. 1-10) (to appear). Preprint available at arXiv preprint arXiv:2601.02571.",
          "Gajjar, P., Khoja, M., Ganiyu, A., Juarez, M., Marina, M. K., Lehane, A., & Shah, V. K. (2025). Black-Box Evasion Attacks on Data-Driven Open RAN Apps: Tailored Design and Experimental Evaluation. Proceedings of the ACM on Networking, 3(CoNEXT4), 1-26.",
          "Ganiyu, A., Gajjar, P., & Shah, V. K. (2025, June). AI5GTest: AI-Driven Specification-Aware Automated Testing and Validation of 5G O-RAN Components. In the 18th ACM Conference on Security and Privacy in Wireless and Mobile Networks (pp. 53-64).",
          "Guillem Reus-Muns, Pratheek S. Upadhyaya, Utku Demir, Nathan Stephenson, Nasim Soltani, Vijay K. Shah, and Kaushik R. Chowdhury, “SenseORAN: O-RAN-Based Radar Detection in the CBRS Band,” IEEE Journal on Selected Areas in Communications, vol. 42, no. 2, pp. 326-338, Feb. 2024.",
          "Ghosh, U., Chiejina, A., Stephenson, N., Shah, V. K., Shakkottai, S., & Bharadia, D. (2024). SPARC: Spatio-Temporal Adaptive Resource Control for Multi-site Spectrum Management in NextG Cellular Networks. Proceedings of the ACM on Networking, 2(CoNEXT4), 1-18.",
        ],
      },
      {
        faculty: "Dara Ron",
        items: [
          "D. Ron and J.-R. Lee, “Intelligent Energy Efficiency and Service Reliability Optimization for UAV-Aided Terrestrial Networks,” IEEE Transactions on Green Communications and Networking, 2026.",
          "D. Ron, F. A. Yusufzai, S. Kwakye, S. Roy, N. Sastry and V. K. Shah, “Time-Dependent Network Topology Optimization for LEO Satellite Constellations,” IEEE INFOCOM 2025 - IEEE Conference on Computer Communications, 2025.",
          "Dara Ron and Kai Zeng. Wireless-Powered Multi-Channel Backscatter Communications Under Jamming: A Cooperative Reinforcement Learning Approach. WiseML ’24 (Best Paper Award).",
          "W. Jeon, D. Ron and J.-R. Lee, “Deep Reinforcement Learning-Based Active Sensing on a Bicycle for Vehicle Tracking,” IEEE Transactions on Instrumentation and Measurement, vol. 75, pp. 1-14, 2026.",
          "D. Ron and J.-R. Lee, “DNN-Based Dynamic Transmit Power Control for V2V Communication Underlaid Cellular Uplink,” IEEE Transactions on Vehicular Technology, Nov. 2022.",
        ],
      },
      {
        faculty: "Huaiyu Dai",
        items: [
          "Y. He, G. Yu, and H. Dai, “Robustness in Wireless Distributed Learning: An Information-Theoretic Analysis,” IEEE Trans. Communications, vol. 73, no. 11, pp. 11243-11258, Nov. 2025.",
          "J. Zhang, X. He, and H. Dai, “Speeding Up Distributed Learning via Sparse and Flexible Coded Computing,” IEEE Trans. Information Theory, vol. 71, no. 4, pp. 3167-3180, Apr. 2025.",
          "X. Lu, Z. Liu, L. Xiao, and H. Dai, “Reinforcement Learning-Based Personalized Differentially Private Federated Learning,” IEEE Trans. Information Forensics and Security, vol. 20, pp. 465-477, 2025.",
          "M. F. Pervej, R. Jin, and H. Dai, “Resource Constrained Vehicular Edge Federated Learning with Highly Mobile Connected Vehicles,” IEEE Journal on Selected Areas in Communications, vol. 41, no. 6, pp. 1825-1844, Jun. 2023.",
          "S. Hosseinalipour, S. S. Azam, C. G. Brinton, N. Michelusi, V. Aggarwal, D. J. Love, and H. Dai, “Multi-Stage Hybrid Federated Learning over Large-Scale Wireless Fog Networks,” IEEE Trans. Networking, vol. 30, no. 4, pp. 1569-1584, Aug. 2022. 2024 IEEE Communications Society William R. Bennett Prize (Best Paper Award, IEEE/ACM Transactions on Networking).",
        ],
      },
    ],
  },
  {
    slug: "ai-foundations-learning",
    number: 2,
    title: "AI Foundations & Learning",
    keywords: [
      "Foundation models",
      "Agentic AI",
      "Explainable AI",
      "Federated learning",
      "Graph learning",
      "AI optimization",
    ],
    overview:
      "xGI develops the foundations of intelligent systems through advances in machine learning, foundation models, and autonomous decision-making. Research explores agentic AI, explainable and trustworthy AI, federated and distributed learning, graph-based learning, and optimization-driven intelligence. These efforts aim to create scalable, adaptive, and reliable AI systems that can operate across diverse real-world environments.",
    facultySlugs: [
      "vijay-shah",
      "xiaorui-liu",
      "tianfu-wu",
      "dongkuan-xu",
      "chau-wai-wong",
      "hamid-krim",
      "dara-ron",
      "huaiyu-dai",
      "yuchen-liu",
    ],
    publicationGroups: [
      {
        faculty: "Vijay K. Shah",
        items: [
          "Gajjar, P., Ojo, E., & Shah, V. K. (2026). TeleResilienceBench: Quantifying Resilience for LLM Reasoning in Telecommunications. arXiv preprint arXiv:2605.09929.",
          "Natanzi, S. B. H., Gajja, P., Tang, B., & Shah, V. K. (2026). Advanced AI Service Provisioning in O-RAN through LLM Engine Integration. arXiv preprint arXiv:2605.23809.",
          "Gajjar, P., & Shah, V. K. (2026). TeleEmbedBench: A Multi-Corpus Embedding Benchmark for RAG in Telecommunications. arXiv preprint arXiv:2604.17778.",
          "Saenko, A., Gajjar, P., Ganiyu, A., & Shah, V. K. (2026). Enhancing Confidence Estimation in Telco LLMs via Twin-Pass CoT-Ensembling. IEEE Vehicular Technology Conference (VTC), to appear. Preprint available at arXiv preprint arXiv:2604.13271.",
          "Gajjar, P., & Shah, V. K. (2025). Oransight-2.0: Foundational LLMs for O-RAN. IEEE Transactions on Machine Learning in Communications and Networking.",
        ],
      },
      {
        faculty: "Yuchen Liu",
        items: [
          "Z. Peng, Y. Liu, G. Li, Z. Yang, M. Chen, D. Xu, and X. Lin, “Generative Artificial Intelligence Models for Emerging Communication Systems: Fundamentals and Challenges,” IEEE Communications Magazine (COMMAG), 2025.",
          "N. Yang, S. Wang, Y. Liu, C. Brinton, C. Yin, and M. Chen, “Graph Neural Networks for the Optimization of Collaborative Federated Learning Energy Efficiency,” IEEE Transactions on Mobile Computing (TMC), 2025.",
          "X. Luo, Z. Li, Z. Peng, M. Chen, and Y. Liu, “Denoising Diffusion Probabilistic Model for Radio Map Estimation in Generative Wireless Networks,” IEEE Transactions on Cognitive Communications and Networking (TCCN), 2025.",
          "Z. Zhang, M. Fang, D. Chen, X. Yang, and Y. Liu, “Synergizing AI and Digital Twins for Next Generation Network Optimization, Forecasting, and Security,” IEEE Wireless Communications (WCM), 2025.",
          "J. Liu, Z. Peng, D. Xu, and Y. Liu, “Revolutionizing Wireless Modeling and Simulation with Network-Oriented LLMs,” IEEE International Performance Computing and Communications Conference (IPCCC), 2024. (Best Paper Award Runner-up)",
        ],
      },
      {
        faculty: "Hamid Krim",
        items: [
          "H. Yun, E. Chouzenoux, B. Jiang, J.C. Pesquet, H. Krim, ”Geometry via Vision Transformer: Learning by Proximal Updates”, submitted to Signal Processing Journal, 2026 (under review).",
          "S. Roheda and H. Krim, ”Volterra Neural Networks: A New Perspective on Learning”, Journal of Machine Learning Research, 2024.",
          "W. Tang, É. Chouzenoux, J.C. Pesquet, and H. Krim, “Deep transform and metric learning network: Wedding deep dictionary learning and neural network,” Neurocomputing, 509: 244-256, 2022.",
          "Z. Hou, M. Torkamani, H. Krim, X. Liu, ”Robustness Reprogramming for Representation Learning”, ICLR 2025, Singapore.",
          "V. Jebraeeli, B. Jiang, D. Cansever, H. Krim, ”Koopcon: A new approach towards smarter and less complex learning”, Int. Conf. on Image Processing, 2024, Abu Dhabi.",
        ],
      },
      {
        faculty: "Tianfu Wu",
        items: [
          "Savadikar, Chinmay and Song, Xi and Wu, Tianfu, WeGeFT: Weight-Generative Fine-Tuning for Multi-Faceted Efficient Adaptation of Large Models, ICML 2025.",
          "Xue, Rui and Wu, Tianfu, HarmonyGNNs: Harmonizing Heterophily and Homophily in GNNs via Joint Structural Node Encoding and Self-Supervised Learning, ICLR 2026.",
          "Savadikar, Chinmay and Dai, Michelle and Wu, Tianfu, CHEEM: Continual Learning by Reuse, New, Adapt and Skip -- A Hierarchical Exploration-Exploitation Approach, CVPR 2026.",
          "Paniagua, Thomas and Savadikar, Chinmay and Wu, Tianfu, Adversarial Perturbations Are Formed by Iteratively Learning Linear Combinations of the Right Singular Vectors of the Adversarial Jacobian, ICML 2025.",
          "Grainger, Ryan and Paniagua, Thomas and Song, Xi and Cuntoor, Naresh and Lee, Mun Wai and Wu, Tianfu, PaCa-ViT: Learning Patch-to-Cluster Attention in Vision Transformers, CVPR 2023.",
        ],
      },
      {
        faculty: "Chau-Wai Wong",
        items: [
          "C. Zhao, Z. Tan, C.-W. Wong, X. Zhao, T. Chen, and H. Liu, “SCALE: Towards collaborative content analysis in social science with large language model agents and human intervention,” Annual Meeting of the Association for Computational Linguistics (ACL), Vienna, Austria, 27 Jul.–1 Aug. 2025.",
          "W. Liu, X. Zhao, Y. Sun, and C.-W. Wong, “Serving multicultural publics: Assessing the role of dialogic communication and cultural tailoring strategies of GenAI chatbots in government OPRs for disasters,” 28th International Public Relations Research Conference (IPRRC), Orlando, FL, 6–8 Mar. 2025. (Boston University Award for the Top Paper about Public Relations and the Social and Emerging Media)",
          "R. M. Shahroz Khan, P. Li, S. Yun, Z. Wang, S. Nirjon, C.-W. Wong, and T. Chen, “PortLLM: Personalizing evolving large language models with training-free and portable model patches,” International Conference on Learning Representations (ICLR), Singapore, 24–28 Apr. 2025.",
          "G. Thompson, K. Yue, C.-W. Wong, and H. Dai, “NTK-DFL: Enhancing decentralized federated learning in heterogeneous settings via neural tangent kernel,” International Conference on Machine Learning (ICML), Vancouver, Canada, 13–19 Jul. 2025.",
          "K. Yue, R. Jin, R. Pilgrim, C.-W. Wong, D. Baron, H. Dai, “Neural tangent kernel empowered federated learning,” International Conference on Machine Learning (ICML), Baltimore, 17–23 July 2022.",
        ],
      },
      {
        faculty: "Huaiyu Dai",
        items: [
          "R. Jin and H. Dai, “Noisy SIGNSGD Is More Differentially Private Than You (Might) Think,” 2025 International Conference on Machine Learning (ICML), Vancouver, CA, July 13-19, 2025.",
          "M. F. Reza, R. Jin, T. Wu, and H. Dai, “GSBAK: Top-K Geometric Score-based Black-box Attack,” 2025 International Conference on Learning Representations (ICLR), Singapore, Apr. 24-28, 2025.",
          "R. Jin, Z. Su, C. Zhong, Z. Zhang, T. Quek, and H. Dai, “Breaking the Communication-Privacy-Accuracy Tradeoff with f-Differential Privacy,” Proc. the 37th International Conference on Neural Information Processing Systems (NeurIPS), New Orleans, LA, Dec. 10-16, 2023.",
          "K. Yue, R. Jin, C. Wong, D. Baron, and H. Dai, “Gradient Obfuscation Gives a False Sense of Security in Federated Learning,” 2023 USENIX Security Symposium, Anaheim, CA, Aug. 9-11, 2023.",
          "M. Lee, G. Yu, H. Dai, and G. Y. Li, “Graph Neural Networks Meet Wireless Communications: Motivation, Applications, and Future Directions,” IEEE Wireless Communications, vol. 29, no. 5, pp. 12-19, Oct. 2022.",
        ],
      },
      {
        faculty: "Xiaorui Liu",
        items: [
          "“Traffic Engineering in Large-scale Networks with Generalizable Graph Neural Networks”. Sihao Liu, Fangtong Zhou, Xiaorui Liu, Ruozhou Yu, Guoliang Xue. IEEE Transactions on Networking (ToN 2026).",
          "“Harnessing Trust in Directed Graphs: Redefining Robustness of Graph Learning”. Zhichao Hou, Xitong Zhang, Wei Wang, Charu Aggarwal, Xiaorui Liu. ACM Transactions on Knowledge Discovery from Data (TKDD 2026).",
          "“Modulated Diffusion: Accelerating Generative Modeling with Modulated Quantization”. Weizhi Gao, Zhichao Hou, Junqi Yin, Feiyi Wang, Linyu Peng, Xiaorui Liu. International Conference on Machine Learning (ICML 2025).",
          "“Efficient End-to-end Language Model Fine-tuning on Graphs”. Rui Xue, Xipeng Shen, Ruozhou Yu, Xiaorui Liu. ACM International Conference on Knowledge Discovery & Data Mining (KDD 2025).",
          "“Robustness Reprogramming for Representation Learning”. Zhichao Hou, MohamadAli Torkamani, Hamid Krim, Xiaorui Liu. International Conference on Learning Representations (ICLR 2025 Spotlight).",
        ],
      },
    ],
  },
  {
    slug: "sensing-perception-integrated-intelligence",
    number: 3,
    title: "Sensing, Perception & Integrated Intelligence",
    keywords: [
      "ISAC",
      "Radar",
      "RF sensing",
      "Wireless localization and tracking",
      "Human-machine sensing",
      "Autonomous perception",
    ],
    overview:
      "xGI explores how future systems perceive, interpret, and interact with the physical world through advanced sensing technologies. Research includes integrated sensing and communications (ISAC), radar, RF sensing, localization, spectrum awareness, and human-machine sensing. By combining sensing, communications, and AI, this thrust enables intelligent situational awareness and autonomous perception for next-generation applications.",
    facultySlugs: [
      "sevgi-gurbuz",
      "ali-gurbuz",
      "wenye-wang",
      "ismail-guvenc",
      "hamid-krim",
    ],
    publicationGroups: [
      {
        faculty: "Wenye Wang",
        items: [
          "Mengning Li and Wenye Wang, “UNI-FI: Integrated Multi-Task Wi-Fi Sensing,” IEEE INFOCOM 2026 - IEEE Conference on Computer Communications (Best Paper Award), Tokyo, Japan, 2026, pp. 1-10.",
          "Mengning Li and Wenye Wang, “Synergizing Acoustic and Wi-Fi Signals for Device-Free Gesture Recognition,” in IEEE Transactions on Mobile Computing, vol. 24, no. 9, pp. 8167-8179, Sept. 2025.",
          "Mengning Li, Haochen Zhu, Wenye Wang, and Eylem Ekici, “mSAC: Enhancing Localization with mmWave Sensing and Orthogonal Signals,” IEEE INFOCOM 2025 - IEEE Conference on Computer Communications, London, United Kingdom, 2025, pp. 1-10.",
          "Rui Zou and Wenye Wang, “FLuMe: Understanding Differential Spectrum Mobility Features in High Resolution,” in IEEE Transactions on Mobile Computing, vol. 23, no. 12, pp. 14186-14200, Dec. 2024.",
          "Mengning Li and Wenye Wang, “Hybrid Zone: Bridging Acoustic and Wi-Fi for Enhanced Gesture Recognition,” IEEE INFOCOM 2024 - IEEE Conference on Computer Communications (Best Paper Award), Vancouver, BC, Canada, 2024, pp. 981-990.",
        ],
      },
      {
        faculty: "Ismail Guvenc",
        items: [
          "Z. Sahinoglu, S. Gezici, and I. Guvenc, “Ultra-Wideband Positioning Systems – Theoretical Limits, Ranging Algorithms, and Protocols”, Cambridge University Press, Aug. 2008.",
          "I. Guvenc and C. C. Chong, “A Survey on TOA Based Wireless Localization and NLOS Mitigation Techniques”, IEEE Communications Surveys and Tutorials, vol. 11, no. 3, pp. 107-124, July 2009.",
          "M. Ezuma, F. Erden, C. K. Anjinappa, O. Ozdemir, and I. Guvenc, “Detection and Classification of UAVs Using RF Fingerprints in the Presence of Interference”, IEEE Open J. Communication Society, Jan. 2020.",
          "C. Dickerson, S. Kearney, S. Manjur, I. Guvenc, S. Gurbuz, A. Gurbuz, O. Ozdemir, and M. Sichitiu, “Leveraging Cellular ISAC and Passive RF Sensing for UAV Detection and Tracking”, in Proc. IEEE Asilomar Conference, Pacific Grove, CA, Oct. 2025.",
          "W. Khawaja, M. Ezuma, V. Semkin, F. Erden, O. Ozdemir, and I. Guvenc, “A Survey on Detection, Classification, and Tracking of Aerial Threats using Radar and Communications Systems”, IEEE Communications Surveys and Tutorials, 2024.",
        ],
      },
      {
        faculty: "Sevgi Zubeyde Gurbuz",
        items: [
          "S. Kearney and S. Z. Gurbuz, “Physics-Guided Deep Neural Networks for Radar-Based UAV Recognition in Different Environments With No Prior In Situ Data,” in IEEE Transactions on Aerospace and Electronic Systems, vol. 62, pp. 9875-9891, 2026.",
          "E. Kurtoğlu and S. Z. Gurbuz, “Human-Centered Fully Adaptive Radar for Gesture Recognition in Smart Environments,” in IEEE Transactions on Human-Machine Systems, vol. 55, no. 5, pp. 695-706, Oct. 2025.",
          "S. Biswas, C. O. Ayna, S. Z. Gurbuz and A. C. Gurbuz, “CV-SincNet: Learning Complex Sinc Filters From Raw Radar Data for Computationally Efficient Human Motion Recognition,” in IEEE Transactions on Radar Systems, vol. 1, pp. 493-504, 2023.",
          "M. M. Rahman, S. Z. Gurbuz and M. G. Amin, “Physics-Aware Generative Adversarial Networks for Radar-Based Human Activity Recognition,” in IEEE Transactions on Aerospace and Electronic Systems, vol. 59, no. 3, pp. 2994-3008, June 2023.",
          "S. Z. Gurbuz et al., “American Sign Language Recognition Using RF Sensing,” in IEEE Sensors Journal, vol. 21, no. 3, pp. 3763-3775, 1 Feb. 2021.",
        ],
      },
      {
        faculty: "Additional Publications",
        items: [
          "Bibhor Kumar, Ish Jain, and Vijay K. Shah, CellSense: A Sub-6 GHz Cellular ISAC System for Clutter-Robust Passive Sensing, in IEEE MILCOM 2026 (Under review).",
          "Sarik Dhungel, Gaurav Duggal, Dara Ron, Nishith D. Tripathi, R. M. Buehrer, J. H. Reed, and Vijay K. Shah, Experimental Validation of a 3GPP compliant 5G-based Positioning System. In Proceedings of the 30th Annual International Conference on Mobile Computing and Networking (pp. 1946-1953), 2024.",
        ],
      },
    ],
  },
  {
    slug: "communication-systems-hardware-platforms",
    number: 4,
    title: "Communication Systems, Hardware & Platforms",
    keywords: [
      "Antennas",
      "RFICs",
      "mmWave/THz",
      "Phased arrays",
      "MIMO",
      "Wireless PHY",
      "Quantum signal processing and communications",
    ],
    overview:
      "xGI advances the physical foundations of future intelligent networks through innovations in communication hardware and system platforms. Research spans EM/antenna design, RF and mixed-signal circuits, phased arrays, metasurfaces, mmWave and THz integrated chip scale platforms, secure wireless physical-layer technologies, and AI-enabled RFIC and RF system design. These technologies provide the high-performance, energy-efficient infrastructure required to support future AI-native wireless networked systems.",
    facultySlugs: [
      "suresh-venkatesh",
      "brian-floyd",
      "jake-adams",
      "alexandra-duel-hallen",
      "ismail-guvenc",
      "yuan-liu",
      "huaiyu-dai",
    ],
    publicationGroups: [
      {
        faculty: "Selected Publications",
        items: [
          "T. Ren, Y. Chang and B. A. Floyd, “39–44 GHz Phased-Array Transmitter Circuits in RFSOI CMOS Technology,” in IEEE Journal of Solid-State Circuits, vol. 60, no. 9, pp. 3072-3081, Sept. 2025, doi: 10.1109/JSSC.2025.3580121.",
          "D. D. Stancil, A. R. Allen, M. Ptak and J. J. Adams, “Multipath-Enhanced Measurement of Antenna Patterns: Experiment,” in IEEE Transactions on Antennas and Propagation, doi: 10.1109/TAP.2026.3681345.",
          "V. Reddy, J. Sober, L. Hogan, and S. Venkatesh, “I2SAC: AI-enabled Digital-Twin Framework on a mmWave 64-element Phased Array for Integrated Imaging, Sensing, and Communication,” in International Microwave Symposium, RFSA. IEEE, 2026 - Accepted.",
          "X. Lu, S. Venkatesh, B. Tang and K. Sengupta, “Physical Layer Security Through Directional Modulation With Spatio-Temporal Millimeter-Wave Transmitter Arrays,” in IEEE Journal of Solid-State Circuits, vol. 59, no. 9, pp. 2831-2847, Sept. 2024, doi: 10.1109/JSSC.2024.3384373.",
          "A. P. Ganesh, A. Perre, A. Şahin, İ. Güvenç and B. A. Floyd, “A mmWave Software-Defined Array Platform for Wireless Experimentation at 24-29.5 GHz,” MILCOM 2024 - 2024 IEEE Military Communications Conference (MILCOM), Washington, DC, USA, 2024, pp. 1-6, doi: 10.1109/MILCOM61039.2024.10773829.",
          "Liu, Yuan, John M. Martyn, Jasmine Sinanan-Singh, Kevin C. Smith, Steven M. Girvin, and Isaac L. Chuang. “Toward mixed analog-digital quantum signal processing: Quantum ad/da conversion and the fourier transform.” IEEE Transactions on Signal Processing (2025).",
          "A. Fallah Dizche, A. Duel-Hallen and H. Hallen, “Early Warning of mmWave Signal Blockage Using Diffraction Properties and Machine Learning,” in IEEE Communications Letters, vol. 26, no. 12, pp. 2944-2948, Dec. 2022, doi: 10.1109/LCOMM.2022.3204636.",
          "R. Mahdavihaji, A. Duel-Hallen and H. Hallen, “Impact of Reflectors and MIMO on ML-Aided mmWave/sub-THz Blockage Prediction,” 2026 IEEE 23rd Consumer Communications & Networking Conference (CCNC), Las Vegas, NV, USA, 2026, pp. 1-6, doi: 10.1109/CCNC65079.2026.11366462.",
          "Z. Ali, A. Duel-Hallen and H. Hallen, “Early Warning of mmWave Signal Blockage and AoA Transition Using sub-6 GHz Observations,” in IEEE Communications Letters, vol. 24, no. 1, pp. 207-211, Jan. 2020, doi: 10.1109/LCOMM.2019.2952602.",
        ],
      },
      {
        faculty: "Ismail Guvenc",
        items: [
          "W. A. G. Khawaja, O. Ozdemir, Y. Yapici, F. Erden, and I. Guvenc, “Coverage Enhancement for NLOS mmWave Links Using Passive Reflectors”, IEEE Open J. Communication Society, Feb. 2020.",
          "C. K. Anjinappa, F. Erden, and I. Guvenc, “Base Station and Passive Reflectors Placement for Urban mmWave Networks”, IEEE Trans. Vehicular Technol., Feb. 2021.",
          "A. P. Ganesh, W. Khawaja, O. Ozdemir, and I. Guvenc, “Propagation Measurements and Coverage Analysis for mmWave and Sub-THz Frequency Bands with Transparent Reflectors”, in Proc. IEEE Veh. Technol. Conf. (VTC), Florence, Italy, June 2023.",
          "S. J. Maeng, C. K. Anjinappa, I. Guvenc, “Coverage Probability Analysis of Passive Reflectors in Indoor Environments”, IEEE Commun. Lett., July 2022.",
          "S. J. Maeng, Y. Yapici, I. Guvenc, A. Bhuyan, and H. Dai, “Precoder Design for Physical-Layer Security and Authentication in Massive MIMO UAV Communications”, IEEE Trans. Veh. Technol., Dec. 2021.",
        ],
      },
      {
        faculty: "Huaiyu Dai",
        items: [
          "J. Tang, J. Liu, X. He, L. Xie, L. Qu, and H. Dai, “Deep Reinforcement Learning for AoI-Aware Trajectory and Phase-shift Design in IRS-Assisted UAV Data Collection,” IEEE Trans. Wireless Communications, vol. 24, no. 12, pp. 10613-10628, Dec. 2025.",
          "S. J. Maeng, M. Chowdhury, I. Guvenc, A. Bhuyan, and H. Dai, “Base Station Antenna Uptilt Optimization for Cellular-Connected Drone Corridors,” IEEE Transactions on Aerospace and Electronic Systems, vol. 59, no. 4, pp. 4729-4737, Aug. 2023.",
          "Z. Song, J. An, H. Ding, and H. Dai, “Optimal Relay Probing for UAV Millimeter Wave Communications with Beam Training Overhead,” IEEE Trans. Vehicular Technology, vol. 72, no. 6, pp. 7351-7363, Jun. 2023.",
          "N. Nguyen, K. Lee, and H. Dai, “Hybrid Beamforming and Adaptive RF Chain Activation for Cell-Free Millimeter-Wave Massive MIMO Systems,” IEEE Trans. Vehicular Technology, vol. 71, no. 8, pp. 8739-8755, Aug. 2022.",
          "N. Nguyen, K. Lee, and H. Dai, “Application of Deep Learning to Sphere Decoding for Large MIMO Systems,” IEEE Trans. Wireless Communications, vol. 20, no. 10, pp. 6787-6803, Oct. 2021.",
        ],
      },
    ],
  },
  {
    slug: "autonomous-systems-applications",
    number: 5,
    title: "Autonomous Systems & Applications",
    keywords: [
      "UAVs",
      "Robotics",
      "IoT",
      "Agriculture",
      "Smart infrastructure",
      "Healthcare",
      "Human-centered systems",
    ],
    overview:
      "Next-generation wireless networks are poised to become the backbone of an increasingly connected and intelligent world. From autonomous systems and smart infrastructure to digital healthcare, industrial automation, and immersive experiences, xGI advances the technologies that transform breakthrough research into real-world impact. By integrating innovations in AI, communications, and sensing, xGI aims to develop intelligent systems that improve quality of life, strengthen economic competitiveness, and address critical societal challenges.",
    facultySlugs: [
      "jaemin-lee",
      "zhishan-guo",
      "alper-bozkurt",
      "hamid-krim",
      "sevgi-gurbuz",
      "ruozhou-yu",
      "xiaorui-liu",
      "suresh-venkatesh",
    ],
    publicationGroups: [
      {
        faculty: "Zhishan Guo",
        items: [
          "Jinghao Sun, Xisheng Li, Mingyang Gong, Nan Guan, Zhishan Guo, Mingsong Chen, Jun Zhao, Qingxu Deng. Jointly Ensuring Timing Disparity and End-to-End Latency Constraints in Hybrid DAGs. The 31st IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS), Irvine, US, May 2025. (Outstanding Paper Award)",
          "Md Sanzid Bin Hossain, Zhishan Guo and Hwan Choi. Estimation of Lower Extremity Joint Moments and 3D Ground Reaction Forces Using IMU Sensors in Multiple Walking Conditions: A Deep Learning Approach, IEEE Journal of Biomedical and Health Informatics, 27(6): 2829-2840, June 2023.",
          "Jinghao Sun, Tianyi Wang, Yang Li, Nan Guan, Zhishan Guo, Qingxu Deng, Guozhen Tan. SEAM: An Optimal Message Synchronizer in ROS with Well-Bounded Time Disparity, 2023 IEEE Real-Time Systems Symposium (RTSS), Taipei, December 2023. (Best Paper Award)",
          "Jinghao Sun, Rongxiao Shi, Kexuan Wang, Nan Guan and Zhishan Guo. Efficient Feasibility Analysis for Graph-based Real-Time Task Systems, International Conference on Embedded Software (EMSOFT), September 2020, pp. 3385--3397. (Best Paper Award)",
          "Ashikahmed Bhuiyan, Kecheng Yang, Samsil Arefin, Abusayeed Saifullah, Nan Guan and Zhishan Guo. Mixed-Criticality Multicore Scheduling of Real-Time Gang Task Systems, 2019 IEEE Real-Time Systems Symposium (RTSS), Hong Kong, December 2019, pp. 469--480. (Outstanding Paper Award, Best Student Paper Award)",
        ],
      },
      {
        faculty: "Jaemin Lee",
        items: [
          "Lee, Jaemin, Jeeseop Kim, and Aaron D. Ames. “A data-driven method for safety-critical control: Designing control barrier functions from state constraints.” 2024 American Control Conference (ACC). IEEE, 2024.",
          "Lee, Jaemin, Jeeseop Kim, Wyatt Ubellacker, Tamas G. Molnar, and Aaron D. Ames. “Safety-critical control of quadrupedal robots with rolling arms for autonomous inspection of complex environments.” In 2024 IEEE International Conference on Robotics and Automation (ICRA), pp. 3485-3491. IEEE, 2024.",
          "Lee, Jaemin, Jeeseop Kim, and Aaron D. Ames. “Hierarchical relaxation of safety-critical controllers: Mitigating contradictory safety conditions with application to quadruped robots.” 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2023.",
          "Lee, Jaemin, Mingyo Seo, Andrew Bylard, Robert Sun, and Luis Sentis. “Real-Time Model Predictive Control for Industrial Manipulators with Singularity-Tolerant Hierarchical Task Control.” In 2023 IEEE International Conference on Robotics and Automation (ICRA), pp. 12282-12288. IEEE, 2023.",
          "Kim, Donghyun, Steven Jens Jorgensen, Jaemin Lee, Junhyeok Ahn, Jianwen Luo, and Luis Sentis. “Dynamic locomotion for passive-ankle biped robots and humanoids using whole-body locomotion control.” The International Journal of Robotics Research 39, no. 8 (2020): 936-956.",
        ],
      },
      {
        faculty: "Alper Bozkurt",
        items: [
          "Reynolds, J., Williams, E., Martin, D., Readling, C., Ahmmed, P., Huseth, A. and Bozkurt, A., 2022. A multimodal sensing platform for interdisciplinary research in agrarian environments. Sensors, 22(15), p.5582. DOI: 10.3390/s22155582.",
          "Foster, M., Wu, T., Roberts, D.L. and Bozkurt, A., 2022. Preliminary evaluation of a system with on-body and aerial sensors for monitoring working dogs. Sensors, 22(19), p.7631. DOI: 10.3390/s22197631.",
          "Foster, M., Agcayazi, T., Agcayazi, T., Wu, T., Gruen, M., Roberts, D.L. and Bozkurt, A., 2019, November. Preliminary evaluation of dog-drone technological interfaces: Challenges and opportunities. In Proceedings of the Sixth International Conference on Animal-Computer Interaction (pp. 1-5). DOI: 10.1145/3371049.3371065.",
          "Holder, T., Rahman, M., Summers, E., Roberts, D., Wong, C.W. and Bozkurt, A., 2022, December. Contact-free simultaneous sensing of human heart rate and canine breathing rate for animal assisted interactions. In Proceedings of the Ninth International Conference on Animal-Computer Interaction (pp. 1-10). DOI: 10.1145/3565995.3566039.",
          "Ahmmed, P., Holder, T., Foster, M., Castro, I.D., Patel, A., Torfs, T. and Bozkurt, A., 2021, October. Noncontact electrophysiology monitoring systems for assessment of canine-human interactions. In 2021 IEEE Sensors (pp. 1-4). DOI: 10.1109/SENSORS47087.2021.9639748.",
        ],
      },
      {
        faculty: "Hamid Krim",
        items: [
          "“Information Fusion: Scaling Subspace Driven Approaches” (with Sally Ghanem), Submitted to IEEE Transactions on Image Processing, 2021.",
          "“Atlantic Hurricane Activity Prediction: A Machine Learning Approach” (with T. Asthana, X. Sun, S. Roheda, L. Xie), Special Issue “Recent Advances and Future Prospects of Machine Learning in Predictive Modeling of Atmospheric Sciences”, Journal of Atmosphere, Section Atmospheric Techniques, Instruments, and Modeling, 2021.",
          "“Event Driven Sensor Fusion” (with S. Roheda, Z.-Q. Luo, T. Wu), Elsevier Signal Processing, Volume 188, November 2021.",
          "“Robust Multi-Modal Sensor Fusion: An Adversarial Approach” (with S. Roheda, H. Krim, and B. S. Riggan), IEEE Sensors Journal 21.2 (2020): 1885-1896.",
          "“Robust Group Subspace Recovery: A New Approach for Multi-Modality Data Fusion” (with Sally Ghanem, Ashkan Panahi, and Ryan A. Kerekes). Published in IEEE Sensors, 2020.",
        ],
      },
    ],
  },
];

export const areaBySlug: Record<string, ResearchArea> = Object.fromEntries(
  researchAreas.map((a) => [a.slug, a])
);
