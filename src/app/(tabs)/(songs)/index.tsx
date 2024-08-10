import { ScrollView, Text, View } from "react-native"
import { defaultStyles } from "@/styles"
import { TracksList } from "@/components/TracksList"

const SongsScreen =() => {
    return <View style={defaultStyles.container}>
        <ScrollView>
            <TracksList />
        </ScrollView>
           
    </View>
}


export default SongsScreen