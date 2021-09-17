module.exports = {
  name: 'Send Message',
  section: 'Messaging',

  subtitle (data) {
    const channels = ['Same Channel', 'Command Author', 'Mentioned User', 'Mentioned Channel', 'Default Channel (Top Channel)', 'Temp Variable', 'Server Variable', 'Global Variable']
    return `${channels[parseInt(data.channel)]}: "${data.message.replace(/[\n\r]+/, '')}"`
  },

  variableStorage (data, varType) {
    const type = parseInt(data.storage)
    if (type !== varType) return
    return ([data.varName2, 'Message'])
  },

  fields: ['channel', 'varName', 'message', 'storage', 'varName2', 'iffalse', 'iffalseVal', 'reply'],

  html (isEvent, data) {
    return `
<div style="width: 100%; height: 100%; overflow-y: auto;">
  <div>
  <div style="float: left; width: 35%;">
    Send To:<br>
    <select id="channel" class="round" onchange="glob.sendTargetChange(this, 'varNameContainer')">
      ${data.sendTargets[isEvent ? 1 : 0]}
    </select>
  </div>
  <div id="varNameContainer" style="display: none; float: right; width: 60%;">
    Variable Name:<br>
    <input id="varName" class="round" type="text" list="variableList"><br>
  </div>
</div><br><br><br>
  
  <div style="padding-top: 8px;">
    Message:<br>
    <textarea id="message" rows="5" placeholder="Insert message here..." style="width: 99%; font-family: monospace; white-space: nowrap;"></textarea>
  </div>
  <div>
    <div style="float: left; width: 35%;">
      Store In:<br>
      <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer2')">
        ${data.variables[0]}
      </select>
    </div>
    <div id="varNameContainer2" style="display: none; float: right; width: 60%;">
      Variable Name:<br>
      <input id="varName2" class="round" type="text">
    </div>
  </div><br><br><br>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 35%;">
      If Message Delivery Fails:<br>
      <select id="iffalse" class="round" onchange="glob.onChangeFalse(this)">
        <option value="0" selected>Continue Actions</option>
        <option value="1">Stop Action Sequence</option>
        <option value="2">Jump To Action</option>
        <option value="3">Skip Next Actions</option>
        <option value="4">Jump To Anchor</option>
      </select>
    </div>
    <div id="iffalseContainer" style="display: none; float: right; width: 60%;">
      <span id="iffalseName">Action Number</span>:<br>
      <input id="iffalseVal" class="round" type="text">
    </div><br><br><br>
    <div>
  <div style="width: 37%; padding-right: 10px">
    Inline Reply:<br>
    <select id="reply" class="round" style="width: 100%;">
      <option value="1">Enabled</option>
      <option value="0" selected>Disabled</option>
    </select>
  </div>
</div>
  </div>
</div><br>`
  },

  init () {
    const { glob, document } = this

    glob.onChangeFalse = function (event) {
      switch (parseInt(event.value)) {
        case 0:
        case 1:
          document.getElementById('iffalseContainer').style.display = 'none'
          break
        case 2:
          document.getElementById('iffalseName').innerHTML = 'Action Number'
          document.getElementById('iffalseContainer').style.display = null
          break
        case 3:
          document.getElementById('iffalseName').innerHTML = 'Number of Actions to Skip'
          document.getElementById('iffalseContainer').style.display = null
          break
        case 4:
          document.getElementById('iffalseName').innerHTML = 'Anchor ID'
          document.getElementById('iffalseContainer').style.display = null
          break
      }
    }
    glob.sendTargetChange(document.getElementById('channel'), 'varNameContainer')
    glob.variableChange(document.getElementById('storage'), 'varNameContainer2')
    glob.onChangeFalse(document.getElementById('iffalse'))
  },

  action (cache) {
    const data = cache.actions[cache.index]
    const channel = parseInt(data.channel)
    const varName = this.evalMessage(data.varName, cache)
    const target = this.getSendTarget(channel, varName, cache)
    const targetq = cache.msg
    const inlinereply = parseInt(data.reply)
    const { message } = data
    if (!cache.msg.client.quotevent) {
      const { APIMessage, Message } = require("discord.js");

Message.prototype.quote = async function (content, options) {
  const reference = {
    message_id: (
      !!content && !options
        ? typeof content === 'object' && content.messageID
        : options && options.messageID
    ) || this.id,
    message_channel: this.channel.id
  }

  const { data: parsed, files } = await APIMessage
    .create(this, content, options)
    .resolveData()
    .resolveFiles()

  let msg = await this.client.api.channels[this.channel.id].messages.post({
    data: { ...parsed, message_reference: reference },
    files
  })

  await this.channel.messages.fetch(msg.id)
            .then(message => msg = message)
            .catch((err) => {
                console.log(err.stack)
            });
  cache.msg.client.quotevent = true
  return msg
};




/// Action:
if (!target || !message) return

    }

    if (inlinereply) {
      let originaltarget
      if(target.content) {
        originaltarget = target
      } else {
        originaltarget = targetq
      }

      originaltarget.quote(this.evalMessage(message, cache))
        .then((msg) => {
          const varName2 = this.evalMessage(data.varName2, cache)
          const storage = parseInt(data.storage)
          this.storeValue(msg, storage, varName2, cache)
          this.callNextAction(cache)
        })
        .catch((err) => {
          if (err.message === 'Cannot send messages to this user') {
            this.executeResults(false, data, cache)
          } else {
            this.displayError.bind(this, data, cache)
          }
        })




    } else {


      target.send(this.evalMessage(message, cache))
        .then((msg) => {
          const varName2 = this.evalMessage(data.varName2, cache)
          const storage = parseInt(data.storage)
          this.storeValue(msg, storage, varName2, cache)
          this.callNextAction(cache)
        })
        .catch((err) => {
          if (err.message === 'Cannot send inline reply:') {
            this.executeResults(false, data, cache)
          } else {
            this.displayError.bind(this, data, cache)
          }
        })





      }



  },

  mod () {}
}
