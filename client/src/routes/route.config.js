import Home from "../pages/Home";
import JourneyDetails from "../pages/JourneyDetails/index";
import JourneysList from "../pages/AllJourneysList/index";
import LocationListView from "../pages/LocationList/LocationListView";
import AddJourney from "../pages/add-journey";
import Map from "../pages/Map";

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
    path: '/add-journey',
    component: AddJourney,
  },
  {
    path: '/locations',
    component: LocationListView,
  },
  {
    path: '/maps',
    component: Map
  }
];
