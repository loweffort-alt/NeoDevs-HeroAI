import DropFile from "@/components/sections/home/dropfile";
import Explication from "@/components/sections/home/explication";
import Footer from "@/components/sections/home/footer";
import Header from "@/components/sections/home/header";
import Hero from "@/components/sections/home/hero";

export default function Home() {
  return (
    <div className="body-font">
      <Header />
      <Hero />
      <DropFile />
      <Explication />
      <Footer />
    </div>
  );
}
