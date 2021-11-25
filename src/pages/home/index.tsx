import { NavBarWrapper } from "../../processes/hocs/NavBar.HOC";
import { Home as HomeNotWrapped } from "./ui/Home";

export const Home = NavBarWrapper(HomeNotWrapped)