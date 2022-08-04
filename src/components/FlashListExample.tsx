import React from 'react';
import { Text, View } from 'react-native';
import { useItems } from '../hooks/useItems';
import { Item } from './Item';
import { Item as ItemType } from '../types';
import { FlashList } from '@shopify/flash-list';

function FlashListExample() {
  const items = useItems();

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={57}
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
          Num Items: {items.length}
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

export { FlashListExample };
