/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.dev.config.js';

const isDeveloping = "dev" !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

var fs;

app.use(express.static(__dirname + '/dist'));

if (isDeveloping) {
    const compiler = webpack(config);

    var mdlwr = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(mdlwr);

    fs = mdlwr.fileSystem;

    app.use(webpackHotMiddleware(compiler));
}

app.get('*', function response(req, res) {
    console.log('new path request received!!! ', req.path, req.uri);
    var filePath = path.join(__dirname, 'dist/index.html');
    var content = fs.readFileSync(filePath);
    res.end(content);
    //res.sendFile(path.join(__dirname, 'dist/index.html'));

});

app.listen(port, 'localhost', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
