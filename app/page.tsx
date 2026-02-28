import Image from "next/image";
import Body from "./(user)/components/body";
import Header from "./(user)/components/Header";
import Products from "./(user)/components/products";
import Footer from "./(user)/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Body/>
      <Products/>
      <Footer/>
    </div>
  );
}
