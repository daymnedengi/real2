import { StyleSheet, StatusBar, Text, View, Pressable } from "react-native";
import { useCounterStore, selectCount, selectIncrement } from "./store/counterStore";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default function App() {
    const count = useCounterStore(selectCount);
    const increment = useCounterStore(selectIncrement);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Text>Count: {count}</Text>
            <Pressable onPress={() => increment(2323)}>
                <Text>Click</Text>
            </Pressable>
        </View>
    );
}
