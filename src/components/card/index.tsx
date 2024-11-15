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
            <View>
                <Text>{title}</Text>
                <Text>{calories} calories</Text>
                <Text>${price}</Text>
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
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        // Propriedades de sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Propriedade de sombra para Android
        elevation: 5
    },
    img: {
        height: 100,
        width: 100
    }
})
