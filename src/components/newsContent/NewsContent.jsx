import { Container } from '@mui/material'
import './newsContent.css'
import React from 'react'
import NewsCard from '../newsCard/NewsCard'

const NewsContent = ({ newsArray, newsResult, loadMore, setLoadMore }) => {
    return (
        <Container maxWidth="md">
            <div className="content">
                <div className="downloadmessage">
                    <span className="downloadText">For the best experience use inshorts app on your smartphone</span>
                    <img
                        style={{ cursor: "pointer" }}
                        src="https://assets.inshorts.com/website_assets/images/appstore.png"
                        height='80%'
                        alt="logo" />
                    <img
                        style={{ cursor: "pointer" }}
                        src="https://assets.inshorts.com/website_assets/images/playstore.png"
                        height='80%'
                        alt="logo" />
                </div>

                {/* First this */}
                {newsArray.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title} />
                ))}

                {loadMore <= newsResult && (
                    <>
                        <hr />
                        <button
                            className="loadMore"
                            onClick={() => setLoadMore(loadMore + 20)}
                        >
                            Load More
                        </button>
                    </>
                )}


            </div>
        </Container>
    )
}

export default NewsContent