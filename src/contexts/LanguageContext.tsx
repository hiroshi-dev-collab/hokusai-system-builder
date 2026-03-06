import { createContext, useContext, useState, ReactNode } from "react";
import translations, { Translations } from "@/i18n/translations";
import { FlagUS, FlagJP, FlagES, FlagBR } from "@/components/FlagIcons";

export type Language = "en" | "jp" | "sp" | "pr";

interface LanguageMeta {
  code: Language;
  label: string;
  flag: () => JSX.Element;
}

export const languages: LanguageMeta[] = [
  { code: "en", label: "English", flag: FlagUS },
  { code: "jp", label: "日本語", flag: FlagJP },
  { code: "sp", label: "Español", flag: FlagES },
  { code: "pr", label: "Português", flag: FlagBR },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentMeta: LanguageMeta;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const currentMeta = languages.find((l) => l.code === language)!;
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currentMeta, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
