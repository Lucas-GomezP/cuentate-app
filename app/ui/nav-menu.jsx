import { Animated, Pressable, Text, View } from "react-native";
import useUiContext from "../hooks/useUiContext";
import { useEffect, useRef } from "react";

export default function NavMenu() {
  const { openMenu, setOpenMenu } = useUiContext();
  const left = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (openMenu) {
      Animated.timing(left, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(left, {
        toValue: -100,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  }, [left, openMenu]);
  return (
    <>
      {openMenu && (
        <Pressable
          onPress={() => setOpenMenu(false)}
          className="bg-black/25 absolute top-0 bottom-0 right-0 left-0 z-40"
        />
      )}
      <Animated.View
        style={{ transform: [{ translateX: left }] }}
        className={"bg-black absolute top-0 bottom-0 left-0 z-50 py-2 px-10"}
      >
        <Text className="text-white">nav link 1</Text>
        <Text className="text-white">nav link 2</Text>
        <Text className="text-white">nav link 3</Text>
        <Text className="text-white">nav link 4</Text>
        <Text className="text-white">nav link 5</Text>
      </Animated.View>
    </>
  );
}
