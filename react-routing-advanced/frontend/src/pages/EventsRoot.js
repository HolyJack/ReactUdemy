import { Outlet, useNavigation } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

const EventsRoot = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <EventsNavigation />
      {navigation.state === "loading" && <p>Loading...</p>}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventsRoot;
