import Navbar from './Navbar';
import ThemeContent from './ThemeContent';

export default function ContextPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <main className="flex-1 w-full">
        <ThemeContent />
      </main>
    </div>
  );
}
