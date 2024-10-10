const { adams } = require('../Ibrahim/adams');
const traduire = require("../Ibrahim/traduction") ;
const { default: axios } = require('axios');
const pkg = require('@whiskeysockets/baileys');
const { generateWAMessageFromContent, proto } = pkg;
king({ nomCom: "gp", reaction: "📡", categorie: "AI" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

 /* try {
    if (!arg || arg.length === 0) {
      return repondre('Please ask a question.');
    }

    const query = encodeURIComponent(arg.join(' '));
    const apiUrl = `https://samirxpikachuio.onrender.com/gpt?content=${query}`;
    const response = await axios.get(apiUrl);
    const result = response.data;

    if (result && result.message && result.message.content) {
      const answer = result.message.content;

      // Check if the answer contains code
      const codeMatch = answer.match(/```([\s\S]*?)```/);*/
      const buttons = [
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "FOLLOW 🤍 CHANNEL",
            url: `https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P`
          })
        }
      ];

      if (codeMatch) {
        const code = codeMatch[1];

        buttons.unshift({
          name: "cta_copy",
          buttonParamsJson: JSON.stringify({
            display_text: "📋 COPY RESULTS",
            id: "copy_code",
            copy_code: code
          })
        });
      }

      const msg = generateWAMessageFromContent(dest, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: answer
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: "> *POWERED BY FLASH-MD*"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: "",
                subtitle: "",
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: buttons
              })
            })
          }
        }
      }, {});

      await zk.relayMessage(dest, msg.message, {
        messageId: msg.key.id
      });
    } else {
      throw new Error('Invalid response format from the GPT API.');
    }
  } catch (error) {
    console.error('Error getting GPT response:', error.message, error.response?.data || 'No additional data');
    repondre('Error getting response from GPT.');
  }
});
