import { useContext } from "react";
import { LanguageContext } from "../../contexts/LenguageContext";

export const NavMenu = () => {
  const { text } = useContext(LanguageContext);
  return <h1>{text.mainTitle}</h1>;
};
