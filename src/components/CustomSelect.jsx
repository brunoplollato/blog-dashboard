import AsyncCreatableSelect from 'react-select/creatable';

const CustomSelect = ({
  options,
  isLoading,
  handleCreate,
  handleChange,
  value,
  labelFor,
  hasLabel,
  labelText,
  error,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={labelFor}
        className={`${!hasLabel ? 'sr-only' : ''} text-md font-bold mb-2`}
      >
        {labelText}
      </label>
      <AsyncCreatableSelect
        isMulti
        cacheOptions
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={handleChange}
        onCreateOption={handleCreate}
        options={options}
        value={value}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderRadius: '6px',
            borderColor: error && '#ef4444',
          }),
        }}
      />
      {error && <span className="text-xs mt-1 text-red-500">{error}</span>}
    </div>
  );
};

export default CustomSelect;
