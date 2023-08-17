import '@/styles/globals.css'
import { Inter, Lora, Inconsolata } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable:'--font-inter' 
})

const lora = Lora({ 
  subsets: ['latin'],
  variable:'--font-lora' 
})
const incons = Inconsolata({ 
  subsets: ['latin'],
  variable:'--font-inconsolata' 
})

export const metadata = {
  title: 'Dictionary Web App',
  description: 'A Web App Allowing Users to Search Dictionary Keywords',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} 
        font-sans ${lora.variable} 
        font-serifs ${incons.variable} font-mono`}>
        {children}
      </body>
    </html>
  )
}
