import { Section } from "@/components/landing/section"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BookOpen,
  ExternalLink,
  FileCode2,
  Keyboard,
  LayoutPanelLeft,
  Puzzle,
  Shield,
} from "lucide-react"

const items = [
  {
    icon: ExternalLink,
    title: 'Botão flutuante "View as Docs"',
    description:
      "Em repositórios no gitlab.com, nas rotas adequadas, aparece um botão fixo no canto inferior direito para abrir a vista documentação.",
  },
  {
    icon: LayoutPanelLeft,
    title: "Interface estilo documentação",
    description:
      "Layout com sensação de portal de docs: conteúdo principal e navegação lateral para explorar a estrutura do repositório no contexto de leitura.",
  },
  {
    icon: FileCode2,
    title: "Markdown renderizado",
    description:
      "O conteúdo Markdown é obtido de forma compatível com o GitLab (incluindo rotas raw quando necessário) e renderizado para leitura limpa.",
  },
  {
    icon: Shield,
    title: "Integração com a sessão GitLab",
    description:
      "Os pedidos respeitam o contexto do site para que conteúdo que depende de autenticação possa ser carregado quando está autenticado (conforme permissões do projeto).",
  },
  {
    icon: Puzzle,
    title: "Página inicial da extensão",
    description:
      "Pelo ícone da extensão: indicar caminho do projeto (ex.: grupo/projeto) e branch/tag; abrir no GitLab com modo que abre automaticamente a vista Docs; guardar repositórios numa lista local para acesso rápido.",
  },
  {
    icon: Keyboard,
    title: "Fechar com facilidade",
    description:
      "Saída da sobreposição com Esc, botão de fechar ou fluxo equivalente — experiência não intrusiva.",
  },
  {
    icon: BookOpen,
    title: "Manifest V3",
    description:
      "Extensão moderna alinhada com as políticas atuais da Chrome Web Store.",
  },
] as const

export function Features() {
  return (
    <Section id="funcionalidades" className="bg-card/30">
      <div className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Funcionalidades
          </h2>
          <p className="text-pretty text-muted-foreground">
            O que a extensão faz no dia a dia ao navegar em repositórios no{" "}
            <strong className="font-medium text-foreground">gitlab.com</strong>.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.title}
              className="border-border/80 bg-card/80 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader className="gap-3">
                <item.icon
                  className="size-8 text-primary"
                  aria-hidden
                />
                <CardTitle className="text-lg leading-snug">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
