const _0x7105f9=_0x15fa;(function(_0x40ef6d,_0x3efe7b){const _0xd9562a=_0x15fa,_0xf4c07f=_0x40ef6d();while(!![]){try{const _0x3ea2b2=-parseInt(_0xd9562a(0x1a0))/0x1+parseInt(_0xd9562a(0x19f))/0x2+parseInt(_0xd9562a(0x197))/0x3*(-parseInt(_0xd9562a(0x199))/0x4)+parseInt(_0xd9562a(0x1a8))/0x5+-parseInt(_0xd9562a(0x1a9))/0x6+-parseInt(_0xd9562a(0x194))/0x7*(-parseInt(_0xd9562a(0x1a4))/0x8)+-parseInt(_0xd9562a(0x196))/0x9*(-parseInt(_0xd9562a(0x195))/0xa);if(_0x3ea2b2===_0x3efe7b)break;else _0xf4c07f['push'](_0xf4c07f['shift']());}catch(_0x427ebe){_0xf4c07f['push'](_0xf4c07f['shift']());}}}(_0x14ed,0xe44d3));function _0x15fa(_0x3b25c0,_0x190d30){const _0x14edc7=_0x14ed();return _0x15fa=function(_0x15faeb,_0x292e72){_0x15faeb=_0x15faeb-0x18f;let _0x17986a=_0x14edc7[_0x15faeb];return _0x17986a;},_0x15fa(_0x3b25c0,_0x190d30);}const {bot}=require(_0x7105f9(0x1a2)),FilterDb=require(_0x7105f9(0x1ad));function _0x14ed(){const _0x251466=['3086275IfLeux','3862308NCpxwK','```\x0a','Adds\x20filter\x20in\x20chat','Deletes\x20a\x20filter','../lib/db/filters','utility','_Set_\x20','dataValues','filter\x20?(.*)','text','\x20_to\x20filter\x20✅_','match','7510286qhTbnY','9880QHbkKz','26181aqqRNS','6AQEvGJ','replace','3128936KlDcsF','client','```','getFilter','jid','sendMessage','269724vjWxzX','1555798EVdoGq','reply_message','../lib/','_No\x20filters\x20found\x20in\x20this\x20chat\x20❌_','8yyLxCG','setFilter','Wrong\x20format!','pattern'];_0x14ed=function(){return _0x251466;};return _0x14ed();}bot({'pattern':_0x7105f9(0x190),'fromMe':!![],'desc':_0x7105f9(0x1ab),'type':_0x7105f9(0x1ae)},async(_0x2e06e1,_0x22f770)=>{const _0x1989ef=_0x7105f9;_0x22f770=_0x22f770[0x1]['match'](/[\'\"\“](.*?)[\'\"\“]/gsm);if(_0x2e06e1[_0x1989ef(0x1a1)]['text']){await FilterDb[_0x1989ef(0x1a5)](_0x2e06e1['jid'],_0x22f770[0x0][_0x1989ef(0x198)](/['"“]+/g,''),_0x2e06e1[_0x1989ef(0x1a1)][_0x1989ef(0x191)],_0x22f770[0x0][0x0]==='\x27'?!![]:![]),await _0x2e06e1[_0x1989ef(0x19a)][_0x1989ef(0x19e)](_0x2e06e1[_0x1989ef(0x19d)],{'text':_0x1989ef(0x1af)+_0x22f770[0x0][_0x1989ef(0x198)](/['"]+/g,'')+_0x1989ef(0x192)});return;}if(_0x22f770===null){filtreler=await FilterDb[_0x1989ef(0x19c)](_0x2e06e1[_0x1989ef(0x19d)]);if(filtreler===![])await _0x2e06e1['client'][_0x1989ef(0x19e)](_0x2e06e1['jid'],{'text':_0x1989ef(0x1a3)});else{var _0xc44982='_Your\x20filters\x20in\x20this\x20chat:_'+'\x0a';filtreler['map'](_0x12e045=>_0xc44982+=_0x1989ef(0x19b)+_0x12e045[_0x1989ef(0x18f)][_0x1989ef(0x1a7)]+_0x1989ef(0x1aa)),await _0x2e06e1[_0x1989ef(0x19a)]['sendMessage'](_0x2e06e1['jid'],{'text':_0xc44982});}}else{if(_0x22f770['length']<0x2)return await _0x2e06e1['client']['sendMessage'](_0x2e06e1[_0x1989ef(0x19d)],{'text':'Wrong\x20format'+'\x20```.filter\x20\x22input\x22\x20\x22output\x22'});await FilterDb['setFilter'](_0x2e06e1[_0x1989ef(0x19d)],_0x22f770[0x0][_0x1989ef(0x198)](/['"“]+/g,''),_0x22f770[0x1][_0x1989ef(0x198)](/['"“]+/g,'')[_0x1989ef(0x198)](/[#]+/g,'\x0a'),_0x22f770[0x0][0x0]==='\x27'?!![]:![]),await _0x2e06e1[_0x1989ef(0x19a)][_0x1989ef(0x19e)](_0x2e06e1[_0x1989ef(0x19d)],{'text':'Successfully\x20set\x20'+_0x22f770[0x0][_0x1989ef(0x198)](/['"]+/g,'')});}}),bot({'pattern':'stop\x20?(.*)','fromMe':!![],'type':_0x7105f9(0x1ae),'desc':_0x7105f9(0x1ac),'dontAddCommandList':!![]},async(_0x241738,_0x37d89b)=>{const _0x587e1a=_0x7105f9;_0x37d89b=_0x37d89b[0x1][_0x587e1a(0x193)](/[\'\"\“](.*?)[\'\"\“]/gsm);if(_0x37d89b===null)return await _0x241738[_0x587e1a(0x19a)][_0x587e1a(0x19e)](_0x241738[_0x587e1a(0x19d)],{'text':_0x587e1a(0x1a6)+'\x0a*Example:*\x20```.stop\x20\x22hello\x22```'});del=await FilterDb['deleteFilter'](_0x241738[_0x587e1a(0x19d)],_0x37d89b[0x0][_0x587e1a(0x198)](/['"“]+/g,'')),!del?await _0x241738[_0x587e1a(0x19a)]['sendMessage'](_0x241738[_0x587e1a(0x19d)],{'text':'There\x20are\x20already\x20no\x20filters\x20like\x20this\x20❌'}):await _0x241738['client']['sendMessage'](_0x241738[_0x587e1a(0x19d)],{'text':'_Successfully\x20deleted\x20filter\x20✅_'});});