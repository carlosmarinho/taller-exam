/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllDevices } from "../state/action-creators";
import DeviceList from "./DeviceList";
import { DeviceContainer } from "./home-styles";

const Home = () => {
  const dispatch = useDispatch();
  const { devices } = useSelector((state) => state.deviceReducer);

  useEffect(() => {
    dispatch(fetchAllDevices(""));
  }, []);

  const listDevices = () => {
    if (!devices.length) {
      return <div>Loading devices!</div>;
    }
    return (
      <DeviceContainer>
        {devices.map((device) => (
          <DeviceList key={device.id} {...device} />
        ))}
      </DeviceContainer>
    );
  };

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */
  return (
    <section id="home">
      <div>{listDevices()}</div>
    </section>
  );
};

// Export out the React Component
export default Home;
