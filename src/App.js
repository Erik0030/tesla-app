import "./App.css";
import "./index.css";
import Header from "./commponents/Header";
import Accsessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from "./commponents/Item";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemContainer">
        <Item
          id="model-s"
          title="Model S"
          desc="Order Online for Touchless Delivery
          "
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          id="model-y"
          title="Model Y"
          desc="Order Online for Touchless Delivery
          "
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          id="model-3"
          title="Model 3"
          desc="Order Online for Touchless Delivery
          "
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          id="model-x"
          title="Model X"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          id="panel"
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          id="roof"
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels
          "
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          id="acc"
          title="Accessories"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Accsessories}
          leftBtnTxt="SHOP NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
        />
      </div>
    </div>
  );
}

export default App;
