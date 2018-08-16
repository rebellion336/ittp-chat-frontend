import stylesheet from 'antd/dist/antd.min.css'
import PropTypes from 'prop-types'
import { vars } from '../styles/vars'

const FullPageLayout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
      }}
    >
      <style jsx global>{`
        body,
        html {
          height: 100%;
          margin: 0;
          width: 100%;
        }
        body {
          background-color: ${vars.grey} !important;
        }
        :global(#__next) {
          height: 100%;
        }
      `}</style>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {children}
    </div>
  )
}
FullPageLayout.propTypes = {
  children: PropTypes.node,
}
FullPageLayout.defaultProps = {
  children: null, // render nothing
}

export default FullPageLayout
