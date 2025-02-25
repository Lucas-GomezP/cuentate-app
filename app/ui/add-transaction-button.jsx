import { Pressable, Text, View } from "react-native";
import { CloseIcon, PlusIcon } from "../components/icons";
import useUiContext from "../hooks/useUiContext";
import { Link } from "expo-router";

export default function AddTransactionButton() {
  const { openTransactionMenu, setOpenTransactionMenu } = useUiContext();
  return (
    <>
      {openTransactionMenu && (
        <Link
          asChild
          href={"/"}
          className="bg-green-200 border-green-700 border-2 absolute bottom-20 right-2 p-1 rounded-lg"
        >
          <Pressable
            onPress={() => {
              setOpenTransactionMenu(false);
            }}
          >
            <Text className="text-lg font-semibold text-green-700">hola</Text>
          </Pressable>
        </Link>
      )}
      <View
        className={`absolute bottom-2 right-2 rounded-full p-1 border-2 ${openTransactionMenu ? "border-red-700 bg-red-200" : "bg-green-200 border-green-700"}`}
      >
        <Pressable
          onPress={() => {
            setOpenTransactionMenu(!openTransactionMenu);
          }}
        >
          {openTransactionMenu ? (
            <CloseIcon color="red" size={36} />
          ) : (
            <PlusIcon color="green" size={36} />
          )}
        </Pressable>
      </View>
    </>
  );
}
