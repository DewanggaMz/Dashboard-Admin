"use client"
import { parseAsInteger, useQueryState } from "nuqs"
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationUser() {
	const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1))
	const totalPages = 10

	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setPage(newPage)
		}
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => handlePageChange(page - 1)}
						className="cursor-pointer"
					/>
				</PaginationItem>
				{page >= 4 && (
					<>
						<PaginationItem>
							<PaginationLink
								onClick={() => handlePageChange(1)}
								className="cursor-pointer"
							>
								1
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					</>
				)}
				{[page - 2, page - 1].map(
					(p) =>
						p > 0 && (
							<PaginationItem key={p}>
								<PaginationLink
									onClick={() => handlePageChange(p)}
									className="cursor-pointer"
								>
									{p}
								</PaginationLink>
							</PaginationItem>
						)
				)}
				<PaginationItem>
					<PaginationLink isActive>{page}</PaginationLink>
				</PaginationItem>
				{[page + 1, page + 2].map(
					(p) =>
						p <= totalPages && (
							<PaginationItem key={p}>
								<PaginationLink
									onClick={() => handlePageChange(p)}
									className="cursor-pointer"
								>
									{p}
								</PaginationLink>
							</PaginationItem>
						)
				)}
				{page <= totalPages - 3 && (
					<>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								onClick={() => handlePageChange(totalPages)}
								className="cursor-pointer"
							>
								{totalPages}
							</PaginationLink>
						</PaginationItem>
					</>
				)}
				<PaginationItem>
					<PaginationNext
						onClick={() => handlePageChange(page + 1)}
						className="cursor-pointer"
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
