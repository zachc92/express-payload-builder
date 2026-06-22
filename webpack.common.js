 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: "./src/index.html",
       minify: {
        removeRedundantAttributes: false,
        collapseWhitespace: true, // Optional: keeps code light for prod
        removeComments: true      // Optional: strips dev notes for prod
      }
     }),
   ],
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
   }
 };