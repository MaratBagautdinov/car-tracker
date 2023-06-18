import { Image, StyleSheet} from "react-native";
import { Link, Stack } from "expo-router";
import {Provider} from 'react-redux'
import store from "../../store";
export default () =>{
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#ffea65"
            },
            headerTintColor: "#00061c",
            headerTitleStyle: {
                color: "#00061c",
                fontWeight: "bold"
            },
            headerRight: () => (
                <Link href='settings'>
                    <Image 
                        style={styles.setting} 
                        source={require("../assets/setting.png")}/>
                </Link>
            )
        }}>
            <Provider store={store}>
                <Stack.Screen name="index" options={{title: "Car Tracker"}}/>
            </Provider>
        </Stack>
    )
}
const styles = StyleSheet.create({
    layout:{
        backgroundColor: '#dedede'
    },
    setting:{
        width: 25,
        height: 25
    }
})