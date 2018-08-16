import stylesheet from 'antd/dist/antd.min.css'
import Link from 'next/link'
import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import Logout from '../components/commons/Logout'

const { Header, Content, Footer } = Layout
const MainLayout = ({ activeMenu, children }) => {
  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Header style={{ backgroundColor: '#fff', height: '46px' }}>
        <div className="logo" />
        <div style={{ float: 'right', height: '45px', lineHeight: '46px' }}>
          <Logout />
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={[activeMenu]}>
          <Menu.Item key="application" location="right">
            <Link href="/applications?tab=ALL">
              <a>Application</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="loans" location="right">
            <Link href="/loans?tab=LOAN_OPENED">
              <a>Loan</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="transaction" location="right">
            <Link href="/transaction">
              <a>Transaction</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="import" location="right">
            <Link href="/import?import=unsuccess">
              <a>Import</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="withdraws" location="right">
            <Link href="/withdraws?tab=PENDING">
              <a>Withdraw</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="adjint" location="right">
            <Link href="/adjint">
              <a>AdjInt</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="report">Report</Menu.Item>
          <Menu.Item key="statement">
            <Link href="/statement">
              <a>Statement</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="note">
            <Link href="/note">
              <a>Note</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '10px' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        JAIDEECash ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

MainLayout.propTypes = {
  activeMenu: PropTypes.string,
  children: PropTypes.node,
}
MainLayout.defaultProps = {
  activeMenu: 'application',
  children: null, // render nothing
}

export default MainLayout
