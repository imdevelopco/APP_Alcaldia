const path = require('path');

module.exports =  {
    entry: './src/app/Index.js',
    output: {
        path: __dirname+ '/src/public',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test: /\.(jsx|js)$/,
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                exclude: /node_modules/
            }
            
        ]
    }
}