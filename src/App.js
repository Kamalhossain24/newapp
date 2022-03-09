import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import NewsContent from './components/newsContent/NewsContent';

import axios from 'axios';

import Footer from './components/footer/Footer';
function App() {
    const [category, setCategory]=useState("general")
    const [newsArray, setNewsArrayy]=useState([])
    const [newsResult, setNewsResult]=useState();
    const [loadMore, setLoadMore] = useState(20);

    console.log(process.env);
const newsApi=async()=>{
    try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
       const news =await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`)
       setNewsArrayy(news.data.articles);
       setNewsResult(news.data.totalResults);
    } catch (error) {
        console.log(error);
    }
}
//console.log(newsArray);
useEffect(()=>{
    newsApi();
   // eslint-disable-next-line
},[newsResult, category, loadMore])

    return (<div className="App">
<Navbar setCategory={setCategory}/>
<NewsContent newsArray={newsArray} setLoadMore={setLoadMore} loadMore={loadMore} newsResult={newsResult}/>
<Footer/>
    </div>
    );
}

export default App;