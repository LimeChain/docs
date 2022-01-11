import { useContext } from 'react'
import { Spacing } from '@edgeandnode/components'

import { DocumentContext } from '@/layout'
import { Text, Link, EditPageLink } from '@/components'

export type OutlineItem = {
  id: string
  title: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const MDXLayoutOutline = () => {
  const { outline, highlightedOutlineItemId } = useContext(DocumentContext)!

  if (outline.length === 0) {
    return <div />
  }

  return (
    <div
      sx={{
        zIndex: 1,
        position: 'sticky',
        top: '-1px',
        maxHeight: 'calc(100vh + 2px)',
        px: Spacing.M,
        py: Spacing.XL,
        overflowY: 'auto',
      }}
    >
      <EditPageLink />
      <aside
        sx={{
          mt: Spacing.XL,
          pr: '16px',
          pt: Spacing.XL,
          borderTop: 'White16',
        }}
      >
        <Text as="header" weight="Medium" size="10px" color="White64" uppercase sx={{ mb: Spacing.M }}>
          Page Sections
        </Text>
        <Text as="ul" role="list" size="14px" color="White48">
          {outline.map((outlineItem, outlineItemIndex) => {
            if (outlineItem.level > 3) {
              return null
            }
            return (
              <li key={outlineItemIndex}>
                <Link
                  href={`#${outlineItem.id}`}
                  sx={{
                    display: 'block',
                    pl: `${8 * Math.max(0, outlineItem.level - 2)}px`,
                    py: '6px',
                    color: outlineItem.id === highlightedOutlineItemId ? 'White88' : undefined,
                    '&:hover': { color: 'White' },
                    transition: 'color 200ms',
                  }}
                >
                  {outlineItem.title}
                </Link>
              </li>
            )
          })}
        </Text>
      </aside>
    </div>
  )
}
