export const InputForm = ({
  type,
  placeholder,
  onBlur,
  onChange,
  value,
  name,
}: {
  type: string;
  placeholder: string;
  onBlur?: any;
  onChange?: any;
  value?: any;
  name?: string;
}): JSX.Element => {
  return (
    <input
      type={type}
      onBlur={onBlur}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-secondary-main focus:border-secondary-main"
    />
  );
};
