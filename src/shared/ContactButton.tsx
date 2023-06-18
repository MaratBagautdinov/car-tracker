import { Text, StyleSheet, Pressable } from 'react-native'
import { FC } from 'react'
import { propsContactButton } from '../types'
const ContactButton: FC<propsContactButton> = ({ opPress, label }) => (
	<Pressable style={styles.button} onPress={opPress}>
		<Text style={styles.text}>{label}</Text>
	</Pressable>
)

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#83d680',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
})
export default ContactButton
