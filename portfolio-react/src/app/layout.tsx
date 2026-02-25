import "./globals.css";
import { LanguageProvider } from "./components/languageProvider";
import Header from "./components/header"; // jeśli header jest globalny

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
