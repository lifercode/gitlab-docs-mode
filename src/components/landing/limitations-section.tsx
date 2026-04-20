import { Section } from "@/components/landing/section"
import { AlertTriangle } from "lucide-react"

export function LimitationsSection() {
  return (
    <Section id="estado-atual">
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.06] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <AlertTriangle
            className="size-8 shrink-0 text-amber-500/90"
            aria-hidden
          />
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Estado atual (v0.1.0)
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              <strong className="font-medium text-foreground">MVP:</strong> a
              extração de estrutura pode assentar em{" "}
              <strong className="font-medium text-foreground">DOM</strong> em vez
              da API GitLab; alterações na UI do GitLab podem exigir atualizações
              futuras da extensão.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              <strong className="font-medium text-foreground">
                Navegação na SPA:
              </strong>{" "}
              em alguns cenários, ao mudar de ficheiro{" "}
              <code className="rounded bg-muted px-1 font-mono text-sm text-foreground">
                .md
              </code>{" "}
              só pela interface do GitLab sem recarregar, pode aparecer um{" "}
              <strong className="font-medium text-foreground">placeholder</strong>{" "}
              até haver lógica adicional (roadmap).
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              <strong className="font-medium text-foreground">Âmbito:</strong>{" "}
              foco em{" "}
              <strong className="font-medium text-foreground">gitlab.com</strong>
              ; instâncias self-hosted são cenário futuro,{" "}
              <strong className="font-medium text-foreground">não prometido</strong>{" "}
              na v0.1.0.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
