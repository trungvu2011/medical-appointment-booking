import newsServices from '../services/newsServices.js';

let handleGetAllNews = async (req, res) => {
    let data = await newsServices.getAllNews();
    return res.status(200).json(data);
}

let handleGetNewsById = async (req, res) => {
    let newsId = req.query.id;
    if (!newsId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing required parameter!',
        });
    }

    let data = await newsServices.getNewsById(newsId);
    return res.status(200).json(data);
}

module.exports = {
    handleGetAllNews: handleGetAllNews,
    handleGetNewsById: handleGetNewsById
};