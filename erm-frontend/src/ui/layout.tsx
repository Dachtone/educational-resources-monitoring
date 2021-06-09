import React from 'react'
import { Layout as AntdLayout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
const { Header, Content } = AntdLayout

export const Layout: React.FC = (props: any) => {
    return (
        <AntdLayout style={{ minHeight: '100vh' }}>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <HomeOutlined />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/degree/bachelor">Бакалавриат</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/degree/specialist">Специалитет</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/degree/master">Магистратура</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <AntdLayout style={{ padding: '0 24px 24px', minHeight: '100vh' }}>
                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: '100%',
                    }}
                >
                    {props?.children}
                </Content>
            </AntdLayout>
        </AntdLayout>
    )
}
