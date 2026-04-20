import { Section } from "@/components/landing/section"
import { Separator } from "@/components/ui/separator"
import { Sparkles } from "lucide-react"

export function GettingStarted() {
  return (
    <Section className="bg-card/30">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="size-6 text-primary" aria-hidden />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Primeiros passos
            </h2>
          </div>
          <p className="text-pretty text-muted-foreground">
            Como começar a usar o GitLab Docs Mode após instalar.
          </p>
        </div>
        <ol className="max-w-3xl space-y-4">
          {[
            "Instalar a extensão (loja ou ZIP, conforme a secção Como instalar).",
            "Autenticar no gitlab.com se precisar de acesso a repositórios privados.",
            "Abrir um projeto num caminho /-/tree/ ou /-/blob/ (navegação normal do GitLab).",
            'Clicar em "View as Docs".',
            "Explorar a sidebar e o conteúdo; usar Esc ou fechar para sair da vista.",
            "Opcional: abrir a página inicial da extensão pelo ícone → introduzir grupo/projeto e branch → abrir com abertura automática da vista Docs.",
          ].map((text, i) => (
            <li key={text} className="flex gap-4">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary"
                aria-hidden
              >
                {i + 1}
              </span>
              <span className="pt-1 leading-relaxed text-muted-foreground">
                {text}
              </span>
            </li>
          ))}
        </ol>
        <Separator className="max-w-3xl" />
        <p className="max-w-3xl text-sm text-muted-foreground">
          Dica: fixar o ícone da extensão acelera o acesso à página inicial e à
          lista de repositórios guardados localmente.
        </p>
      </div>
    </Section>
  )
}
