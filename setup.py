from setuptools import setup

exec (open('dash_select_material/version.py').read())

setup(
    name='dash_select_material',
    version=__version__,
    author='ssword',
    packages=['dash_select_material'],
    include_package_data=True,
    license='MIT',
    description='A selects component for plotly dash with material theme',
    install_requires=[]
)
