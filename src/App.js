import About from "./components/about/about";
import CollectionFeatures from "./components/collectionFeatured/collectionFeatured";
import CreateAndSell from "./components/createAndSell/createAndSell";
import DiscoverMore from "./components/discoverMore/discoverMore";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import TopCollection from "./components/topCollection/topCollection";


function App() {
  return (
    <>
      <Home/>
      <About/>
      <TopCollection/>
      <CollectionFeatures/>
      <CreateAndSell/>
      <DiscoverMore/>
      <Footer/>
    </>
  );
}

export default App;
