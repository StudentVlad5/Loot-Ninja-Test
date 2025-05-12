import React, { createContext, useState, ReactNode, useContext } from 'react';

type CurrencyCode = 'usd' | 'eur' | 'uah';

interface ProjectContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<CurrencyCode>('usd');

  return (
    <ProjectContext.Provider value={{ currency, setCurrency }}>
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