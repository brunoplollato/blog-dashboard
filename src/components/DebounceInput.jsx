import { useEffect, useState } from 'react';

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  customClass,
  placeholder,
  ...props
}) {
  const [value, setValue] = useState(initialValue);
  const fixedInputClass = `rounded-md appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm
  }`;
  const classes = `${fixedInputClass} ${customClass && customClass}`;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="flex flex-col relative mb-4">
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes}
        placeholder={placeholder}
      />
    </div>
  );
}

export default DebouncedInput;
