import library from '@/assets/data/library.json';
import { FlatList, FlatListProps } from 'react-native';
import { TrackListItemProps, TracksListItem } from './TrackListItem';

export type TracksListProps = Partial<FlatListProps<unknown>>;

export const TracksList = ({ ...flatListProps }: TracksListItemProps) => {
  return (
    <FlatList
      data={library}
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