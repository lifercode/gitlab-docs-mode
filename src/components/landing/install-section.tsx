import type { ReactNode } from "react"

import { Section } from "@/components/landing/section"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  // TabsList,
  // TabsTrigger,
} from "@/components/ui/tabs"
import {
  CHROME_EXTENSION_ZIP_URL,
  CHROME_WEB_STORE_LISTING_URL,
} from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Download,
  ExternalLink,
  // Package,
  RefreshCw,
  ShieldAlert,
  Wrench,
} from "lucide-react"

function Step({
  n,
  children,
}: {
  n: number
  children: ReactNode
}) {
  return (
    <li className="flex gap-3">
      <span
        className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary"
        aria-hidden
      >
        {n}
      </span>
      <span className="pt-0.5 leading-relaxed text-muted-foreground">
        {children}
      </span>
    </li>
  )
}

export function InstallSection() {
  return (
    <Section id="instalar">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Como instalar
          </h2>
          <p className="text-pretty text-muted-foreground">
            Escolha a loja oficial ou a instalação manual a partir de um pacote
            ZIP (modo programador).
          </p>
        </div>
        <Tabs defaultValue="zip" className="w-full gap-6">
          {/* <TabsList className="grid h-auto w-full max-w-md grid-cols-2 gap-1 p-1">
            <TabsTrigger value="store" className="gap-2" disabled>
              <ExternalLink className="size-4" aria-hidden />
              Chrome Web Store
            </TabsTrigger>
            <TabsTrigger value="zip" className="gap-2">
              <Package className="size-4" aria-hidden />
              ZIP + programador
            </TabsTrigger>
          </TabsList> */}
          <TabsContent value="store" className="space-y-6 rounded-xl border border-border/80 bg-card/50 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">Utilizador final</Badge>
              <span className="text-sm text-muted-foreground">
                Instalação recomendada para a maioria dos utilizadores
              </span>
            </div>
            <ol className="space-y-4">
              <Step n={1}>
                Abrir o <strong className="text-foreground">Google Chrome</strong>{" "}
                (versão recente; recomendado atualizado).
              </Step>
              <Step n={2}>
                Ir à{" "}
                <strong className="text-foreground">Chrome Web Store</strong>{" "}
                e pesquisar{" "}
                <strong className="text-foreground">&quot;GitLab Docs Mode&quot;</strong>{" "}
                ou usar o link direto da página da extensão (quando existir).
              </Step>
              <Step n={3}>
                Clicar em{" "}
                <strong className="text-foreground">&quot;Adicionar ao Chrome&quot;</strong>{" "}
                / <strong className="text-foreground">&quot;Instalar&quot;</strong>.
              </Step>
              <Step n={4}>Confirmar o diálogo de permissões.</Step>
              <Step n={5}>
                Opcional: fixar o ícone na barra de ferramentas (
                <strong className="text-foreground">Extensões</strong> → menu da
                extensão → <strong className="text-foreground">Fixar</strong>).
              </Step>
            </ol>
            <div className="rounded-lg border border-dashed border-primary/30 bg-primary/5 p-4 text-sm text-muted-foreground">
              <p className="flex flex-wrap items-center gap-2 font-medium text-foreground">
                <ExternalLink className="size-4 text-primary" aria-hidden />
                Link canónico (substituir o ID após publicação)
              </p>
              <a
                href={CHROME_WEB_STORE_LISTING_URL}
                className="mt-2 block break-all font-mono text-xs text-primary underline-offset-4 hover:underline"
              >
                {CHROME_WEB_STORE_LISTING_URL}
              </a>
            </div>
          </TabsContent>
          <TabsContent value="zip" className="space-y-8 rounded-xl border border-border/80 bg-card/50 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">Manual</Badge>
              <span className="text-sm text-muted-foreground">
                Testers, builds do autor ou ambientes corporativos
              </span>
            </div>
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Wrench className="size-4 text-primary" aria-hidden />
                Pré-requisitos
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">·</span>
                  Google Chrome atualizado.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">·</span>
                  Ficheiro ZIP com a pasta da extensão já compilada (deve incluir{" "}
                  <code className="rounded bg-muted px-1 font-mono text-foreground">
                    manifest.json
                  </code>{" "}
                  na raiz do conteúdo extraído — típico de{" "}
                  <code className="rounded bg-muted px-1 font-mono text-foreground">
                    dist
                  </code>{" "}
                  após{" "}
                  <code className="rounded bg-muted px-1 font-mono text-foreground">
                    npm run build
                  </code>
                  ).
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Download className="size-4 text-primary" aria-hidden />
                Passos
              </h3>
              <ol className="space-y-4">
                <Step n={1}>
                  <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-2">
                    Descarregar o ZIP da extensão:
                    <Button variant="secondary" size="sm" className="h-8" asChild>
                      <a
                        href={CHROME_EXTENSION_ZIP_URL}
                        download="gitlab-docs-mode-chrome-extension.zip"
                      >
                        <Download className="size-3.5" aria-hidden />
                        gitlab-docs-mode-chrome-extension.zip
                      </a>
                    </Button>
                  </span>
                </Step>
                <Step n={2}>
                  Extrair o ZIP para uma pasta permanente (ex.:{" "}
                  <code className="rounded bg-muted px-1 font-mono text-foreground">
                    ~/Apps/gitlab-docs-mode
                  </code>
                  ).{" "}
                  <strong className="text-foreground">
                    Não apague esta pasta depois de instalar
                  </strong>{" "}
                  — o Chrome carrega a extensão a partir dela. Se mover ou apagar,
                  a extensão deixa de funcionar até voltar a apontar para uma cópia
                  válida.
                </Step>
                <Step n={3}>
                  Abrir o Chrome e ir a{" "}
                  <code className="rounded bg-muted px-1 font-mono text-foreground">
                    chrome://extensions/
                  </code>{" "}
                  (colar na barra de endereços e premir Enter).
                </Step>
                <Step n={4}>
                  Ativar{" "}
                  <strong className="text-foreground">
                    Modo de programador / Developer mode
                  </strong>{" "}
                  (canto superior direito).
                </Step>
                <Step n={5}>
                  Clicar em{" "}
                  <strong className="text-foreground">
                    Carregar sem compactação / Load unpacked
                  </strong>
                  .
                </Step>
                <Step n={6}>
                  Selecionar a pasta extraída que contém o{" "}
                  <code className="rounded bg-muted px-1 font-mono text-foreground">
                    manifest.json
                  </code>{" "}
                  na raiz (não o ficheiro ZIP em si).
                </Step>
                <Step n={7}>
                  Confirmar que{" "}
                  <strong className="text-foreground">GitLab Docs Mode</strong>{" "}
                  aparece na lista com versão{" "}
                  <strong className="text-foreground">0.1.0</strong>.
                </Step>
                <Step n={8}>
                  Opcional: fixar o ícone na barra de ferramentas.
                </Step>
              </ol>
            </div>
            <div className="space-y-3 rounded-lg border border-border/60 bg-muted/30 p-4">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <RefreshCw className="size-4 text-primary" aria-hidden />
                Atualização manual
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Para atualizar, substituir os ficheiros pela nova build (ou extrair
                para a mesma pasta) e em{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">
                  chrome://extensions/
                </code>{" "}
                clicar no ícone de atualizar (🔄) em Modo de programador, ou
                remover e voltar a Carregar sem compactação.
              </p>
            </div>
            <div className="flex gap-3 rounded-lg border border-amber-500/25 bg-amber-500/5 p-4 text-sm text-muted-foreground">
              <ShieldAlert
                className="size-5 shrink-0 text-amber-500/90"
                aria-hidden
              />
              <p>
                <strong className="text-foreground">Segurança:</strong> instale
                apenas ZIP de fontes confiáveis (repositório oficial, releases
                assinados ou equipa interna).
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  )
}
