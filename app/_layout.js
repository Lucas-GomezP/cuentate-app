import { Stack } from "expo-router";
import "../global.css";
import { Pressable, Text } from "react-native";
import { MenuIcon } from "./components/icons";
import UiContextProvider from "./context/uiContext";
import useUiContext from "./hooks/useUiContext";

export default function Layout() {
  // const { openMenu, setOpenMenu } = useUiContext(); <-- NO PUEDE ACCEDER PORQUE EL CONTEXTO SE INICIALIZA DESPUES
  return (
    <UiContextProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: () => (
            <Pressable>
              <MenuIcon color="white" />
            </Pressable>
          ),
          headerShown: false,
        }}
      >
        {/* Optionally configure static options outside the route.*/}
      </Stack>
    </UiContextProvider>
  );
}
