import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-32 h-8">
            <Image src="/rv-forex-logo.jpg" alt="RV Forex" fill className="object-contain" />
          </div>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
