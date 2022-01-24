module.exports = {
    rules: [{
            filter: /\.js$/,
            regex: /(?:FIXME|TODO)/i,
            message: 'warning Tu as du travaille non encore terminé',
            nonBlocking: true
        },
        {
            filter: /\.js$/,
            regex: /console.log/i,
            message: '🤫 Oula, aurais-tu oublié des `console.log` inopportuns ?\n Please you can do better than this..🙏🙏🙏',
            nonBlocking: true
        },
        {
            regex: /do not commit/i,
            message: '😨 tu as du taf qui ne dois pas commité'
        },
        {
            regex: /var_dump/i,
            message: '😨 🤔 tu as du var_dump a enlever'
        }
    ]

};