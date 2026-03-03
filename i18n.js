const translations = {
    en: {
        nav: {
            about: "About",
            work: "Work",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            label: "Technical Engineering Lead | Cross-Team Delivery & System Design",
            available: "Available for opportunities",
            subtitle: "Technical Engineering Lead specializing in API integrations and enterprise system connectivity.",
            summary: "I own backend architecture and integration patterns for complex platforms. I guide engineering teams on design reviews, standards, and production readiness. Over a decade of experience across banking, semiconductor manufacturing, and media enterprises in Singapore.",
            contact: "Get in Touch",
            years: "Years Experience",
            projects: "Projects Delivered",
            integrations: "API Integrations"
        },
        about: {
            title: "About",
            p1: "Singapore-based Technical Engineering Lead experienced in architecting scalable backend systems and guiding engineering teams across complex enterprise environments.",
            p2: "With a background in both software engineering and project leadership, I bridge technical execution with delivery alignment—mentoring developers, establishing engineering standards, and ensuring system-wide architectural coherence.",
            p3: "I specialize in transforming fragmented platforms into secure, integrated, and production-grade solutions across enterprise and cloud ecosystems."
        },
        skills: {
            title: "Skills",
            backend: {
                title: "Backend Engineering",
                item1: "Own service design and delivery across critical domains",
                item2: "Guide patterns for reliability, performance, and security",
                item3: "Define standards for APIs, data contracts, and error handling",
                item4: "Review designs and code for maintainability at scale"
            },
            architecture: {
                title: "Architecture & System Design",
                item1: "Define system boundaries, ownership, and integration paths",
                item2: "Balance short-term delivery with long-term scalability",
                item3: "Drive technical decisions across teams and stakeholders",
                item4: "Ensure designs are reviewable, testable, and operable"
            },
            integration: {
                title: "Integration & APIs",
                item1: "Lead enterprise API integrations and contract alignment",
                item2: "Set authentication and authorization standards",
                item3: "Coordinate dependency management across teams",
                item4: "Reduce risk with versioning and backward compatibility"
            },
            databases: {
                title: "Databases",
                item1: "Design schemas for consistency and performance",
                item2: "Define data governance and access controls",
                item3: "Plan migrations with minimal downtime",
                item4: "Monitor and tune for production stability"
            },
            cloud: {
                title: "Cloud & DevOps",
                item1: "Own deployment strategy and release safety",
                item2: "Define monitoring, alerting, and incident response",
                item3: "Drive automation for repeatable environments",
                item4: "Ensure compliance for production operations"
            },
            leadership: {
                title: "Engineering Leadership",
                item1: "Set engineering standards and review practices",
                item2: "Align teams on priorities and delivery plans",
                item3: "Mentor engineers and grow technical ownership",
                item4: "Drive cross-team decision making and governance"
            }
        },
        work: {
            title: "Experience",
            job1: {
                title: "Senior Full Stack Developer",
                period: "2023 - Present",
                item1: "Build scalable web applications and enterprise integration solutions",
                item2: "Design backend architecture and secure API services",
                item3: "Lead cloud deployment and production release workflows",
                item4: "Deliver end-to-end development from requirements to support"
            },
            job2: {
                title: "Software Developer",
                item1: "API integrations with Google Ads, Docusign, ACRA, and AWS",
                item2: "OAuth 2.0 and JWT authentication implementations",
                item3: "ABAP development for HR and Finance (ALV reports, Adobe Forms)",
                item4: "Full development cycle ownership including SIT"
            },
            job3: {
                title: "Software Engineer",
                item1: "Level 2 support for production-critical systems",
                item2: "In-house application ownership and maintenance",
                item3: "Manufacturing software customization",
                item4: "Cross-departmental technical coordination"
            },
            job4: {
                title: "Software Developer",
                item1: "Finacle Core Banking for AGD Bank (Infosys)",
                item2: "Reporting modules for Development Bank of Japan (Hitachi)",
                item3: "E-Tender and logistics systems for PAN-United and Huawei",
                item4: "POS and ticketing platform development"
            }
        },
        projects: {
            title: "Key Integrations",
            google: {
                title: "Google Ads Integration",
                desc: "SAP to Google Ads connection for automated campaign management. Implemented OAuth 2.0 flow and secure token management."
            },
            docusign: {
                title: "Docusign eSignature",
                desc: "Electronic document signing from SAP workflows. Built JWT Grant authentication for server-to-server API access."
            },
            acra: {
                title: "ACRA Integration",
                desc: "Automated business entity verification with Singapore's corporate regulator. Data transformation between ACRA and SAP structures."
            },
            smart: {
                title: "Smart City Project (Karen)",
                roleLabel: "Role:",
                role: "Project Manager / Technical Coordinator",
                desc: "Government Smart City program overseeing the implementation of Huawei's eLTE Rapid communication infrastructure.",
                item1: "Led coordination between Myanmar government stakeholders and Huawei operations teams",
                item2: "Supervised multinational engineering teams during deployment and operational rollout",
                item3: "Ensured technical alignment, regulatory compliance, and execution efficiency",
                item4: "Served as escalation point for cross-team technical and operational challenges",
                item5: "Supported large-scale infrastructure enablement for public-sector modernization",
                tags: {
                    city: "Smart City",
                    huawei: "Huawei eLTE",
                    lead: "Project Leadership"
                }
            },
            finacle: {
                title: "Finacle Core Banking",
                desc: "Core banking platform for AGD Bank. Transaction processing and account management module development."
            },
            fe: {
                title: "FE Certification Practice Platform (AI-Orchestrated System Architecture)",
                desc: "Solution architecture initiative where system boundaries, delivery constraints, and governance remain human-led while implementation throughput is accelerated with AI as a senior engineering partner.",
                model: {
                    title: "AI-Orchestrated Engineering Model",
                    desc: "Architecture and constraints are human-led; implementation is AI-accelerated via structured prompt frameworks and iterative validation."
                },
                cloud: {
                    title: "Cloud Deployment (AWS)",
                    desc: "Containerized Next.js app and background worker deployed on AWS EC2 with PostgreSQL persistence."
                },
                pdf: {
                    title: "Intelligent PDF Ingestion Pipeline",
                    desc: "Asynchronous worker parsing multi-format exam PDFs, performing image rendering, cropping, and multi-page stitching."
                },
                auth: {
                    title: "Secure Auth & RBAC",
                    desc: "Google OAuth + email/password authentication with role-based access control and owner bootstrap."
                },
                analytics: {
                    title: "Operational Analytics",
                    desc: "Real-time user registration trends and activity dashboards with daily/weekly/monthly aggregation."
                },
                monitoring: {
                    title: "AI-Assisted Monitoring & Debugging",
                    desc: "Structured logging and AI-supported root cause analysis for parsing and validation edge cases."
                },
                tags: {
                    next: "Next.js",
                    aws: "AWS EC2",
                    postgres: "PostgreSQL",
                    rbac: "RBAC",
                    worker: "Async Worker"
                },
                live: "Live Platform"
            },
        },
        values: {
            title: "How I Work",
            communication: {
                title: "Communication",
                desc: "Foster direct and transparent communication across engineering teams and with PMO/product stakeholders. Encourage early questions, thorough documentation, and keeping all teams aligned on technical direction and decisions."
            },
            problem: {
                title: "Problem Solving",
                desc: "Guide teams to analyze problems before proposing solutions, validate assumptions, and deliver incrementally. Ensure solutions are technically sound and maintainable, balancing quality with timely delivery."
            },
            production: {
                title: "Production Mindset",
                desc: "Drive teams to build secure, reliable, and maintainable systems. Emphasize edge-case handling, production readiness, and operational excellence across backend, frontend, and integrations."
            },
            leadership: {
                title: "Leadership & Alignment",
                desc: "Mentor senior and junior developers, providing guidance and code reviews. Define architectural standards and engineering best practices. Align multiple teams with cross-functional stakeholders, ensuring consistent and scalable solutions."
            }
        },
        contact: {
            title: "Contact",
            intro: "Open to Tech Engineer Lead / Engineering Lead opportunities. Experienced in team leadership, architecture, and enterprise integrations, collaborating closely with PMO and product teams to deliver scalable systems.",
            phone: "Phone",
            connect: "Connect with me"
        }
    },
    ja: {
        nav: {
            about: "自己紹介",
            work: "経歴",
            projects: "プロジェクト",
            contact: "連絡先"
        },
        hero: {
            label: "テクニカルエンジニアリングリード｜クロスチームデリバリー＆システム設計",
            available: "お仕事募集中",
            subtitle: "API連携とエンタープライズシステム接続を専門とするテクニカルエンジニアリングリード。",
            summary: "複雑なプラットフォームにおけるバックエンドアーキテクチャと連携パターンを主導します。設計レビュー、標準化、本番品質についてチームをリードします。シンガポールの銀行、半導体製造、メディア企業で10年以上の経験があります。",
            contact: "お問い合わせ",
            years: "年の経験",
            projects: "プロジェクト実績",
            integrations: "API連携実績"
        },
        about: {
            title: "自己紹介",
            p1: "シンガポール拠点のテクニカルエンジニアリングリードとして、スケーラブルなバックエンドシステムの設計と、複雑なエンタープライズ環境でのチーム牽引に携わっています。",
            p2: "ソフトウェアエンジニアリングとプロジェクトリーダーシップの両面の経験を活かし、技術実行とデリバリーの整合を橋渡しします。開発者の育成、エンジニアリング標準の整備、全体アーキテクチャの一貫性確保に注力しています。",
            p3: "分断されたプラットフォームを、安全で統合された本番運用レベルのソリューションへと変革し、エンタープライズとクラウドのエコシステム全体で価値を提供します。"
        },
        skills: {
            title: "スキル",
            backend: {
                title: "バックエンドエンジニアリング",
                item1: "重要ドメインにおけるサービス設計とデリバリーを主導",
                item2: "信頼性・性能・セキュリティの標準を定義",
                item3: "API、データ契約、エラーハンドリングの規約を整備",
                item4: "保守性を重視した設計とコードレビューを実施"
            },
            architecture: {
                title: "アーキテクチャ設計",
                item1: "システム境界、責任範囲、連携経路を定義",
                item2: "短期デリバリーと長期スケーラビリティを両立",
                item3: "チーム横断の技術意思決定をリード",
                item4: "レビュー可能で検証しやすい設計を担保"
            },
            integration: {
                title: "連携・API",
                item1: "エンタープライズAPI連携と契約整合を主導",
                item2: "認証・認可の標準を策定",
                item3: "依存関係を整理しチーム間連携を推進",
                item4: "バージョニングで互換性リスクを低減"
            },
            databases: {
                title: "データベース",
                item1: "整合性と性能を意識したスキーマ設計",
                item2: "データガバナンスとアクセス管理を定義",
                item3: "ダウンタイム最小の移行計画を策定",
                item4: "本番安定性のための監視とチューニング"
            },
            cloud: {
                title: "クラウド＆DevOps",
                item1: "デプロイ戦略と安全なリリースを統括",
                item2: "監視・アラート・インシデント対応を設計",
                item3: "再現性のある環境構築を自動化",
                item4: "本番運用のコンプライアンスを担保"
            },
            leadership: {
                title: "エンジニアリングリーダーシップ",
                item1: "標準化とレビュー文化を定着させる",
                item2: "優先順位とデリバリープランを整合",
                item3: "技術オーナーシップの成長を支援",
                item4: "横断的な意思決定とガバナンスを推進"
            }
        },
        work: {
            title: "職務経歴",
            job1: {
                title: "シニアフルスタック開発者",
                period: "2023年 - 現在",
                item1: "スケーラブルなWebアプリケーションとエンタープライズ連携の構築",
                item2: "バックエンド設計とセキュアなAPIサービスの設計",
                item3: "クラウド展開と本番リリース運用のリード",
                item4: "要件定義から運用支援までのエンドツーエンド開発"
            },
            job2: {
                title: "ソフトウェアデベロッパー",
                item1: "Google Ads、Docusign、ACRA、AWSとのAPI連携",
                item2: "OAuth 2.0とJWT認証の実装",
                item3: "人事・財務向けABAP開発（ALVレポート、Adobe Forms）",
                item4: "SITを含む開発サイクル全体の管理"
            },
            job3: {
                title: "ソフトウェアエンジニア",
                item1: "本番クリティカルシステムのレベル2サポート",
                item2: "社内アプリケーションの運用・保守",
                item3: "製造ソフトウェアのカスタマイズ",
                item4: "部門間の技術調整"
            },
            job4: {
                title: "ソフトウェアデベロッパー",
                item1: "AGD Bank向けFinacleコアバンキング（Infosys）",
                item2: "日本政策投資銀行向けレポートモジュール（日立）",
                item3: "PAN-United、Huawei向け電子入札・物流システム",
                item4: "POS・チケッティングプラットフォーム開発"
            }
        },
        projects: {
            title: "主要プロジェクト",
            google: {
                title: "Google Ads連携",
                desc: "キャンペーン管理自動化のためのSAPとGoogle Ads接続。OAuth 2.0フローとセキュアなトークン管理を実装。"
            },
            docusign: {
                title: "Docusign電子署名",
                desc: "SAPワークフローからの電子文書署名。サーバー間API アクセス用のJWT Grant認証を構築。"
            },
            acra: {
                title: "ACRA連携",
                desc: "シンガポール企業規制当局との自動企業情報検証。ACRAとSAP間のデータ変換を実装。"
            },
            finacle: {
                title: "Finacleコアバンキング",
                desc: "AGD Bank向けコアバンキングプラットフォーム。取引処理と口座管理モジュールの開発。"
            }
        },
        values: {
            title: "仕事の進め方",
            communication: {
                title: "コミュニケーション",
                desc: "エンジニアリングチーム内およびPMO／プロダクトのステークホルダーと、透明性の高いコミュニケーションを促進します。早期の質問、十分なドキュメント、技術方針と意思決定の共有を徹底します。"
            },
            problem: {
                title: "問題解決",
                desc: "課題を分析してから解決策を提案することを徹底し、仮説を検証しながら段階的にデリバリーします。品質とスピードのバランスを取りつつ、技術的に健全で保守性の高い解決策を担保します。"
            },
            production: {
                title: "本番環境への意識",
                desc: "セキュアで信頼性が高く、保守性のあるシステムを構築するようチームを牽引します。エッジケース対応、本番運用の準備、バックエンド・フロントエンド・連携を含む運用卓越性を重視します。"
            },
            leadership: {
                title: "リーダーシップ＆アライメント",
                desc: "シニア／ジュニア開発者をメンタリングし、ガイダンスとコードレビューを提供します。アーキテクチャ標準とエンジニアリングのベストプラクティスを定義し、クロスファンクショナルな関係者と複数チームを整合させ、拡張性のある一貫したソリューションを実現します。"
            }
        },
        contact: {
            title: "連絡先",
            intro: "テックエンジニアリングリード／エンジニアリングリードの機会を探しています。チームリーダーシップ、アーキテクチャ、エンタープライズ連携の経験があり、PMOやプロダクトチームと密に連携してスケーラブルなシステムを提供します。",
            phone: "電話",
            connect: "つながる"
        }
    }
};

translations.ja.projects.fe = {
    title: "FE\u8cc7\u683c\u8a66\u9a13\u7df4\u7fd2\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff08AI\u4e3b\u5c0e\u30b7\u30b9\u30c6\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\uff09",
    desc: "\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u4e3b\u4f53\u306e\u53d6\u7d44\u3067\u3001\u30b7\u30b9\u30c6\u30e0\u5883\u754c\u3001\u958b\u767a\u5236\u7d04\u3001\u30ac\u30d0\u30ca\u30f3\u30b9\u306f\u4eba\u9593\u304c\u4e3b\u5c0e\u3057\u3001AI\u3092\u30b7\u30cb\u30a2\u5b9f\u88c5\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u3057\u3066\u6d3b\u7528\u3057\u3001\u5b9f\u88c5\u751f\u7523\u6027\u3092\u5411\u4e0a\u3055\u305b\u307e\u3059\u3002",
    model: {
        title: "AI\u30aa\u30fc\u30b1\u30b9\u30c8\u30ec\u30fc\u30c8\u578b\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u30e2\u30c7\u30eb",
        desc: "\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3068\u5236\u7d04\u306f\u4eba\u9593\u4e3b\u5c0e\u3067\u8a2d\u8a08\u3057\u3001\u5b9f\u88c5\u306f\u69cb\u9020\u5316\u30d7\u30ed\u30f3\u30d7\u30c8\u3068\u53cd\u5fa9\u7684\u691c\u8a3c\u306b\u3088\u308aAI\u3067\u52a0\u901f\u3057\u307e\u3059\u3002"
    },
    cloud: {
        title: "AWS\u30af\u30e9\u30a6\u30c9\u30c7\u30d7\u30ed\u30a4",
        desc: "\u30b3\u30f3\u30c6\u30ca\u5316\u3057\u305fNext.js\u30a2\u30d7\u30ea\u3068\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u30ef\u30fc\u30ab\u30fc\u3092AWS EC2\u306b\u914d\u5099\u3057\u3001PostgreSQL\u3067\u30c7\u30fc\u30bf\u3092\u6c38\u7d9a\u5316\u3057\u307e\u3059\u3002"
    },
    pdf: {
        title: "\u77e5\u80fd\u7684PDF\u53d6\u8fbc\u307f\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",
        desc: "\u975e\u540c\u671f\u30ef\u30fc\u30ab\u30fc\u304c\u8907\u6570\u5f62\u5f0f\u306e\u8a66\u9a13PDF\u3092\u89e3\u6790\u3057\u3001\u753b\u50cf\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3001\u30af\u30ed\u30c3\u30d7\u3001\u8907\u6570\u30da\u30fc\u30b8\u7d50\u5408\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"
    },
    auth: {
        title: "\u5b89\u5168\u306a\u8a8d\u8a3c\u30fbRBAC",
        desc: "Google OAuth\u3068\u30e1\u30fc\u30eb/\u30d1\u30b9\u30ef\u30fc\u30c9\u8a8d\u8a3c\u3092\u63d0\u4f9b\u3057\u3001\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u3068\u30aa\u30fc\u30ca\u30fc\u521d\u671f\u5316\u3092\u7d44\u307f\u8fbc\u307f\u307e\u3059\u3002"
    },
    analytics: {
        title: "\u904b\u7528\u30a2\u30ca\u30ea\u30c6\u30a3\u30af\u30b9",
        desc: "\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u30c8\u30ec\u30f3\u30c9\u3068\u6d3b\u52d5\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u53ef\u8996\u5316\u3057\u3001\u65e5\u6b21/\u9031\u6b21/\u6708\u6b21\u96c6\u8a08\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"
    },
    monitoring: {
        title: "AI\u652f\u63f4\u76e3\u8996\u30fb\u30c7\u30d0\u30c3\u30b0",
        desc: "\u69cb\u9020\u5316\u30ed\u30b0\u3068AI\u652f\u63f4\u306e\u539f\u56e0\u5206\u6790\u306b\u3088\u308a\u3001\u89e3\u6790\u30fb\u691c\u8a3c\u306e\u30a8\u30c3\u30b8\u30b1\u30fc\u30b9\u3092\u8fc5\u901f\u306b\u89e3\u6c7a\u3057\u307e\u3059\u3002"
    },
    tags: {
        next: "Next.js",
        aws: "AWS EC2",
        postgres: "PostgreSQL",
        rbac: "RBAC",
        worker: "\u975e\u540c\u671f\u30ef\u30fc\u30ab\u30fc"
    },
    live: "\u30e9\u30a4\u30d6\u30b5\u30a4\u30c8"
};

translations.ja.projects.smart = {
    title: "\u30b9\u30de\u30fc\u30c8\u30b7\u30c6\u30a3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff08\u30ab\u30ec\u30f3\u5dde\uff09",
    roleLabel: "\u5f79\u5272\uff1a",
    role: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc / \u30c6\u30af\u30cb\u30ab\u30eb\u30b3\u30fc\u30c7\u30a3\u30cd\u30fc\u30bf\u30fc",
    desc: "\u653f\u5e9c\u4e3b\u5c0e\u306e\u30b9\u30de\u30fc\u30c8\u30b7\u30c6\u30a3\u8a08\u753b\u3067\u3001Huawei eLTE Rapid\u901a\u4fe1\u57fa\u76e4\u306e\u5c0e\u5165\u3092\u7d71\u62ec\u3002",
    item1: "\u30df\u30e3\u30f3\u30de\u30fc\u653f\u5e9c\u306e\u95a2\u4fc2\u8005\u3068Huawei\u904b\u7528\u30c1\u30fc\u30e0\u306e\u9023\u643a\u3092\u4e3b\u5c0e",
    item2: "\u5c55\u958b\u304a\u3088\u3073\u904b\u7528\u79fb\u884c\u671f\u9593\u306b\u304a\u3044\u3066\u3001\u591a\u56fd\u7c4d\u30a8\u30f3\u30b8\u30cb\u30a2\u30c1\u30fc\u30e0\u3092\u7d71\u62ec",
    item3: "\u6280\u8853\u6574\u5408\u3001\u898f\u5236\u9075\u5b88\u3001\u5b9f\u884c\u52b9\u7387\u3092\u62c5\u4fdd",
    item4: "\u30af\u30ed\u30b9\u30c1\u30fc\u30e0\u306e\u6280\u8853\u30fb\u904b\u7528\u8ab2\u984c\u306b\u5bfe\u3059\u308b\u30a8\u30b9\u30ab\u30ec\u30fc\u30b7\u30e7\u30f3\u7a93\u53e3\u3092\u62c5\u5f53",
    item5: "\u516c\u5171\u90e8\u9580\u306e\u73fe\u4ee3\u5316\u3092\u652f\u3048\u308b\u5927\u898f\u6a21\u30a4\u30f3\u30d5\u30e9\u6574\u5099\u3092\u63a8\u9032",
    tags: {
        city: "\u30b9\u30de\u30fc\u30c8\u30b7\u30c6\u30a3",
        huawei: "Huawei eLTE",
        lead: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30fc\u30c0\u30fc\u30b7\u30c3\u30d7"
    }
};

// Get nested translation value
function getTranslation(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Apply translations to page
function applyTranslations(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(translations[lang], key);
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update toggle button text
    const toggle = document.getElementById('langToggle');
    toggle.textContent = lang === 'en' ? 'JP' : 'EN';

    // Update page title
    document.title = lang === 'en'
        ? 'Ye Htut Aung | Java Developer'
        : 'Ye Htut Aung | Javaデベロッパー';
}

// Initialize
let currentLang = localStorage.getItem('lang') || 'en';
applyTranslations(currentLang);

// Toggle handler
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    localStorage.setItem('lang', currentLang);
    applyTranslations(currentLang);
});
