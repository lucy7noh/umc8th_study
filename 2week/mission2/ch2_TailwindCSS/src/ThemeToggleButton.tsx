import { THEME, useTheme } from './context/ThemeProvider';
import clsx from 'clsx';

export default function ThemeToggleButton(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const isLightMode = theme === THEME.LIGHT;

  return (
    <button
    onClick={toggleTheme}
    className={clsx(
      'px-4 py-2 mt-4 rounded-md transition-all font-semibold border shadow',
      isLightMode
        ? 'bg-white text-black border-gray-400 hover:bg-gray-200'
        : 'bg-black text-white border-gray-700 hover:bg-gray-800'
    )}
  >
      {isLightMode ? 'Dark Mode로 전환' : 'Light Mode로 전환'}
    </button>
  );
}
