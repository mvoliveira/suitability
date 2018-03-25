import Api from './Api'

export default{
  sendResponse(conversation) {
    return Api().post('conversation/message', conversation)
  }
}
