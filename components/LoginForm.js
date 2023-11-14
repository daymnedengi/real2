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
        width: 300,
        height: 300,
        display: "flex",
    },
    logoImage: {
        width: "100%",
        height: "100%",
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
});

export default function LoginForm() {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <View style={styles.logo}>
                    <Image style={styles.logoImage} source={Real2LogoImageSource} />
                </View>
                <Text style={styles.label}>Имя пользователя:</Text>
                <TextInput style={[styles.inputField, { marginTop: 15, marginBottom: 20 }]} />
                <Text style={styles.label}>Пароль:</Text>
                <TextInput style={[styles.inputField, { marginTop: 15 }]} />
            </View>
        </View>
    );
}
