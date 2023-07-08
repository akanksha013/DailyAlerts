import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

  static defaultProps = {
    pageSize: 15,
    category: "general"
  }

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalize(this.props.category)} - DailyAlerts`
  }

  async update() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=edc90a56436a40edb314fd4f87e1ec1f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.update()
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.update()
  }

  fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=edc90a56436a40edb314fd4f87e1ec1f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.update()
  }

  render() {
    return (
      <div className='container my-4'>
        <h2 className='text-center' style={{ margin: '35px 0px', marginTop: '80px' }}>DailyAlerts - Top {this.capitalize(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
        >
          <div className="container">
            <div className="row my-2">
              {this.state.articles && this.state.articles.map((e) => {
                return <div className="col-md-4" key={e.url}>
                  <NewsItems title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} newsSource={e.source.name} />
                </div>
              })}

            </div>
            </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-secondary" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}

export default News
