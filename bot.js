 const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', message => {//help msg
 var prefix = "+";
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
      message.react("☑")            

   


      message.author.sendMessage(`**شكرا لك لاستعمال البوت**

      __**الاوامر الادارية :gear:**__

❖${prefix}** bc ** ==>**لارسال رسالة لكل الاعضاء**
❖${prefix}** channels ** ==>**لانشاء روم صوتي او كتابي او حافضة**
❖${prefix}** kick ** ==>**لطرد شخص من السيرفر**
❖${prefix}** band ** ==>**لحصر شخص من السيرفر**
❖${prefix}** mute ** ==>**لاسكات عضو في السيرفر**
❖${prefix}** unmute ** ==>**لفك الاسكات عن عضو في السيرفر**
❖${prefix}** clear ** ==>**لمسح كل رسائل الشات**
      __**الاوامر العامة :coffee:**__
❖${prefix}** avatar ** ==>**لكي يعطيك رابط صورتك او صورة صديقك**
❖${prefix}** serveravatar ** ==>**لكي يعطيك رابط صورة السيرفر**
❖${prefix}** server ** ==>**لمعلومات السيرفر**
❖${prefix}** id ** ==>**لمعلومات عنك**
❖${prefix}** ping ** ==>**للتحقق من سرعة الاتصال**
❖${prefix}** bot ** ==>**معلومات عن البوت**
❖${prefix}** invite ** ==>**لاحضار البوت الى سيرفرك**
❖${prefix}** time ** ==>**لرؤية الوقت**
❖${prefix}** color ** ==>**لتغيير لونك**
❖${prefix}** roles ** ==>**لكي ترى كل رتب السيرفر**
❖${prefix}** rooms ** ==>**لكي ترى كل قنوات السيرفر**
❖${prefix}** date ** ==>**لكي ترى التاريخ**
      __**الاوامر الترفيهية :coffee:**__
❖${prefix}** mariam ** ==>**للعب مع مريم**
❖${prefix}** cuttweet ** ==>**لكي يعطيك جمل كت تويت عشوائية**
❖${prefix}** sarahah ** ==>**لكي يعطيك جمل صراحة عشوائية**
❖${prefix}** cat ** ==>**لكي ترى صور قطط عشوائية**
By :<@427802430701436928> | __**شكرا لكم لاستعمال البوت**__
}
});
client.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   
  if (message.content === 'ping') {
  }
 
 
  if (message.content.startsWith('+bc')) {
          if (!args[0]) {
message.channel.send("**+bc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);
 
});
  }
 
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("```ضع عدد الرسائل التي تريد مسحها 👌```").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
 client.login(process.env.BOT_TOKEN);

