import React from 'react'
import { Card, List } from 'antd'
import { useParams } from 'react-router'
import { degreesDecoded } from '../../customTypes/degrees'
import { IDirection } from '../../customTypes/direction'
import { Layout } from '../../ui/layout'
import degreePageModel from '../../utils/effector/pageModels/degreePageModel'

export const DegreePage: React.FC = () => {
    const { degreeName } = useParams<{ degreeName: string }>()

    const { degreeDirections } = degreePageModel(degreeName)
    return (
        <Layout>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={degreeDirections}
                renderItem={(item: IDirection) => (
                    <List.Item>
                        <Card title={`${(degreesDecoded as any)[item.degree]}-${item.code}`}>{item.name}</Card>
                    </List.Item>
                )}
            />
        </Layout>
    )
}
