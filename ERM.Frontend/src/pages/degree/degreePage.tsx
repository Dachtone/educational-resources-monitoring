import { Card, List } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import { ISubject } from '../../customTypes/subject'
import { Layout } from '../../ui/layout'
import degreePageModel from '../../utils/effector/pageModels/degreePageModel'

export const DegreePage: React.FC = () => {
    const { degreeName } = useParams<{ degreeName: string }>()

    const { subjects } = degreePageModel(degreeName)
    return (
        <Layout>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={subjects}
                renderItem={(item: ISubject) => (
                    <List.Item>
                        <Card title={item.name}>subjects content</Card>
                    </List.Item>
                )}
            />
            ,
        </Layout>
    )
}
