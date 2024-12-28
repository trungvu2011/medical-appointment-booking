import db from '../models/index';

let getAllNews = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.News.findAll();
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}

let getNewsById = (newsId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!newsId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!',
                });
            } else {
                let data = await db.News.findOne({
                    where: { id: newsId }
                });
                if (data) {
                    resolve(data);
                } else {
                    resolve({});
                }
            }
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    getAllNews: getAllNews,
    getNewsById: getNewsById
};