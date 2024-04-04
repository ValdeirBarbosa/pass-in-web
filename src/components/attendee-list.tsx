import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/Table-row";
import { ChangeEvent, useState } from "react";
import { attendees } from "./data/attendees";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

export function AttendeeList() {

  const [search, setSearch] = useState('')

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);


  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex  gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />

          <input onChange={onSearchInputChanged} placeholder="Buscar Participante" className="bg-transparent flex-1  border-none p-0 " />

        </div>
        {search}
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
            <TableHeader style={{ width: 48 }}>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data de check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => {
            return (
              <TableRow
                key={attendee.id}
              >
                <TableCell className="py-3 px-4 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 border-"
                  />
                </TableCell>
                <TableCell >{attendee.id}</TableCell>
                <TableCell >
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white ">
                      {attendee.name}
                    </span>
                    <span>{attendee.mail}</span>
                  </div>
                </TableCell>
                <TableCell >
                  {dayjs(attendee.createdAt).toNow()}
                </TableCell>
                <TableCell >
                {dayjs(attendee.checkedInAt).toNow()}
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
