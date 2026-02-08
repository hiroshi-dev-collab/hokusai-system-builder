import { Language } from "@/contexts/LanguageContext";

const translations = {
  en: {
    // Nav
    nav: { about: "About", work: "Work", contact: "Contact", lightMode: "Light Mode", darkMode: "Dark Mode", language: "Language" },
    // Hero
    hero: {
      subtitle: "Software Developer · Japan",
      description: "Building production-grade systems — SaaS platforms, AI-powered applications, dashboards, and enterprise integrations.",
      viewWork: "View Work",
      contact: "Contact",
    },
    // About
    about: {
      title: "About",
      headline: "Software developer with hands-on experience delivering production systems across SaaS, AI, ERP, and enterprise domains.",
      p1: "Based in Japan, building and maintaining complex integrations including payment terminals, QR payments, and accounting systems. Developing modern platforms with scalable architecture and AI-powered workflows.",
      p2: "Experienced in both web and mobile development, creating responsive applications that work seamlessly across all devices. Focused on production reliability, clear architecture, and business impact.",
      focusAreas: "Focus Areas",
      areas: ["SaaS Platforms", "AI Applications", "Mobile Development", "ERP Integrations", "Payment Systems", "Data Dashboards", "Enterprise Solutions"],
    },
    // Portfolio
    portfolio: {
      label: "Selected Work",
      heading1: "Production systems",
      heading2: "across industries",
      subtitle: "From healthcare to fintech, building reliable systems that scale.",
    },
    // Contact
    contact: {
      title: "Contact",
      heading1: "Let's build",
      heading2: "something",
      heading3: "together",
      description: "Open to collaborating on SaaS platforms, AI-powered products, ERP integrations, mobile applications, and data-driven dashboards.",
      email: "Email",
      available: "Currently available for new projects",
    },
    // Footer
    footer: {
      role: "Software Developer · Japan",
      decorative: "HIROSHI · SOFTWARE · DEVELOPER",
    },
  },
  jp: {
    nav: { about: "概要", work: "実績", contact: "お問い合わせ", lightMode: "ライトモード", darkMode: "ダークモード", language: "言語" },
    hero: {
      subtitle: "ソフトウェア開発者 · 日本",
      description: "SaaSプラットフォーム、AI搭載アプリケーション、ダッシュボード、エンタープライズ統合など、本番レベルのシステムを構築。",
      viewWork: "実績を見る",
      contact: "お問い合わせ",
    },
    about: {
      title: "概要",
      headline: "SaaS、AI、ERP、エンタープライズ領域で本番システムを提供してきたソフトウェア開発者。",
      p1: "日本を拠点に、決済端末、QR決済、会計システムなどの複雑な統合の構築・保守を行っています。スケーラブルなアーキテクチャとAIワークフローを備えたモダンなプラットフォームを開発。",
      p2: "ウェブとモバイルの両方の開発経験があり、すべてのデバイスでシームレスに動作するレスポンシブアプリケーションを作成。本番環境の信頼性、明確なアーキテクチャ、ビジネスへの影響に焦点を当てています。",
      focusAreas: "専門分野",
      areas: ["SaaSプラットフォーム", "AIアプリケーション", "モバイル開発", "ERP統合", "決済システム", "データダッシュボード", "エンタープライズソリューション"],
    },
    portfolio: {
      label: "厳選された実績",
      heading1: "本番システム",
      heading2: "多業界にわたる",
      subtitle: "ヘルスケアからフィンテックまで、スケーラブルで信頼性の高いシステムを構築。",
    },
    contact: {
      title: "お問い合わせ",
      heading1: "一緒に",
      heading2: "何かを",
      heading3: "作りましょう",
      description: "SaaSプラットフォーム、AI製品、ERP統合、モバイルアプリケーション、データ駆動型ダッシュボードでの協力を歓迎します。",
      email: "メール",
      available: "現在、新しいプロジェクトを受け付けています",
    },
    footer: {
      role: "ソフトウェア開発者 · 日本",
      decorative: "ヒロシ · ソフトウェア · 開発者",
    },
  },
  sp: {
    nav: { about: "Acerca de", work: "Trabajo", contact: "Contacto", lightMode: "Modo Claro", darkMode: "Modo Oscuro", language: "Idioma" },
    hero: {
      subtitle: "Desarrollador de Software · Japón",
      description: "Construyendo sistemas de producción — plataformas SaaS, aplicaciones con IA, dashboards e integraciones empresariales.",
      viewWork: "Ver Trabajo",
      contact: "Contacto",
    },
    about: {
      title: "Acerca de",
      headline: "Desarrollador de software con experiencia entregando sistemas de producción en SaaS, IA, ERP y dominios empresariales.",
      p1: "Basado en Japón, construyendo y manteniendo integraciones complejas incluyendo terminales de pago, pagos QR y sistemas contables. Desarrollando plataformas modernas con arquitectura escalable y flujos de trabajo con IA.",
      p2: "Experiencia en desarrollo web y móvil, creando aplicaciones responsivas que funcionan sin problemas en todos los dispositivos. Enfocado en confiabilidad de producción, arquitectura clara e impacto empresarial.",
      focusAreas: "Áreas de Enfoque",
      areas: ["Plataformas SaaS", "Aplicaciones de IA", "Desarrollo Móvil", "Integraciones ERP", "Sistemas de Pago", "Dashboards de Datos", "Soluciones Empresariales"],
    },
    portfolio: {
      label: "Trabajo Seleccionado",
      heading1: "Sistemas de producción",
      heading2: "en diversas industrias",
      subtitle: "De salud a fintech, construyendo sistemas confiables que escalan.",
    },
    contact: {
      title: "Contacto",
      heading1: "Construyamos",
      heading2: "algo",
      heading3: "juntos",
      description: "Abierto a colaborar en plataformas SaaS, productos con IA, integraciones ERP, aplicaciones móviles y dashboards basados en datos.",
      email: "Correo",
      available: "Actualmente disponible para nuevos proyectos",
    },
    footer: {
      role: "Desarrollador de Software · Japón",
      decorative: "HIROSHI · SOFTWARE · DESARROLLADOR",
    },
  },
  pr: {
    nav: { about: "Sobre", work: "Trabalho", contact: "Contato", lightMode: "Modo Claro", darkMode: "Modo Escuro", language: "Idioma" },
    hero: {
      subtitle: "Desenvolvedor de Software · Japão",
      description: "Construindo sistemas de produção — plataformas SaaS, aplicações com IA, dashboards e integrações empresariais.",
      viewWork: "Ver Trabalho",
      contact: "Contato",
    },
    about: {
      title: "Sobre",
      headline: "Desenvolvedor de software com experiência entregando sistemas de produção em SaaS, IA, ERP e domínios empresariais.",
      p1: "Baseado no Japão, construindo e mantendo integrações complexas incluindo terminais de pagamento, pagamentos QR e sistemas contábeis. Desenvolvendo plataformas modernas com arquitetura escalável e fluxos de trabalho com IA.",
      p2: "Experiência em desenvolvimento web e mobile, criando aplicações responsivas que funcionam perfeitamente em todos os dispositivos. Focado em confiabilidade de produção, arquitetura clara e impacto nos negócios.",
      focusAreas: "Áreas de Foco",
      areas: ["Plataformas SaaS", "Aplicações de IA", "Desenvolvimento Mobile", "Integrações ERP", "Sistemas de Pagamento", "Dashboards de Dados", "Soluções Empresariais"],
    },
    portfolio: {
      label: "Trabalho Selecionado",
      heading1: "Sistemas de produção",
      heading2: "em diversas indústrias",
      subtitle: "De saúde a fintech, construindo sistemas confiáveis que escalam.",
    },
    contact: {
      title: "Contato",
      heading1: "Vamos construir",
      heading2: "algo",
      heading3: "juntos",
      description: "Aberto a colaborar em plataformas SaaS, produtos com IA, integrações ERP, aplicações mobile e dashboards baseados em dados.",
      email: "E-mail",
      available: "Atualmente disponível para novos projetos",
    },
    footer: {
      role: "Desenvolvedor de Software · Japão",
      decorative: "HIROSHI · SOFTWARE · DESENVOLVEDOR",
    },
  },
};

export type Translations = {
  nav: { about: string; work: string; contact: string; lightMode: string; darkMode: string; language: string };
  hero: { subtitle: string; description: string; viewWork: string; contact: string };
  about: { title: string; headline: string; p1: string; p2: string; focusAreas: string; areas: readonly string[] };
  portfolio: { label: string; heading1: string; heading2: string; subtitle: string };
  contact: { title: string; heading1: string; heading2: string; heading3: string; description: string; email: string; available: string };
  footer: { role: string; decorative: string };
};

export default translations as Record<string, Translations>;
