import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const MenuIcon = ({ size = 24, color = "black", props }) => (
  <MaterialCommunityIcons name="menu" size={size} color={color} {...props} />
);

export const HomeIcon = ({ size = 24, color = "black", props }) => (
  <MaterialCommunityIcons name="home" size={size} color={color} {...props} />
);

export const SettingsIcon = ({ size = 24, color = "black", props }) => (
  <MaterialCommunityIcons name="cog" size={size} color={color} {...props} />
);

export const PlusIcon = ({ size = 24, color = "black", props }) => (
  <MaterialCommunityIcons name="plus" size={size} color={color} {...props} />
);

export const CloseIcon = ({ size = 24, color = "black", props }) => (
  <MaterialCommunityIcons
    name="plus"
    size={size}
    color={color}
    rotation={45}
    {...props}
  />
);
