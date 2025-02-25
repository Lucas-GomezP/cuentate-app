import { createContext, useState } from "react";

export const UiContext = createContext();

export default function UiContextProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openTransactionMenu, setOpenTransactionMenu] = useState(false);

  return (
    <UiContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        openTransactionMenu,
        setOpenTransactionMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
}
