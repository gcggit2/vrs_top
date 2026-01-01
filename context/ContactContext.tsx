"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ContactFormData } from "@/lib/schema";

type ContactContextType = {
  formData: ContactFormData;
  setFormData: (data: ContactFormData) => void;
  clearFormData: () => void;
};

const defaultValues: ContactFormData = {
  companyName: "",
  name: "",
  email: "",
  categories: [],
  message: "",
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<ContactFormData>(defaultValues);

  const clearFormData = () => {
    setFormData(defaultValues);
  };

  return (
    <ContactContext.Provider value={{ formData, setFormData, clearFormData }}>
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

