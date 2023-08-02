export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  icon,
  hasLabel = false,
  error,
}) {
  const fixedInputClass = `rounded-md appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm ${
    error ? 'border-red-500' : 'border-gray-300'
  }`;
  const classes = `${fixedInputClass} ${customClass && customClass} ${
    icon ? 'pl-10' : 'pl-2'
  }`;
  return (
    <div className="flex flex-col relative mb-4">
      <label
        htmlFor={labelFor}
        className={`${!hasLabel ? 'sr-only' : ''} text-md font-bold mb-2`}
      >
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={classes}
        placeholder={placeholder}
      />
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </span>
      )}
      {error && <span className="text-xs mt-1 text-red-500">{error}</span>}
    </div>
  );
}
