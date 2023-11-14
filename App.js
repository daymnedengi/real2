import { StatusBar, View } from "react-native";

import Header from "./components/Header";
import Menu from "./components/Menu";
import LoginForm from "./components/LoginForm";

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header />
            <Menu />
            <LoginForm />
        </View>
    );
}
