import { useContext } from "react";
import { UiContext } from "../context/uiContext";

export default function useUiContext() {
  const { openMenu, setOpenMenu, openTransactionMenu, setOpenTransactionMenu } =
    useContext(UiContext);
  return { openMenu, setOpenMenu, openTransactionMenu, setOpenTransactionMenu };
}
