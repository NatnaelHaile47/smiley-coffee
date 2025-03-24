import { Inter } from "next/font/google"
import Script from "next/script"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"
import Topbar from "@/components/Topbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Coffee Import & Export - Smiley Coffee Trading",
  description: "Experience Smiley coffee trading with our global sourcing, sustainable practices, and expert logistics. Bringing the world's finest coffee to your doorstep.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="shortcut icon" type="image/x-icon" href="images/smily-coffee-logo.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen" />
    <link href="css/slicknav.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/swiper-bundle.min.css" />
    <link href="css/all.min.css" rel="stylesheet" media="screen" />
    <link href="css/animate.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/magnific-popup.css" />
    <link rel="stylesheet" href="css/mousecursor.css" />
    <link href="css/custom.css" rel="stylesheet" media="screen" />

    </head>
    <body className={inter.className}>
      <Preloader />
      <Header />
      {children}
      <Footer />

        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="beforeInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="beforeInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}

import './globals.css'
