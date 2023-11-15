import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useMenuStore, selectShowMenu, selectToggleMenu } from "../store/menuStore";
import { useNavigationStore, selectNavigate } from "../store/navigationStore";

// @ts-ignore
import CloseImageSource from "../assets/menu-close.png";
// @ts-ignore
import HomeImageSource from "../assets/menu-home.png";
// @ts-ignore
import ProfileImageSource from "../assets/menu-profile.png";
// @ts-ignore
import SettingsImageSource from "../assets/menu-settings.png";
// @ts-ignore
import LogoutImageSource from "../assets/menu-logout.png";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(200, 200, 200, 0.5)",
        zIndex: 10,
    },
    block: {
        flex: 1,
        maxWidth: 350,
        marginRight: 50,
        paddingTop: 50,
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

export default function Menu(): JSX.Element | null {
    const showMenu = useMenuStore(selectShowMenu);
    const toggleMenu = useMenuStore(selectToggleMenu);

    const navigate = useNavigationStore(selectNavigate);

    function goto(path: string) {
        toggleMenu(false);
        navigate(path);
    }

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
                    <Pressable onPress={() => goto("/")}>
                        <Text style={styles.rowText}>Главная</Text>
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <Image style={styles.rowImage} source={ProfileImageSource} />
                    <Pressable onPress={() => goto("/profile")}>
                        <Text style={styles.rowText}>Профиль</Text>
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <Image style={styles.rowImage} source={SettingsImageSource} />
                    <Pressable onPress={() => goto("/settings")}>
                        <Text style={styles.rowText}>Настройки</Text>
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <Image style={styles.rowImage} source={LogoutImageSource} />
                    <Pressable onPress={() => goto("/login")}>
                        <Text style={styles.rowText}>Выход</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
