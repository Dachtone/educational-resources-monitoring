import React from 'react'
import { Card, List } from 'antd'
import { IDirection } from '../../customTypes/direction'
import { Layout } from '../../ui/layout'
import homePageModel from '../../utils/effector/pageModels/homePageModel'
import { degreesDecoded } from '../../customTypes/degrees'

export const HomePage: React.FC = () => {
    const { allDirections } = homePageModel()
    return (
        <Layout>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={allDirections}
                renderItem={(item: IDirection) => (
                    <List.Item>
                        <Card title={`${(degreesDecoded as any)[item.degree]}-${item.code}`}>{item.name}</Card>
                    </List.Item>
                )}
            />
        </Layout>
    )
}
