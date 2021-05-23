import React from 'react';
import ReactDom from 'react-dom';

/* Import Ant Design components */
import {
    Layout,
    Typography,
    Space,
    Image
} from 'antd';
/* Import Ant Design iconography */
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

/* Import app less */
import './app.less';
/* Import app logo */
import logo from '../images/logo.png';

/* Import custom components */
import {
    Sidebar,
    Description
} from './components';

const { Header, Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

class App extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Sider width={'25vw'} trigger={null} collapsible collapsed={this.state.collapsed} collapsedWidth={0}>
                    <Sidebar />
                </Sider>
                <Layout>
                    <Header>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <Image width={50} src={logo} preview={false} style={{ margin: '8px 0 0 0' }}/>
                        <Title level={3} style={{ display: 'inline-block', position: 'relative', top: '-18px' }}>ERT - Electron React TypeScript</Title>
                    </Header>
                    <Content style={{ padding: 20 }}>
                        <Description />
                    </Content>
                    <Footer>
                        <Space direction="vertical">
                            <Text>Boilerplate built by Izaac Brånn</Text>
                            <Text>Reloaded: {new Date(Date.now()).toLocaleString()}</Text>
                        </Space>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

ReactDom.render(<App />, mainElement);