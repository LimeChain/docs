import NextLink from 'next/link'
import { Flex, NavigationMarketing, FooterMarketing, Spacing, BorderRadius, useUniqueId } from '@edgeandnode/components'

import { Container, ContainerProps, Dropdown, Icon } from '@/components'
import { useLocale } from '@/hooks'
import { objectEntries } from '@/utils'

export const Layout = ({ children, ...props }: ContainerProps) => {
  const { localesDetails, currentLocale, setLocale } = useLocale()
  const localeDropdownButtonClass = useUniqueId('class')

  const LocaleDropdown = (
    <Dropdown>
      <Dropdown.Button className={localeDropdownButtonClass}>
        <Flex.Row
          align="center"
          sx={{
            height: '32px',
            px: Spacing.M,
            borderRadius: BorderRadius.FULL,
            border: 'White4',
            bg: 'White4',
            [`.${localeDropdownButtonClass}:hover &`]: {
              borderColor: 'White16',
            },
            transition: 'border-color 200ms',
          }}
        >
          <Icon icon="Language" size={16} />
          <Icon icon="Caret" size={12} direction="down" sx={{ ml: Spacing.S }} />
        </Flex.Row>
      </Dropdown.Button>
      <Dropdown.Menu align="end" sx={{ minWidth: '220px' }}>
        {objectEntries(localesDetails).map(([locale, localeDetails]) => {
          return (
            <Dropdown.Menu.Item key={locale} active={currentLocale === locale} onSelect={() => setLocale(locale)}>
              {localeDetails.nativeName}
            </Dropdown.Menu.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )

  return (
    <Container {...props}>
      <div
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          minHeight: '768px',
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/img/page-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          '@media (min-width: 1440px)': {
            aspectRatio: '1440/768',
          },
        }}
      />
      <Flex.Column
        sx={{
          mx: 'auto',
          maxWidth: '1288px',
          minHeight: '100vh',
        }}
      >
        <div sx={{ flexShrink: 0 }}>
          <NavigationMarketing
            activeRoute="/docs"
            NextLink={NextLink}
            rightAlignItems={
              [
                /* LocaleDropdown */
              ]
            }
          />
        </div>
        <main sx={{ flexGrow: 1 }}>{children}</main>
        <div sx={{ flexShrink: 0 }}>
          <div sx={{ mx: 'auto', maxWidth: [null, null, null, 'calc(100vw - 500px)'] }}>
            <FooterMarketing renderNewsletterForm={false} />
          </div>
        </div>
      </Flex.Column>
    </Container>
  )
}
