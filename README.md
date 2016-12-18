[![CircleCI](https://circleci.com/gh/Jwata/serverless-sample.svg?style=svg)](https://circleci.com/gh/Jwata/serverless-sample)
Serverless Translate API
===========
You can build & deploy your own translation API instantly

# Technical stack
* Infrastrucute / Deployment
  * AWS lambda function & API Gateway
  * [Serverless](https://github.com/serverless/serverless)
* Translate API
  * [Microsoft Translator API](https://www.microsoft.com/en-us/translator/translatorapi.aspx)


# Setup project
1. Install dependencies  
  ```
  npm install
  ```

2. [Get your API key] (https://www.microsoft.com/en-us/translator/getstarted.aspx)

3. Configure your API Key  
  ```
  cp .env.example .env
  ```  
  See also [.env.example](./.env.example)  


# Test functions
```
$(npm bin)/serverless invoke local --function translateText --path event/translate.yml
{
    "responseCode": 200,
    "body": "{\"text\":\"おはようございます。今日の MTG を支払い機能について話をしているしたいと思います。\"}"
}

$(npm bin)/serverless invoke local --function translateKeywords --path event/translate.yml
{
    "responseCode": 200,
    "body": "{\"keywords\":{\"good\":\"良い\",\"morning\":\"朝\",\"mtg\":\"mtg\",\"today\":\"今日\",\"talk\":\"話\",\"payment\":\"お支払い\",\"feature\":\"機能\"}}"
}
```

# Run API server locally
```
$(npm bin)/serverless webpack serve
Serverless: Serving functions...
  POST - http://localhost:8000/translate/text
  POST - http://localhost:8000/translate/keywords

curl -XPOST \
-H "Accept: application/json" \
-H "Content-type: application/json" \
-d "{\"text\": \"I'm so happy\", \"to\": \"ja\"}" \
 http://localhost:8000/translate/text
{"responseCode":200,"body":"{\"text\":\"とても嬉しいです\"}"}
```

# Deploy
```
$(npm bin)/serverless deploy --profile your_aws_profile
```
It also deploy the master branch automatically with [CircleCI](./circle.yml)
 
