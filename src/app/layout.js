"use client";
import { AppThemeProvider } from '@/contexts/themeContext';
import { GlobalStyles } from '@/styles/GlobalStyles';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      cz-shortcut-listen="true"
        <AppThemeProvider>
          <GlobalStyles />
          {children}
          <div id="modal-root"></div>
        </AppThemeProvider>
      </body>
    </html>
  );
}
