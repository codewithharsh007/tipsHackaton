import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Student Success Copilot",
  description: "AI-powered chatbot for student queries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-[#f0ece4] overflow-hidden">
        <Providers>
          <Navbar />
          <main className="flex-1 flex flex-col overflow-hidden">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
