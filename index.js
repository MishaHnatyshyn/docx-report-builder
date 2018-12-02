const fs = require('fs');
const docx4js = require("docx4js");
const xlsx = require('node-xlsx').default;

const document = {
  header: {},
  rows: []
};

const table = xlsx.parse(`${__dirname}/act.xlsx`)[0].data;
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

docx4js.load('test1.docx').then(docx => {
  for (let i = 0; i < docx.officeDocument.content("w\\:t").length; i++) {
    const child = docx.officeDocument.content("w\\:t")[i].children[0];
    const fields = Object.assign(document.header, document.rows[1] )
    for (const val in fields) {
      if (child.data.indexOf(val) > -1) {
        child.data = fields[val]
        // console.log(val, child.data, fields[val] )
        break;
      }
    }
  }
  docx.save("changed1.docx")
});
