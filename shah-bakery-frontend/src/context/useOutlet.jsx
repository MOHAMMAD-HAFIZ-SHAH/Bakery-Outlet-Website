import { useContext } from "react";
import OutletContext from "./OutletContext";

export const useOutlet = () => useContext(OutletContext);
