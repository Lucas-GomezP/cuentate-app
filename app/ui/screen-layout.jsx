import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useUiContext from "../hooks/useUiContext";
import AddTransactionButton from "./add-transaction-button";

export default function ScreenLayout({ children }) {
  const { openMenu } = useUiContext();
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-black p-2">
      <View
        className={`bg-green-300 absolute ${openMenu ? "top-0 bottom-0 left-0 right-4" : ""}`}
      >
        <Text>nav link 1</Text>
        <Text>nav link 2</Text>
        <Text>nav link 3</Text>
        <Text>nav link 4</Text>
        <Text>nav link 5</Text>
      </View>
      {children}
      <AddTransactionButton />
    </SafeAreaView>
  );
}
