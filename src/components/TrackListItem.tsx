// import { TrackShortcutsMenu } from '@/components/TrackShortcutsMenu'
// import { StopPropagation } from '@/components/utils/StopPropagation'
import { unknownTrackImageUri } from '@/constants/images'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import FastImage from 'react-native-fast-image'
// import LoaderKit from 'react-native-loader-kit'
// import { Track, useActiveTrack, useIsPlaying } from 'react-native-track-player'

export type TrackListItemProps = {
    track: { title: string; image?: string; artist?: string; }
}

export const TracksListItem = ({ track }: TrackListItemProps) => {
    const isActiveTrack = false; 

    return (
        <TouchableHighlight>
            <View>
                <FastImage source={{
                    uri: track.image ?? unknownTrackImageUri, 
                    priority: FastImage.priority.normal,
                }}
                style={{
                    ...styles.trackArtworkImage,
                    opacity: isActiveTrack ? 0.6 : 1,
                }}
                />
            </View>

            <View style={{ width: '100%' }}>
						<Text
							numberOfLines={1}
							style={{
								...styles.trackTitleText,
								color: isActiveTrack ? colors.primary : colors.text,
							}}
						>
							{track.title}
						</Text>

						{track.artist && (
							<Text numberOfLines={1} style={styles.trackArtistText}>
								{track.artist}
							</Text>
						)}
					</View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
    trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
});