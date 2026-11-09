import { Checkbox as PaperCheckbox } from 'react-native-paper';

import type { ICheckboxItemProps, ICheckboxProps } from './checkbox.types';

const CheckboxItem = (props: ICheckboxItemProps) => {
  return <PaperCheckbox.Item {...props} />;
};

const CheckboxRoot = (props: ICheckboxProps) => {
  return <PaperCheckbox {...props} />;
};

export const Checkbox = Object.assign(CheckboxRoot, { Item: CheckboxItem });
