import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,Routes,Route
} from "react-router-dom"


export default class App extends Component {
  page = 15;
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={this.page} category="general" />} />
          <Route exact path='/business' element={<News key="business" pageSize={this.page} category="business" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.page} category="entertainment" />} />
          <Route exact path='/health' element={<News key="health" pageSize={this.page} category="health" />} />
          <Route exact path='/science' element={<News key="science" pageSize={this.page} category="science" />} />
          <Route exact path='/sports' element={<News key="sports" pageSize={this.page} category="sports" />} />
          <Route exact path='/technology' element={<News key="technology" pageSize={this.page} category="technology" />} />
          <Route exact path='/food' element={<News key="food" pageSize={this.page} category="food" />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
