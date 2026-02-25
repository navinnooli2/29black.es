import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contáctenos - 29Black",
  description: "Contacte al equipo de soporte de 29Black.",
};

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="xl:px-7 px-[18px] max-w-[1580px] mx-auto w-full py-8">
        <div className="max-w-[900px] mx-auto space-y-6">
          {/* Email Section */}
          <div className="border border-gray-border rounded-xl p-6 md:p-8 bg-gray-bg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-5xl">📧</span>
                </div>
                <div>
                  <h2 className="text-white font-semibold text-xl">Correo electrónico</h2>
                  <p className="text-white/50 text-sm mt-1">
                    Respondemos en menos de 15 minutos.
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="border border-accent text-white hover:bg-accent/10 rounded-lg px-8 py-3 text-sm font-medium transition-colors"
              >
                {siteConfig.supportEmail}
              </a>
            </div>
          </div>

          {/* Messenger Apps Section */}
          <div className="border border-gray-border rounded-xl p-6 md:p-8 bg-gray-bg">
            <h2 className="text-white font-semibold text-xl text-center mb-2">
              Aplicaciones de mensajería
            </h2>
            <p className="text-white/50 text-sm text-center mb-8">
              Conéctese con nosotros en su mensajería preferida.
            </p>

            <div className="flex justify-center gap-12 md:gap-16">
              <a
                href={siteConfig.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 rounded-full bg-[#0088cc] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">Telegram</span>
              </a>

              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 rounded-full bg-[#1877f2] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">Facebook</span>
              </a>

              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
