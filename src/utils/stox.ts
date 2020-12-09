import XLSX from 'xlsx';

export function parseSheet(wb: any) {
  const out: any = [];
  wb.SheetNames.forEach(function (name: string | number) {
    const o: any = { name: name, rows: {} };
    const ws = wb.Sheets[name];
    const aoa = XLSX.utils.sheet_to_json(ws, { raw: false, header: 1 });
    aoa.forEach(function (r: any, i) {
      const cells: any = {};
      r.forEach(function (c: any, j: string | number) { cells[j] = ({ text: c }); });
      o.rows[i] = { cells: cells };
    })
    out.push(o);
  });
  return out;
}

export function formatSheet(data: any) {
  const out = XLSX.utils.book_new();
  data.forEach(function (xws: { rows: any; name: string | undefined; }) {
    const aoa: any = [[]];
    const rowObj: any = xws.rows;
    for (let ri = 0; ri < rowObj.len; ++ri) {
      const row: any = rowObj[ri];
      if (!row) continue;
      aoa[ri] = [];
      Object.keys(row.cells).forEach(function (k) {
        const idx = +k;
        if (isNaN(idx)) return;
        aoa[ri][idx] = row.cells[k].text;
      });
    }
    const ws = XLSX.utils.aoa_to_sheet(aoa);
    XLSX.utils.book_append_sheet(out, ws, xws.name);
  });
  return out;
}