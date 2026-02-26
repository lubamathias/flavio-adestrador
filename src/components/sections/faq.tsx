import Container from "@/components/ui/container";
import { BUSINESS } from "@/lib/constants";

const faqs = [
  {
    q: `Você atende em ${BUSINESS.regionShort}?`,
    a: `Sim. O atendimento é focado em ${BUSINESS.regionShort}. Se você estiver em outra região próxima, me chama no WhatsApp que eu confirmo.`,
  },
  {
    q: "Em quanto tempo o cachorro melhora?",
    a: "Depende do caso e da consistência da rotina. Alguns comportamentos melhoram rápido, mas resultados sólidos vêm com repetição e ajustes. Eu sempre explico um caminho claro desde o início.",
  },
  {
    q: "Serve para filhotes?",
    a: "Sim. Para filhotes, o foco é criar bons hábitos: socialização, mordidas, xixi no lugar certo, limites e comandos básicos.",
  },
  {
    q: "Meu cachorro puxa muito na guia. Dá pra resolver?",
    a: "Dá, sim. Normalmente envolve treino de condução, foco e controle de estímulos. O objetivo é passear com calma e segurança.",
  },
  {
    q: "Vocês trabalham com agressividade ou reatividade?",
    a: "Casos de reatividade podem melhorar bastante com manejo correto e treino consistente. Me chama no WhatsApp e descreve o comportamento e os gatilhos para eu orientar o melhor caminho.",
  },
  {
    q: "O treino é só com o adestrador ou a família participa?",
    a: "A família participa. O objetivo é que o comportamento funcione na vida real — então eu oriento como manter a rotina entre os treinos.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-soft">
      <Container>
        <div className="py-14 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Perguntas frequentes
            </h2>
            <p className="mt-3 text-foreground/80">
              Respostas diretas para as dúvidas mais comuns antes de começar.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-black/5 bg-background p-6"
              >
                <summary className="cursor-pointer list-none font-heading text-base font-semibold text-foreground">
                  <span className="inline-flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                    {f.q}
                  </span>
                </summary>

                <div className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {f.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={BUSINESS.whatsappLink}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}