'use client';

import { useState, useRef, useEffect } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════
// 知识库 Knowledge Base
// ═══════════════════════════════════════════════════════════════════════════════
const KB: Record<string, string> = {
  welcome:
    '您好！我是加华小助手 🌸 很高兴为您服务！\n\n我可以回答月子餐套餐、配送、忌口定制、付款流程，以及产后饮食等各类问题。\n\n请问有什么可以帮到您？',
  services_overview:
    '🌸 加华月子餐服务总览\n\n🍱 月子餐服务（4大套餐）\n• 30天月子餐套餐\n• 剖腹产恢复餐\n• 哺乳期营养餐\n• 小产调理餐\n\n🏠 家庭营养服务\n• 家庭营养餐\n• 长者营养餐（即将推出）\n• 术后康复餐（即将推出）\n\n✨ 高端与团体服务\n• 高端定制方案\n• 团体订餐服务\n• 机构合作\n\n想了解哪类服务？',
  packages:
    '🍱 四大月子餐套餐\n\n🌿 30天月子餐套餐\n覆盖产后恢复四阶段，适合希望获得完整产后支持的家庭。每日三餐三点+养生煲汤+新鲜水果+养生甜品+手工面点。\n\n🏥 剖腹产恢复餐\n专为剖腹产妈妈定制，循序渐进温和调理，餐单与顺产有所不同。\n\n🤱 哺乳期营养餐\n科学搭配促进泌乳，维持妈妈体能与母乳质量。\n\n🌸 小产调理餐\n温和滋补，帮助身体恢复元气。\n\n每日餐食包含：主餐+汤品+主食+蔬菜+蛋白质+点心\n\n如需了解价格，欢迎微信或WhatsApp咨询 😊',
  mealplan_detail:
    '📋 四阶段月子餐体系\n\n第一周·恢复期：清淡温和、易消化，促进初步恢复\n第二周·调理期：增加优质蛋白质，修复组织\n第三周·滋养期：菜品更丰富，全面补充营养\n第四周·巩固期：均衡营养，过渡日常饮食\n\n每日餐食：三餐三点+养生煲汤+水果+养生甜品+手工面点+现烤糕点\n\n精选食材：鲈鱼、三文鱼、鲜虾、优质鸡肉、精选牛肉、时令蔬菜',
  booking_when:
    '📅 什么时候预订最好？\n\n建议在**预产期前2-4周**预约咨询，方便我们提前了解您的需求并安排。\n\n✅ 也可以先咨询，不必马上确认下单\n✅ 支持代订（家人替产妇预约）\n✅ 临时需要开始的情况，请先联系我们确认是否能安排\n\n📞 微信：hotmummyclub\n电话：(647)-727-3202',
  trial:
    '🍽️ 关于试餐\n\n如需试餐，请提前联系我们确认是否能安排。\n\n📞 微信：hotmummyclub\n电话：(647)-727-3202',
  short_plan:
    '📦 关于短期套餐\n\n如需15天或其他短期安排，请联系我们确认是否可以配合您的情况。\n\n套餐也支持**中途延长**，如有需要请提前沟通。\n\n📞 微信：hotmummyclub\n电话：(647)-727-3202',
  family:
    '🏠 家庭营养服务\n\n🥗 家庭营养餐：为全家提供均衡营养日常膳食\n👴 长者营养餐：专为老年人设计（即将推出）\n🏥 术后康复餐：手术后专属营养支持（即将推出）\n\n欢迎联系我们咨询详情 🌸',
  premium:
    '✨ 高端与团体服务\n\n💎 高端定制方案：专属营养师跟进、菜单全定制\n🏢 团体订餐服务：适合企业、社区、月子中心\n🤝 机构合作：欢迎月子中心、医疗机构、社区组织洽谈\n\n联系我们：\n微信：hotmummyclub\n电话：(647)-727-3202',
  csection:
    '🏥 剖腹产恢复餐\n\n剖腹产妈妈完全适合订月子餐 ✅\n\n剖腹产与顺产的餐单有所不同，会根据手术恢复阶段特别调整：\n\n第一阶段(1-7天)：清淡流质为主，避免胀气，促进伤口愈合\n第二阶段(8-14天)：逐步过渡，加强蛋白质补充\n第三阶段(15-30天)：全面滋补，增强体力，促进泌乳\n\n专为剖腹产妈妈设计，兼顾手术恢复与产后调理 💪',
  breastfeeding:
    '🤱 哺乳期营养餐\n\n哺乳妈妈完全可以订月子餐 ✅ 我们的方案专门为哺乳期优化：\n\n🥛 促进泌乳：花生猪蹄汤、鲫鱼豆腐汤等传统下奶食谱\n💊 关键营养素：钙、铁、DHA充足补充\n⚡ 体能支持：帮助妈妈保持充沛精力\n🚫 不含影响母乳质量的刺激性食材\n\n方案可根据泌乳情况随时调整 😊',
  xiaochan:
    '🌸 小产调理餐\n\n• 温和滋补，避免寒凉刺激\n• 补血养气，恢复元气\n• 个性化定制，根据具体情况调整\n\n欢迎联系营养顾问详细咨询 💕',
  menu:
    '🍽️ 关于菜单\n\n• 菜单每天不一样，保证多样化营养\n• 每天都有养生煲汤 🍲\n• 可提供菜单样例，请联系我们获取\n\n每日餐食包含：主餐 · 煲汤 · 主食 · 时令蔬菜 · 优质蛋白质 · 点心\n\n养生甜品：芝麻糊、杏仁糊、银耳羹、莲子百合糖水\n手工面点：小笼包、水饺、云吞、烧卖、煎饼\n现烤糕点：蛋挞、蛋糕卷、甜品杯',
  delivery:
    '🚚 配送区域与说明\n\n📍 覆盖GTA大多伦多地区：\nToronto · Markham · Richmond Hill · Vaughan · North York · Scarborough · Mississauga · Aurora · Newmarket\n\n⏰ 配送时间根据路线和区域有所不同，确认订餐后我们会提供具体时间范围。\n\n🏥 可以送到医院，需提前提供：医院名称、地址和接餐方式。\n\n📍 更改配送地址：请尽早通知，需确认新地址是否在配送范围内。\n\n❄️ 极端天气（暴雪等）：优先考虑安全，可能需调整配送时间，会提前沟通。\n\n如所在区域不在列表内，欢迎联系确认 😊',
  customize:
    '🎯 忌口与定制\n\n✅ 以下需求均可支持：\n• 不吃牛肉\n• 海鲜过敏（可完全去除海鲜）\n• 低盐饮食\n• 糖尿病饮食调整\n• 不吃葱姜蒜\n\n如需完全定制菜单，请咨询我们的营养顾问。\n\n📋 咨询前请准备：\n预产期 · 所在城市 · 顺产/剖腹产 · 是否哺乳 · 忌口情况',
  payment:
    '💰 付款与订单说明\n\n💳 订金：确认订餐后需支付 $100 订金\n💰 尾款：开餐当天支付剩余餐费\n\n📌 付款方式请联系我们确认\n\n订单灵活调整：\n⏸️ 可暂停配送（提前通知）\n📅 可更改开餐日期（提前沟通）\n❌ 可取消订单\n🔄 可中途延长套餐（提前沟通）',
  how_to_order:
    '📋 订餐6步流程\n\n1️⃣ 预约咨询（微信/WhatsApp/官网）\n2️⃣ 营养顾问确认套餐方案\n3️⃣ 支付 $100 订金\n4️⃣ 收到通知确认开餐日期\n5️⃣ 每日新鲜烹制配送上门\n6️⃣ 开餐当天支付尾款\n\n✅ 支持暂停配送 · 更改日期 · 取消订单\n\n建议产前2-4周提前预约！',
  contact:
    '📱 联系我们\n\n💬 微信：hotmummyclub\n📞 电话：(647)-727-3202\n📧 邮箱：jiahuamealca@gmail.com\n🌐 官网：jiahuameal.com\n\n服务时间：每日 9:00 - 21:00',
  price:
    '💰 关于价格\n\n具体价格根据套餐类型和时长而定，建议先进行免费营养咨询，顾问会量身推荐最合适的方案。\n\n订金：$100（确认订单时支付）\n尾款：开餐当天支付\n\n📞 微信：hotmummyclub\n电话：(647)-727-3202\n\n首次咨询完全免费，无任何压力 😊',
  desserts:
    '🍰 手作甜品系列\n\n蛋糕卷（抹茶红豆/巧克力/芝士芒果）\n甜品杯（草莓/芒果/紫薯）\n现烤蛋挞 · 古早蛋糕 · 提拉米苏\n海苔肉松蛋糕 · 抹茶大福 · 曲奇系列\n\n支持礼盒/生日聚会/企业下午茶/团购 🎁',
  dimsum:
    '🥟 手工面点系列\n\n花卷系列（南瓜/紫薯/红豆）\n特色馒头 · 鲜肉包 · 香菇鲜肉烧麦\n鲜肉烧饼 · 牛肉烧饼\n\n支持家庭装/冷冻常备/企业早餐/社区团购 📦',
  nutrition:
    '🌿 加华营养理念\n\n传统调理 × 现代营养科学\n\n✨ 分阶段调理：四阶段体系，科学安排每周饮食重点\n🥘 每日现煮：新鲜采购，当日烹制配送\n🍲 养生煲汤：每日煲汤，温补脾胃\n💪 营养均衡：主食/蛋白质/蔬菜/汤品科学搭配\n🤱 促进泌乳：专为哺乳期优化营养结构',
  water:
    '💧 月子期间可以喝水吗？\n\n可以喝水！现代营养学建议产后保持充足水分。\n\n✅ 建议喝温水或温热的汤水\n✅ 哺乳妈妈每天建议约2-3升（含汤水）\n❌ 避免冰水或冷饮，尤其产后初期\n\n加华每日提供养生煲汤，帮助妈妈补充水分与营养 🍲',
  salt:
    '🧂 月子期间能吃盐吗？\n\n可以适量吃盐！\n\n✅ 适量盐分对身体是必要的，完全无盐饮食反而不健康\n⚠️ 建议低盐，减少水肿，有助肾脏代谢\n⚠️ 如有妊娠高血压或水肿，需更严格控制盐分\n\n加华支持低盐定制，如有需求请在咨询时告知 😊',
  fruit:
    '🍎 月子期间能吃水果吗？\n\n可以吃水果！\n\n✅ 富含维生素C、纤维素，有助消化和伤口愈合\n✅ 建议选择常温或室温水果\n✅ 温性水果推荐：木瓜、苹果、葡萄、龙眼\n⚠️ 避免冰箱直取的冷藏水果\n❌ 产后初期少吃过于寒凉的：西瓜、梨\n\n加华每日提供新鲜时令水果 🍊',
  cold_drink:
    '🧊 月子期间能喝冷饮吗？\n\n❌ 建议避免冷饮和冰品\n\n• 产后身体较虚，寒凉食物可能引起胃肠不适\n• 哺乳期喝冷饮可能影响母乳质量\n\n✅ 建议：温水、汤水、红糖姜水\n\n加华所有汤品和饮品均为温热提供 🍵',
  spicy:
    '🌶️ 月子期间能吃辣吗？\n\n❌ 月子期间建议避免辛辣食物\n\n• 刺激肠胃，影响恢复\n• 哺乳期吃辣可能通过母乳影响宝宝肠胃\n• 可能影响剖腹产/会阴侧切伤口愈合\n\n✅ 月子结束后可逐步恢复正常饮食\n\n加华餐食以温和清淡为主，不含辛辣 🌿',
  alcohol:
    '🍷 月子期间能喝酒吗？\n\n⚠️ 建议不喝酒，尤其是哺乳妈妈\n\n• 酒精会通过母乳传给宝宝\n• 月子酒（米酒）需非常谨慎控制\n\n加华会根据您的需求调整，如哺乳期希望完全无酒精，请在咨询时告知 😊',
  duration:
    '⏰ 坐月子需要多久？\n\n• 顺产：建议至少30天，部分建议42天\n• 剖腹产：建议42天甚至更长\n• 小产：根据孕周不同，调养时间有所差异\n\n加华提供30天完整套餐，也支持延长，详情可咨询 🌸',
  hairloss:
    '💆 产后脱发怎么办？\n\n产后脱发是激素变化导致的正常现象，通常会自行恢复。\n\n饮食上可以这样帮助：\n🥩 充足蛋白质：鸡蛋、鱼、瘦肉、豆腐\n🫘 黑芝麻、核桃：传统补发食物\n🥬 补铁：红肉、红枣（防缺铁性脱发）\n💊 锌：瘦肉、牡蛎、坚果\n\n加华月子餐科学搭配营养，有助整体身体恢复 🌸',
  engorgement:
    '🤱 涨奶/奶水不足怎么办？\n\n奶水过多/涨奶时：\n❌ 暂时减少浓汤（猪蹄汤、下奶汤）\n✅ 频繁哺乳排空\n\n奶水不足时：\n✅ 花生猪蹄汤、鲫鱼豆腐汤、木瓜排骨汤\n✅ 每日充足水分（约2-3升）\n✅ 保证优质蛋白质和热量\n✅ 充足休息\n\n加华会根据您的哺乳情况灵活调整餐单 😊',
  constipation:
    '🌿 产后便秘怎么办？\n\n✅ 多喝温水（每天至少8杯）\n✅ 多吃膳食纤维：蔬菜、红薯、香蕉\n✅ 适量轻度活动\n✅ 核桃、芝麻有润肠作用\n✅ 蜂蜜水（适量）\n❌ 避免过于精细、缺乏纤维的食物\n\n加华月子餐注重蔬菜与营养均衡 🥬',
  swelling:
    '💊 产后水肿怎么办？\n\n✅ 低盐饮食：减少钠的摄入\n✅ 红豆薏米水：传统消水肿\n✅ 冬瓜汤：利水消肿\n✅ 适量钾质食物：香蕉、菠菜、土豆\n❌ 避免高盐、腌制、加工食品\n\n加华支持低盐定制，请在咨询时告知 😊',
  anemia:
    '🩸 产后贫血吃什么？\n\n高铁食物：\n🥩 红肉（牛肉、猪肝、猪血）\n🐟 蛤蜊、牡蛎等贝类\n🥬 菠菜、红苋菜\n🍑 红枣、桂圆、黑芝麻\n\n促进铁吸收：\n✅ 搭配维生素C（柑橘、西红柿）\n❌ 避免茶、咖啡与铁质食物同食\n\n加华月子餐科学搭配补铁食材 💪',
  normaleat:
    '🍽️ 月子结束后可以正常吃了吗？\n\n月子结束后可逐步恢复正常饮食，但建议：\n\n✅ 哺乳期仍需营养均衡，避免节食减肥\n✅ 继续避免过于辛辣、生冷食物\n✅ 保证充足蛋白质和钙质\n⚠️ 不建议立即大量进补，循序渐进\n\n如需延长月子餐服务，加华支持中途延长 😊',
  difference:
    '🌿 月子餐和普通饮食有什么区别？\n\n月子餐的特点：\n🔥 温热为主：避免寒凉刺激\n🧂 低油少盐：减轻身体代谢负担\n🥩 高蛋白：促进组织修复和泌乳\n🍲 大量汤水：补充水分，促进泌乳\n🚫 无刺激：不含辛辣、咖啡因、酒精\n📅 分阶段：按产后恢复进程调整食材\n\n这也是专业月子餐的价值所在 🌸',
  fallback:
    '感谢您的提问！🌸\n\n关于这个问题，建议直接联系我们的专业营养顾问：\n\n💬 微信：hotmummyclub\n📞 电话：(647)-727-3202\n🌐 jiahuameal.com\n\n首次咨询完全免费 😊',
};

// ═══════════════════════════════════════════════════════════════════════════════
// 回答逻辑
// ═══════════════════════════════════════════════════════════════════════════════
function getResponse(input: string): string {
  const t = input.toLowerCase();
  if (/^(你好|您好|hello|hi|嗨|哈喽|早上好|晚上好|下午好)/.test(t))
    return '您好！很高兴为您服务 🌸\n我是加华小助手，可以回答月子餐、产后饮食、配送等问题。请问有什么可以帮到您？';
  if (/谢谢|感谢|thank/.test(t))
    return '不客气！很高兴能帮到您 🌸 如有其他问题随时告诉我！';
  if (/什么时候.*预订|多早.*预订|几周.*预订|提前.*预订|代.*订|临时/.test(t)) return KB.booking_when;
  if (/试餐|试吃/.test(t)) return KB.trial;
  if (/15天|两周|短期|延长|中途/.test(t)) return KB.short_plan;
  if (/四阶段|每日|食谱|第[一二三四]周|每周|阶段/.test(t)) return KB.mealplan_detail;
  if (/菜单|每天.*样|一样|样例|包含|包括|什么菜/.test(t)) return KB.menu;
  if (/剖腹产|剖|手术/.test(t)) return KB.csection;
  if (/涨奶|奶太多|堵奶/.test(t)) return KB.engorgement;
  if (/哺乳|母乳|下奶|泌乳|奶水|乳量|奶不够/.test(t)) return KB.breastfeeding;
  if (/小产|流产|引产/.test(t)) return KB.xiaochan;
  if (/家庭|长者|老人|术后|康复|全家/.test(t)) return KB.family;
  if (/高端|定制|团体|机构|合作|企业|vip/.test(t)) return KB.premium;
  if (/甜品|蛋挞|蛋糕|抹茶|大福|提拉米苏|曲奇|肉松|古早|礼盒/.test(t)) return KB.desserts;
  if (/面点|花卷|馒头|包子|烧麦|烧饼|饺子/.test(t)) return KB.dimsum;
  if (/配送|送餐|区域|地区|哪里|范围|医院|地址|暴雪|天气|markham|richmond|vaughan|toronto|mississauga|aurora|newmarket|万锦|列治文|旺市|多伦多|士嘉堡|北约克/.test(t)) return KB.delivery;
  if (/忌口|过敏|不吃|牛肉|海鲜|低盐|糖尿病|葱|姜|蒜/.test(t)) return KB.customize;
  if (/付款|订金|定金|尾款|怎么付|支付|暂停|取消|退款|更改.*日期/.test(t)) return KB.payment;
  if (/怎么订|如何订|流程|步骤|开始订|怎么开始/.test(t)) return KB.how_to_order;
  if (/(套餐|月子餐|方案|服务)/.test(t) && !/剖腹产|哺乳|小产|家庭|高端|团体|价格|阶段|每日|菜单/.test(t)) return KB.packages;
  if (/服务|有什么|提供|全部|总览/.test(t) && !/套餐|甜品|面点|配送|忌口/.test(t)) return KB.services_overview;
  if (/价格|多少钱|费用|贵|便宜|收费|报价|收多少/.test(t)) return KB.price;
  if (/微信|wechat|whatsapp|电话|邮件|email|联系方式|联系|怎么联系/.test(t)) return KB.contact;
  if (/预约|咨询|约|book|如何开始/.test(t)) return KB.how_to_order;
  if (/营养理念|理念|原则|为什么选|好处|优势/.test(t)) return KB.nutrition;
  if (/喝水|水分|饮水|要喝多少水/.test(t)) return KB.water;
  if (/盐|咸|低盐|无盐/.test(t) && !/忌口|定制/.test(t)) return KB.salt;
  if (/水果|苹果|香蕉|西瓜|木瓜|葡萄|梨/.test(t)) return KB.fruit;
  if (/冷饮|冰|冰水|冰淇淋|冷食/.test(t)) return KB.cold_drink;
  if (/辣|辛辣|麻辣|火锅/.test(t)) return KB.spicy;
  if (/酒|米酒|啤酒|红酒|月子酒/.test(t)) return KB.alcohol;
  if (/多久|几天|几周|42天|30天|坐月.*时间|时间.*坐月/.test(t)) return KB.duration;
  if (/脱发|掉发|掉头发/.test(t)) return KB.hairloss;
  if (/便秘|排便|大便|通便/.test(t)) return KB.constipation;
  if (/水肿|肿|浮肿/.test(t)) return KB.swelling;
  if (/贫血|补血|补铁|头晕|乏力/.test(t)) return KB.anemia;
  if (/月子后|月子结束|坐完月子|产后.*正常吃/.test(t)) return KB.normaleat;
  if (/区别|有什么不同|为什么要.*月子餐|普通饮食|自己做/.test(t)) return KB.difference;
  return KB.fallback;
}

interface Message {
  role: 'bot' | 'user';
  text: string;
  time: string;
}

const CHIPS = [
  '📋 四大月子套餐',
  '🏠 家庭营养服务',
  '✨ 高端与团体服务',
  '🚚 配送区域查询',
  '📅 订餐流程与订金',
  '🍰 手作甜品系列',
  '🥟 手工面点系列',
  '📞 联系与预约',
];

// ═══════════════════════════════════════════════════════════════════════════════
// 主组件
// ═══════════════════════════════════════════════════════════════════════════════
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBubble, setShowBubble] = useState(false);   // 欢迎气泡显示状态
  const [bubbleDismissed, setBubbleDismissed] = useState(false); // 是否已关闭
  const bottomRef = useRef<HTMLDivElement>(null);

  // 检测手机尺寸
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── 欢迎气泡逻辑 ──────────────────────────────────────────────────────────
  // 只在用户本次会话第一次进入时显示，关闭后不再显示
  useEffect(() => {
    const dismissed = sessionStorage.getItem('jiahua_bubble_dismissed');
    if (dismissed) return;

    // 进入页面 2.5 秒后弹出
    const showTimer = setTimeout(() => {
      setShowBubble(true);
    }, 2500);

    // 8 秒后自动隐藏（如果用户没有手动关闭）
    const hideTimer = setTimeout(() => {
      setShowBubble(false);
      sessionStorage.setItem('jiahua_bubble_dismissed', '1');
    }, 10500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // 关闭气泡
  function dismissBubble() {
    setShowBubble(false);
    setBubbleDismissed(true);
    sessionStorage.setItem('jiahua_bubble_dismissed', '1');
  }

  // 点击气泡直接打开聊天窗口
  function openFromBubble() {
    dismissBubble();
    setOpen(true);
  }

  // 打开时显示欢迎语
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ role: 'bot', text: KB.welcome, time: now() }]);
      }, 400);
    }
  }, [open]);

  // 自动滚动到底部
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // 手机端锁定页面滚动
  useEffect(() => {
    if (isMobile) document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open, isMobile]);

  function now() {
    return new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  }

  function send(text: string) {
    const t = text.trim();
    if (!t || typing) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: t, time: now() }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: getResponse(t), time: now() }]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  }

  // 响应式尺寸
  const chatStyle: React.CSSProperties = isMobile
    ? { position: 'fixed', bottom: 80, left: 8, right: 8, height: '75dvh', maxHeight: 620, borderRadius: 16 }
    : { position: 'fixed', bottom: 96, right: 24, width: 370, height: 620, borderRadius: 16 };

  const btnBottom = isMobile ? 16 : 24;
  const btnRight  = isMobile ? 16 : 24;

  return (
    <>
      {/* ── 欢迎气泡 ──────────────────────────────────────────────────────── */}
      {showBubble && !open && (
        <div
          style={{
            position: 'fixed',
            bottom: btnBottom + 70,
            right: btnRight,
            zIndex: 10000,
            maxWidth: 220,
            animation: 'jh-bubble-in 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            transformOrigin: 'bottom right',
          }}
        >
          {/* 气泡主体 */}
          <div
            onClick={openFromBubble}
            style={{
              background: '#fff',
              borderRadius: '16px 16px 4px 16px',
              boxShadow: '0 4px 20px rgba(45,74,62,0.22)',
              padding: '12px 36px 12px 14px',
              cursor: 'pointer',
              border: '1.5px solid #e8d8c8',
              position: 'relative',
              userSelect: 'none',
            }}
          >
            {/* 关闭按钮 */}
            <button
              onClick={e => { e.stopPropagation(); dismissBubble(); }}
              style={{
                position: 'absolute', top: 6, right: 8,
                background: 'none', border: 'none',
                color: '#bbb', fontSize: 14, cursor: 'pointer',
                lineHeight: 1, padding: 2,
              }}
              aria-label="关闭"
            >✕</button>

            {/* 头像行 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'linear-gradient(135deg, #2D4A3E, #3D6B58)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, flexShrink: 0,
              }}>🌸</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#2D4A3E', fontFamily: "'PingFang SC','Microsoft YaHei',sans-serif" }}>加华小助手</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  <span style={{ fontSize: 10, color: '#4ade80' }}>在线</span>
                </div>
              </div>
            </div>

            {/* 消息文字 */}
            <div style={{
              fontSize: 13,
              color: '#3D2C2C',
              lineHeight: 1.55,
              fontFamily: "'PingFang SC','Microsoft YaHei',sans-serif",
            }}>
              👋 您好！我是加华小助手<br />
              <span style={{ color: '#2D4A3E', fontWeight: 600 }}>有问题可以问我哦～</span> 🌸
            </div>

            {/* 点击提示 */}
            <div style={{
              marginTop: 8, fontSize: 11, color: '#C9A96E',
              fontFamily: "'PingFang SC','Microsoft YaHei',sans-serif",
            }}>
              点击开始咨询 →
            </div>
          </div>

          {/* 气泡小尾巴 */}
          <div style={{
            position: 'absolute',
            bottom: -8,
            right: 20,
            width: 0, height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '0px solid transparent',
            borderTop: '8px solid #fff',
            filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.08))',
          }} />
        </div>
      )}

      {/* ── 悬浮气泡按钮 ─────────────────────────────────────────────────── */}
      <button
        onClick={() => { setOpen(o => !o); dismissBubble(); }}
        aria-label="打开加华小助手"
        style={{
          position: 'fixed',
          bottom: btnBottom,
          right: btnRight,
          zIndex: 9999,
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, #2D4A3E, #3D6B58)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          border: 'none', cursor: 'pointer',
          fontSize: 26, display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform .2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.0)')}
      >
        {open ? '✕' : '🌸'}
      </button>

      {/* ── 手机遮罩 ──────────────────────────────────────────────────────── */}
      {open && isMobile && (
        <div onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 9997, background: 'rgba(0,0,0,0.4)',
        }} />
      )}

      {/* ── 聊天窗口 ──────────────────────────────────────────────────────── */}
      {open && (
        <div style={{
          ...chatStyle, zIndex: 9998,
          overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
          display: 'flex', flexDirection: 'column',
          fontFamily: "'PingFang SC','Microsoft YaHei',sans-serif",
          background: '#F5EDE8',
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2D4A3E, #3D6B58)',
            padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, flexShrink: 0,
            }}>🌸</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>加华小助手</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 5px #4ade80', display: 'inline-block' }} />
                <span style={{ fontSize: 11, color: '#a7f3d0' }}>在线 · AI营养顾问</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
              fontSize: 20, cursor: 'pointer', lineHeight: 1, padding: '2px 4px',
            }}>✕</button>
          </div>

          {/* 消息区 */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px 12px 4px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: m.role === 'user' ? 'row-reverse' : 'row',
                gap: 6, marginBottom: 12, alignItems: 'flex-end',
              }}>
                {m.role === 'bot' && (
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', background: '#2D4A3E', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
                  }}>🌸</div>
                )}
                <div>
                  <div style={{
                    maxWidth: isMobile ? '72vw' : 240, padding: '9px 12px',
                    borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                    background: m.role === 'user' ? '#2D4A3E' : '#fff',
                    color: m.role === 'user' ? '#fff' : '#3D2C2C',
                    borderLeft: m.role === 'bot' ? '3px solid #C9A96E' : 'none',
                    fontSize: isMobile ? 14 : 13, lineHeight: 1.65, whiteSpace: 'pre-line',
                  }}>{m.text}</div>
                  <div style={{
                    fontSize: 10, color: '#bbb', marginTop: 3,
                    textAlign: m.role === 'user' ? 'right' : 'left',
                  }}>{m.time}</div>
                </div>
              </div>
            ))}

            {/* 打字动画 */}
            {typing && (
              <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', marginBottom: 12 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', background: '#2D4A3E',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
                }}>🌸</div>
                <div style={{
                  background: '#fff', borderLeft: '3px solid #C9A96E',
                  borderRadius: '12px 12px 12px 2px',
                  padding: '10px 14px', display: 'flex', gap: 4, alignItems: 'center',
                }}>
                  {[0, 1, 2].map(n => (
                    <div key={n} style={{
                      width: 6, height: 6, borderRadius: '50%', background: '#C9A96E',
                      animation: 'jh-bounce 1s infinite', animationDelay: `${n * 0.2}s`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* 快捷回复 */}
          <div style={{
            display: 'flex', gap: 6,
            padding: isMobile ? '6px 10px' : '6px 12px',
            overflowX: 'auto', flexShrink: 0, scrollbarWidth: 'none',
          }}>
            {CHIPS.map(c => (
              <button key={c} onClick={() => send(c)} style={{
                flexShrink: 0, padding: isMobile ? '5px 11px' : '4px 10px',
                borderRadius: 20, border: '1px solid #C9A96E',
                background: '#fff', color: '#2D4A3E',
                fontSize: isMobile ? 12 : 11, cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'background .15s, color .15s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#2D4A3E';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#fff';
                  (e.currentTarget as HTMLButtonElement).style.color = '#2D4A3E';
                }}
              >{c}</button>
            ))}
          </div>

          {/* 输入框 */}
          <div style={{
            display: 'flex', gap: 8,
            padding: isMobile ? '8px 10px 12px' : '8px 12px 14px', flexShrink: 0,
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
              placeholder="请输入您的问题..."
              disabled={typing}
              style={{
                flex: 1, padding: isMobile ? '10px 14px' : '8px 12px',
                borderRadius: 20, border: '1.5px solid #C9A96E', outline: 'none',
                fontSize: isMobile ? 15 : 13, background: '#fff', color: '#3D2C2C',
                fontFamily: 'inherit',
              }}
            />
            <button onClick={() => send(input)} disabled={typing || !input.trim()} style={{
              width: isMobile ? 42 : 38, height: isMobile ? 42 : 38, borderRadius: '50%',
              background: typing || !input.trim() ? '#ddd' : '#C9A96E',
              border: 'none', cursor: typing || !input.trim() ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 17, color: '#fff', flexShrink: 0, transition: 'background .2s',
            }}>➤</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes jh-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes jh-bubble-in {
          0%   { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}
