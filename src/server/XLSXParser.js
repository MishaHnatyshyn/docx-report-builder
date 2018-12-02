const fs = require('fs');
const xlsx = require('node-xlsx').default;

const parse = (path) => {
  const document = {
    header: {},
    rows: []
  };

  const table = xlsx.parse(path)[0].data;
  document.header.$act_date = table[0][6];
  document.header.$act_num = table[0][4].slice(table[0][4].indexOf('№') + 1);
  document.header.$firm_address = table[5][0];

  for (const row of table.slice(13)){
    if (row.length !== 17) break;
    document.rows.push({
      $culture_type: row[1],
      $culture_name: row[2],
      $year: row[3],
      $country: row[7],
      $partition_num: row[8],
      $partition_weight: row[10],
      $places_num: row[11],
      $treated: row[12] === 'Так' ? 'потруєно' : 'не потруєно',
      $energy: row[15],
      $simularity: row[16],
    })
  };

  return document;
}

module.exports = parse