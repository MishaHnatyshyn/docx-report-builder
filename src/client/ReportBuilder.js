import React, { Component } from 'react';

export default class ReportBuilder extends Component {
  state = {
    protocolNum: '',
    protocolFromDate: '',
    document: '',
    period: '',

    colorStandart: '',
    colorResult: '',
    smellStandart: '',
    smellResult: '',
    appearanceDoc: '',

    purityeDoc: '',

    amountOfOtherTypes: '',

    infectiousnesseDoc: '',

    conclusion: '',

    url: '',

    similarityStandart: '',
    energyNormalStandart: '',
    similarityAnomalStandart: '',
    similarityAnomalResult: '',
    similaritySolidSeedStandart: '',
    similaritySolidSeedResult: '',
    similarityUngrowedSeedStandart: '',
    similarityUngrowedSeedResult: '',
    similarityRottedSeedStandart: '',
    similarityRottedSeedResult: '',

    similarityDoc: ''

  };
  documents = [
    'ДСТУ  7160-2010 Насіння  овочевих, баштанних,кормових і пряно-ароматичних культур. Сортові та посівні якості. Технічні умови',
    'ДСТУ 2240-93 Насіння сільськогосподарських культур. Сортові та посівні якості. Технічні умови',
    'ДСТУ 7018:2009 Насіння квітково-декоративних культур. Правила приймання та методи визначення якості',
  ];

  documentsTable = [
    'ДСТУ 4138-2002',
    'ДСТУ 5264-2001',
    'ДСТУ 4353-2003',
  ];

  handleSimilarityStandart = (e) => {
    this.setState({ similarityStandart: e.target.value });
  };

  handleEnergyNormalStandart = (e) => {
    this.setState({ energyNormalStandart: e.target.value });
  };

  handleSimilarityAnomalStandart= (e) => {
    this.setState({ similarityAnomalStandart: e.target.value });
  };

  handleSimilarityAnomalResult = (e) => {
    this.setState({ similarityAnomalResult: e.target.value });
  };

  handleSimilaritySolidSeedStandart = (e) => {
    this.setState({ similaritySolidSeedStandart: e.target.value });
  };

  handleSimilaritySolidSeedResult = (e) => {
    this.setState({ similaritySolidSeedResult: e.target.value });
  };

  handleSimilarityUngrowedSeedStandart = (e) => {
    this.setState({ similarityUngrowedSeedStandart: e.target.value });
  };

  handleSimilarityUngrowedSeedResult = (e) => {
    this.setState({ similarityUngrowedSeedResult: e.target.value });
  };

  handleSimilarityRottedSeedStandart = (e) => {
    this.setState({ similarityRottedSeedStandart: e.target.value });
  };

  handleSimilarityRottedSeedResult = (e) => {
    this.setState({ similarityRottedSeedResult: e.target.value });
  };

  handleSimilarityDoc = (e) => {
    this.setState({ similarityDoc: e.target.value });
  };

  handleProtocolNum = (e) => {
    this.setState({ protocolNum: e.target.value });
  };

  handleProtocolFromDate= (e) => {
    this.setState({ protocolFromDate: e.target.value });
  };

  handleDocument= (e) => {
    this.setState({ document: e.target.value });
  };

  handlePeriod= (e) => {
    this.setState({ period: e.target.value });
  };

  handleColorStandart= (e) => {
    this.setState({ colorStandart: e.target.value });
  };

  handleColorResult= (e) => {
    this.setState({ colorResult: e.target.value });
  };

  handleSmellStandart= (e) => {
    this.setState({ smellStandart: e.target.value });
  };

  handleSmellResult= (e) => {
    this.setState({ smellResult: e.target.value });
  };

  handleAppearanceDoc= (e) => {
    this.setState({ appearanceDoc: e.target.value });
  };

  handlePurityeDoc= (e) => {
    this.setState({ purityeDoc: e.target.value });
  };

  handleAmountOfOtherTypes= (e) => {
    this.setState({ amountOfOtherTypes: e.target.value });
  };

  handleInfectiousnesseDoc= (e) => {
    this.setState({ infectiousnesseDoc: e.target.value });
  };

  handleConclusion = (e) => {
    this.setState({ conclusion: e.target.value });
  };

  generateReport = () => {
    const data = new URLSearchParams();
    const {
      protocolNum,
      protocolFromDate,
      document,
      period,
      colorStandart,
      colorResult,
      smellStandart,
      smellResult,
      appearanceDoc,
      purityeDoc,
      amountOfOtherTypes,
      infectiousnesseDoc,
      conclusion,
      similarityStandart,
      energyNormalStandart,
      similarityAnomalStandart,
      similarityAnomalResult,
      similaritySolidSeedStandart,
      similaritySolidSeedResult,
      similarityUngrowedSeedStandart,
      similarityUngrowedSeedResult,
      similarityRottedSeedStandart,
      similarityRottedSeedResult,
      similarityDoc
    } = this.state;
    const {
      $culture_type,
      $culture_name,
      $year,
      $country,
      $partition_num,
      $partition_weight,
      $places_num,
      $treated,
      $energy,
      $simularity,
    } = this.props.row;

    const {
      $act_date,
      $act_num,
      $firm_address,
    } = this.props.header;

    // User input
    data.append('$protocol_num', protocolNum);
    data.append('$protocol_from_date', protocolFromDate);
    data.append('$document', document);
    data.append('$period', period);
    data.append('$color_standart', colorStandart);
    data.append('$color_result', colorResult);
    data.append('$smell_standart', smellStandart);
    data.append('$smell_result', smellResult);
    data.append('$appearance_doc', appearanceDoc);
    data.append('$purity_doc', purityeDoc);
    data.append('$amount_of_other_types', amountOfOtherTypes);
    data.append('$infectiousnesse_doc', infectiousnesseDoc);
    data.append('$conclusion', conclusion);

    //Similarity table
    data.append('$similarity11', similarityStandart);
    data.append('$similarity21', energyNormalStandart);
    data.append('$similarity31', similarityAnomalStandart);
    data.append('$similarity32', similarityAnomalResult);
    data.append('$similarity41', similaritySolidSeedStandart);
    data.append('$similarity42', similaritySolidSeedResult);
    data.append('$similarity51', similarityUngrowedSeedStandart);
    data.append('$similarity61', similarityRottedSeedStandart);
    data.append('$similarity62', similarityRottedSeedResult);
    data.append('$similarity_doc', similarityDoc);

    // Header
    data.append('$act_date', $act_date);
    data.append('$act_num', $act_num);
    data.append('$firm_address', $firm_address);

    // Row
    data.append('$culture_type', $culture_type);
    data.append('$culture_name', $culture_name);
    data.append('$year', $year);
    data.append('$country', $country);
    data.append('$partition_num', $partition_num);
    data.append('$places_num', $places_num);
    data.append('$partition_weight', $partition_weight);
    data.append('$treated', $treated);
    data.append('$energy', $energy);
    data.append('$simularity', $simularity);

    const options = {
      method: 'POST',
      body: data
    };

    fetch('/api/report/build', options)
      .then(res => res.json())
      .then(res => {
        if (res.status === 1){
          this.setState({ url: res.filename })
        }
      })
  };

  handleDownload = () => {
    this.props.reset();
  };

  render() {
    const { row, header } = this.props;
    const { url } = this.state;
    return (
      <div>
        <button onClick={this.handleDownload} className="back-button">Повернутись назад</button>
        <div className="download-popup" style={{ display: url ? 'flex' : 'none' }}>
          <div>
            <a href={url} download onClick={this.handleDownload}>Download Report</a>
          </div>
        </div>
        <form className="form-table">
          <label htmlFor="protocol-num">Номер протоколу</label>
          <input type="text" name="protocol-num" value={this.state.protocolNum} onInput={this.handleProtocolNum} />
          <label htmlFor="protocol-num">Від</label>
          <input type="text" name="protocol-date" value={this.state.protocolFromDate} onInput={this.handleProtocolFromDate} />
          <label htmlFor="documents">Нормативні документи на об’єкт випробувань</label>
          <select name="documents" value={this.state.document} onChange={this.handleDocument}>
            <option value=""/>
            <option value={this.documents[0]}>{this.documents[0]}</option>
            <option value={this.documents[1]}>{this.documents[1]}</option>
            <option value={this.documents[2]}>{this.documents[2]}</option>
          </select>
          <label htmlFor="period">Дати проведення випробувань</label>
          <input type="text" name="period" value={this.state.period} onInput={this.handlePeriod} />
          <table className="input-form">
            <tr>
              <th>Найменування показника, одиниці вимірювання</th>
              <th>Значення і допуск показника за Стандартом</th>
              <th>Результати випробувань</th>
              <th>Нормативний документ на метод випробувань</th>
            </tr>
            <tr>
              <td>Колір</td>
              <td><input type="text" value={this.state.colorStandart} onInput={this.handleColorStandart} /></td>
              <td><input type="text" value={this.state.colorResult} onInput={this.handleColorResult} /></td>
              <td rowSpan={2}>
                <select name="documents" value={this.state.appearanceDoc} onChange={this.handleAppearanceDoc}>
                  <option value=""/>
                  <option value={this.documentsTable[0]}>{this.documentsTable[0]}</option>
                  <option value={this.documentsTable[1]}>{this.documentsTable[1]}</option>
                  <option value={this.documentsTable[2]}>{this.documentsTable[2]}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Запах</td>
              <td><input type="text" value={this.state.smellStandart} onInput={this.handleSmellStandart} /></td>
              <td><input type="text" value={this.state.smellResult} onInput={this.handleSmellResult} /></td>
            </tr>
            <tr>
              <td>Чистота</td>
              <td className="blank-cell" />
              <td className="blank-cell" />
              <td>
                <select name="documents" value={this.state.purityeDoc} onChange={this.handlePurityeDoc}>
                  <option value=""/>
                  <option value={this.documentsTable[0]}>{this.documentsTable[0]}</option>
                  <option value={this.documentsTable[1]}>{this.documentsTable[1]}</option>
                  <option value={this.documentsTable[2]}>{this.documentsTable[2]}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Вміст насіння інших видів</td>
              <td className="blank-cell" />
              <td className="blank-cell" />
              <td>
                <select name="documents" value={this.state.amountOfOtherTypes} onChange={this.handleAmountOfOtherTypes}>
                  <option value=""/>
                  <option value={this.documentsTable[0]}>{this.documentsTable[0]}</option>
                  <option value={this.documentsTable[1]}>{this.documentsTable[1]}</option>
                  <option value={this.documentsTable[2]}>{this.documentsTable[2]}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Зараженість хворобами</td>
              <td className="blank-cell" />
              <td className="blank-cell" />
              <td>
                <select name="documents" value={this.state.infectiousnesseDoc} onChange={this.handleInfectiousnesseDoc}>
                  <option value=""/>
                  <option value={this.documentsTable[0]}>{this.documentsTable[0]}</option>
                  <option value={this.documentsTable[1]}>{this.documentsTable[1]}</option>
                  <option value={this.documentsTable[2]}>{this.documentsTable[2]}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Схожість</td>
              <td><input type="text" value={this.state.similarityStandart} onInput={this.handleSimilarityStandart} /></td>
              <td className="blank-cell" />
              <td rowSpan={6}>
                <select name="documents" value={this.state.similarityDoc} onChange={this.handleSimilarityDoc}>
                  <option value=""/>
                  <option value={this.documentsTable[0]}>{this.documentsTable[0]}</option>
                  <option value={this.documentsTable[1]}>{this.documentsTable[1]}</option>
                  <option value={this.documentsTable[2]}>{this.documentsTable[2]}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Схожість нормально пророслого насіння</td>
              <td><input type="text" value={this.state.energyNormalStandart} onInput={this.handleEnergyNormalStandart} /></td>
              <td className="blank-cell" />
            </tr>
            <tr>
              <td>Схожість аномальних проростків</td>
              <td><input type="text" value={this.state.similarityAnomalStandart} onInput={this.handleSimilarityAnomalStandart} /></td>
              <td><input type="text" value={this.state.similarityAnomalResult} onInput={this.handleSimilarityAnomalResult} /></td>
            </tr>
            <tr>
              <td>Схожість твердого насіння</td>
              <td><input type="text" value={this.state.similaritySolidSeedStandart} onInput={this.handleSimilaritySolidSeedStandart} /></td>
              <td><input type="text" value={this.state.similaritySolidSeedResult} onInput={this.handleSimilaritySolidSeedResult} /></td>
            </tr>
            <tr>
              <td>Схожість непророслого здорового насіння</td>
              <td><input type="text" value={this.state.similarityUngrowedSeedStandart} onInput={this.handleSimilarityUngrowedSeedStandart} /></td>
              <td className="blank-cell" />
            </tr>
            <tr>
              <td>Схожість зігнилого насіння</td>
              <td><input type="text" value={this.state.similarityRottedSeedStandart} onInput={this.handleSimilarityRottedSeedStandart} /></td>
              <td><input type="text" value={this.state.similarityRottedSeedResult} onInput={this.handleSimilarityRottedSeedResult} /></td>
            </tr>
          </table>
          <label htmlFor="conclusion">Висновок</label>
          <input type="text" name="conclusion" value={this.state.conclusion} onInput={this.handleConclusion} />
        </form>
        <button onClick={this.generateReport}>Generate report</button>
      </div>
    );
  }
}
