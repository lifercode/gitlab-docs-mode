import { Section } from "@/components/landing/section"
import { Separator } from "@/components/ui/separator"
import { Lock } from "lucide-react"

export function PrivacySection() {
  return (
    <Section id="privacidade" className="bg-card/30">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <Lock className="size-6 text-primary" aria-hidden />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Privacidade e permissões
            </h2>
          </div>
          <p className="text-pretty text-muted-foreground">
            Transparência sobre o que a extensão pede e porquê — sem prometer
            &quot;zero permissões&quot; quando o mínimo necessário é exigido para o
            funcionamento no GitLab.
          </p>
        </div>
        <div className="max-w-3xl space-y-6 text-pretty leading-relaxed text-muted-foreground">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Acesso ao gitlab.com
            </h3>
            <p>
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
                host_permissions
              </code>{" "}
              para{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
                https://gitlab.com/*
              </code>{" "}
              — necessário para injetar a interface apenas nas páginas do
              GitLab.com e para o funcionamento da extensão nesse domínio.
            </p>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Scripting
            </h3>
            <p>
              A permissão de{" "}
              <strong className="font-medium text-foreground">scripting</strong>{" "}
              é utilizada para executar scripts no contexto adequado quando
              preciso — por exemplo, pedidos compatíveis com a origem e com a sua
              sessão no site.
            </p>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Separadores (tabs)
            </h3>
            <p>
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
                tabs
              </code>{" "}
              — para abrir ou focar separadores ao abrir repositórios a partir da
              página inicial da extensão.
            </p>
          </div>
          <Separator />
          <p className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground/90">
            A extensão foi pensada para trabalhar{" "}
            <strong className="font-medium text-foreground">no domínio GitLab</strong>{" "}
            conforme descrito. Valorizamos a confiança: pedimos apenas o necessário
            para esta experiência.
          </p>
          <p className="text-sm">
            <a
              href="#faq"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Saber mais no FAQ
            </a>{" "}
            sobre dados locais e compatibilidade.
          </p>
        </div>
      </div>
    </Section>
  )
}
