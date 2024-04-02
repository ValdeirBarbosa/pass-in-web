import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex  gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            placeholder="Buscar Participante"
            className="bg-transparent flex-1  border-none p-0 "
          />
        </div>
      </div>

      <div className="w-full border border-white/10 rounded-lg">
        <table className="w-full border border-white/10 rounded-lg ">
          <thead className="bg-zinc-900">
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input type="checkbox" className="size-4 bg-black/20 border-"/>
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input type="checkbox" className="size-4 bg-black/20 border-"/>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">123467</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white ">
                        Valdeir Alves Barbosa
                      </span>
                      <span>valdeir.a.barbosa@gmail.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    7 dias atrás{" "}
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    3 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5 hover:opacity-70">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="bg-zinc-900">
            <tr>
              <td
                colSpan={3}
                className="py-3 px-4 text-sm text-zinc-300 text-left"
              >
                Mostrando 10 de 228 itens
              </td>
              <td
                colSpan={3}
                className="py-3 px-4 text-sm text-zinc-300 text-right">
                <div className=" inline-flex items-center gap-8">
                    <span>Página 1 de 23</span>
               
                <div className=" flex flex gap-1.5 ">
                  <button className="bg-zinc-850 border border-white/10 rounded-md p-1.5 hover:opacity-70">
                    <ChevronsLeft className="size-4" />
                  </button>
                  <button className="bg-zinc-850 border border-white/10 rounded-md p-1.5 hover:opacity-70">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="bg-zinc-850 border border-white/10 rounded-md p-1.5 hover:opacity-70">
                    <ChevronRight className="size-4" />
                  </button>
                  <button className="bg-zinc-850 border border-white/10 rounded-md p-1.5 hover:opacity-70">
                    <ChevronsRight className="size-4" />
                  </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
