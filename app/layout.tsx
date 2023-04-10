import './globals.css'
import { Inter } from "next/font/google";
import { ContextProvider } from '@/app/context/TeamContext';
import Navbar from '@/app/components/Navbar';
import { NotificationProvider } from './context/NotificationContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Pokéteams',
  description: 'Create your Pokémon Team and show it to the world!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1180px] mx-auto px-4 text-center space-y-8`}>
        <Navbar />
        <main>
          <ContextProvider>
            <NotificationProvider>
              {children}
            </NotificationProvider>
          </ContextProvider>
        </main>
        {/* Footer */}
      </body>
    </html>
  )
}
