import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useMenuStore, selectShowMenu, selectToggleMenu } from "../store/menuStore";

import CloseImageSource from "../assets/menu-close.png";
import HomeImageSource from "../assets/menu-home.png";
import ProfileImageSource from "../assets/menu-profile.png";
import SettingsImageSource from "../assets/menu-settings.png";
import LogoutImageSource from "../assets/menu-logout.png";

const styles = StyleSheet.create({
    container: {
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(225, 225, 225, 0.5)",
        zIndex: 10,
    },
    block: {
        width: "90%",
        maxWidth: "350px",
        height: "100%",
        paddingTop: 30,
        position: "relative",
        backgroundColor: "white",
    },
    closeButton: {
        width: 32,
        height: 32,
        position: "absolute",
        top: 15,
        right: 15,
        zIndex: 1,
    },
    closeImage: {
        width: "100%",
        height: "100%",
    },
    row: {
        width: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    rowImage: {
        width: 24,
        height: 24,
    },
    rowText: {
        marginLeft: 20,
        fontSize: 16,
    },
});

export default function Menu() {
    const showMenu = useMenuStore(selectShowMenu);
    const toggleMenu = useMenuStore(selectToggleMenu);

    if (!showMenu) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Pressable style={styles.closeButton} onPress={() => toggleMenu(false)}>
                    <Image style={styles.closeImage} source={CloseImageSource} />
                </Pressable>
                <View style={styles.row}>
                    <Image style={styles.rowImage} source={HomeImageSource} />
                    <Text style={styles.rowText}>Главная</Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.rowImage} source={ProfileImageSource} />
                    <Text style={styles.rowText}>Профиль</Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.rowImage} source={SettingsImageSource} />
                    <Text style={styles.rowText}>Настройки</Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.rowImage} source={LogoutImageSource} />
                    <Text style={styles.rowText}>Выход</Text>
                </View>
            </View>
        </View>
    );
}
