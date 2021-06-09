import React from 'react'
import { List, Typography } from 'antd'
import { IDirection } from '../../customTypes/direction'
import { Layout } from '../../ui/layout'
import homePageModel from '../../effector/pageModels/homePageModel'
import { DirectionCard } from '../../ui/directionCard'

const { Title } = Typography

export const HomePage: React.FC = () => {
    const { allDirections } = homePageModel()
    // TODO: degrees is dynamic
    return (
        <Layout>
            <div>
                <Title level={5}>Бакалавриат</Title>
                <div style={{ padding: '1%', borderRadius: '10px', border: '1px solid #fff' }}>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={allDirections.filter((direction) => direction.degree.toLowerCase() === 'б')}
                        renderItem={(item: IDirection) => <DirectionCard direction={item} />}
                    />
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Title level={5}>Специалитет</Title>
                <div style={{ padding: '1%', borderRadius: '10px', border: '1px solid #fff' }}>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={allDirections.filter((direction) => direction.degree.toLowerCase() === 'с')}
                        renderItem={(item: IDirection) => <DirectionCard direction={item} />}
                    />
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Title level={5}>Магистратура</Title>
                <div style={{ padding: '1%', borderRadius: '10px', border: '1px solid #fff' }}>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={allDirections.filter((direction) => direction.degree.toLowerCase() === 'м')}
                        renderItem={(item: IDirection) => <DirectionCard direction={item} />}
                    />
                </div>
            </div>
        </Layout>
    )
}
