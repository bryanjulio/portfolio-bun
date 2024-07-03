import { Inter, Roboto_Mono, Poppins, Fira_Sans, Oswald, Montserrat } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
})

export const fira_sans = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ["300", "400", "500","600", "700", "900"],
  variable: '--font-fira-sans'
})


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500","600", "700", "900"],
  display: "swap",
  variable: '--font-poppins'
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500","600", "700"],
  display: "swap",
  variable: '--font-oswald'
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500","600", "700" , "900"],
  display: "swap",
  variable: '--font-montserrat'
});