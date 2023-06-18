import { Image, StyleSheet } from 'react-native'
import { Link, Stack } from 'expo-router'
import { Provider, useSelector } from 'react-redux'
import store, { rootState } from '../store'
const Layout =  () => {
	const { word } = useSelector((state: rootState) => state.language)
	return (
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: '#ffea65',
					},
					headerTintColor: '#00061c',
					headerTitleStyle: {
						color: '#00061c',
						fontWeight: 'bold',
					},
					headerRight: () => (
						<Link href='settings'>
							<Image style={styles.setting} source={require('../assets/setting.png')} />
						</Link>
					),
				}}
			>
				<Stack.Screen name='index' options={{ title: word.home }} />
			</Stack>
	)
}
const styles = StyleSheet.create({
	layout: {
		backgroundColor: '#dedede',
	},
	setting: {
		width: 25,
		height: 25,
	},
})
export default () => <Provider store={store}><Layout/></Provider>