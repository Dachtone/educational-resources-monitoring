import React from 'react'
import { Layout as AntdLayout, Menu, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const { Header, Content } = AntdLayout

export const Layout: React.FC = (props: any) => {
    return (
        <AntdLayout>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to="/degree/bachelor">Бакалавриат</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/degree/specialist">Специалитет</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/degree/master">Магистратура</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <AntdLayout>
                <AntdLayout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="site-AntdLayout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props?.children}
                    </Content>
                </AntdLayout>
            </AntdLayout>
        </AntdLayout>
    )
}
