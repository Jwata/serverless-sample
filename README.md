[![CircleCI](https://circleci.com/gh/Jwata/serverless-sample.svg?style=svg)](https://circleci.com/gh/Jwata/serverless-sample)
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
```

# Run API server locally
```
$(npm bin)/serverless webpack serve
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

# CI
It deploys the master branch automatically with [CircleCI](./circle.yml)

