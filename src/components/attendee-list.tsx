import { ChangeEvent, useEffect, useState } from "react";
import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/Table-row";


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br"

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [attendees, setAttendees] = useState([])



  const totalPages = Math.ceil(attendees.length / 10)

useEffect(()=>{
  fetch('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
  .then(response => response.json())
  .then(data =>{console.log(data)
    setAttendees(data.attendees)
  })
  
},[page])

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);


  }
  function goToFisrtPage() {
    setPage(1)

  }
  function goToLastPage() {
    setPage(totalPages)

  }
  function goToNextPage() {


    setPage(page + 1)

  }
  function goToPreviustPage() {

    setPage(page - 1)

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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
            return (
              
              <TableRow
                key={attendee}
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
                    <span>{attendee.email.toString()}</span>
                  </div>
                </TableCell>
                <TableCell >
                  {dayjs().to(attendees.createdAt)}
                </TableCell>
                <TableCell >
                  {dayjs().to(attendee.checkedInAt)}
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
              Mostrando 10 de {attendees.length} itens
            </TableCell>
            <TableCell
              colSpan={3}
              className="py-3 px-4 text-sm text-zinc-500 text-right"
            >
              <div className=" inline-flex items-center gap-8">
                <span>Página {page} de {totalPages}</span>

                <div className=" flex flex gap-1.5 ">
                  <IconButton onClick={goToFisrtPage} disabled={page ==1 }>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviustPage} disabled={page ==1 }>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToNextPage} disabled={totalPages ==page }>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToLastPage} disabled={totalPages ==page }>
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
