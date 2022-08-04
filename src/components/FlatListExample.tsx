import React from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { useItems } from '../hooks/useItems';
import { Item } from './Item';
import { Item as ItemType } from '../types';

function FlatListExample() {
  const items = useItems();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
      />
      <View style={{ backgroundColor: 'black', padding: 10 }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            padding: 16,
            textAlign: 'center',
          }}
        >
          Total Num Items: {items.length}
        </Text>
      </View>
    </View>
  );
}

function renderItem({ item }: { item: ItemType }) {
  return <Item item={item} />;
}

function keyExtractor(item: ItemType) {
  return `${item.index}`;
}

export { FlatListExample };
