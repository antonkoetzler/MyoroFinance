import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Myoro Finance',
  description: 'A beautiful & feature rich finance tracking application.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={nunito.className} suppressHydrationWarning>
      <body className={'antialiased'}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
