import Container from "@/components/ui/container";
import { BUSINESS } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="bg-primary">
      <Container>
        <div className="py-14 md:py-16">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">
                Atendimento em {BUSINESS.regionShort}
              </h2>
              <p className="mt-3 text-white/80">
                Chame no WhatsApp, diga o comportamento e o seu bairro. Eu te oriento sobre o melhor caminho.
              </p>
            </div>

            <div className="md:flex md:justify-end">
              <a
                href={BUSINESS.whatsappLink}
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90 md:w-auto"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}