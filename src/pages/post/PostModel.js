import { v4 as uuidv4 } from 'uuid'

class PostModel {
  constructor() {
    this.id = uuidv4()
    this.date = new Date()
    this.user = ''
    this.title = ''
    this.body = ''
  }
}

export default PostModel
