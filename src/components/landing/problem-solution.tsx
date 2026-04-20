import { Section } from "@/components/landing/section"
import { BookOpen, Layers } from "lucide-react"

export function ProblemSolution() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <Layers className="size-5" aria-hidden />
            <h2 className="text-xl font-semibold tracking-tight">O desafio</h2>
          </div>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Ler repositórios no GitLab é poderoso, mas a interface web padrão nem
            sempre favorece leitura longa ou navegação em documentação — sobretudo
            quando quer foco no conteúdo, como num portal de docs estáticos.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="size-5" aria-hidden />
            <h2 className="text-xl font-semibold tracking-tight">A solução</h2>
          </div>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            O{" "}
            <strong className="font-medium text-foreground">GitLab Docs Mode</strong>{" "}
            adiciona uma camada opcional: quando quiser &quot;ler como
            docs&quot;, abre uma vista documentação por cima da página — com
            sidebar e leitura limpa — mantendo o GitLab por baixo quando precisar
            do fluxo normal.
          </p>
        </div>
      </div>
    </Section>
  )
}
