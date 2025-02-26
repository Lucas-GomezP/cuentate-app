import { Pressable, View } from "react-native";
import { CloseIcon, PlusIcon } from "../components/icons";
import useUiContext from "../hooks/useUiContext";
import AnimatedAddButtonOptions from "../components/animated-add-button-options";

export default function AddTransactionButton() {
  const { openTransactionMenu, setOpenTransactionMenu } = useUiContext();

  const addButtonOptions = [
    {
      id: 1,
      text: "menu principal",
      href: "/",
    },
    {
      id: 2,
      text: "configuracion",
      href: "/settings",
    },
  ];
  return (
    <>
      {openTransactionMenu && (
        <View className="absolute bottom-20 right-2 flex flex-col-reverse gap-2">
          {addButtonOptions.map((option, index) => (
            <AnimatedAddButtonOptions
              key={option.id}
              option={option}
              index={index}
              action={() => setOpenTransactionMenu(false)}
            />
          ))}
        </View>
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
