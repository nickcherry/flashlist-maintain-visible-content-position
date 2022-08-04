import { useEffect, useState } from 'react';
import { Item } from '../types';

const initialNumItems = 20;

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function buildInitialItems() {
  const items: Item[] = [];
  for (let i = 0; i < initialNumItems; i++) {
    items.push({ color: generateRandomColor(), index: i });
  }
  return items;
}

const initialItems = buildInitialItems();

function useItems() {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setItems([
        {
          color: generateRandomColor(),
          index: initialNumItems - items.length - 1,
        },
        ...items,
      ]);
    }, 1000);

    return function () {
      clearTimeout(timeout);
    };
  }, [items]);

  return items;
}

export { useItems };
