import library from '@/assets/data/library.json';
import { FlatList, FlatListProps, View } from 'react-native';
import { TrackListItemProps, TracksListItem } from './TrackListItem';
import { utilsStyles } from '../styles/index';


// Correctly typing the FlatList props
export type TracksListProps = Partial<FlatListProps<unknown>> & {
  tracks: any[];
}

// Correct export syntax for the divider component
export const ItemDivider = () => (
  <View style={{ ...utilsStyles.itemSeparator, marginVertical: 5, marginLeft: 50 }} />
);

export const TracksList = ({ tracks, ...flatListProps }: TracksListProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop:10, paddingBottom: 128 }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TracksListItem
          track={{
            ...track,
            image: track.artwork,
          }}
        />
      )}
      {...flatListProps}
    />
  );
};

export default TracksList;