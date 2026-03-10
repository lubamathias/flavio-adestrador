import Container from "@/components/ui/container";
import { BUSINESS } from "@/lib/constants";

const videos = [
  {
    id: "mh4_8X_vGrQ",
    title: "Treino de condução",
  },
  {
    id: "J64UfSB34S8",
    title: "Comportamento no passeio",
  },
  {
    id: "zvXC6n_QWtA",
    title: "Trabalho com o cão",
  },
];

export default function HomeVideos() {
  return (
    <section className="bg-background">
      <Container>
        <div className="py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-gray-soft px-3 py-1 text-xs font-semibold text-foreground">
              Treinos na prática
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Veja como o trabalho acontece
            </h2>

            <p className="mt-3 text-foreground/80">
              Alguns registros reais de treinos e condução no dia a dia em{" "}
              {BUSINESS.regionShort}.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {videos.map((video) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-3xl border border-black/5 bg-gray-soft p-3 shadow-sm"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>

                <div className="px-1 pb-2 pt-4">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {video.title}
                  </h3>

                  <p className="mt-2 text-sm text-foreground/70">
                    Registro de treino publicado no canal do YouTube.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}