import React, { useState, useEffect } from 'react';
import './NewsDetail.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewsDetail() {
    const navigate = useNavigate();
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNewsDetail = async () => {
            try {
                const newsId = window.location.pathname.split('/').pop();
                const response = await axios.get(`/api/get-news-by-id`, {
                    params: {
                        id: newsId,
                    },
                });
                setNews(response.data);
                console.log('News detail:', response.data);
            } catch (error) {
                console.error('Error fetching news detail:', error);
            }
        };

        fetchNewsDetail();
    }, []);

    const formatContent = (content, id) => {
        if (id === 0) {
            return content && content.split('\n').slice(0, 1).map((item, key) => {
                return <span key={key}>{item}<br /></span>;
            });
        } else {
            return content && content.split('\n').slice(1).map((item, key) => {
                return <span key={key}>{item}<br /></span>;
            });
        }
    };


    return (
        <div className="news">
            <div className="news-detail">
                <h1>{news.title}</h1>
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
                <p className='first-content'>{formatContent(news.content, 0)}</p>
                <img src={news.imgUrl} alt={news.title} />
                <p>{formatContent(news.content, 1)}</p>
            </div>
            <button onClick={() => navigate('/news')}>Quay lại</button>
        </div>
    );
}

export default NewsDetail;
