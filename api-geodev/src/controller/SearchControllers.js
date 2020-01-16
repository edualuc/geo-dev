const Devs = require('../models/Dev')

module.exports = {
    async index(req, res) {
        const { techs, longitude, latitude } = req.query;

        const devsOutput = await Devs.find({
            techs: {
                $in: techs
            },
            location: { 
                $near: {
                    $geometric: { 
                        type: 'Point',
                        coordenates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        return res.json(devsOutput);
    }
}