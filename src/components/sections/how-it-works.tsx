import Container from "@/components/ui/container";
import { BUSINESS } from "@/lib/constants";

const steps = [
  {
    title: "1) Entendimento do caso",
    desc: "Você explica o que está acontecendo e o contexto do dia a dia (rotina, passeios, gatilhos e ambiente).",
  },
  {
    title: "2) Plano de treino claro",
    desc: "Definimos objetivos práticos e um plano simples de aplicar — com foco em resultado e consistência.",
  },
  {
    title: "3) Execução + acompanhamento",
    desc: "Treinos orientados e ajustes conforme a evolução. O objetivo é um cão equilibrado na vida real.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-background">
      <Container>
        <div className="py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                Como funciona
              </h2>
              <p className="mt-3 text-foreground/80">
                Um processo simples, objetivo e aplicado à rotina da família — com
                atendimento em {BUSINESS.regionShort}.
              </p>

              <div className="mt-8">
                <a
                  href={BUSINESS.whatsappLink}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
                >
                  Tirar dúvidas no WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {steps.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-black/5 bg-gray-soft p-6"
                >
                  <h3 className="font-heading text-lg font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}