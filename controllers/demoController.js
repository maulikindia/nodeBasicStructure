

module.exports = function getData(req, res) {

    return res.json({ status: true, data: 'Basic api' });

};

module.exports = function getSomeArray(req, res) {
    return res.json({ status: true, data: ["maulik", "parag"] });

}




