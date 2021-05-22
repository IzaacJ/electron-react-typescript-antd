import React from 'react';
import { Typography, Space, List, Divider } from 'antd';

const pjson = require('../../../package.json');

const { Title, Text } = Typography;

class Sidebar extends React.Component {
    deps:{title: string, version:string}[] = [];
    devdeps:{title: string, version:string}[] = [];

    constructor(props:any) {
        super(props);

        for (let pkg in pjson.dependencies) {
            this.deps.push({ title: pkg, version: pjson.dependencies[pkg].replace('^', '')});
        }

        for (let pkg in pjson.devDependencies) {
            this.devdeps.push({ title: pkg, version: pjson.devDependencies[pkg].replace('^', '')});
        }
    }

    render() {
        return (
            <Space direction="vertical" style={{ padding: 10, width: '100%' }}>
                <Title level={3}>ERT Boilerplate</Title>
                <Text>This boilerplate includes the following packages:</Text>
                <Divider>Dependencies ({this.deps.length})</Divider>
                <List
                    style={{
                        width: '100%',
                        overflow: 'auto',
                        height: '25vh',
                        border: '1px solid #fff',
                        padding: 5,
                    }}
                    dataSource={this.deps}
                    renderItem={item => (
                        <List.Item key={item.title}>
                            <Space direction="vertical">
                                <Text strong>{item.title}</Text>
                                <Text>{item.version}</Text>
                            </Space>
                        </List.Item>
                    )} />
                <Divider>DevDependencies ({this.devdeps.length})</Divider>
                <List
                    style={{
                        width: '100%',
                        overflow: 'auto',
                        height: '25vh',
                        border: '1px solid #fff',
                        padding: 5,
                    }}
                    dataSource={this.devdeps}
                    renderItem={item => (
                        <List.Item key={item.title}>
                            <Space direction="vertical">
                                <Text strong>{item.title}</Text>
                                <Text>{item.version}</Text>
                            </Space>
                        </List.Item>
                    )} />
            </Space>
        )
    }
}

export default Sidebar;