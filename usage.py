import dash_select_material
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    dash_select_material.CodeExample()
])


if __name__ == '__main__':
    app.run_server(debug=True)
