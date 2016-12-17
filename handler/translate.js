require('dotenv').config();
const KeywordExtractor = require('keyword-extractor');
const MsTranslator = require('mstranslator');

const apiKey = process.env.MS_TRANSLATOR_API_KEY;

module.exports.text = (event, context, callback) => {
    const text = event.body.text;
    const to = event.body.to;
    const client = new MsTranslator({api_key: apiKey}, true);
    const params = { text: text, to: to };
    const onSuccess = (translatedText) => {
        const response = {
            responseCode: 200,
            body: JSON.stringify({ text: translatedText })
        };
        callback(null, response);
    };
    const onError = (err, data) => {
        const response = {
            responseCode: 400,
            body: JSON.stringify({ error: data })
        };
        callback(null, response);
    }
    client.translate(params, (err, data) => {
        (err) ? onError(err, data) : onSuccess(data);
    });
};

module.exports.keywords = (event, context, callback) => {
    const text = event.body.text;
    const to = event.body.to;
    const client = new MsTranslator({api_key: apiKey}, true);
    const keywords = KeywordExtractor.extract(text);
    const params = { texts: keywords, to: to };
    const onSuccess = (translatedTexts) => {
        const translatedKeywords = translatedTexts.reduce((acc, translatedText, i) => {
            const keyword = keywords[i];
            acc[keyword] = translatedText.TranslatedText
            return acc;
        }, {})
        const response = {
            responseCode: 200,
            body: JSON.stringify({ keywords: translatedKeywords })
        };
        callback(null, response);
    };
    const onError = (err, data) => {
        const response = {
            responseCode: 400,
            body: JSON.stringify({ error: data })
        };
        callback(null, response);
    }
    client.translateArray(params, (err, data) => {
        (err) ? onError(err, data) : onSuccess(data);
    });
};
