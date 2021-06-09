import React from 'react'
import { Layout } from '../../ui/layout'
import directionPageModel from '../../effector/pageModels/directionPageModel'
import { useParams } from 'react-router-dom'
import { Card, Col, Descriptions, List, Row, Typography } from 'antd'
import { ISubject } from '../../customTypes/subject'

const { Title } = Typography

export const DirectionPage = () => {
    const { directionCode } = useParams<{ directionCode: string }>()
    const { direction } = directionPageModel(directionCode)
    return (
        <Layout>
            <Row gutter={12}>
                <Col>
                    <Title level={5}>{direction?.name}</Title>
                </Col>
                <Col>
                    <Title level={5}>{direction?.code}</Title>
                </Col>
                <Col span={24}>
                    <div>
                        <List
                            dataSource={direction?.subjects || []}
                            renderItem={(item: ISubject) => (
                                <Card title={item.name} style={{ marginBottom: '10px' }}>
                                    <Descriptions bordered column={5}>
                                        <Descriptions.Item label="Экзамены">{item.exams.join(', ')}</Descriptions.Item>
                                        <Descriptions.Item label="Зачёты">{item.benefits.join(', ')}</Descriptions.Item>
                                        {item.periods.map(
                                            ({ periodName, value }: { periodName: string; value: number | string }) => (
                                                <Descriptions.Item key={value} label={periodName}>
                                                    {value}
                                                </Descriptions.Item>
                                            ),
                                        )}
                                    </Descriptions>
                                </Card>
                            )}
                        />
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}
