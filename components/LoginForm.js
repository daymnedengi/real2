import { StyleSheet, View, Pressable, Text, TextInput, Image } from "react-native";

import Real2LogoImageSource from "../assets/real2-logo.png";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    block: {
        width: "100%",
        padding: 20,
    },
    logo: {
        width: 240,
        height: 106,
        marginLeft: "auto",
        marginRight: "auto",
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
    },
    inputField: {
        padding: 10,
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 5,
    },
    button: {
        width: 120,
        height: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
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

export default function LoginForm() {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Image style={styles.logo} source={Real2LogoImageSource} />
                <Text style={[styles.label, { marginTop: 50 }]}>Имя пользователя:</Text>
                <TextInput style={[styles.inputField, { marginTop: 15 }]} />
                <Text style={[styles.label, { marginTop: 20 }]}>Пароль:</Text>
                <TextInput style={[styles.inputField, { marginTop: 15 }]} />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Войти</Text>
                </Pressable>
            </View>
        </View>
    );
}
