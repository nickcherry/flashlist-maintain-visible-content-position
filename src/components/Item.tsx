import React from 'react';
import { Text, View } from 'react-native';
import { Item as ItemType } from '../types';

type ItemProps = {
  item: ItemType;
};

function Item({ item }: ItemProps) {
  return (
    <View
      style={{
        backgroundColor: item.color,
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          backgroundColor: 'white',
          fontWeight: 'bold',
          padding: 4,
          textAlign: 'center',
          width: 150,
        }}
      >
        Item {item.index}
      </Text>
    </View>
  );
}

export { Item };
