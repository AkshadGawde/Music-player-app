import { ScrollView, Text, View } from "react-native"
import { defaultStyles } from "@/styles"
import { screenPadding } from "@/constants/tokens"
import { TracksList } from "@/components/TracksList"
import { useNavigationSearch } from "@/hooks/useNavigationSearch"

const SongsScreen =() => {

    const search = useNavigationSearch({ searchBarOptions: { placeholder: 'Find in songs' } })

    return <View style={defaultStyles.container}>
        <ScrollView 
        contentInsetAdjustmentBehavior="automatic" 
        style={{ paddingHorizontal: screenPadding.horizontal }}>
            <TracksList />
        </ScrollView>
           
    </View>
}


export default SongsScreen