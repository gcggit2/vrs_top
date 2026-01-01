import { ContactProvider } from "@/context/ContactContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContactProvider>
      <div className="bg-white min-h-screen flex flex-col font-sans text-gray-800">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ContactProvider>
  );
}
