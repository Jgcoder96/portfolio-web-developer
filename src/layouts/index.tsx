import { LanguageContextProvider } from "../contexts/LenguageContext";
import { NavMenu } from "./NavMenu/NavMenu";

export const layouts = () => {
  return (
    <LanguageContextProvider>
      <NavMenu />
    </LanguageContextProvider>
  );
};
