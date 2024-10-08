import { Index } from "./components/home/index/Index";
import { Content } from "./components/home/page/Content";
import MapContact from "./components/mapcontact/Mapcontact";

export default function Home() {
  return (
    <>
      <main className="w-full align-middle" style={{ backgroundImage: 'url(/Home.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Index/>
      </main>    
      <Content/>
      <MapContact/>
    </>
  );
}