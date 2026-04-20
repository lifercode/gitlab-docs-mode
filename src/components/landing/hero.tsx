import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CHROME_WEB_STORE_LISTING_URL, SITE } from "@/config/site"
import { Chrome, Package } from "lucide-react"

export function Hero() {
  return (
    <header className="landing-hero-bg border-b border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary" className="font-mono text-xs">
            v{SITE.version}
          </Badge>
          <span className="text-sm text-muted-foreground">
            Extensão Google Chrome · Manifest V3
          </span>
        </div>
        <div className="max-w-3xl space-y-5">
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {SITE.name}
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Navegue repositórios do GitLab numa interface estilo documentação.
          </p>
          <p className="text-sm italic text-muted-foreground/90 sm:text-base">
            Browse GitLab repositories in a documentation-style UI.
          </p>
        </div>
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
          A extensão transforma a leitura de código e documentação no GitLab: em
          páginas de árvore (<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">/-/tree/</code>) e ficheiros (
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">/-/blob/</code>
          ), pode abrir uma sobreposição com aspeto de site de documentação —
          navegação lateral, Markdown renderizado e fluxo semelhante a docs
          estáticos, sem substituir o GitLab por completo.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-950/40 hover:from-indigo-500/90 hover:to-violet-600/90"
            disabled
            title="Disponível após publicação na Chrome Web Store"
          >
            <Chrome className="size-5" aria-hidden />
            Em breve na Chrome Web Store
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#instalar">
              <Package className="size-5" aria-hidden />
              Instalação manual (ZIP)
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
