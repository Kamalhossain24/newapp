import React from 'react'
import './newscard.css'
import { Link } from 'react-router-dom'
const NewsCard = ({ newsItem }) => {
  console.log(newsItem);

const fulldate=new Date (newsItem.publishedAt);
var date =fulldate.toString().split(" ");
const hour=parseInt(date[4].substring(0,2));
const time = hour>12?true:false
  return (
    <div className='newsCard'>
      <img className='newsImage'
        src={newsItem.urlToImage ? newsItem.urlToImage :
          'https://www.indexdirect.ie/images/ownproducts/rp031b.jpg'}
        alt={newsItem.title} />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span> <br />
          <span className="author"><a className="" target='_blank' href={newsItem.url}><b>Short By </b></a>{" "}
            <span className="muted">{newsItem.athor ? newsItem.athor : 'Unknown'} /{" "}
            {
              time?`${hour-12}:${date[4].substring(3,5)} pm`
              :`${hour}:${date[4].substring(3,5)} am`
            }
           {" "}  on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>

          <div className="lowerNewsText ">
            <div className="description">{newsItem.description}</div>
            <span className="readmore">Read More At{" "} <a href={newsItem.url} target="__blank" className="source"><b>{newsItem.source.name}</b></a></span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewsCard