import React from 'react'
import { useParams } from 'react-router'
import { List } from 'antd'
import { IDirection } from '../../customTypes/direction'
import { Layout } from '../../ui/layout'
import degreePageModel from '../../effector/pageModels/degreePageModel'
import { DirectionCard } from '../../ui/directionCard'

export const DegreePage: React.FC = () => {
    const { degreeName } = useParams<{ degreeName: string }>()

    const { degreeDirections } = degreePageModel(degreeName)
    return (
        <Layout>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={degreeDirections}
                renderItem={(item: IDirection) => <DirectionCard direction={item} />}
            />
        </Layout>
    )
}
