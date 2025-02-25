import { Tabs } from "expo-router";
import { HomeIcon, MenuIcon, SettingsIcon } from "../components/icons";
import { Pressable } from "react-native";
import useUiContext from "../hooks/useUiContext";

export default function TabsLayout() {
  const { openMenu, setOpenMenu } = useUiContext();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerLeft: () => (
            <Pressable onPress={() => setOpenMenu(!openMenu)}>
              <MenuIcon color="white" />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configuración",
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="exampledb"
        options={{
          title: "ExampleDB",
        }}
      />
    </Tabs>
  );
}
