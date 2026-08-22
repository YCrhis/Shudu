const Home = () => {
  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100">

      {/* Hero */}
      <section
        id="inicio"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(245,158,11,0.12),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Hero content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                Vehicle Maintenance
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Cada reparación.
              <br />

              <span className="text-amber-500">
                Registrada.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              Un sistema centralizado para registrar vehículos,
              reparaciones y trabajadores. Mantén todo el historial
              de mantenimiento organizado y accesible.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="group flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-7 py-3.5 font-bold text-black transition hover:bg-amber-400">
                Ingresar al sistema

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-7 py-3.5 font-semibold text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800">
                Conocer más
              </button>
            </div>

            <div className="mt-10 flex items-center gap-8 border-t border-zinc-800 pt-7">
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-zinc-500">
                  Historial organizado
                </p>
              </div>

              <div className="h-8 w-px bg-zinc-800" />

              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs text-zinc-500">
                  Información disponible
                </p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-amber-500/10" />

              <img
                src="/images/dump-truck.jpg"
                alt="Heavy vehicle"
                className="h-[420px] w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500">
                        Última reparación
                      </p>

                      <p className="mt-1 font-bold">
                        Volvo FMX 540
                      </p>
                    </div>

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                      Completado
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-xs text-zinc-500">
                        Reparación
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        Sistema hidráulico
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-zinc-500">
                        Técnico
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        Juan Pérez
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-y border-zinc-800/70 bg-[#0D0D0F]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
              Todo organizado
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              La información que necesitas,
              <span className="text-zinc-500"> cuando la necesitas.</span>
            </h2>

            <p className="mt-5 text-zinc-400">
              Registra y consulta fácilmente la información relacionada
              con el mantenimiento de cada vehículo.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "🚛",
                title: "Vehículos",
                description:
                  "Mantén un registro de camiones, volquetes y otros vehículos de la empresa.",
              },
              {
                icon: "🔧",
                title: "Reparaciones",
                description:
                  "Registra qué reparación se realizó, cuándo ocurrió y cuál fue el trabajo.",
              },
              {
                icon: "👷",
                title: "Trabajadores",
                description:
                  "Identifica fácilmente quién realizó cada reparación o mantenimiento.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-800 bg-[#111113] p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-500/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-2xl">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
              Control centralizado
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Conoce el historial de cada vehículo.
            </h2>

            <p className="mt-6 leading-7 text-zinc-400">
              Desde una sola plataforma podrás consultar las reparaciones
              realizadas, los trabajadores involucrados y la información
              importante de cada unidad.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Historial de reparaciones",
                "Información de cada vehículo",
                "Registro de trabajadores",
                "Consulta rápida y organizada",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-xs text-amber-500">
                    ✓
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Fake dashboard */}
          <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
              <div>
                <p className="text-xs text-zinc-500">
                  VEHICLE MANAGEMENT
                </p>

                <h3 className="mt-1 font-bold">
                  Resumen
                </h3>
              </div>

              <div className="rounded-lg bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-500">
                Agosto 2026
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["24", "Vehículos"],
                ["48", "Reparaciones"],
                ["12", "Trabajadores"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                >
                  <p className="text-2xl font-black">
                    {value}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-semibold">
                  Últimas reparaciones
                </p>

                <span className="text-xs text-amber-500">
                  Ver todas →
                </span>
              </div>

              <div className="space-y-4">
                {[
                  ["Volvo FMX 540", "Sistema hidráulico"],
                  ["Caterpillar 740", "Sistema de frenos"],
                  ["Scania XT", "Cambio de aceite"],
                ].map(([vehicle, repair]) => (
                  <div
                    key={vehicle}
                    className="flex items-center justify-between border-b border-zinc-800 pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-medium">
                        {vehicle}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500">
                        {repair}
                      </p>
                    </div>

                    <span className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-950 p-10 text-center sm:p-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
            Vehicle Works
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black sm:text-4xl">
            Toda reparación cuenta.
            <br />
            Mantén el control.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Centraliza la información de mantenimiento y facilita
            el seguimiento de cada vehículo.
          </p>

          <button className="mt-8 rounded-xl bg-amber-500 px-7 py-3.5 font-bold text-black transition hover:bg-amber-400">
            Ingresar al sistema
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © 2026 Vehicle Works
          </p>

          <p>
            Vehicle Maintenance System
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;