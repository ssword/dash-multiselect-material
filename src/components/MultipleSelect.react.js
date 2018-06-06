import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SuperSelectField from 'material-ui-superselectfield';
import PropTypes from 'prop-types';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const containerStyle = {
  padding: 40,
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1
};



export default class MultiSelect extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: props.value
      };
      this.handleSelect = this.handleSelect.bind(this);

  }

  componentWillReceiveProps(newProps) {
    this.setState({value: newProps.value});
  }

  handleChipDelete(key){
    this.setState({
      value: this.state['value'].filter(person => person.value!==key)
    })
    }
  handleSelect = (selectedValues, name) => {
    console.log(selectedValues)
    console.log(name)
    this.setState({
      value: selectedValues
    });
  }


  render() {
    const {id, floatingLabel, checkPosition, name,
       options, style, elementHeight} = this.props;
    const {value} = this.state;
    return (
      <MuiThemeProvider>
      <section style={containerStyle}>
        <div id = {id}>
          <SuperSelectField
            name = {name}
            multiple
            keepSearchOnSelect
            withResetSelectAllButtons
            checkPosition={checkPosition}
            floatingLabel={floatingLabel}
            onSelect = { this.handleSelect
            }
            value={value}
            elementHeight={elementHeight}
            selectionsRenderer = { values => {
              <div
              style = {styles.wrapper}
              >
                {
                  values.map(({ label, value}) => (
                    <Chip
                      key = {value}
                      label = {value}
                      style = {styles.chip}
                      onRequestDelete = {this.handleChipDelete(value)}
                      >
                      {value} {label}
                    </Chip>
                  ))
                }
                </div>}}
            stlye={style}
          >
            {
              options.map((name) => (
              <MenuItem
                key={name}
                checked={value && value.indexOf(name) > -1}
                value={name}
                primaryText={name}
              />
            ))}
          </SuperSelectField>
        </div>
      </section>
      </MuiThemeProvider>
    );
  }
}

MultiSelect.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.arrayOf(PropTypes.string),
  floatingLabel: PropTypes.string,
  checkPosition: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  elementHeight: PropTypes.number
}

MultiSelect.defaultProps = {
  style: {width: 300, marginTop: 20},
  checkPosition: 'left',
  options: ['a', 'b'],
  value: [],
  elementHeight: 58
}