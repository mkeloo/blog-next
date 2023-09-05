import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ThemeProvide from '@/context/ThemeContext';
import './globals.css';
import { Inter, Poppins, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BlogTastic',
  description: 'Famous Blog Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvide>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvide>
      </body>
    </html>
  );
}
