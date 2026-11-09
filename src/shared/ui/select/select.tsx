import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Menu, TextInput as PaperTextInput } from 'react-native-paper';

import { spacing } from '@/shared/theme';

import { TextInput } from '../text-input';
import type { ISelectProps } from './select.types';

const MENU_ITEM_HEIGHT = 48;
const MENU_VERTICAL_PADDING = spacing[3] * 2;

export const Select = <TValue extends string>({ label, onChange, options, value }: ISelectProps<TValue>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);
  // Paper's Menu opens over its anchor; shift it up so it appears above the field.
  const menuOffset = options.length * MENU_ITEM_HEIGHT + MENU_VERTICAL_PADDING;

  const handleSelect = (nextValue: TValue) => {
    onChange(nextValue);
    setIsOpen(false);
  };

  return (
    <Menu
      visible={isOpen}
      onDismiss={() => setIsOpen(false)}
      anchorPosition="top"
      style={{ transform: [{ translateY: -menuOffset }] }}
      anchor={
        <Pressable accessibilityLabel={label} accessibilityRole="button" onPress={() => setIsOpen(true)}>
          <View pointerEvents="none">
            <TextInput
              editable={false}
              label={label}
              value={selectedOption?.label ?? ''}
              right={<PaperTextInput.Icon icon={isOpen ? 'menu-up' : 'menu-down'} />}
            />
          </View>
        </Pressable>
      }
    >
      {options.map((option) => (
        <Menu.Item key={option.value} onPress={() => handleSelect(option.value)} title={option.label} />
      ))}
    </Menu>
  );
};
