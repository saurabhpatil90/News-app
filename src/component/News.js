import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const capitalized = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalresults] = useState(0);

document.title = `Newsapp-${capitalized(props.category)}`;

const updatePage = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c7d840e4e1cd41f68e915c315e2f553e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalresults(parseData.totalResults);
    setLoading(false);

    props.setProgress(100);
}
useEffect(() => {
    updatePage();
},[]);
const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c7d840e4e1cd41f68e915c315e2f553e&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalresults(parseData.totalResults);
};
return (
    <>

        <h2 className='text-center' style={{marginTop: '67px'}}> Top Headlines From {props.category}</h2 >
        {/* {loading && <Spinner/>} */}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length <= totalResults}
            loader={<Spinner />}
        >
            <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem title={element.title ? element.title: ""} description={element.description ? element.description: ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll >
    </>
)
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 15,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News