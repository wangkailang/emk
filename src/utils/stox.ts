import XLSX from 'xlsx';

export function parseSheet(wb: any) {
  var out: any = [];
  wb.SheetNames.forEach(function(name: any) {
    var o: any = { name:name, rows:{} };
    var ws = wb.Sheets[name];
    var aoa = XLSX.utils.sheet_to_json(ws, {raw: false, header:1});
    aoa.forEach(function(r: any, i: any) {
      var cells: any = {};
      r.forEach(function(c: any, j: any) { cells[j] = ({ text: c }); });
      o.rows[i] = { cells: cells };
    })
    out.push(o);
  });
  return out;
}

export function formatSheet(data: any) {
  var out = XLSX.utils.book_new();
  data.forEach(function(xws: { rows: any; name: string | undefined; }) {
    var aoa: any = [[]];
    var rowobj: any = xws.rows;
    for(var ri = 0; ri < rowobj.len; ++ri) {
      var row: any = rowobj[ri];
      if(!row) continue;
      aoa[ri] = [];
      Object.keys(row.cells).forEach(function(k) {
        var idx = +k;
        if(isNaN(idx)) return;
        aoa[ri][idx] = row.cells[k].text;
      });
    }
    var ws = XLSX.utils.aoa_to_sheet(aoa);
    XLSX.utils.book_append_sheet(out, ws, xws.name);
  });
  return out;
}