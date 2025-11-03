import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"

export function MainHeader() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Logo size="md" />
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://app.observantia.com.br" target="_blank" rel="noopener noreferrer">
              Entrar
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://app.observantia.com.br" target="_blank" rel="noopener noreferrer">
              Solicitar Acesso
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
