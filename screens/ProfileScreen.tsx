import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    head: {
        display: "flex",
        alignItems: "center",
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 90,
        overflow: "hidden",
    },
    postName: {
        marginTop: 15,
        color: "gray",
        fontSize: 13,
    },
    fullName: {
        marginTop: 5,
        textAlign: "center",
        lineHeight: 30,
        fontSize: 20,
        fontWeight: "bold",
    },
    contacts: {
        marginTop: 30,
    },
    contactsTitle: {
        marginBottom: 20,
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
    },
    contactRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    contactRowKey: {
        flex: 2,
        fontSize: 15,
        fontWeight: "bold",
    },
    contactRowValue: {
        flex: 3,
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
    },
});

export default function ProfileScreen(): JSX.Element {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Image
                        style={styles.profileImage}
                        source={{
                            uri: "http://kartinkof.club/uploads/posts/2022-03/1648336127_13-kartinkof-club-p-memi-so-skaloi-dzhonsonom-13.jpg",
                        }}
                    />
                    <Text style={styles.postName}>Помощник 1С программиста</Text>
                    <Text style={styles.fullName}>Магомедов Рамазан Магомедсалихович</Text>
                </View>
                <ScrollView>
                    <View style={styles.contacts}>
                        <Text style={styles.contactsTitle}>Дополнительная информация</Text>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactRowKey}>Телефон:</Text>
                            <Text style={styles.contactRowValue}>+7 (961) 832-82-84</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactRowKey}>E-mail:</Text>
                            <Text style={styles.contactRowValue} numberOfLines={2}>
                                roma777.magomedov@yandex.ru
                            </Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactRowKey}>Бонусная карта:</Text>
                            <Text style={styles.contactRowValue}>505982934635</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}
