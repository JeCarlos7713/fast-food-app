import { StyleSheet, View, Image, Text, ImageSourcePropType } from "react-native"

interface InfoCard {
    title: string
    calories: number
    price: number
    img: string
}

const Card: React.FC<InfoCard> = ({ title, calories, price, img }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containInfos}>
                <Text style={styles.titleCard}>{title}</Text>
                <Text style={styles.calories}>&#128293; {calories} calories</Text>
                <Text style={styles.price}>$ {price}</Text>
            </View>
            <View>
                <Image style={styles.img} source={{ uri: img }} alt={title} />
            </View>
        </View>

    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: "90%",
        // Propriedades de sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Propriedade de sombra para Android
        elevation: 5
    },
    img: {
        height: 70,
        width: 100
    },
    containInfos: {
        gap: 5
    },
    titleCard: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#323232"
    },
    calories: {
        color: "#747474"
    },
    price: {
        color: "#ff9517",
        fontWeight: "600"
    }
})
