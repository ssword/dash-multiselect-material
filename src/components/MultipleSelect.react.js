import React, { Component } from 'react';
import SuperSelectField from 'material-ui-superselectfield';
import Chip from 'material-ui/Chip/Chip';


const continents = [
    'North america',
    'Central America',
    'South america',
    'Africa',
    'Europe',
    'Asia',
    'Oceania',
    'Antarctica'
  ];

const countries = [
    {
      'English short name': 'Afghanistan',
      'French short name': 'Afghanistan (l\')',
      'Alpha-2 code': 'AF',
      'Alpha-3 code': 'AFG',
      Numeric: 4,
      Capital: 'Kaboul',
      Continent: 5
    },
    {
      'English short name': 'Åland Islands',
      'French short name': 'Åland(les Îles)',
      'Alpha-2 code': 'AX',
      'Alpha-3 code': 'ALA',
      Numeric: 248,
      Capital: 'Mariehamn',
      Continent: 4
    },
    {
      'English short name': 'Albania',
      'French short name': 'Albanie (l\')',
      'Alpha-2 code': 'AL',
      'Alpha-3 code': 'ALB',
      Numeric: 8,
      Capital: 'Tirana',
      Continent: 4
    },
    {
      'English short name': 'Algeria',
      'French short name': 'Algérie (l\')',
      'Alpha-2 code': 'DZ',
      'Alpha-3 code': 'DZA',
      Numeric: 12,
      Capital: 'Alger',
      Continent: 3
    },
    {
      'English short name': 'American Samoa',
      'French short name': 'Samoa américaines (les)',
      'Alpha-2 code': 'AS',
      'Alpha-3 code': 'ASM',
      Numeric: 16,
      Capital: 'Pago Pago',
      Continent: 6
    },
    {
      'English short name': 'Andorra',
      'French short name': 'Andorre (l\')',
      'Alpha-2 code': 'AD',
      'Alpha-3 code': 'AND',
      Numeric: 20,
      Capital: 'Andorre-la-Vieille',
      Continent: 4
    },
    {
      'English short name': 'Angola',
      'French short name': 'Angola (l\')',
      'Alpha-2 code': 'AO',
      'Alpha-3 code': 'AGO',
      Numeric: 24,
      Capital: 'Luanda',
      Continent: 3
    },
    {
      'English short name': 'Anguilla',
      'French short name': 'Anguilla',
      'Alpha-2 code': 'AI',
      'Alpha-3 code': 'AIA',
      Numeric: 660,
      Capital: 'The Valley',
      Continent: 1
    },
    {
      'English short name': 'Antarctica',
      'French short name': 'Antarctique (l\')',
      'Alpha-2 code': 'AQ',
      'Alpha-3 code': 'ATA',
      Numeric: 10,
      Capital: '',
      Continent: 7
    },
    {
      'English short name': 'Antigua and Barbuda',
      'French short name': 'Antigua-et-Barbuda',
      'Alpha-2 code': 'AG',
      'Alpha-3 code': 'ATG',
      Numeric: 28,
      Capital: 'Saint John\'s',
      Continent: 1
    }

  ];


const containerStyle = {
  padding: 40,
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1
};
const menuItemStyle = {
  whiteSpace: 'normal',
  display: 'flex',
  justifyContent: 'space-between',
  lineHeight: 'normal'
};
// const chipAvatarStyle = {
//   width: '100%',
//   height: '100%',
//   margin: 0,
//   borderRadius: '50%',
//   backgroundSize: 'cover'
// };

const displayState = (state) =>
  state && state.length ? [...state].map(({ value, label }) => label || value).join(', ') : 'empty state';

class CodeExample extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            state4: [
                {
                    'English short name': 'American Samoa',
                    'French short name': 'Samoa américaines (les)',
                    'Alpha-2 code': 'AS',
                    'Alpha-3 code': 'ASM',
                    Numeric: 16,
                    Capital: 'Pago Pago',
                    Continent: 6
                  }
              ]
        };
      }

  handleSelection (values, name) {
    this.setState({ [name]: values });
  }

  handleCustomDisplaySelections (name) { (values) =>
    values.length ? (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {values.map(({ label, value: country }, index) => (
          <Chip key={index} style={{ margin: 5 }} onRequestDelete={this.onRequestDelete(index, name)}>
            {label}
          </Chip>
        ))}
      </div>
    ) : (
      <div style={{ minHeight: 42, lineHeight: '42px' }}>Select some values</div>
    ); // advice: use one of <option>s' default height as min-height
  }
  onRequestDelete (key, name) { () => {
    this.setState({ [name]: this.state[name].filter((v, i) => i !== key) });
  };
  }
  render () {
    const { state4 } = this.state;
    console.debug('state4', state4); // eslint-disable-line no-console

    const countriesNodeList = continents.map((continent, continentIndex) => (
      <optgroup key={continentIndex} label={continent}>
        {countries
          .sort((a, b) => b.Continent - a.Continent)
          .filter((c) => continents[c.Continent] === continent)
          .map((country, index) => {

            const countryLabel = country['English short name'];

            return (
              <div key={index} value={country} label={countryLabel} style={menuItemStyle}>
                <div style={{ marginRight: 10 }}>
                  <span style={{ fontWeight: 'bold' }}>{countryLabel}</span>
                  <br />
                  <span style={{ fontSize: 12 }}>{country.Capital}</span>
                </div>
              </div>
            );
          })}
      </optgroup>
    ));

    return (
      <section style={containerStyle}>
        <fieldset style={{ marginBottom: 40 }}>
          <legend>Selected values</legend>
          <div>State 4: {displayState(state4)}</div>
        </fieldset>

        <SuperSelectField
          name='state4'
          multiple
          keepSearchOnSelect
          withResetSelectAllButtons
          checkPosition='left'
          hintText='Complex example'
          onChange={this.handleSelection}
          value={state4}
          elementHeight={58}
          selectionsRenderer={this.handleCustomDisplaySelections('state4')}
          style={{ width: 300, marginTop: 20 }}
        >
          {countriesNodeList}
        </SuperSelectField>
      </section>
    );
  }
}

export default CodeExample;