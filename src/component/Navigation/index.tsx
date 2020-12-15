import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, FileExcelOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {  } from '../../containers/SpeedSheet';
import { PaneType } from '../../types';
import './style.scss';

type Props = {
  panes: PaneType[];
  setPanes: Function;
}

const Navigation = (props: Props) => {
  const { panes, setPanes } = props;
  const [current, setCurrent] = React.useState('homepage');
  const handleClick = (e: any) => {
    setCurrent(e.key);
  }
  const menu = (
    <Menu className="Navigation__Menu">
      <Menu.Item key="0" onClick={() => {
        setPanes([...panes, { title: '表格', key: 'speedsheet', content: <div>hehe</div> }])
      }}>
        <FileExcelOutlined style={{ fontSize: '42px', color: '#0b8235' }}/>
        <div>表格</div>
      </Menu.Item>
      <Menu.Item key="1">
        <FileExcelOutlined style={{ fontSize: '42px', color: '#1890ff' }}/>
        <div>表格</div>
      </Menu.Item>
      <Menu.Item key="2">
        <FileExcelOutlined style={{ fontSize: '42px' }}/>
        <div>表格</div>
      </Menu.Item>
      <Menu.Item key="3">
        <FileExcelOutlined style={{ fontSize: '42px' }}/>
        <div>表格</div>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className="Navigation">
      <div className="Navigation__Button">
        <Dropdown overlay={menu} trigger={['click']}>
          <Button type="primary" block>
            新建
          </Button>
        </Dropdown>
      </div>
      <Menu onClick={handleClick} selectedKeys={[current]} style={{ width: 256 }} mode="inline">
        <Menu.Item key="homepage" icon={<MailOutlined />}>
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="speedsheet" icon={<AppstoreOutlined />}>
          <Link to="/speedsheet">表格</Link>
        </Menu.Item>
        <Menu.Item key="alipay">
        <Link to="/download">下载</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navigation;