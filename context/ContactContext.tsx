"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ContactFormData, KabeuchiFormData } from "@/lib/schema";

type ContactContextType = {
  formData: ContactFormData;
  setFormData: (data: ContactFormData) => void;
  clearFormData: () => void;
  // 壁打ち用
  kabeuchiData: KabeuchiFormData;
  setKabeuchiData: (data: KabeuchiFormData) => void;
  clearKabeuchiData: () => void;
};

const defaultValues: ContactFormData = {
  companyName: "",
  name: "",
  email: "",
  categories: [],
  message: "",
};

const defaultKabeuchiValues: KabeuchiFormData = {
  name: "",
  companyName: "",
  position: "",
  email: "",
  url: "",
  topics: [],
  otherTopic: "",
  marketingBudget: "",
  businessIssues: "",
  requests: "",
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<ContactFormData>(defaultValues);
  const [kabeuchiData, setKabeuchiData] = useState<KabeuchiFormData>(defaultKabeuchiValues);

  const clearFormData = () => {
    setFormData(defaultValues);
  };

  const clearKabeuchiData = () => {
    setKabeuchiData(defaultKabeuchiValues);
  };

  return (
    <ContactContext.Provider 
      value={{ 
        formData, 
        setFormData, 
        clearFormData,
        kabeuchiData,
        setKabeuchiData,
        clearKabeuchiData
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
}

