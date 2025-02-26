import { SafeAreaView } from "react-native-safe-area-context";
import AddTransactionButton from "./add-transaction-button";
import NavMenu from "./nav-menu";

export default function ScreenLayout({ children }) {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-black p-2">
      <NavMenu />
      {children}
      <AddTransactionButton />
    </SafeAreaView>
  );
}
