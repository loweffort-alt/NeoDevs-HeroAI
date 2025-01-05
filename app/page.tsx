import DevTools from "@/components/sections/home/devtools";
import Explication from "@/components/sections/home/explication";
import Footer from "@/components/sections/home/footer";
import Header from "@/components/sections/home/header";
import Hero from "@/components/sections/home/hero";
import TeamSection from "@/components/sections/home/team";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Header />
      <Hero />
      <Explication />
      <DevTools />
      <TeamSection />
      <Footer />
    </div>
  );
}
