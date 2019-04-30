export default (req, res) => {
    console.log(req.body);

    if (!req.body){
        res.status(400).send('Bad data!');
    }
    else {
        res.status(200).json(req.body);
    }
}
