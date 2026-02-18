import Footer from '@/components/Footer';
import { Header } from '@/components/layout';
import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Services | Estatio",
  description:
    "Explore our services: property value optimization, management, and investment guidance.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ServicesPage />
      <Footer />
    </>
  );
}
