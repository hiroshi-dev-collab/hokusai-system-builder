import { Language } from "@/contexts/LanguageContext";

const translations = {
  en: {
    nav: { about: "About", work: "Work", contact: "Contact", lightMode: "Light Mode", darkMode: "Dark Mode", language: "Language" },
    hero: {
      subtitle: "Tech Agency · Japan",
      description: "Hiroshi Funaoka and his team build production-grade systems — SaaS platforms, AI-powered applications, dashboards, and enterprise integrations.",
      viewWork: "Our Work",
      contact: "Get in Touch",
      founder: "Founded by Hiroshi Funaoka",
    },
    about: {
      title: "About",
      headline: "A tech agency led by Hiroshi Funaoka, delivering production systems across SaaS, AI, ERP, and enterprise domains.",
      p1: "HokusaiLabs is a Japan-based tech agency specializing in complex integrations — payment terminals, QR payments, accounting systems — and modern platforms built with scalable architecture and AI-powered workflows.",
      p2: "Hiroshi Funaoka leads every project from architecture to deployment, bringing deep experience in web and mobile development. His hands-on approach ensures production reliability, clear architecture, and measurable business impact.",
      focusAreas: "Services",
      areas: ["SaaS Platforms", "AI Applications", "Mobile Development", "ERP Integrations", "Payment Systems", "Data Dashboards", "Enterprise Solutions"],
    },
    portfolio: {
      label: "Our Work",
      heading1: "Production systems",
      heading2: "across industries",
      subtitle: "From healthcare to fintech, building reliable systems that scale.",
    },
    contact: {
      title: "Contact",
      heading1: "Let's build",
      heading2: "your next",
      heading3: "project",
      description: "Reach out to Hiroshi directly — we partner with businesses on SaaS platforms, AI-powered products, ERP integrations, mobile applications, and data-driven dashboards.",
      email: "Email",
      available: "Currently accepting new projects",
    },
    footer: {
      role: "Tech Agency · Japan",
      decorative: "HOKUSAILABS · TECH · AGENCY",
    },
  },
  jp: {
    nav: { about: "概要", work: "実績", contact: "お問い合わせ", lightMode: "ライトモード", darkMode: "ダークモード", language: "言語" },
    hero: {
      subtitle: "テックエージェンシー · 日本",
      description: "舟岡ヒロシとチームが、SaaSプラットフォーム、AI搭載アプリケーション、ダッシュボード、エンタープライズ統合など、本番レベルのシステムを構築。",
      viewWork: "実績を見る",
      contact: "お問い合わせ",
      founder: "代表：舟岡 ヒロシ",
    },
    about: {
      title: "概要",
      headline: "舟岡ヒロシが率いる、SaaS、AI、ERP、エンタープライズ領域で本番システムを提供するテックエージェンシー。",
      p1: "HokusaiLabsは日本を拠点に、決済端末、QR決済、会計システムなどの複雑な統合を専門とし、スケーラブルなアーキテクチャとAIワークフローを備えたモダンなプラットフォームを構築しています。",
      p2: "舟岡ヒロシが設計からデプロイまで全プロジェクトをリード。ウェブとモバイルの豊富な経験を活かし、本番環境の信頼性、明確なアーキテクチャ、ビジネスへの確かな影響を実現しています。",
      focusAreas: "サービス",
      areas: ["SaaSプラットフォーム", "AIアプリケーション", "モバイル開発", "ERP統合", "決済システム", "データダッシュボード", "エンタープライズソリューション"],
    },
    portfolio: {
      label: "実績",
      heading1: "本番システム",
      heading2: "多業界にわたる",
      subtitle: "ヘルスケアからフィンテックまで、スケーラブルで信頼性の高いシステムを構築。",
    },
    contact: {
      title: "お問い合わせ",
      heading1: "次の",
      heading2: "プロジェクトを",
      heading3: "一緒に",
      description: "ヒロシに直接ご連絡ください。SaaSプラットフォーム、AI製品、ERP統合、モバイルアプリケーション、データ駆動型ダッシュボードでのパートナーシップを歓迎します。",
      email: "メール",
      available: "現在、新しいプロジェクトを受け付けています",
    },
    footer: {
      role: "テックエージェンシー · 日本",
      decorative: "HOKUSAILABS · テック · エージェンシー",
    },
  },
  sp: {
    nav: { about: "Acerca de", work: "Trabajo", contact: "Contacto", lightMode: "Modo Claro", darkMode: "Modo Oscuro", language: "Idioma" },
    hero: {
      subtitle: "Agencia Tecnológica · Japón",
      description: "Hiroshi Funaoka y su equipo construyen sistemas de producción — plataformas SaaS, aplicaciones con IA, dashboards e integraciones empresariales.",
      viewWork: "Nuestro Trabajo",
      contact: "Contáctenos",
      founder: "Fundado por Hiroshi Funaoka",
    },
    about: {
      title: "Acerca de",
      headline: "Una agencia tecnológica liderada por Hiroshi Funaoka, entregando sistemas de producción en SaaS, IA, ERP y dominios empresariales.",
      p1: "HokusaiLabs es una agencia tecnológica con sede en Japón, especializada en integraciones complejas — terminales de pago, pagos QR, sistemas contables — y plataformas modernas con arquitectura escalable y flujos de trabajo con IA.",
      p2: "Hiroshi Funaoka lidera cada proyecto desde la arquitectura hasta el despliegue, con amplia experiencia en desarrollo web y móvil. Su enfoque práctico garantiza confiabilidad de producción, arquitectura clara e impacto empresarial medible.",
      focusAreas: "Servicios",
      areas: ["Plataformas SaaS", "Aplicaciones de IA", "Desarrollo Móvil", "Integraciones ERP", "Sistemas de Pago", "Dashboards de Datos", "Soluciones Empresariales"],
    },
    portfolio: {
      label: "Nuestro Trabajo",
      heading1: "Sistemas de producción",
      heading2: "en diversas industrias",
      subtitle: "De salud a fintech, construyendo sistemas confiables que escalan.",
    },
    contact: {
      title: "Contacto",
      heading1: "Construyamos",
      heading2: "su próximo",
      heading3: "proyecto",
      description: "Contacte a Hiroshi directamente — nos asociamos con empresas en plataformas SaaS, productos con IA, integraciones ERP, aplicaciones móviles y dashboards basados en datos.",
      email: "Correo",
      available: "Actualmente aceptando nuevos proyectos",
    },
    footer: {
      role: "Agencia Tecnológica · Japón",
      decorative: "HOKUSAILABS · TECH · AGENCY",
    },
  },
  pr: {
    nav: { about: "Sobre", work: "Trabalho", contact: "Contato", lightMode: "Modo Claro", darkMode: "Modo Escuro", language: "Idioma" },
    hero: {
      subtitle: "Agência de Tecnologia · Japão",
      description: "Hiroshi Funaoka e sua equipe constroem sistemas de produção — plataformas SaaS, aplicações com IA, dashboards e integrações empresariais.",
      viewWork: "Nosso Trabalho",
      contact: "Entre em Contato",
      founder: "Fundado por Hiroshi Funaoka",
    },
    about: {
      title: "Sobre",
      headline: "Uma agência de tecnologia liderada por Hiroshi Funaoka, entregando sistemas de produção em SaaS, IA, ERP e domínios empresariais.",
      p1: "HokusaiLabs é uma agência de tecnologia baseada no Japão, especializada em integrações complexas — terminais de pagamento, pagamentos QR, sistemas contábeis — e plataformas modernas com arquitetura escalável e fluxos de trabalho com IA.",
      p2: "Hiroshi Funaoka lidera cada projeto da arquitetura ao deploy, com ampla experiência em desenvolvimento web e mobile. Sua abordagem prática garante confiabilidade de produção, arquitetura clara e impacto mensurável nos negócios.",
      focusAreas: "Serviços",
      areas: ["Plataformas SaaS", "Aplicações de IA", "Desenvolvimento Mobile", "Integrações ERP", "Sistemas de Pagamento", "Dashboards de Dados", "Soluções Empresariais"],
    },
    portfolio: {
      label: "Nosso Trabalho",
      heading1: "Sistemas de produção",
      heading2: "em diversas indústrias",
      subtitle: "De saúde a fintech, construindo sistemas confiáveis que escalam.",
    },
    contact: {
      title: "Contato",
      heading1: "Vamos construir",
      heading2: "seu próximo",
      heading3: "projeto",
      description: "Entre em contato com Hiroshi diretamente — nos associamos com empresas em plataformas SaaS, produtos com IA, integrações ERP, aplicações mobile e dashboards baseados em dados.",
      email: "E-mail",
      available: "Atualmente aceitando novos projetos",
    },
    footer: {
      role: "Agência de Tecnologia · Japão",
      decorative: "HOKUSAILABS · TECH · AGENCY",
    },
  },
};

export type Translations = {
  nav: { about: string; work: string; contact: string; lightMode: string; darkMode: string; language: string };
  hero: { subtitle: string; description: string; viewWork: string; contact: string; founder: string };
  about: { title: string; headline: string; p1: string; p2: string; focusAreas: string; areas: readonly string[] };
  portfolio: { label: string; heading1: string; heading2: string; subtitle: string };
  contact: { title: string; heading1: string; heading2: string; heading3: string; description: string; email: string; available: string };
  footer: { role: string; decorative: string };
};

export default translations as Record<string, Translations>;
