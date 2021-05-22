import React from 'react';

import { Typography, Space, Divider } from 'antd';

const { Title, Text } = Typography;

class Description extends React.Component {
    render() {
        return (
            <Space direction="vertical">
                <Title level={4}>Electron React TypeScript Boilerplate</Title>
                <Text>This boilerplate was built to accomodate my basic needs when getting started with an Electron app.</Text>
                <Text>It includes <Text code>antd</Text> for basic elements and layout.</Text>
                <Divider />
            </Space>
        )
    }
}

export default Description;