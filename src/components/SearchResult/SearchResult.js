import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import { basicData } from '../../helper/AuthAPI'
import VideoCard from '../VideoCard/VideoCard'
import './SearchResult.scss'

const SUCCESFUL = 200

class searchResult extends Component {
  state = {
    videos: null
  }

  componentDidMount = () => {
    const { favoriteList } = this.props
    if (favoriteList) {
      this.setState({ videos: JSON.parse(localStorage.getItem('favList')) })
    }
    else {
      const { match: { params } } = this.props
      this.fetchQuery(params.query)
    }
  }

  fetchQuery = async query => {
    const response = await basicData.get('/search', {
      params: {
        q: query,
        type: "video",
        maxResults: 20
      }
    })

    if (response.status === SUCCESFUL) {
      this.setState({ videos: response.data.items })
    }
  }

  render() {
    const { videos } = this.state
    const { favoriteList } = this.props
    let query = " "
    if (!favoriteList) {
      query = this.props.match.params.query
    }
    let searchResult = null

    if (videos) {
      searchResult = videos.map(item => {
        return <VideoCard key={item.id.videoId} video={item} query={query} favList={favoriteList} />
      })
    }
    return (
      <Layout searchInitialValue={query}>
        <div className="search-Result__list">
          {searchResult}
        </div>
      </Layout>
    )
  }

}

export default searchResult