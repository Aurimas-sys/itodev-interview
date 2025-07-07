import styles from '@/components/pagination/Pagination.module.scss'

interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({ page, totalPages, className, onPageChange }: PaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const MAX_SHOWN_PAGES = 5
  const shouldShowFirst = page >= MAX_SHOWN_PAGES
  const shouldShowLast = totalPages > MAX_SHOWN_PAGES ? page < totalPages - 1 : false
  const visiblePageStartIndex = page >= MAX_SHOWN_PAGES ? page - 1 : 1
  const visiblePageEndIndex = page >= MAX_SHOWN_PAGES ? page === totalPages ? totalPages : page + 1 : MAX_SHOWN_PAGES > totalPages ? totalPages : MAX_SHOWN_PAGES

  const pages = Array.from({ length: visiblePageEndIndex - visiblePageStartIndex + 1 }, (_, i) => i + visiblePageStartIndex)
  const extendedClassName = `${styles.pagination} ${className || ''}`.trim()

  function getNextBtnClass(isDisabled: boolean) {
    return `${styles.pagination__next} ${isDisabled ? styles['pagination__next--disabled'] : ''}`.trim()
  }

  function getPageClass(isActive: boolean) {
    return `${styles.pagination__page} ${isActive ? styles['pagination__page--active'] : ''}`.trim()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, page: number) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onPageChange(page)
    }
  }

  return (
    <div className={extendedClassName}>
      <div
        className={getNextBtnClass(page === 1)}
        tabIndex={page === 1 ? -1 : 0}
        onClick={() => page === 1 ? undefined : onPageChange(page - 1)}
        onKeyDown={e => page === 1 ? undefined : handleKeyDown(e, page - 1)}
      >
        <i className="ri-arrow-left-line" />
      </div>
      {shouldShowFirst && (
        <>
          <div
            className={styles.pagination__page}
            tabIndex={0}
            onClick={() => onPageChange(1)}
            onKeyDown={e => handleKeyDown(e, 1)}
          >
            1
          </div>
          <div className={styles.pagination__eclipse}>...</div>
        </>
      )}
      {pages.map(pageNumber => (
        <div
          key={pageNumber}
          className={getPageClass(pageNumber === page)}
          tabIndex={0}
          onClick={() => onPageChange(pageNumber)}
          onKeyDown={e => handleKeyDown(e, pageNumber)}
        >
          {pageNumber}
        </div>
      ))}
      {shouldShowLast && (
        <>
          <div className={styles.pagination__eclipse}>...</div>
          <div
            className={styles.pagination__page}
            tabIndex={0}
            onClick={() => onPageChange(totalPages)}
            onKeyDown={e => handleKeyDown(e, totalPages)}
          >
            {totalPages}
          </div>
        </>
      )}
      <div
        className={getNextBtnClass(page === totalPages)}
        tabIndex={page === totalPages ? -1 : 0}
        onClick={() => page === totalPages ? undefined : onPageChange(page + 1)}
        onKeyDown={e => page === totalPages ? undefined : handleKeyDown(e, page + 1)}
      >
        <i className="ri-arrow-right-line" />
      </div>
    </div>
  )
}
