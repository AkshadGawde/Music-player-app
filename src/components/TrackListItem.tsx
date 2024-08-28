import { unknownTrackImageUri } from '@/constants/images';
import { colors, fontSize } from '@/constants/tokens';
import { defaultStyles } from '@/styles';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Track } from 'react-native-track-player';

export type TrackListItemProps = {
  track: Track;
};

export const TracksListItem = ({ track }: TrackListItemProps) => {
  const isActiveTrack = false; 

  return (
    <TouchableHighlight 
      underlayColor={colors.background} 
      onPress={() => { /* Handle track item press here */ }}>
      <View style={styles.container}>
        <FastImage
          source={{
            uri: track.artwork ?? unknownTrackImageUri,
            priority: FastImage.priority.normal,
          }}
          style={{
            ...styles.trackArtworkImage,
            opacity: isActiveTrack ? 0.6 : 1,
          }}
        />
        <View style={styles.textContainer}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? colors.primary : colors.text,
            }}>
            {track.title}
          </Text>
          {track.artist && (
            <Text numberOfLines={1} style={styles.trackArtistText}>
              {track.artist}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  trackArtworkImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
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

export default TracksListItem;
