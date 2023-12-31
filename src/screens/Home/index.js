


import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";


export default function Home({ navigation }) {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("details")}
            />
        </View>
    )
}