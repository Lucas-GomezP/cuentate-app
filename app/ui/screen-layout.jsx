import { Text, View } from "react-native";

export default function ScreenLayout({ children }) {
  return (
    <View className="bg-black min-h-screen min-w-screen p-2">{children}</View>
  );
}
