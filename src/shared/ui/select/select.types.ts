export interface ISelectOption<TValue extends string> {
  label: string;
  value: TValue;
}

export interface ISelectProps<TValue extends string> {
  label: string;
  options: readonly ISelectOption<TValue>[];
  value: TValue;
  onChange: (value: TValue) => void;
}
