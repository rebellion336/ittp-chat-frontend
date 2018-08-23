import { Component } from 'react'
import { redirect } from '../tools/utils'

export const requireAuth = (Page, redirectUrl = '/login') =>
  class extends Component {
    static getInitialProps(ctx) {
      const { store } = ctx
      const state = store.getState()
      if (state && state.auth && state.auth.token) {
        let pageProps = {}
        if (Page.getInitialProps) {
          pageProps = Page.getInitialProps(ctx)
        }
        return pageProps
      }
      return redirect(redirectUrl, ctx)
    }
    render() {
      return <Page {...this.props} />
    }
  }
