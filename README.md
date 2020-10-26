# Invoice App

This is simple ReactJs invoice application which fetches data from dynamoDb using aws lambda functions and aws API gateway.

## Steps to install and run locally

- git clone https://github.com/AshaNarayana/invoice.git
- cd my-app
- yarn install
- npm start



# IGNORE BELOW STEPS

## Pre-requisites

1.  Create dynamoDB in AWS with following details

         - TableName - Invoicetable
         - Add table items as commented in App.js file

2.  Create node.js lambda function fetchDynamoDb, add following code and deploy
    `
             const AWS = require('aws-sdk')
             const client = new AWS.DynamoDB.DocumentClient({region : 'us-east-1'})
             exports.handler = function(event, context,callback){
             let scanningParams = {
             TableName: 'InvoiceTable'
             }
             client.scan(scanningParams,function(err,data){
                 if(err){
                     callback(err,null)
                 }
                 else{
                     callback(null,data.Items)
                 }
               })
             };
          `

3.  Create get method in AWS apiGateway to call lambda function

Application will be hosted in port 3000
