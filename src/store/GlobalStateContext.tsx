import { createContext, useContext, useState, ReactNode } from "react";

// Define types for your global values
interface GlobalValues {
  github: string;
  linkedIn: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

interface GlobalValuesContextType {
    globalValues: GlobalValues;
    setGlobalValue: <K extends keyof GlobalValues>(key: K, value: GlobalValues[K]) => void;
  }
  
  // Define default global values
  const defaultGlobalValues: GlobalValues = {
    github: "https://github.com/bsoft-albin",
    linkedIn: "#",
    instagram: "https://www.instagram.com/a.j_alvin/",
    twitter : "https://x.com/albin_anthony24",
    facebook : "https://www.facebook.com/profile.php?id=100079775847839"
  };
  
  // Create the context
  const GlobalValuesContext = createContext<GlobalValuesContextType>({
    globalValues: defaultGlobalValues,
    setGlobalValue: () => {}, // No-op by default
  });
  
  // Custom hook to use the context
  export const useGlobalValues = () => useContext(GlobalValuesContext);
  
  // Provider component
  export const GlobalValuesProvider = ({ children }: { children: ReactNode }) => {
    const [globalValues, setGlobalValues] = useState<GlobalValues>(defaultGlobalValues);
  
    // Generic function to update global values
    const setGlobalValue = <K extends keyof GlobalValues>(key: K, value: GlobalValues[K]) => {
      setGlobalValues((prev) => ({ ...prev, [key]: value }));
    };
  
    return (
      <GlobalValuesContext.Provider value={{ globalValues, setGlobalValue }}>
        {children}
      </GlobalValuesContext.Provider>
    );
  };