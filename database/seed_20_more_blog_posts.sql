-- seed_20_more_blog_posts.sql
-- Import with:
-- cmd /c "docker exec -i jiahua_mysql mysql --default-character-set=utf8mb4 -u jiahua_user -pjiahua_password jiahua_db < database\seed_20_more_blog_posts.sql"
SET NAMES utf8mb4;

-- Ensure categories exist
INSERT INTO blog_categories (name, slug) VALUES ('月子餐知识', 'postpartum-meal') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('产后恢复', 'postpartum-recovery') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('宝宝护理', 'baby-care') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('孕期营养', 'pregnancy-nutrition') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('客户故事', 'customer-stories') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('加华动态', 'jiahua-news') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('哺乳期营养', 'breastfeeding-nutrition') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('GTA 本地指南', 'gta-local-guide') ON DUPLICATE KEY UPDATE name = VALUES(name);

-- Seed 20 additional blog posts

INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'postpartum-meal' LIMIT 1),
'月子餐第四周怎么吃？产后第四周饮食安排指南',
'postpartum-meal-week-4-guide',
'产后第四周，妈妈的饮食可以逐渐接近日常，但仍建议保持温和、均衡和规律。',
'<h2>月子餐第四周怎么吃？产后第四周饮食安排指南</h2>
<p>第四周可以逐步从严格月子餐转向更接近日常的饮食节奏。重点不是突然放开，而是在前几周恢复基础上，让餐食更加多样、均衡和可持续。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>继续保持温和饮食</li><li>增加主食、蛋白质和熟蔬菜的变化</li><li>避免突然吃得过油或过辣</li><li>根据妈妈体力和胃口调整分量</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>产后第四周，妈妈的饮食可以逐渐接近日常，但仍建议保持温和、均衡和规律。</p>',
'/images/blog/postpartum-meal-week-4.png',
'published',
0,
'2026-09-01 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'postpartum-meal' LIMIT 1),
'产后第一周汤品怎么安排？',
'postpartum-week-1-soup-guide',
'产后第一周汤品不宜过油，建议以清淡、温和、容易入口为主。',
'<h2>产后第一周汤品怎么安排？</h2>
<p>很多家庭会在第一周准备大量汤品，但刚生产后的妈妈未必适合马上喝很油的浓汤。第一周汤品更适合清淡、温和、易消化。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>鸡汤可以撇油</li><li>鱼汤适合清淡炖煮</li><li>瘦肉汤可搭配蔬菜</li><li>汤品不是越浓越好</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>产后第一周汤品不宜过油，建议以清淡、温和、容易入口为主。</p>',
'/images/blog/postpartum-week-1-soup-guide.png',
'published',
0,
'2026-09-02 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'postpartum-meal' LIMIT 1),
'产后坐月子可以吃蔬菜吗？',
'postpartum-vegetables-guide',
'产后饮食不应该只吃肉和汤，熟蔬菜也是月子餐中重要的一部分。',
'<h2>产后坐月子可以吃蔬菜吗？</h2>
<p>很多传统观念会减少蔬菜摄入，但产后饮食需要均衡。蔬菜可以煮熟、炖软或清炒，避免生冷吃法。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>选择熟蔬菜</li><li>避免过生冷</li><li>搭配主食和蛋白质</li><li>根据妈妈肠胃反应调整</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>产后饮食不应该只吃肉和汤，熟蔬菜也是月子餐中重要的一部分。</p>',
'/images/blog/postpartum-vegetables-guide.png',
'published',
0,
'2026-09-03 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'postpartum-meal' LIMIT 1),
'月子餐如何做到不油腻又有营养？',
'postpartum-meal-less-oily-guide',
'月子餐不一定要油腻，清爽的烹调方式也可以兼顾营养和恢复。',
'<h2>月子餐如何做到不油腻又有营养？</h2>
<p>很多妈妈产后胃口不稳定，过油的餐食反而会影响食欲。通过食材选择和烹调方式调整，可以让月子餐更舒服。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>汤品撇油</li><li>多用蒸炖煮</li><li>选择瘦肉和鱼肉</li><li>用熟蔬菜增加平衡</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>月子餐不一定要油腻，清爽的烹调方式也可以兼顾营养和恢复。</p>',
'/images/blog/postpartum-meal-less-oily-guide.png',
'published',
0,
'2026-09-04 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'postpartum-recovery' LIMIT 1),
'产后便秘怎么办？饮食上可以注意什么？',
'postpartum-constipation-diet-tips',
'产后便秘较常见，饮食上可以从水分、熟蔬菜、主食和规律餐食入手。',
'<h2>产后便秘怎么办？饮食上可以注意什么？</h2>
<p>产后作息变化、活动减少和饮食结构变化，都可能让妈妈觉得排便不顺。饮食安排可以先从温和调整开始。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>保持水分</li><li>安排熟蔬菜</li><li>选择燕麦、小米、全谷类主食</li><li>不要长期只吃肉和汤</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>产后便秘较常见，饮食上可以从水分、熟蔬菜、主食和规律餐食入手。</p>',
'/images/blog/postpartum-constipation-diet-tips.png',
'published',
0,
'2026-09-05 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'postpartum-recovery' LIMIT 1),
'产后胃口不好怎么安排月子餐？',
'postpartum-low-appetite-meal-guide',
'产后胃口不好时，不建议勉强大补，可以先用少量多餐帮助恢复食欲。',
'<h2>产后胃口不好怎么安排月子餐？</h2>
<p>有些妈妈产后几天胃口较弱，这时候餐食应该更温和、更容易入口。少量多餐比硬吃大份量更实际。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>从粥、汤面、蒸蛋开始</li><li>口味保持清淡</li><li>加餐小份多次</li><li>按妈妈反馈调整菜单</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>产后胃口不好时，不建议勉强大补，可以先用少量多餐帮助恢复食欲。</p>',
'/images/blog/postpartum-low-appetite-meal-guide.png',
'published',
0,
'2026-09-06 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'postpartum-recovery' LIMIT 1),
'剖腹产后第二周怎么吃？',
'c-section-week-2-diet-guide',
'剖腹产后第二周可以逐步增加营养，但仍应注意清淡和易消化。',
'<h2>剖腹产后第二周怎么吃？</h2>
<p>剖腹产妈妈第二周还在恢复阶段，饮食可以增加蛋白质和营养密度，但不要太油腻或太重口味。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>继续选择软烂食物</li><li>逐步增加蛋白质</li><li>汤品保持清爽</li><li>遵循医生或出院指导</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>剖腹产后第二周可以逐步增加营养，但仍应注意清淡和易消化。</p>',
'/images/blog/c-section-week-2-diet-guide.png',
'published',
0,
'2026-09-07 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'breastfeeding-nutrition' LIMIT 1),
'哺乳期夜间加餐吃什么比较方便？',
'breastfeeding-night-snack-guide',
'夜间哺乳容易消耗体力，准备简单温和的加餐可以让妈妈更舒服。',
'<h2>哺乳期夜间加餐吃什么比较方便？</h2>
<p>夜间喂养时，妈妈可能会感到饿或口渴。提前准备容易入口的小份加餐，可以减少临时忙乱。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>小米粥</li><li>燕麦粥</li><li>鸡蛋</li><li>全麦面包</li><li>水果或酸奶</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>夜间哺乳容易消耗体力，准备简单温和的加餐可以让妈妈更舒服。</p>',
'/images/blog/breastfeeding-night-snack-guide.png',
'published',
0,
'2026-09-08 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'breastfeeding-nutrition' LIMIT 1),
'哺乳期可以喝汤吗？怎么喝更合适？',
'breastfeeding-soup-guide',
'哺乳期可以安排汤品，但重点是清淡、规律和妈妈喝得舒服。',
'<h2>哺乳期可以喝汤吗？怎么喝更合适？</h2>
<p>汤品可以作为水分和餐食的一部分，但不需要过分油腻。适合长期喝的汤通常更清爽、更温和。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>清淡汤品更适合日常</li><li>不必追求浓油厚汤</li><li>搭配主食和蛋白质</li><li>根据口味轮换</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>哺乳期可以安排汤品，但重点是清淡、规律和妈妈喝得舒服。</p>',
'/images/blog/breastfeeding-soup-guide.png',
'published',
0,
'2026-09-09 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'pregnancy-nutrition' LIMIT 1),
'孕晚期什么时候开始准备月子餐？',
'third-trimester-postpartum-meal-prep',
'进入孕晚期后，家庭可以开始了解月子餐安排和配送服务。',
'<h2>孕晚期什么时候开始准备月子餐？</h2>
<p>孕晚期准备月子餐，不是要马上决定所有细节，而是先了解配送区域、套餐内容和家庭需求。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>确认预产期</li><li>了解配送区域</li><li>沟通忌口</li><li>提前保存联系方式</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>进入孕晚期后，家庭可以开始了解月子餐安排和配送服务。</p>',
'/images/blog/third-trimester-postpartum-meal-prep.png',
'published',
0,
'2026-09-10 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'pregnancy-nutrition' LIMIT 1),
'预产期前月子餐沟通清单',
'postpartum-meal-booking-checklist',
'预订月子餐前准备好关键信息，可以让沟通更清楚。',
'<h2>预产期前月子餐沟通清单</h2>
<p>很多家庭临近生产才开始沟通月子餐，如果提前整理信息，会更节省时间。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>预产期</li><li>地址</li><li>生产方式预估</li><li>忌口和过敏</li><li>配送时间偏好</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>预订月子餐前准备好关键信息，可以让沟通更清楚。</p>',
'/images/blog/postpartum-meal-booking-checklist.png',
'published',
0,
'2026-09-11 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'baby-care' LIMIT 1),
'新生儿回家第一周，家人要准备什么？',
'newborn-first-week-home-guide',
'宝宝回家第一周，家庭最需要的是稳定节奏和减少临时压力。',
'<h2>新生儿回家第一周，家人要准备什么？</h2>
<p>新生儿回家后，喂养、睡眠、换尿布和妈妈恢复都需要适应。家人可以提前准备基础用品和餐食安排。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>准备常用宝宝用品</li><li>安排妈妈热餐</li><li>减少访客打扰</li><li>记录宝宝喂养和睡眠</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>宝宝回家第一周，家庭最需要的是稳定节奏和减少临时压力。</p>',
'/images/blog/newborn-first-week-home-guide.png',
'published',
0,
'2026-09-12 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'baby-care' LIMIT 1),
'宝宝满月前家庭照护节奏怎么安排？',
'baby-first-month-family-routine',
'满月前家庭照护重点是建立简单、可执行的日常节奏。',
'<h2>宝宝满月前家庭照护节奏怎么安排？</h2>
<p>宝宝满月前，家庭不需要追求完美作息，而是建立基本的照护分工和饮食休息节奏。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>谁负责餐食</li><li>谁负责采购</li><li>谁负责夜间协助</li><li>妈妈什么时候休息</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>满月前家庭照护重点是建立简单、可执行的日常节奏。</p>',
'/images/blog/baby-first-month-family-routine.png',
'published',
0,
'2026-09-13 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'gta-local-guide' LIMIT 1),
'Richmond Hill 月子餐配送怎么选？',
'richmond-hill-postpartum-meal-guide',
'Richmond Hill 家庭选择月子餐时，可以关注配送范围、菜单阶段和沟通效率。',
'<h2>Richmond Hill 月子餐配送怎么选？</h2>
<p>Richmond Hill 华人家庭较多，月子餐需求也比较集中。选择服务时，建议从配送稳定性和菜单是否适合长期食用开始。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>确认是否覆盖地址</li><li>了解配送时间</li><li>看菜单是否分阶段</li><li>确认忌口沟通方式</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>Richmond Hill 家庭选择月子餐时，可以关注配送范围、菜单阶段和沟通效率。</p>',
'/images/blog/richmond-hill-postpartum-meal-guide.png',
'published',
0,
'2026-09-14 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'gta-local-guide' LIMIT 1),
'North York 月子餐配送服务怎么选？',
'north-york-postpartum-meal-guide',
'North York 家庭选择月子餐时，建议提前确认配送区域和餐食安排。',
'<h2>North York 月子餐配送服务怎么选？</h2>
<p>North York 区域较大，不同位置配送安排可能不同。提前确认服务范围可以减少产后临时沟通。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>核对地址</li><li>确认配送频率</li><li>询问套餐内容</li><li>了解调整规则</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>North York 家庭选择月子餐时，建议提前确认配送区域和餐食安排。</p>',
'/images/blog/north-york-postpartum-meal-guide.png',
'published',
0,
'2026-09-15 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'gta-local-guide' LIMIT 1),
'Aurora 月子餐配送服务适合哪些家庭？',
'aurora-postpartum-meal-guide',
'Aurora 家庭如果没有长辈长期帮忙，月子餐配送可以减少产后做饭压力。',
'<h2>Aurora 月子餐配送服务适合哪些家庭？</h2>
<p>Aurora 居住环境相对分散，家庭选择月子餐时更要提前确认配送安排和沟通流程。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>提前确认配送</li><li>了解加热方式</li><li>安排备用餐食</li><li>沟通特殊饮食需求</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>Aurora 家庭如果没有长辈长期帮忙，月子餐配送可以减少产后做饭压力。</p>',
'/images/blog/aurora-postpartum-meal-guide.png',
'published',
0,
'2026-09-16 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'jiahua-news' LIMIT 1),
'加华月子餐如何安排分阶段菜单？',
'jiahua-staged-menu-guide',
'加华月子餐会按产后阶段设计餐食重点，帮助妈妈循序渐进恢复。',
'<h2>加华月子餐如何安排分阶段菜单？</h2>
<p>分阶段菜单的意义，是让第一周、第二周、第三周和第四周有不同饮食重点，而不是每天重复同样的餐食。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>第一周清淡易消化</li><li>第二周逐步增加营养</li><li>第三周均衡支持</li><li>第四周接近日常</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>加华月子餐会按产后阶段设计餐食重点，帮助妈妈循序渐进恢复。</p>',
'/images/blog/jiahua-staged-menu-guide.png',
'published',
0,
'2026-09-17 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'customer-stories' LIMIT 1),
'客户故事：提前准备月子餐让产后生活更从容',
'customer-story-prepared-postpartum-meals',
'一个家庭提前安排月子餐后，产后第一周减少了许多临时压力。',
'<h2>客户故事：提前准备月子餐让产后生活更从容</h2>
<p>很多家庭在宝宝出生后才发现，每天准备热餐比想象中更困难。提前安排月子餐，可以让家人把更多精力放在妈妈和宝宝身上。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>提前确认套餐</li><li>家人分工更清楚</li><li>妈妈每天有稳定热餐</li><li>产后沟通压力更小</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>一个家庭提前安排月子餐后，产后第一周减少了许多临时压力。</p>',
'/images/blog/customer-story-prepared-postpartum-meals.png',
'published',
0,
'2026-09-18 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'customer-stories' LIMIT 1),
'客户故事：第一次坐月子，最需要的不是复杂菜单',
'customer-story-simple-postpartum-meals',
'第一次坐月子的家庭往往会焦虑很多细节，其实最重要的是稳定、温和和可持续。',
'<h2>客户故事：第一次坐月子，最需要的不是复杂菜单</h2>
<p>月子餐不是越复杂越好。对新手家庭来说，清楚的阶段安排和稳定配送往往更有帮助。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>菜单不用过度复杂</li><li>口味要适合长期吃</li><li>配送要稳定</li><li>沟通要清楚</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>第一次坐月子的家庭往往会焦虑很多细节，其实最重要的是稳定、温和和可持续。</p>',
'/images/blog/customer-story-simple-postpartum-meals.png',
'published',
0,
'2026-09-19 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;


INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'postpartum-meal' LIMIT 1),
'月子餐和普通外卖有什么不同？',
'postpartum-meal-vs-takeout',
'月子餐和普通外卖的区别，在于阶段安排、口味温和和产后恢复需求。',
'<h2>月子餐和普通外卖有什么不同？</h2>
<p>普通外卖更强调方便和口味，月子餐更需要考虑妈妈产后的身体状态、阶段饮食和连续食用体验。</p>
<h3>一、这篇文章的重点</h3>
<ul><li>更重视阶段</li><li>口味更温和</li><li>不追求重油重盐</li><li>更适合连续安排</li></ul>
<h3>二、家庭实际安排建议</h3>
<p>每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。</p>
<h3>三、加华月子餐的建议</h3>
<p>加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。</p>
<h3>四、总结</h3>
<p>月子餐和普通外卖的区别，在于阶段安排、口味温和和产后恢复需求。</p>',
'/images/blog/postpartum-meal-vs-takeout.png',
'published',
0,
'2026-09-20 09:00:00')
ON DUPLICATE KEY UPDATE
category_id = VALUES(category_id),
title = VALUES(title),
excerpt = VALUES(excerpt),
content = VALUES(content),
cover_image = VALUES(cover_image),
status = VALUES(status),
is_featured = VALUES(is_featured),
published_at = VALUES(published_at),
updated_at = CURRENT_TIMESTAMP;
