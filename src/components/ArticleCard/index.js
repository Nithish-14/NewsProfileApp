import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import './index.css'

const ArticleCard = ({article, darkMode}) => (
    <li className="article-card">
        <div className="author-container p-2 container w-100 d-flex flex-row justify-content-between align-items-center">
           <p className={`author-name-para ${!darkMode ? "light-mode-article-para" : ""}`}>{article.author}</p>
           <BsThreeDotsVertical color={darkMode ? "#a0aca8" : "#000000"} size={18} />
        </div>
        <img src={article.image_url} alt="article" className="article-image" />
        <p className={`article-published-date-para ${!darkMode ? "light-mode-article-para" : ""}`}>{article.published_date}</p>
        <h1 className={`article-title ${!darkMode ? "light-mode-article-para" : ""}`}>{article.title}</h1>
        <p className={`article-content ${!darkMode ? "light-mode-article-para" : ""}`}>{article.content}</p>
    </li>
);

export default ArticleCard