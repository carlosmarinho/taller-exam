/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllDevices } from "../state/action-creators/device";
import FilterBar from "./common/FilterBar";
import DeviceList from "./device/DeviceItem";
import { DeviceContainer, DeviceNotFound } from "./home-styles";

const Home = () => {
  const dispatch = useDispatch();
  const { devices, loading } = useSelector((state) => state.deviceReducer);
  const [deviceList, setDeviceList] = useState([]);
  const [type, setType] = useState("");
  const [systemName, setSystemName] = useState("");
  const [initSearch, setInitSearch] = useState(false);

  console.log("---------------Devicessss: ", devices);

  useEffect(() => {
    dispatch(fetchAllDevices(""));
  }, [dispatch]);

  const changeSearch = (search) => {
    if (!initSearch) setInitSearch(true);

    let listToParse = devices;
    if (search && search.type) {
      console.log("\n\n***\n list to parse type: ", listToParse, "\n***\n");
      listToParse = listToParse.filter((device) => device.type === search.type);
      setDeviceList(listToParse);
      setType(search.type);
    }
    if (search && typeof search.systemName !== "undefined") {
      console.log(
        "\n\n***\n list to parse systemName: ",
        listToParse,
        "\n***\n"
      );
      setDeviceList(
        listToParse.filter((device) =>
          device.system_name
            .toLowerCase()
            .includes(search.systemName.toLowerCase())
        )
      );
      setSystemName(search.systemName);
    }
  };

  const listDevice = () => {
    if (initSearch) {
      if (deviceList.length === 0)
        return (
          <DeviceNotFound>
            <p>No devices founded with search criteria!</p>
          </DeviceNotFound>
        );
      return deviceList.map((device) => (
        <DeviceList key={device.id} {...device} />
      ));
    }

    if (devices.length === 0) {
      return (
        <DeviceNotFound>
          <p>No devices founded!</p>
        </DeviceNotFound>
      );
    }
    return devices.map((device) => <DeviceList key={device.id} {...device} />);
  };

  const listDevices = () => {
    if (loading) {
      return <div>Loading devices!</div>;
    }
    return (
      <DeviceContainer>
        <FilterBar
          type={type}
          systemName={systemName}
          changeSearch={(search) => changeSearch(search)}
        />
        {listDevice()}
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
