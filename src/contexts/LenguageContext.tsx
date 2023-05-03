import React, { createContext, useState } from "react";

import { translations } from "../data/translations";

type LanguageContextType = {
  text: { mainTitle: string };
  handleLanguage: (e: string) => void;
};

type LanguageContextProviderProps = { children: React.ReactNode };

export const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
);

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [text, setText] = useState(translations["es"]);

  const handleLanguage = (e: string) => {
    if (e === "es") {
      setText(translations.es);
    } else {
      setText(translations.en);
    }
  };

  return (
    <LanguageContext.Provider value={{ text, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
