import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { store } from "../state/store";
import Header from "../components/common/Header";
import Home from "../pages/Home";
import Device from "../pages/Device";
import GlobalStyle from "./global-styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/device" element={<Device />} />
            <Route exact path="/device/:id" element={<Device type="edit" />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
