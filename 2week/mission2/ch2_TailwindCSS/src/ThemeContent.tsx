import clsx from 'clsx';
import { THEME, useTheme } from './context/ThemeProvider';

export default function ThemeContent(): JSX.Element {
  const { theme } = useTheme();
  const isLightMode = theme === THEME.LIGHT;

  return (
    <div
      className={clsx(
        'min-h-screen w-full flex flex-col items-center justify-center',
        isLightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
      )}
    >
      <h1 className="text-4xl font-bold mb-4"> TailwindCSS</h1>
      <p className="text-lg max-w-xl text-center">
      The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div>
  );
}
