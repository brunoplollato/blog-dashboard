import PropagateLoader from 'react-spinners/PropagateLoader';

export default function FormAction({
  handleSubmit,
  type = 'Button',
  action = 'submit',
  text,
  color,
  icon,
  name,
  disabled,
  customClass,
}) {
  const fixedClasses = `group relative w-full h-10 flex items-center justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-${color}-700 hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 mt-5`;

  const classes = `${fixedClasses} ${customClass && customClass}`;
  return (
    <>
      {action === 'submit' ? (
        <button
          type={action}
          className={classes}
          onSubmit={handleSubmit}
          name={name}
          disabled={disabled}
        >
          {!disabled && (
            <>
              {icon}
              {text}
            </>
          )}
        </button>
      ) : (
        <>
          <button
            type={action}
            className={classes}
            onClick={handleSubmit}
            name={name}
            disabled={disabled}
          >
            {!disabled ? (
              <>
                {icon}
                {text}
              </>
            ) : (
              <PropagateLoader
                color="rgba(255, 255, 255, .5)"
                loading={disabled}
                size={10}
                cssOverride={{
                  top: '-4px',
                }}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
          </button>
        </>
      )}
    </>
  );
}
