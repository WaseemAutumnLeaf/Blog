import Navbar from '../navbar/navbar';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const Layout: React.FC<> = ({ children, setAuthenticated }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar setAuthenticated={setAuthenticated} />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;