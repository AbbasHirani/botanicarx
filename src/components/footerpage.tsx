import { Hexagon, Github, Twitter } from "lucide-react"
import { Footer } from "@/components/ui/footer"

export default function FooterPage() {
  return (
    <div className="w-full">
      <Footer
        logo={<Hexagon className="h-6 w-6 text-green-700" />}
        brandName="BotanicaRx ."
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/#", label: "Home" },
          { href: "#details", label: "About" },
          { href: "#FAQs", label: "FAQ's" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 BotanicaRx",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}
