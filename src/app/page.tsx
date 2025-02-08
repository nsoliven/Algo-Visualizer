import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faCode } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import CardStyle1 from "@/components/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col">
        <h1>Algo-Visualizer</h1>
        <CardStyle1 card_name="Example Card" card_text="This is a card description." />
      </main>
      <Footer />
    </div>
  );
}
