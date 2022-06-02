// const express = require('express')
import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// listen : 접속을 기다림.
// 종료하지 않는 이상 24시간 켜짐
app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
  })