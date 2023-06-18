import LangSwitcher from '../../src/features/LangSwitcher'
import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { useSelector } from 'react-redux'
import { rootState } from '../../store'
export default () => {
	const { language, word } = useSelector((state: rootState) => state.language)
	return (
		<View>
			<Stack.Screen options={{ title: word.settings }} />
			<Text>{word.language}</Text>
			<LangSwitcher language={language} />
		</View>
	)
}
