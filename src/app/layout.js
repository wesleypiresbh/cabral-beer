import './globals.css';
import { CartProvider } from '../context/CartContext'; // ✅ Named import
import Header from '../components/Header';

export const metadata = {
  title: 'Cabral Beer Delivery',
  description: 'Sistema de delivery de bebidas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}

