import LangSwitcher from "../../features/LangSwitcher";
import {View, Text} from "react-native";
import { Stack } from "expo-router";
import { useSelector } from "react-redux";
import { rootState } from "../../../store";
export default () =>{
    const {language} = useSelector((state: rootState)=> state)
        return (
        <View>
            <Stack.Screen options={{title: language.t('setings')}}/>
            <Text>{language.t('language')}</Text>
            <LangSwitcher language={language.locale}/>
        </View>
    )
}