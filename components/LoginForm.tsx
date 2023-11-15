import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Image, Keyboard } from "react-native";
import { useNavigationStore, selectNavigate } from "../store/navigationStore";

// @ts-ignore
import Real2LogoImageSource from "../assets/real2-logo.png";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    block: {
        width: "100%",
        maxWidth: 300,
        padding: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
    },
    inputField: {
        width: "100%",
        marginTop: 15,
        padding: 10,
        backgroundColor: "rgb(245, 245, 245)",
        borderRadius: 10,
        fontSize: 16,
    },
    button: {
        width: 130,
        height: 45,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#ee3124",
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default function LoginForm(): JSX.Element {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [isShowKeyboard, setIsShowKeyboard] = useState<boolean>(false);

    const navigate = useNavigationStore(selectNavigate);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => setIsShowKeyboard(true));
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => setIsShowKeyboard(false));

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                {!isShowKeyboard && (
                    <View>
                        <Image style={{ marginLeft: "auto", marginRight: "auto" }} source={Real2LogoImageSource} />
                    </View>
                )}
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.label}>Имя пользователя:</Text>
                    <TextInput
                        style={styles.inputField}
                        cursorColor={"black"}
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>Пароль:</Text>
                    <TextInput
                        style={styles.inputField}
                        cursorColor={"black"}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <Pressable style={styles.button} onPress={() => navigate("/profile")}>
                        <Text style={styles.buttonText}>Войти</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
