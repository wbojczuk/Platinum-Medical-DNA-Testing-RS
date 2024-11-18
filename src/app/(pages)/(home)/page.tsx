import Book from "@/app/(mainsite)/components/homepage/Book/Book";
import Faster from "@/app/(mainsite)/components/homepage/Faster/Faster";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Keep from "@/app/(mainsite)/components/homepage/Keep/Keep";
import Proven from "@/app/(mainsite)/components/homepage/Proven/Proven";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";


export default function Home() {
  return (
    <>
      <Header />
      <Proven />
      <Keep />
      <Services />
      <Faster />
      <ServiceArea />
      <Book />
    </>
  )
}
