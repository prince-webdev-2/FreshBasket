import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "./context/AppContext";


export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { searchItem } = useAppContext  // 👈 from context

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchItem]); // 👈 scrolls on route or search change

  return null;
}