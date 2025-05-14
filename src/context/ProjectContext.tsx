import React, { createContext, useState, ReactNode, useContext } from 'react';

type CurrencyCode = 'usd' | 'eur' | 'uah';
type LanguahesCode = 'uk' | 'ua' | 'eu';

interface ProjectContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  language: LanguahesCode;
  setLanguage: (code: LanguahesCode) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<CurrencyCode>('usd');
  const [language, setLanguage] = useState<LanguahesCode>('uk');

  return (
    <ProjectContext.Provider value={{ currency, setCurrency, language, setLanguage  }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};