import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import { basicData } from '../../helper/AuthAPI/AuthAPI'
import VideoCard from '../VideoCard/VideoCard'
import './SearchResult.scss'

const SUCCESFUL = 200

class searchResult extends Component {
  state = {
    videos: null
  }

  componentDidMount = () => {
    const { match: { params } } = this.props

    this.fetchQuery(params.query)
    this.setState({
      videos: null
    })
  }

  fetchQuery = async query => {
    const response = await basicData.get('/search', {
      params: {
        q: query
      }
    })

    if (response.status === SUCCESFUL) {
      this.setState({ videos: response.data.items })
    }
  }

  render() {
    const { videos } = this.state
    const { match: { params } } = this.props
    let searchResult = null

    if (videos) {
      searchResult = videos.map(item => {
        return <VideoCard key={item.id.videoId} video={item} query={params.query} />
      })
    }
    return (
      <Layout searchInitialValue={params.query}>
        <div className="search-Result__list">
          {searchResult}
        </div>
      </Layout>
    )
  }

}

export default searchResult