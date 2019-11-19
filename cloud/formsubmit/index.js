// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async(event, context) => {
  try {
    return await db.collection('groupdata').add({
        data: {
          time: event.time,
          home_county: event.home_county,
          group_name: event.group_name,
          contact_name: event.contact_name,
          msisdn: event.msisdn,
          product_name: event.product_name,
          word: event.word,
          // fileIDs: event.fileIDs
        }
      })
  } catch (e) {
    console.error(e)
  }
}