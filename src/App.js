import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter,Routes,Route} from "react-router-dom"


export default class App extends Component {
  page = 15;
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress}  key="general" pageSize={this.page} category="general" />} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={this.page} category="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.page} category="entertainment" />} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={this.page} category="health" />} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={this.page} category="science" />} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={this.page} category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={this.page} category="technology" />} />
          <Route exact path='/food' element={<News setProgress={this.setProgress} key="food" pageSize={this.page} category="food" />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
