import { Text, View } from "react-native";
import { Button } from "@/components";

export default function TabOneScreen() {
  return (
    <View className="flex-1 bg-slate-700">
      <Text className="text-2xl text-white">Tab Two</Text>
      <Button>Hey! Button 1</Button>
    </View>
  );
}