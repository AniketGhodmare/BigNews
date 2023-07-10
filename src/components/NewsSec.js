import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsSec = (props) => {
  const [articles, setArticles] = useState([])
  const [totalNews, settotalNews] = useState([0])
  const [isLoading, setIsLoading] = useState(true);
  const [page, setpage] = useState([1])

  const CapitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updatePage = async () => {
    props.progress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setIsLoading(true)
    let data = await fetch(url)
    props.progress(30);
    let news = await data.json()
    props.progress(60);
    setArticles(news.articles)
    settotalNews(news.totalResults)
    setIsLoading(false)
    props.progress(100);
  }

  useEffect(() => {
    document.title = `Today's News - ${CapitalizeString(props.category)}`
    updatePage();
  }, []);

  const fetchMoreData = async () => {
    setIsLoading(false)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    let data = await fetch(url)
    let news = await data.json()
    setArticles(articles.concat(news.articles))
    setpage(page + 1)
  };

  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center" style={{ padding: "30px 0px" }}>
          Today's Top {CapitalizeString(props.category === "general" ? "" : (props.category))} News-From  {props.country}
        </h1>
        {isLoading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalNews}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {articles.map((element) => {
                return <div className="col" key={element.url}>
                  <NewsItem title={element?.title ? element?.title.slice(0, 85) : ""} description={element?.description ? element?.description.slice(0, 100) : ""} imgUrl={element.urlToImage} newsurl={element?.url} date={element?.publishedAt.slice(0, 10)} author={element?.author} source={element?.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  )
}

NewsSec.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 12,

}

NewsSec.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
}
export default NewsSec

