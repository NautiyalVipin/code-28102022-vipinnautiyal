import "./styles/app.css";
import Footer from "./components/Footer";
import MainScreen from "./components/MainScreen";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import ShapeDivider from "./components/ShapeDivider";

/*App Component Structure


  _____________________ App ____________________
  |         |            |              |     |
MainScreen  ShapeDivider Screen2  Screen3   Footer

*/



function App() {
  return (
    <>
      <div className="App">
        {/* MainScreen Component */}
        <MainScreen/>
        {/* Wave shape divider b/w main screen and screen 2 */}
        <ShapeDivider/>
      </div>
      {/* Screen 2 Component */}
      <Screen2/>
      {/* SCreen 3 Component */}
      <Screen3/>
      {/* Footer Component */}
      <Footer/>
    </>
  );
}

export default App;
