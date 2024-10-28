"use client"
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"

export function PaginationUser() {
	const totalPages = 10
	const [page, setPage] = useState(1)

	const handlePageChange = (page: number) => {
		setPage(page)
	}

	const handleNextPage = () => {
		if (page < totalPages) {
			setPage(page + 1)
		}
	}

	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1)
		}
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={handlePreviousPage}
						className="cursor-pointer"
					/>
				</PaginationItem>
				<PaginationItem className={`${page < 4 ? "hidden" : ""}`}>
					<PaginationLink
						onClick={() => handlePageChange(1)}
						className="cursor-pointer"
					>
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem className={`${page < 4 ? "hidden" : ""}`}>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink
						onClick={() => handlePageChange(page - 1)}
						className={`${page <= 2 ? "hidden" : ""} cursor-pointer`}
					>
						{page - 2}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink
						onClick={() => handlePageChange(page - 1)}
						className={`${page == 1 ? "hidden" : ""} cursor-pointer`}
					>
						{page - 1}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink isActive>{page}</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink
						onClick={() => handlePageChange(page + 1)}
						className={`${page == totalPages ? "hidden" : ""} cursor-pointer`}
					>
						{page + 1}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink
						onClick={() => handlePageChange(page + 2)}
						className={`${
							page >= totalPages - 1 ? "hidden" : ""
						} cursor-pointer`}
					>
						{page + 2}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem className={`${page >= totalPages - 2 ? "hidden" : ""}`}>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem className={`${page >= totalPages - 2 ? "hidden" : ""}`}>
					<PaginationLink
						onClick={() => handlePageChange(10)}
						className="cursor-pointer"
					>
						10
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext onClick={handleNextPage} className="cursor-pointer" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
