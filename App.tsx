import { StatusBar, View } from "react-native";
import { useNavigationStore, selectPathName } from "./store/navigationStore";

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
            {navigationPathName == "/" && <MainScreen />}
            {navigationPathName.startsWith("/profile") && <ProfileScreen />}
            {navigationPathName.startsWith("/settings") && <SettingsScreen />}
            {navigationPathName.startsWith("/login") && <LoginScreen />}
        </View>
    );
}
