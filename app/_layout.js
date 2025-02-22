import { Stack } from "expo-router";
import "../global.css";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      {/* Optionally configure static options outside the route.*/}
    </Stack>
  );
}
