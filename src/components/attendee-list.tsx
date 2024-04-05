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


interface Attendee {
  id: string
  name: string
  email: string
  createdAt: string
  checkedInAt: string | null
}
export function AttendeeList() {

  const [search, setSearch] = useState('')
  // const [page, setPage] = useState(1)
  const page =1
  const [total, setTotal] = useState(0)
  const [attendees, setAttendees] = useState<Attendee[]>([])

  const totalPages = Math.ceil(total / 10)

  useEffect(() => {

    const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
    url.searchParams.set('pageIndex', String(page - 1))
    if (search.length > 0) {
      url.searchParams.set('query', search)
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setAttendees(data.attendees)
        setTotal(data.total)
      })

  }, [page, search])

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    setPage(1)


  }
  function goToFisrtPage() {
    // setPage(1)

  }
  function goToLastPage() {
    // setPage(totalPages)

  }
  function goToNextPage() {


    // setPage(page + 1)
    const url = new URL(window.location.toString())
    url.searchParams.set('page',String(page+1))
    window.history.pushState({},"",url)

  }
  function goToPreviustPage() {

    // setPage(page - 1)

  }



  return (
    <div className="flex flex-col gap-4">
      <div className="flex  gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />

          <input onChange={onSearchInputChanged} placeholder="Buscar Participante" className="focus:ring-0 bg-transparent flex-1  border-none p-0 " />

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
                    <span>{attendee.email.toLowerCase()}</span>
                  </div>
                </TableCell>
                <TableCell >
                  {dayjs().to(attendee.createdAt)}
                </TableCell>
                <TableCell >
                  {attendee.checkedInAt === null
                    ? <span className="text-gray-600">Sem check-in</span>
                    : dayjs().to(attendee.checkedInAt)}
                </TableCell>
                <TableCell >
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })
          }
        </tbody>
        <tfoot className="bg-zinc-900">
          <tr>
            <TableCell
              colSpan={3}
              className="py-3 px-4 text-sm text-zinc-300 text-left"
            >
              Mostrando {attendees.length} de {total} itens
            </TableCell>
            <TableCell
              colSpan={3}
              className="py-3 px-4 text-sm text-zinc-500 text-right"
            >
              <div className=" inline-flex items-center gap-8">
                <span>Página {page} de {totalPages}</span>

                <div className=" flex flex gap-1.5 ">
                  <IconButton onClick={goToFisrtPage} disabled={page == 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviustPage} disabled={page == 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToNextPage} disabled={totalPages == page}>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToLastPage} disabled={totalPages == page}>
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
