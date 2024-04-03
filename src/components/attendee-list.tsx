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
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/Table-row";
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
              <TableRow
                key={i}
              >
                <TableCell className="py-3 px-4 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 border-"
                  />
                </TableCell>
                <TableCell >123467</TableCell>
                <TableCell >
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white ">
                      Valdeir Alves Barbosa
                    </span>
                    <span>valdeir.a.barbosa@gmail.com</span>
                  </div>
                </TableCell>
                <TableCell >
                  7 dias atrás{" "}
                </TableCell>
                <TableCell >
                  3 dias atrás
                </TableCell>
                <TableCell >
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot className="bg-zinc-900">
          <tr>
            <TableCell
              colSpan={3}
              className="py-3 px-4 text-sm text-zinc-300 text-left"
            >
              Mostrando 10 de 228 itens
            </TableCell>
            <TableCell
              colSpan={3}
              className="py-3 px-4 text-sm text-zinc-500 text-right"
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
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
