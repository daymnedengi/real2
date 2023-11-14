import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useMenuStore, selectToggleMenu } from "../store/menuStore";

import MenuShowImageSource from "../assets/menu-show.png";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    menuShowButton: {
        width: 32,
        height: 32,
        marginLeft: 20,
    },
    menuShowImage: {
        width: "100%",
        height: "100%",
    },
    title: {
        marginLeft: 20,
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default function Header() {
    const toggleMenu = useMenuStore(selectToggleMenu);

    return (
        <View style={styles.container}>
            <Pressable style={styles.menuShowButton} onPress={() => toggleMenu(true)}>
                <Image style={styles.menuShowImage} source={MenuShowImageSource} />
            </Pressable>
            <Text style={styles.title}>The Real2 App</Text>
        </View>
    );
}
