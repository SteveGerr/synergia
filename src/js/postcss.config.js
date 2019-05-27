// npm i postcss-loader autoprefixer css-mqpacker cssnano --save-dev

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'), // Media Queries packer
        require('cssnano')({ // Conver css files
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true, 
                    }
                }
            ]
        })
    ]
};