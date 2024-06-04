import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import React from "react";
import CallBack from "@/components/CallBack/CallBack";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Агенство Недвижимости Северный Лев",
  description:
    "Агентство Недвижимости Северный Лев - это команда профессионалов, вдохновленных Северной столицей. Мы знаем, что для наших клиентов важно чувствовать себя комфортно и безопасно в своей недвижимости. Быть частью мегаполиса, сохраняя индивидуальность! Ценим время и деньги наших клиентов - наш опыт это десятки дистанционныхсделок. В нашей команде собственные ипотечные и страховые менеджеры, что позволяет контролировать полный цикл сделки. Политика нашей компании. Комфорт, Выгода и Безопастность наших клиентов! АН Северный Лев - Превосходя ожидания!",
  keywords: [
    "агентство недвижимости северный лев",
    "агенство недвижимости",
    "риэлтор",
    "недвижимость",
    "новостройки",
    "вторичка",
    "от застройщика",
    "продажа недвижимости",
    "продажа квартир",
    "квартиры в спб",
    "продажа квартир в спб",
    "продажа квартир в санкт петербург",
    "вторичное жилье",
  ],
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "128x128",
      url: "/favicon/favicon-128.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "196x196",
      url: "/favicon/favicon-196x196.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      url: "/favicon/apple-touch-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      url: "/favicon/apple-touch-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      url: "/favicon/apple-touch-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      url: "/favicon/apple-touch-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      url: "/favicon/apple-touch-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      url: "/favicon/apple-touch-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      url: "/favicon/apple-touch-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "/favicon/apple-touch-icon-152x152.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
               m[i].l=1*new Date();
               for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
               k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
               ym(97420214, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
               });
          `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/97420214"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Header />
        {children}
        <Footer />
        <CallBack />
      </body>
    </html>
  );
}
