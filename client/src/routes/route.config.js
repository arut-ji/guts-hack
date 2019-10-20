import Home from "../pages/Home";
import JourneyDetails from "../pages/JourneyDetails";
import Map from '../pages/Map';

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
    path: "/map",
    component: Map
  }
];
