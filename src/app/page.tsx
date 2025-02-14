import Header from "../components/header";
import Footer from "../components/footer";
import {CardStyle1} from "@/components/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center m-10 space-y-5">
        <h1 className="text-3xl font-bold">Algo-Visualizer</h1>

        {/* Display cards of the different algorithm pages */}
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <CardStyle1 card_name="Arrays" card_text="This is a card description." href="/arrays" />
            <CardStyle1 card_name="Linked Lists" card_text="This is a card description." href="/linked-lists" />
            <CardStyle1 card_name="Trees" card_text="This is a card description." href="/trees" />
            <CardStyle1 card_name="Graphs" card_text="This is a card description." href="/graphs" />
            <CardStyle1 card_name="Heaps" card_text="This is a card description." href="/heaps" />
            <CardStyle1 card_name="Dynamic Programming" card_text="This is a card description." href="/dynamic-programming" />
          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
}
