import React, { useState, useEffect } from 'react';
import './News.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function News() {
    const navigate = useNavigate();
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        axios.get('/api/get-all-news')
            .then(res => {
                setNewsList(res.data);
            })
            .catch(err => {
                console.log(err);
            });


    }, []);

    let renderNews = newsList.map((news, index) => {
        return (
            <div key={index} className="news">
                <div className="news-image">
                    <img src={news.imgUrl} alt="news" />
                </div>
                <div className="news-content">
                    <h3
                        onClick={() => navigate(`/news/${news.id}`)}
                    >{news.title}</h3>
                    <p className="news-date">
                        {new Date(news.date).toLocaleString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: false
                        }).replace(',', '')}
                    </p>
                    <p>{news.content}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="news-container">
            <div className="news-list">
                {renderNews}
            </div>
        </div>
    );
}

export default News;
