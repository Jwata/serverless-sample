[![CircleCI](https://circleci.com/gh/Jwata/serverless-sample.svg?style=svg)](https://circleci.com/gh/Jwata/serverless-sample)
# Setup project
```
npm install
```

# Run API locally
```
$(npm bin)/serverless webpack serve
curl localhost:8000/hello/world
# {"statusCode":200,"body":"{\"token\":\"world\"}"}
```

# Deploy
```
$(npm bin)/serverless deploy --profile your_aws_profile
```

# CI
It deploys the master branch automatically with [CircleCI](./circle.yml)

