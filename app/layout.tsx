import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
    title: 'Dev/Des Swap',
    description: 'Help designers learn to code and developers learn to design.',
};

export const inter = Inter({
    weight: 'variable',
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} antialiased min-h-dvh min-w-full flex flex-col bg-gray-200 text-black`}
            >
                {children}
            </body>
        </html>
    );
}
