import library from '@/assets/data/library.json';
import { FlatList, FlatListProps, View } from 'react-native';
import { TrackListItemProps, TracksListItem } from './TrackListItem';
import { utilsStyles } from '../styles/index';


// Correctly typing the FlatList props
export type TracksListProps = Partial<FlatListProps<unknown>>;

// Correct export syntax for the divider component
export const ItemDivider = () => (
  <View style={{ ...utilsStyles.itemSeparator, marginVertical: 5, marginLeft: 50 }} />
);

export const TracksList = ({ ...flatListProps }: TracksListProps) => {
  return (
    <FlatList
      data={library}
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