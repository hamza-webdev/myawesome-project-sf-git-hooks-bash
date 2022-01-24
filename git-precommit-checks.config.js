module.exports = {
    rules: [{
            filter: /\.js$/,
            regex: /(?:FIXME|TODO)/i,
            message: 'Tu as du travaille non encore terminé',
            nonBlocking: true
        },
        {
            filter: /\.js$/,
            regex: /console.log/i,
            message: 'Il ya des console.log dans tes fichiers js',
            nonBlocking: true
        },
        {
            regex: /do not commit/i,
            message: 'tu as du taf qui ne dois pas commité'
        },
        {
            regex: /var_dump/i,
            message: 'tu as du var_dump a enlever'
        }
    ]

};