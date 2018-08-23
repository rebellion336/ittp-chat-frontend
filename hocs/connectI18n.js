import { translate } from 'react-i18next'
import i18n from '../tools/i18n'

export const connectI18n = namespaces => Page => {
  const i18nPage = translate(namespaces, { i18n, wait: process.browser })(Page)

  // Passing down initial translations
  // use req.i18n instance on serverside to avoid overlapping requests set the language wrong
  i18nPage.getInitialProps = async ctx => {
    const { req } = ctx

    let i18nProps = {}
    if (req && !process.browser) {
      i18nProps = i18n.getInitialProps(req, namespaces)
    }

    let pageProps = {}
    if (Page.getInitialProps) {
      pageProps = Page.getInitialProps(ctx)
    }

    return { ...i18nProps, ...pageProps }
  }

  return i18nPage
}
