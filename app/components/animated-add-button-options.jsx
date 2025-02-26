import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import { Text, Animated, Pressable } from "react-native";

export default function AnimatedAddButtonOptions({
  option,
  index,
  action = () => {},
}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <Link
        href={option.href}
        asChild
        className="bg-green-200 border-green-700 border-2 p-1 rounded-lg"
      >
        <Pressable onPress={action}>
          <Text className="text-lg font-semibold text-green-700 text-center">
            {option.text}
          </Text>
        </Pressable>
      </Link>
    </Animated.View>
  );
}
