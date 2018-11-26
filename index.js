const fs = require('fs');
const docx4js = require("docx4js");
const data = {
  PROTOCOL_NUMBER: '2721-18',
  PROTOCOL_DAY: '16 вересня',
  PROTOCOL_YEAR: '2018 року',
  CUSTOMER: 'ТОВ « Бадваси   »     с .Новосілки   вул. Садова ,5',
  ACT: '05 .09.2018 р. № 33',
  SEED: 'буряк',
  SORT: 'Гранат',
  COUNTRY: 'Німеччина',
  YEAR: '2016',
  PART: '273118',
  WEIGHT: '20',
  PLACES: '1',
  POISONED: 'протруєно',
  BORING_TEXT: ' ДСТУ 6006:2008 Насіння овочевих , баштанних культур та кормових  коренеплодів. Пакування, маркування,транспортування  та зберігання. Технічні  умови',
  DELIVERY_DATE: '5.09.2018',
  PERFORMING_DATE: '6.09- 16.09.2018 р.',
  DOC1: 'ДСТУ 4138-2002',
  DOC2: 'ДСТУ 4138-2002',
  DOC3: 'ДСТУ 4138-2002',
  DOC4: 'ДСТУ 4138-2002',
  COLOR1: 'нормальний',
  COLOR2: 'нормальний',
  SMELL1: 'нормальний',
  SMELL2: 'нормальний',
  SM11: '65',
  SM12: '-',
  SM13: '-',
  SM14: '-',
  SM15: '-',
  SM21: '74',
  SM23: '70',
  SM24: '0',
  SM25: '0',
  SM26: '26',
  SM27: '0',
  CONCLUSION: 'відповідає ДСТУ 7160-2010'
};

docx4js.load('test.docx').then(docx => {
  for (let i = 0; i < docx.officeDocument.content("w\\:t").length; i++) {
    const child = docx.officeDocument.content("w\\:t")[i].children[0];
    for (const val in data) {
      if (child.data.indexOf(val) > -1) {
        child.data = data[val]
        break;
      }
    }
  }
  docx.save("changed.docx")
});
