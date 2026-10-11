import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Group1 Sprint · Study with intention',referrer:'no-referrer',description:'Your APPSC study rhythm. Focused lessons, deliberate practice and a private progress workspace.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
