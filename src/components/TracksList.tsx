import library from '@/assets/data/library.json';
import { FlatList, FlatListProps, View } from 'react-native';
import { TrackListItemProps, TracksListItem } from './TrackListItem';
import { utilsStyles } from '../styles/index';
import TrackPlayer, { Track } from 'react-native-track-player'

// Correctly typing the FlatList props
export type TracksListProps = Partial<FlatListProps<Track>> & {
	id: string
	tracks: Track[]
	hideQueueControls?: boolean
}

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)


export const TracksList = ({ tracks, ...flatListProps }: TracksListProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop:10, paddingBottom: 128 }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TracksListItem
          track={track}
        />
      )}
      {...flatListProps}
    />
  );
};

export default TracksList;