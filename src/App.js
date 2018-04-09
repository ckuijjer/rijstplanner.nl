import React, { Component } from 'react'
import ReactGA from 'react-ga'
import styled from 'react-emotion'
import logo from './logo.svg'

ReactGA.initialize('UA-116670523-1')
ReactGA.pageview('/')

const Page = styled('div')({
  backgroundColor: '#e6e6e9',
  minHeight: '100vh',
})

const Header = styled('header')({
  backgroundColor: '#fff',
  boxShadow: '0 0.125rem 0 0 rgba(7,7,33,.15)',
  color: '#003082',
})

const HeaderContent = styled('div')({
  height: '3.75rem',
  maxWidth: '75rem',
  marginLeft: '3rem',
  marginRight: '3rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  display: 'flex',
  alignItems: 'center',
})

const Content = styled('div')({
  maxWidth: '75rem',
  margin: '0 auto',
  padding: '1rem 2rem', // todo: why does this lead to a larger than 100vh page
})

const Search = styled('div')({
  backgroundColor: '#ffc917',
  padding: '2rem',
  marginBottom: '3rem',
})

const Results = styled('div')({
  display: 'flex',
})

const NavigationList = styled('div')({
  marginRight: '2rem',
  width: '40%',
})

const NavigationItem = styled('div')({
  backgroundColor: '#fff',
  padding: '1rem',
  boxShadow: '0 0.125rem 0 0 rgba(7,7,33,.15)',
  marginBottom: '0.5rem',

  background:
    '#fff, url(data:image/svg+xml;charset%3DUS-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2235px%22%20height%3D%2235px%22%20viewBox%3D%220%200%2035%2035%22%20enable-background%3D%22new%200%200%2035%2035%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cpolygon%20points%3D%2220.2%2C17.5%2014.7%2C23%2016.3%2C23%2021.8%2C17.5%2016.3%2C12%2014.7%2C12%20%20%22%2F%3E%3C%2Fg%3E%3Cstyle%20type%3D%22text%2Fcss%22%3Ecircle%2C%20ellipse%2C%20line%2C%20path%2C%20polygon%2C%20polyline%2C%20rect%2C%20text%20%7B%20fill%3A%20%230079d3%3B%20%7D%3C%2Fstyle%3E%3C%2Fsvg%3E)',
})

const Details = styled('div')({
  backgroundColor: '#fff',
  padding: '1.75rem',
  flex: 1,
})

const App = () => (
  <Page>
    <Header>
      <HeaderContent>
        <img src={logo} style={{ marginRight: '2rem' }} />
        Rijstplanner
      </HeaderContent>
    </Header>
    <Content>
      <Search />
      <Results>
        <NavigationList>
          <NavigationItem>Recept</NavigationItem>
        </NavigationList>
        <Details>Kook de rijst deze zoals op de verpakking staat</Details>
      </Results>
    </Content>
  </Page>
)

export default App
