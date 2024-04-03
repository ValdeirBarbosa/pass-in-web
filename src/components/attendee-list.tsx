import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
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

      <Table>
        <thead>
          <tr className="border-b border-white/10 ">
            <TableHeader
              style={{ width: 48 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            >
              <input type="checkbox" className="size-4 bg-black/20 border-" />
            </TableHeader>
            <TableHeader  style={{ width: 48 }}>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data de check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <tr
                key={i}
                className="border-b border-white/10 hover:bg-white/5 "
              >
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 border-"
                  />
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
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
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
              className="py-3 px-4 text-sm text-zinc-300 text-right"
            >
              <div className=" inline-flex items-center gap-8">
                <span>Página 1 de 23</span>

                <div className=" flex flex gap-1.5 ">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
