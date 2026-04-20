import { Separator } from "@/components/ui/separator"
import { githubRepoUrl, SITE } from "@/config/site"
import { Github } from "lucide-react"

export function SiteFooter() {
  const year = new Date().getFullYear()
  const repo = githubRepoUrl.trim()

  return (
    <footer className="border-t border-border/60 bg-card/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-foreground">{SITE.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Versão {SITE.version} · © {year}
            </p>
          </div>
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              <Github className="size-4" aria-hidden />
              Repositório no GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Github className="size-4 opacity-60" aria-hidden />
              Repositório: configure{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                VITE_GITHUB_REPO_URL
              </code>{" "}
              na build
            </span>
          )}
        </div>
        <Separator />
        <p className="text-center text-xs text-muted-foreground">
          Não afiliado ao GitLab Inc. GitLab é marca registada dos respetivos
          titulares.
        </p>
      </div>
    </footer>
  )
}
