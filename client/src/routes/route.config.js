import Home from "../pages/Home";
import JourneyDetails from "../pages/JourneyDetails/index";
import JourneysList from "../pages/AllJourneysList/index";
import LocationListView from "../pages/LocationList/LocationListView";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/journey-details",
    component: JourneyDetails
  },
  {
    path: '/journeys',
    component: JourneysList,
  },
  {
    path: '/locations',
    component: LocationListView,
  }
];
