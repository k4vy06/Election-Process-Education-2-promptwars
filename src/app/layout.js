import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Election Guide AI',
  description: 'Learn about election processes step-by-step with AI assistance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
