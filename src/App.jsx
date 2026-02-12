import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Greetings from "./components/Greetings";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import Userlist from "./components/Userlist";
import WelcomeMessage from "./components/WelcomeMessage";
import { Personchild } from "./components/Person";
import Product from "./components/Product";
import Card from "./components/Card";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import GreetingCR from "./components/GreetingCR";
import StyledCard from "./components/StyledCard";
import IconComponent from "./components/IconComponent";
const App = () => {
  return (
    <>
      <ProductInfo />
      <Userlist />
      <ProductList />
      <div>
        <Personchild name="Sayujya Dhungana" age={24} />
      </div>
      <Product name="Laptop" price="120" avaiablity="true" />
      <Card>
        <h2>This is a text for card 1</h2>
      </Card>
      <Card>
        <h3>This is text for card 2</h3>
      </Card>
      <Weather temp="30" />
      <UserStatus LoggedIn={true} isAdmin={false} />
      <GreetingCR timeofDay="morning" />
      <StyledCard />
      <IconComponent />
    </>
  );
};

export default App;
