export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
        <p className="font-heading text-zinc-900">Flávio Adestrador</p>
        <p className="mt-2">
          © {new Date().getFullYear()} • Atendimento local
        </p>
      </div>
    </footer>
  );
}