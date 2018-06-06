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
  }

  componentWillReceiveProps(newProps) {
    this.setState({values: newProps.value});
  }

  handleChange = (selectedValues, name) =>  {
    console.log(name)
    var clickedNode = selectedValues[selectedValues.length-1]
    var clickedItem = clickedNode !== undefined ? clickedNode.value : null

    this.setState({
      values: selectedValues,
      lastChecked: clickedItem
    });
  }

  renderchips = () => (values) => (
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
      </div>)

  handleChipDelete = (key, name) => (event) => {
    console.log(name)
    console.log(event)
    this.setState({
      values: this.state['values'].filter(person => person.value!==key)})
    };

  menuItems(options) {
    return options.map((name) => (
      <MenuItem
        key={name}
        checked={options && this.state.value.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    const {id, floatingLabel, checkPosition, name, options, style} = this.props;
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
            onSelect={this.handleChange}
            value={value}
            elementHeight={58}
            selectionsRenderer = {this.renderchips()}
            stlye={style}
          >
            {this.menuItems(options)}
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
  style: PropTypes.object
}

MultiSelect.defaultProps = {
  style: {width: 300, marginTop: 20}
  // options: ['a', 'b']
}