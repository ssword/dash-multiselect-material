import dash_select_material
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

app.layout = html.Div([
    dash_select_material.MultipleSelect(options=names)
])


if __name__ == '__main__':
    app.run_server(debug=True)
