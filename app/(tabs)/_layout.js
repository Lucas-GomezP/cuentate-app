import { Tabs } from "expo-router";

export default function TabsLayout() {
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
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Configuración",
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
