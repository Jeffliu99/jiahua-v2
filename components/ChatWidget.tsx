'use client';

import { useState, useRef, useEffect } from 'react';

// ─── 知识库 ───────────────────────────────────────────────────────────────────
const KB: Record<string, string> = {
  welcome:
    '您好！我是加华小助手 🌸 很高兴为您服务！\n\n我可以介绍月子餐套餐、家庭营养服务、高端定制方案、手作甜品面点、配送区域，以及如何预约咨询。\n\n请问有什么可以帮到您？',

  services_overview:
    '🌸 加华月子餐服务总览\n\n🍱 月子餐服务（4大套餐）\n• 30天月子餐套餐\n• 剖腹产恢复餐\n• 哺乳期营养餐\n• 小产调理餐\n\n🏠 家庭营养服务\n• 家庭营养餐\n• 长者营养餐（即将推出）\n• 术后康复餐（即将推出）\n\n✨ 高端与团体服务\n• 高端定制方案\n• 团体订餐服务\n• 机构合作',

  packages:
    '🍱 四大月子餐套餐\n\n🌿 30天月子餐套餐\n覆盖产后恢复四阶段，每日三餐三点+养生煲汤+新鲜水果+养生甜品+手工面点。\n\n🏥 剖腹产恢复餐\n专为剖腹产妈妈定制，循序渐进温和调理。\n\n🤱 哺乳期营养餐\n科学搭配促进泌乳，维持妈妈体能。\n\n🌸 小产调理餐\n温和滋补，帮助身体恢复元气。\n\n如需了解价格，欢迎通过微信或WhatsApp咨询 😊',

  mealplan_detail:
    '📋 四阶段月子餐体系\n\n第一周·恢复期：清淡温和、易消化\n第二周·调理期：增加优质蛋白质\n第三周·滋养期：菜品更加丰富\n第四周·巩固期：均衡营养，过渡日常\n\n每日餐食：三餐三点+养生煲汤+水果+养生甜品+手工面点+现烤糕点\n\n精选食材：鲈鱼、三文鱼、鲜虾、优质鸡肉、精选牛肉、时令蔬菜',

  family:
    '🏠 家庭营养服务\n\n🥗 家庭营养餐：为全家提供均衡营养日常膳食\n👴 长者营养餐：专为老年人设计（即将推出）\n🏥 术后康复餐：手术后专属营养支持（即将推出）\n\n欢迎联系我们咨询详情 🌸',

  premium:
    '✨ 高端与团体服务\n\n💎 高端定制方案：专属营养师跟进、菜单全定制\n🏢 团体订餐服务：适合企业、社区、月子中心\n🤝 机构合作：欢迎月子中心、医疗机构、社区组织洽谈\n\n联系我们：\n微信：hotmummyclub\n电话：(647)-727-3202',

  csection:
    '🏥 剖腹产恢复餐\n\n第一阶段(1-7天)：清淡流质，促进伤口愈合\n第二阶段(8-14天)：逐步过渡，加强蛋白质\n第三阶段(15-30天)：全面滋补，增强体力\n\n专为剖腹产妈妈设计，兼顾手术恢复与产后调理 💪',

  breastfeeding:
    '🤱 哺乳期营养餐\n\n🥛 促进泌乳：花生猪蹄汤、鲫鱼豆腐汤等传统下奶食谱\n💊 关键营养素：钙、铁、DHA充足补充\n⚡ 体能支持：帮助妈妈保持充沛精力\n🚫 不含影响母乳质量的刺激性食材\n\n方案可根据泌乳情况随时调整 😊',

  xiaochan:
    '🌸 小产调理餐\n\n• 温和滋补，避免寒凉刺激\n• 补血养气，恢复元气\n• 个性化定制，根据具体情况调整\n\n欢迎联系营养顾问详细咨询 💕',

  desserts:
    '🍰 手作甜品系列\n\n蛋糕卷（抹茶红豆/巧克力/芝士芒果）\n甜品杯（草莓/芒果/紫薯）\n现烤蛋挞（酥皮层次清晰）\n古早蛋糕（松软绵密）\n提拉米苏\n海苔肉松蛋糕\n抹茶大福（Q弹外皮抹茶奶油馅）\n曲奇系列（多口味）\n\n支持礼盒、生日聚会、企业下午茶、团购 🎁',

  dimsum:
    '🥟 手工面点系列\n\n花卷系列（南瓜/紫薯/红豆）\n特色馒头\n鲜肉包（皮薄馅足）\n香菇鲜肉烧麦\n鲜肉烧饼\n牛肉烧饼\n\n支持家庭装、冷冻常备、企业早餐、社区团购 📦',

  delivery:
    '🚚 配送区域\n\nToronto（多伦多）\nMarkham（万锦）\nRichmond Hill（列治文山）\nVaughan（旺市）\nNorth York（北约克）\nScarborough（士嘉堡）\nMississauga（密西沙加）\nAurora（奥罗拉）\nNewmarket（纽马凯特）\n\n如您所在区域不在列表，欢迎联系确认 😊',

  how_to_order:
    '📋 订餐6步流程\n\n1️⃣ 预约咨询（微信/WhatsApp/官网）\n2️⃣ 确认套餐方案\n3️⃣ 支付 $100 订金\n4️⃣ 通知开餐日期\n5️⃣ 开始每日配送\n6️⃣ 开餐当天付尾款\n\n✅ 支持暂停配送、更改日期、取消订单',

  customize:
    '🎯 忌口与定制\n\n支持：不吃牛肉 / 不吃海鲜 / 低盐 / 糖尿病饮食 / 不吃葱姜蒜\n\n咨询前请准备：预产期、所在城市、是否剖腹产/哺乳、忌口情况',

  price:
    '💰 关于价格\n\n订餐需先缴纳 $100 订金，开餐当天付尾款。\n\n建议先进行免费营养咨询，顾问为您量身推荐方案。\n\n微信：hotmummyclub\n电话：(647)-727-3202\n官网：jiahuameal.com\n\n首次咨询完全免费 😊',

  contact:
    '📱 联系我们\n\n💬 微信：hotmummyclub\n📞 电话：(647)-727-3202\n📧 邮箱：jiahuamealca@gmail.com\n🌐 官网：jiahuameal.com\n\n服务时间：每日 9:00 - 21:00',

  booking:
    '📅 如何预约\n\n🌐 官网：jiahuameal.com\n💬 微信：hotmummyclub\n📱 WhatsApp/电话：(647)-727-3202\n\n首次咨询免费！顾问会推荐最适合的方案 🌸',

  nutrition:
    '🌿 营养理念\n\n✨ 分阶段调理：四阶段体系\n🥘 每日现煮：新鲜采购当日烹制\n🍲 养生煲汤：每日温补脾胃\n💪 营养均衡：主食/蛋白质/蔬菜/汤品科学搭配\n🤱 促进泌乳：专为哺乳期优化',

  fallback:
    '感谢您的提问！🌸\n\n建议直接联系我们的专业营养顾问：\n\n💬 微信：hotmummyclub\n📞 (647)-727-3202\n🌐 jiahuameal.com\n\n首次咨询免费 😊',
};

function getResponse(input: string): string {
  const t = input.toLowerCase();
  if (/^(你好|您好|hello|hi|嗨|哈喽)/.test(t))
    return '您好！很高兴为您服务 🌸\n我是加华小助手，请问有什么可以帮到您？';
  if (/谢谢|感谢|thank/.test(t))
    return '不客气！很高兴能帮到您 🌸 如有其他问题随时告诉我！';
  if (/服务|有什么|提供|全部/.test(t) && !/套餐|甜品|面点|配送/.test(t))
    return KB.services_overview;
  if (/(套餐|月子餐|方案)/.test(t) && !/剖腹产|哺乳|小产|家庭|高端|团体|价格|阶段|每日/.test(t))
    return KB.packages;
  if (/四阶段|每日|食谱|菜单|吃什么|阶段|第[一二三四]周/.test(t))
    return KB.mealplan_detail;
  if (/剖腹产|剖|手术/.test(t)) return KB.csection;
  if (/哺乳|母乳|下奶|泌乳|奶水/.test(t)) return KB.breastfeeding;
  if (/小产|流产|引产/.test(t)) return KB.xiaochan;
  if (/家庭|长者|老人|术后|康复|全家/.test(t)) return KB.family;
  if (/高端|定制|团体|机构|合作|企业|vip/.test(t)) return KB.premium;
  if (/甜品|蛋挞|蛋糕|抹茶|大福|提拉米苏|曲奇|肉松|古早|礼盒/.test(t)) return KB.desserts;
  if (/面点|花卷|馒头|包子|烧麦|烧饼|饺子/.test(t)) return KB.dimsum;
  if (/配送|送餐|区域|地区|哪里|markham|richmond|vaughan|toronto|mississauga|aurora|newmarket|万锦|列治文|旺市|多伦多|士嘉堡|北约克/.test(t))
    return KB.delivery;
  if (/怎么订|如何订|订餐|流程|步骤|订金|定金/.test(t)) return KB.how_to_order;
  if (/忌口|过敏|定制|牛肉|海鲜|低盐|糖尿病|葱|姜|蒜/.test(t)) return KB.customize;
  if (/价格|多少钱|费用|贵|便宜|收费|报价/.test(t)) return KB.price;
  if (/微信|wechat|whatsapp|电话|邮件|联系方式/.test(t)) return KB.contact;
  if (/预约|咨询|约|book/.test(t)) return KB.booking;
  if (/营养|理念|原则|为什么|好处/.test(t)) return KB.nutrition;
  return KB.fallback;
}

// ─── 类型 ─────────────────────────────────────────────────────────────────────
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

// ─── 主组件 ───────────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

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
      const reply = getResponse(t);
      setMessages(prev => [...prev, { role: 'bot', text: reply, time: now() }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  }

  return (
    <>
      {/* ── 悬浮气泡按钮 ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="打开加华小助手"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2D4A3E, #3D6B58)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          border: 'none',
          cursor: 'pointer',
          fontSize: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform .2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.0)')}
      >
        🌸
      </button>

      {/* ── 聊天窗口 ── */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 96,
            right: 24,
            zIndex: 9998,
            width: 370,
            height: 620,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: "'PingFang SC','Microsoft YaHei',sans-serif",
            background: '#F5EDE8',
          }}
        >
          {/* Header — 纯文字，无Logo */}
          <div
            style={{
              background: 'linear-gradient(135deg, #2D4A3E, #3D6B58)',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexShrink: 0,
            }}
          >
            {/* 头像圆圈 */}
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              🌸
            </div>

            {/* 标题文字 */}
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>
                加华小助手
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#4ade80',
                    boxShadow: '0 0 5px #4ade80',
                    display: 'inline-block',
                  }}
                />
                <span style={{ fontSize: 12, color: '#a7f3d0' }}>在线 · AI营养顾问</span>
              </div>
            </div>

            {/* 关闭按钮 */}
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.7)',
                fontSize: 20,
                cursor: 'pointer',
                lineHeight: 1,
                padding: '2px 4px',
              }}
            >
              ✕
            </button>
          </div>

          {/* 消息区 */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px 12px 4px' }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: m.role === 'user' ? 'row-reverse' : 'row',
                  gap: 6,
                  marginBottom: 12,
                  alignItems: 'flex-end',
                }}
              >
                {/* Bot 头像 */}
                {m.role === 'bot' && (
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: '#2D4A3E',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                    }}
                  >
                    🌸
                  </div>
                )}

                <div>
                  <div
                    style={{
                      maxWidth: 240,
                      padding: '9px 12px',
                      borderRadius:
                        m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                      background: m.role === 'user' ? '#2D4A3E' : '#fff',
                      color: m.role === 'user' ? '#fff' : '#3D2C2C',
                      borderLeft: m.role === 'bot' ? '3px solid #C9A96E' : 'none',
                      fontSize: 13,
                      lineHeight: 1.65,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {m.text}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: '#bbb',
                      marginTop: 3,
                      textAlign: m.role === 'user' ? 'right' : 'left',
                    }}
                  >
                    {m.time}
                  </div>
                </div>
              </div>
            ))}

            {/* 打字动画 */}
            {typing && (
              <div
                style={{
                  display: 'flex',
                  gap: 6,
                  alignItems: 'flex-end',
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#2D4A3E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                  }}
                >
                  🌸
                </div>
                <div
                  style={{
                    background: '#fff',
                    borderLeft: '3px solid #C9A96E',
                    borderRadius: '12px 12px 12px 2px',
                    padding: '10px 14px',
                    display: 'flex',
                    gap: 4,
                    alignItems: 'center',
                  }}
                >
                  {[0, 1, 2].map(n => (
                    <div
                      key={n}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#C9A96E',
                        animation: 'jh-bounce 1s infinite',
                        animationDelay: `${n * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* 快捷回复 chips */}
          <div
            style={{
              display: 'flex',
              gap: 6,
              padding: '6px 12px',
              overflowX: 'auto',
              flexShrink: 0,
              scrollbarWidth: 'none',
            }}
          >
            {CHIPS.map(c => (
              <button
                key={c}
                onClick={() => send(c)}
                style={{
                  flexShrink: 0,
                  padding: '4px 10px',
                  borderRadius: 20,
                  border: '1px solid #C9A96E',
                  background: '#fff',
                  color: '#2D4A3E',
                  fontSize: 11,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
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
              >
                {c}
              </button>
            ))}
          </div>

          {/* 输入框 */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              padding: '8px 12px 14px',
              flexShrink: 0,
            }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
              placeholder="请输入您的问题..."
              disabled={typing}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: 20,
                border: '1.5px solid #C9A96E',
                outline: 'none',
                fontSize: 13,
                background: '#fff',
                color: '#3D2C2C',
                fontFamily: 'inherit',
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={typing || !input.trim()}
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: typing || !input.trim() ? '#ddd' : '#C9A96E',
                border: 'none',
                cursor: typing || !input.trim() ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 17,
                color: '#fff',
                flexShrink: 0,
                transition: 'background .2s',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* 动画 keyframes */}
      <style>{`
        @keyframes jh-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
