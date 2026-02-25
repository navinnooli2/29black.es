import Image from "next/image";
import Link from "next/link";
import { siteConfig, footerLinks } from "@/lib/siteConfig";
import SEOContent from "./SEOContent";

export default function Footer() {
  const linkSections = [
    footerLinks.casino,
    footerLinks.sports,
    footerLinks.aboutUs,
    footerLinks.support,
  ];

  return (
    <footer className="bg-black w-full border-t border-gray-border-light">
      <div className="md:px-[18px] max-w-[1580px] px-[17px] xl:px-7 pt-[22px] mx-auto font-normal text-sm text-white/30 md:pb-9 pb-8">
        {/* Logo */}
        <Image
          alt="29Black"
          width={300}
          height={36}
          className="w-[167px] lg:w-[300px] h-auto object-contain mx-auto"
          src="/assets/png/footer-logo.png"
        />

        {/* Description */}
        <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-start items-center md:gap-4 gap-[19px] my-8">
          <p className="font-normal leading-4 text-xs">
            {siteConfig.footerDescription}
          </p>
        </div>

        <div className="h-px bg-gray-border my-6" />

        {/* Payment Methods */}
        <div className="w-full flex justify-center items-center">
          <Image
            alt="Métodos de pago"
            width={1200}
            height={47}
            className="w-full h-full md:max-w-[1060px] md:max-h-[47px] hidden md:block"
            src="/assets/png/footerPayment.png"
          />
          <Image
            alt="Métodos de pago"
            width={325}
            height={62}
            className="w-full h-full max-w-[325px] md:max-h-[62px] md:hidden block"
            src="/assets/png/footerpayment1.png"
          />
        </div>

        {/* Crypto */}
        <div className="w-full my-4 md:my-8 flex justify-center items-center">
          <Image
            alt="Pagos crypto"
            width={340}
            height={40}
            className="max-w-[240px] md:max-w-[340px] w-full h-auto"
            src="/assets/png/cryptoFooter.png"
          />
        </div>

        <div className="h-px bg-gray-border my-6" />

        {/* Social Links */}
        <div className="flex justify-center gap-4 pb-6 mx-auto w-full">
          <a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Facebook"
              width={32}
              height={32}
              className="w-8 cursor-pointer h-auto object-contain hover:opacity-80 transition-opacity"
              src="/assets/svg/insta_footer.svg"
            />
          </a>
          <a
            href={siteConfig.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Instagram"
              width={32}
              height={32}
              className="w-8 cursor-pointer h-auto object-contain hover:opacity-80 transition-opacity"
              src="/assets/svg/fb_footer.svg"
            />
          </a>
          <a
            href={siteConfig.socialLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Telegram"
              width={32}
              height={32}
              className="w-8 cursor-pointer h-auto object-contain hover:opacity-80 transition-opacity"
              src="/assets/svg/tele_footer.svg"
            />
          </a>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-6">
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium text-sm mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white/70 text-[13px] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Right side: Search + Auth + Download */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 xl:col-span-1 flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Buscar categorías"
                className="bg-transparent border border-gray-border rounded-lg px-4 py-2 text-sm text-white/60 placeholder-white/30 w-full max-w-[220px] focus:outline-none focus:border-accent"
              />
              <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>

            <div className="flex gap-3">
              <button className="border border-white/30 text-white rounded-lg px-6 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors">
                Iniciar sesión
              </button>
              <button className="border border-accent text-accent rounded-lg px-6 py-2.5 text-sm font-semibold hover:bg-accent/10 transition-colors">
                Registrarse
              </button>
            </div>

            <div>
              <p className="text-white/40 text-[13px] mb-2">
                Descarga nuestra aplicación:
              </p>
              <button className="border border-white/30 text-white rounded-lg px-6 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors">
                Descargar la App
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with background image */}
      <div
        className="min-h-16 border-t border-gray-border-light overflow-hidden bg-cover bg-black bg-center"
        style={{
          backgroundImage: "url(/assets/webp/footerImage.webp)",
        }}
      >
        <div className="max-w-[1580px] xl:px-7 px-[18px] mx-auto">
          <div className="mx-auto flex flex-col md:flex-row gap-[9px] border-t border-white/30 pt-6 md:pb-[50px] pb-[41px] items-start md:items-center md:justify-between">
            <p className="text-white/50 text-xs leading-4">
              {siteConfig.copyright}
            </p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-white/50 text-xs leading-4 cursor-pointer hover:text-white/80 transition-colors"
            >
              Email: {siteConfig.supportEmail}
            </a>
          </div>
        </div>
      </div>

      <SEOContent />
    </footer>
  );
}
