const axios = require('axios');
const Dev = require('../models/Dev');
const mongoose = require('mongoose')

module.exports = {
    // listar
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },

    // mostra um especifico
    async show(req, res) {
        const devs = await Dev.find({id});

        console.log(req);
        
        return res.json(devs);
    },

    // criar um novo
    async store(req, res) {
        const { github_username, techs, longitude, latitude } = req.body

        let dev = Dev.findOne({ github_username });

        if (!dev) {
            // trata dados
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const {name = login, avatar_url, bio} = apiResponse.data

            // grava banco
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio, 
                techs,
                location: {
                    type: 'Point',
                    coordenate: [longitude, latitude]
                }
            });

            // trata saida
        }
        
        return res.json(dev);
    },
    
    // atualizar um registro
    async update(req, res) {
        console.log(req);
        
        return res.json({});
    },

    // apagar um registro
    async destroy(req, res) {
        console.log(req);
        
        return res.json({});
    }
}