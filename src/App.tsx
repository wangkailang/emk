import React from 'react';
import './App.css';
import Spreadsheet from 'x-data-spreadsheet';
import { parseSheet, formatSheet } from './utils/stox';
import { Button } from 'antd';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import XLSX from 'xlsx';

function App() {
  const [grid, setGrid] = React.useState();

  React.useEffect(() => {
    const newGrid = new Spreadsheet('#grid');
    setGrid(newGrid as any)
  }, []);
  React.useEffect(() => {
    window.ipcRenderer.on('excel-data', (event: any, data: any) => {
      console.log('grid', grid);
      grid && (grid as any).loadData(parseSheet(data.data));
    })
  }, [grid])
  const openExcelFile = () => {
    window.ipcRenderer.send('sync-job', {
      key: 'open-excel',
    });
  }
  const downloadExcelFile = () => {
    const data = grid && (grid as any).getData();
    const newSheet = formatSheet(data);
    XLSX.writeFile(newSheet, 'default.xlsx');
  };
  return (
    <div className="App">
      <div>
        <Button type="primary" icon={<UploadOutlined />} onClick={openExcelFile}>
          导入 Excel 文件
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} onClick={downloadExcelFile}>
          导出 Excel 文件
        </Button>
      </div>
      <div id="grid"/>
    </div>
  );
}

export default App;
