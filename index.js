module.exports = () => {
    return poi => {
        poi.extendWebpack(config => {
            config.module.rule('js')
            .use('babel-loader')
            .tap(options => {
                if(options.babelrc === false) {
                    options.presets = []
                }
                return poi.merge(options, {
                    presets: [require.resolve('babel-preset-env')],
                    plugins: [
                        require.resolve('babel-plugin-transform-decorators-legacy'),
                        require.resolve('babel-plugin-transform-class-properties')
                    ]
                })
            })
        })
    }
}