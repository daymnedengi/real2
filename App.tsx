import { StatusBar, View, Text, Pressable } from "react-native";
import { useNavigationStore, selectPathName } from "./store/navigationStore";
import notificationService from "./services/notificationService";

import Header from "./components/Header";
import Menu from "./components/Menu";

import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App(): JSX.Element {
    const navigationPathName = useNavigationStore(selectPathName);

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header />
            <Menu />
            <Pressable
                style={{ padding: 20, backgroundColor: "red" }}
                onPress={() =>
                    notificationService.createPush(
                        "Бонусные баллы Real2",
                        "Вам начисленно 500 бонусных баллов в магазине Real2."
                    )
                }
            >
                <Text style={{ textAlign: "center", color: "white" }}>Push</Text>
            </Pressable>
            {navigationPathName == "/" && <MainScreen />}
            {navigationPathName.startsWith("/profile") && <ProfileScreen />}
            {navigationPathName.startsWith("/settings") && <SettingsScreen />}
            {navigationPathName.startsWith("/login") && <LoginScreen />}
        </View>
    );
}
