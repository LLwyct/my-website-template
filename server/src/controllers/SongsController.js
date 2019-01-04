// 从db中拿出名为User的sequelize.Songs
const { Song } = require('../models')
const config = require('../config/config')

module.exports = {
    async index (req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
        } catch (error) {
            res.status(500).send({
                error: '在寻找歌曲时发生了一些错误'
            })
        }
    },
    async post (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch (error) {
            res.status(500).send({
                error: '在创建歌曲时发生了一些错误'
            })
        }
    }
}