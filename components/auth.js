const router = require('express').Router();
const fs = require('fs');

router.get('/checkauth', async (req, res) => {
    client.getState().then((data) => {
        console.log(data)
        res.send(data)
    }).catch((err) => {
        if (err) {
            res.send("DISCONNECTED")
            try {
                fs.unlinkSync('./session.json')
            } catch(err) {
                console.log(err)
            }
        }
    })
});

router.get('/logout', async (req, res) => {
    client.logout().then(() => {
        try {
            fs.unlinkSync('./session.json')
        } catch(err) {
            console.log(err)
        }
        console.log('Session cerrada');
        res.send('LOGOUT')
    });
});

module.exports = router;