import React from "react"
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import globalstyle from "../Styles/globalstyle"

const CourseItem = (props) => {
	return (
		<TouchableHighlight onPress={props.viewDetails} underlayColor={"green"}>
			<View style={styles.coursesCard}>
				<View style={styles.coursesCardImageContainer}>
					<Image style={styles.image} source={{ uri: props.image }} />
				</View>
				<View style={styles.coursesCardDescContainer}>
					<Text style={styles.title}>{props.title}</Text>
					<Text style={styles.price}>{props.price.toFixed(2)}€</Text>
				</View>
				<View style={styles.iconContainer}>
					<TouchableOpacity onPress={props.viewDetails}>
						<FontAwesome5 name="eye" size={32} color="green" />
					</TouchableOpacity>
					<TouchableOpacity onPress={props.addToCart}>
						<FontAwesome5 name="shopping-basket" size={32} color="green" />
					</TouchableOpacity>
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	coursesCard: {
		backgroundColor: globalstyle.white,
		borderRadius: 10,
		height: 300,
		margin: 25,
		borderColor: globalstyle.grey,
		borderWidth: 1,
	},
	coursesCardImageContainer: {
		width: "100%",
		height: "60%",
	},
	coursesCardDescContainer: {
		alignItems: "center",
		height: "20%",
		padding: 10,
	},
	image: {
		width: "calc(100% - 10px)",
		height: "100%",
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
		marginTop: 5,
		marginHorizontal: 5
	},
	title: {
		fontSize: 20,
		marginVertical: 4,
		color: globalstyle.green,
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	price: {
		color: globalstyle.darkGrey,
		fontSize: 16,
	},
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "20%",
		paddingHorizontal: 30,
	},
})

export default CourseItem
