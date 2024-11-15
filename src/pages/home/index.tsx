import { StyleSheet, Text, View } from "react-native"
import apiProducts from "./../../../mocks/card-products.json"
import Card from "@/src/components/card"


const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our Foodi App</Text>
      <View style={{height: 95}}>
        {
          apiProducts.products.map((food, i) => (
            <Card title={food.title} calories={food.calories} img={food.img} price={food.price} key={i} />
          ))
        }
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: 100,
    width: "100%",
    padding: 10

  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "semibold",
    textAlign: "center",
    marginBottom: 10
  }
})