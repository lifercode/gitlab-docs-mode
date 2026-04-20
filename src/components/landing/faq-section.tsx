import { Section } from "@/components/landing/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    q: "Que versão do Chrome é suportada?",
    a: "Recomendamos uma versão recente e atualizada do Google Chrome. A extensão segue Manifest V3, alinhado com as políticas atuais da Chrome Web Store.",
  },
  {
    q: "Funciona fora do gitlab.com?",
    a: "A v0.1.0 está focada em gitlab.com. Instâncias self-hosted podem ser consideradas no futuro, mas não fazem parte do âmbito desta versão.",
  },
  {
    q: "Os meus dados de repositórios são enviados para servidores externos?",
    a: "A lista de repositórios guardados na página inicial da extensão é armazenada localmente no seu navegador (conforme o modelo da extensão). Consulte a secção Privacidade e permissões para o pedido de acesso ao gitlab.com e o propósito de cada permissão.",
  },
  {
    q: "Porque é que a extensão precisa de permissões no gitlab.com?",
    a: "É necessário atuar nas páginas do GitLab para mostrar o botão flutuante, a sobreposição e para obter conteúdo de leitura de forma compatível com o site e com a sua sessão quando autenticado.",
  },
  {
    q: "Posso usar em repositórios privados?",
    a: "Sim, quando está autenticado no gitlab.com e tem permissões no projeto — a extensão respeita o contexto da sessão do site para carregar o que o GitLab lhe permite ver.",
  },
] as const

export function FaqSection() {
  return (
    <Section id="faq">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="size-6 text-primary" aria-hidden />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Perguntas frequentes
            </h2>
          </div>
          <p className="text-pretty text-muted-foreground">
            Respostas rápidas sobre compatibilidade, âmbito e privacidade.
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
