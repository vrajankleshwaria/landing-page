import './App.css';

import Products from "./components/Products";
import KeyFeatures from "./components/KeyFeatures";
import WorkProcess from "./components/WorkProcess";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserFeedback from "./components/UserFeedback";
import Footer from "./components/Footer";
import Separator from "./components/Separator";

function App() {
  return (
    <div>
      <Header />
      <Separator />
      <MainContent />
      <Products />
      <KeyFeatures />
      <WorkProcess />
      <UserFeedback />
      <Footer />
    </div>
  );
}

export default App;
