import { Card, List } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { IDirection } from '../customTypes/direction'

export const DirectionCard = ({ direction }: { direction: IDirection }) => {
    return (
        <List.Item>
            <Link to={`/direction/${direction.code}`}>
                <Card style={{ cursor: 'pointer' }} title={direction.name}>
                    {direction.code}
                </Card>
            </Link>
        </List.Item>
    )
}
