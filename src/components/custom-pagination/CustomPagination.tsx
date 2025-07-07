import { Pagination } from 'react-bootstrap'

interface CustomPaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function CustomPagination({ page, totalPages, className, onPageChange }: CustomPaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const MAX_SHOWN_PAGES = 4
  const shouldShowFirst = page >= MAX_SHOWN_PAGES
  const shouldShowLast = totalPages > MAX_SHOWN_PAGES ? page < totalPages - 1 : false
  const visiblePageStartIndex = page >= MAX_SHOWN_PAGES ? page - 1 : 1
  const visiblePageEndIndex = page >= MAX_SHOWN_PAGES ? page === totalPages ? totalPages : page + 1 : MAX_SHOWN_PAGES > totalPages ? totalPages : MAX_SHOWN_PAGES

  const pages = Array.from({ length: visiblePageEndIndex - visiblePageStartIndex + 1 }, (_, i) => i + visiblePageStartIndex)

  return (
    <Pagination className={className}>
      <Pagination.Prev
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      />
      {shouldShowFirst && (
        <>
          <Pagination.Item
            onClick={() => onPageChange(1)}
          >
            1
          </Pagination.Item>
          <Pagination.Ellipsis tabIndex={1} />
        </>
      )}
      {pages.map(pageNumber => (
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === page}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
      {shouldShowLast && (
        <>
          <Pagination.Ellipsis  tabIndex={1}/>
          <Pagination.Item
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </Pagination.Item>
        </>
      )}
      <Pagination.Next
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      />
    </Pagination>
  )
}
