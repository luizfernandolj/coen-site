import { Index } from "./components/home/index/Index";
import { Content } from "./components/home/page/Content";
import ResearchAreas from "./components/area/Research";
import MapContact from "./components/mapcontact/Mapcontact";

export default function Home() {
  return (
    <>
      <main className="w-full align-middle" style={{ backgroundImage: 'url(/Home.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Index/>
      </main>
      <ResearchAreas/>
      <Content/>
      <MapContact/>
    </>
  );
}