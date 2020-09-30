import React, { Component } from 'react'
import Navigation from './components/navigation';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Clients from './components/clients';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Clients data={this.state.landingPageData.Testimonials} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
