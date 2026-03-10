import type { Metadata } from "next";
import Container from "@/components/ui/container";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato | Flávio Adestrador em Alto de Pinheiros",
  description:
    "Entre em contato com Flávio Adestrador para adestramento de cães em Alto de Pinheiros, São Paulo e proximidades.",
  keywords: [
    "contato adestrador",
    "adestrador alto de pinheiros contato",
    "adestrador são paulo telefone",
    "adestramento cães contato",
  ],
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato | Flávio Adestrador",
    description:
      "Fale com o Flávio Adestrador e saiba mais sobre o adestramento de cães.",
    url: "/contato",
    images: ["/perfil/fotoCapaIa.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-background">
        <Container>
          <div className="max-w-3xl py-14 md:py-20">
            <p className="inline-flex items-center rounded-full bg-gray-soft px-3 py-1 text-xs font-semibold text-foreground">
              Contato
            </p>

            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Entre em contato e explique o que está acontecendo com o seu cão.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              O atendimento é focado em {BUSINESS.regionShort}. Você pode chamar
              no WhatsApp, enviar e-mail ou acompanhar os conteúdos pelas redes.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-gray-soft">
        <Container>
          <div className="grid gap-6 py-14 md:grid-cols-2 md:py-20">
            <div className="rounded-3xl border border-black/5 bg-background p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Fale diretamente
              </h2>

              <div className="mt-6 space-y-4">
                <a
                  href={BUSINESS.whatsappLink}
                  className="block rounded-2xl border border-primary/10 bg-primary px-5 py-4 text-white transition hover:bg-primary-hover"
                >
                  <p className="text-sm text-white/80">WhatsApp</p>
                  <p className="mt-1 font-heading text-lg font-semibold">
                    {BUSINESS.whatsapp}
                  </p>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="block rounded-2xl border border-black/5 bg-gray-soft px-5 py-4 transition hover:border-primary/20"
                >
                  <p className="text-sm text-foreground/70">E-mail</p>
                  <p className="mt-1 font-medium text-foreground">
                    {BUSINESS.email}
                  </p>
                </a>

                <div className="rounded-2xl border border-black/5 bg-gray-soft px-5 py-4">
                  <p className="text-sm text-foreground/70">Região de atendimento</p>
                  <p className="mt-1 font-medium text-foreground">
                    {BUSINESS.regionShort}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-background p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Redes e conteúdo
              </h2>

              <div className="mt-6 space-y-4">
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-black/5 bg-gray-soft px-5 py-4 transition hover:border-primary/20"
                >
                  <p className="text-sm text-foreground/70">Instagram</p>
                  <p className="mt-1 font-medium text-foreground">
                    @flavio.adestra
                  </p>
                </a>

                <a
                  href={BUSINESS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-black/5 bg-gray-soft px-5 py-4 transition hover:border-primary/20"
                >
                  <p className="text-sm text-foreground/70">YouTube</p>
                  <p className="mt-1 font-medium text-foreground">
                    Canal Flávio Adestrador
                  </p>
                </a>

                <div className="rounded-2xl border border-black/5 bg-gray-soft px-5 py-4">
                  <p className="text-sm text-foreground/70">Atendimento</p>
                  <p className="mt-1 font-medium text-foreground">
                    Sob consulta, conforme a região e o caso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:py-20">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                Antes de chamar
              </h2>

              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                Para agilizar o atendimento, vale enviar algumas informações logo
                no primeiro contato:
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Idade do cão",
                  "Raça ou porte",
                  "Bairro/região",
                  "Qual comportamento mais incomoda hoje",
                  "Há quanto tempo isso acontece",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-gray-soft px-4 py-4 text-sm text-foreground/80"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gray-soft p-8">
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                Forma mais rápida
              </h2>

              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                O canal mais direto para atendimento é o WhatsApp. Se preferir,
                você também pode acompanhar o trabalho pelo Instagram e pelo
                YouTube.
              </p>

              <a
                href={BUSINESS.whatsappLink}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Chamar no WhatsApp
              </a>

              <div className="mt-8 border-t border-black/10 pt-6">
                <p className="text-sm text-foreground/70">
                  E-mail para contato:
                </p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="mt-2 inline-block font-medium text-primary hover:underline"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary">
        <Container>
          <div className="py-14 text-center md:py-16">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">
              Quer começar?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Entre em contato, explique o comportamento do seu cão e informe sua
              região. O atendimento é focado em {BUSINESS.regionShort}.
            </p>

            <a
              href={BUSINESS.whatsappLink}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              Solicitar atendimento
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}