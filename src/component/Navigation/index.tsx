import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { MailOutlined, FileExcelOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { add } from '../ETabs/tabSlice';
import { useDispatch } from 'react-redux';
import './style.scss';

const Navigation = () => {
  const [current, setCurrent] = React.useState('homepage');
  const dispatch = useDispatch();
  const handleClick = (e: any) => {
    setCurrent(e.key);
  }
  const menu = (
    <Menu className="Navigation__Menu">
      <Menu.Item key="0" onClick={() => {
        dispatch(add({ title: `表格-${Date.now()}`, key: 'speedsheet', content: 'speedsheet' }))
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
        <Menu.Item key="alipay">
        <Link to="/">下载</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navigation;