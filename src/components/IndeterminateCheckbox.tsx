import { useEffect, useRef } from 'react';

function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}: IndeterminateCheckbox) {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof indeterminate === 'boolean' && ref.current) {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + ' cursor-pointer'}
      {...rest}
    />
  );
}

export default IndeterminateCheckbox;
