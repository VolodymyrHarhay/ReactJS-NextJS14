import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'React + Next.js app',
  description: 'React + Next.js app.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
