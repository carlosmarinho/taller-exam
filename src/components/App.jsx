import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { store } from "../state/store";
import Header from "../components/common/Header";
import Home from "../pages/Home";

import Device from "../pages/Device";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/device" element={<Device />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
