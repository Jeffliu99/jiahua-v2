-- seed_blog_posts.sql
-- Import with:
-- cmd /c "docker exec -i jiahua_mysql mysql --default-character-set=utf8mb4 -u jiahua_user -pjiahua_password jiahua_db < database\seed_blog_posts.sql"
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS=1;

-- Ensure categories exist
INSERT INTO blog_categories (name, slug) VALUES ('产后恢复', 'postpartum-recovery') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('月子餐知识', 'postpartum-meal') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('哺乳期营养', 'breastfeeding-nutrition') ON DUPLICATE KEY UPDATE name = VALUES(name);
INSERT INTO blog_categories (name, slug) VALUES ('GTA 本地指南', 'gta-local-guide') ON DUPLICATE KEY UPDATE name = VALUES(name);

-- Seed blog posts

INSERT INTO blog_posts
(category_id, title, slug, excerpt, content, cover_image, status, is_featured, published_at)
VALUES
((SELECT id FROM blog_categories WHERE slug = 'postpartum-meal' LIMIT 1),
'加拿大坐月子吃什么？GTA 华人妈妈产后饮食指南',
'postpartum-meals-in-canada',
'在加拿大坐月子，既要考虑传统调理习惯，也要适应本地生活节奏。本文整理产后不同阶段的饮食重点，帮助妈妈和家人更清楚地安排月子餐。',
'<h2>加拿大坐月子吃什么？GTA 华人妈妈产后饮食指南</h2>
<p>在加拿大坐月子，很多家庭会同时面对两个问题：一方面希望保留熟悉的中式月子饮食习惯，另一方面又需要适应本地生活节奏、食材选择、配送安排和家庭照护条件。</p>
<p>月子餐不是简单地“大补”，而是按照产后恢复阶段，逐步安排温和、均衡、容易消化且能支持体力的餐食。</p>
<h3>一、产后饮食先看阶段</h3>
<p>产后第一周，饮食重点适合放在清淡、温和、容易消化上。产后第二周，可以在第一周基础上逐步增加蛋白质和营养密度。产后第三周以后，如果妈妈状态稳定，可以进一步增加餐食变化，让饮食更接近日常但仍保持温和。</p>
<h3>二、在 GTA 坐月子要考虑现实安排</h3>
<ul><li>是否有人长期帮忙做饭</li><li>是否正在哺乳</li><li>是否剖腹产或顺产</li><li>有没有忌口、过敏或特殊饮食习惯</li><li>配送时间和餐食加热是否方便</li></ul>
<h3>三、月子餐的基本搭配</h3>
<p>比较稳妥的月子餐组合通常包含主食、蛋白质、熟蔬菜、汤品和适量加餐。主食可以选择米饭、粥、面线、燕麦、小米、紫米等；蛋白质可以选择鸡肉、鱼肉、瘦肉、鸡蛋、豆腐等；蔬菜建议以熟食为主，避免过多生冷。</p>
<h3>四、不要一开始就过度油腻</h3>
<p>很多家庭一想到月子餐，就会想到大量汤品和补品。但对刚生产的妈妈来说，吃得舒服和规律，比吃得很重更重要。汤品可以撇油，肉类选择较瘦的部位，口味保持温和。</p>
<h3>五、总结</h3>
<p>加拿大坐月子不需要完全复制某一种固定模式。更实际的做法是按照妈妈的身体状态、家庭照护条件和饮食接受程度来安排月子餐。加华月子餐希望帮助 GTA 华人家庭把产后饮食安排得更清楚、更稳定，也更容易执行。</p>',
'/images/blog/postpartum-meals-in-canada.png',
'published',
1,
'2026-08-01 09:00:00')
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
'剖腹产后饮食安排指南：产后恢复期怎么吃更舒服？',
'c-section-recovery-diet',
'剖腹产后的饮食安排需要更注重温和、清淡和易消化。了解术后不同阶段的餐食重点，有助于家庭更好地照顾妈妈。',
'<h2>剖腹产后饮食安排指南：产后恢复期怎么吃更舒服？</h2>
<p>剖腹产后，妈妈的身体需要时间恢复。相比顺产，剖腹产妈妈在术后初期可能更需要注意餐食的清淡、软烂和易消化。</p>
<h3>一、先从温和易消化开始</h3>
<p>刚出院或恢复初期，可以优先选择粥、汤面、蒸蛋、软饭、清淡汤品和炖软的食材。避免一开始吃得过油、过咸或过于厚重。</p>
<h3>二、逐步增加蛋白质</h3>
<ul><li>鸡肉</li><li>鱼肉</li><li>瘦肉</li><li>鸡蛋</li><li>豆腐</li></ul>
<p>蛋白质有助于日常营养补充，但不需要一次吃很多。少量多餐、循序渐进会更舒服。</p>
<h3>三、不要忽略蔬菜和水分</h3>
<p>产后饮食不只是汤和肉，也需要熟蔬菜、主食和足够水分。蔬菜可以煮软、炖软或炒熟，帮助饮食更均衡。</p>
<h3>四、家庭照护要灵活调整</h3>
<p>如果妈妈出现胃口差、腹胀、反胃或不舒服，菜单应及时调整。具体饮食进度仍应参考医生或医院出院指导。</p>
<h3>五、总结</h3>
<p>剖腹产后的饮食重点是温和、规律、容易消化，并在身体逐步恢复后增加营养密度。月子餐应服务于恢复，而不是让妈妈勉强进补。</p>',
'/images/blog/c-section-recovery-diet.png',
'published',
0,
'2026-08-03 09:00:00')
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
'哺乳期妈妈应该如何补充营养？',
'breastfeeding-nutrition-guide',
'哺乳期饮食不仅关系到妈妈体力恢复，也影响日常照护节奏。本文整理哺乳期营养搭配的常见原则和注意事项。',
'<h2>哺乳期妈妈应该如何补充营养？</h2>
<p>哺乳期妈妈每天既要恢复体力，也要照顾宝宝，因此饮食要比平时更注重规律、均衡和水分补充。</p>
<h3>一、饮食要多样化</h3>
<p>哺乳期不建议只靠单一汤品或补品。更好的方式是安排主食、蛋白质、熟蔬菜、水果、奶类或替代品，让营养来源更全面。</p>
<h3>二、蛋白质要稳定摄入</h3>
<ul><li>鱼肉</li><li>鸡肉</li><li>瘦肉</li><li>鸡蛋</li><li>豆腐和豆制品</li></ul>
<p>这些食材可以分散到正餐和加餐中，不需要集中在一餐吃太多。</p>
<h3>三、水分要跟上</h3>
<p>哺乳妈妈容易口渴。可以准备温水、清淡汤品、粥品或适合个人口味的热饮。重点是按需要规律补充。</p>
<h3>四、加餐很重要</h3>
<p>夜间喂养和睡眠不足会消耗体力。可以准备燕麦粥、小米粥、鸡蛋、全麦面包、水果或酸奶等方便加餐。</p>
<h3>五、总结</h3>
<p>哺乳期营养不是靠某一种食物解决，而是靠稳定、均衡、多样化的日常饮食来支持妈妈和宝宝的生活节奏。</p>',
'/images/blog/breastfeeding-nutrition-guide.png',
'published',
0,
'2026-08-05 09:00:00')
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
'GTA 月子餐如何选择？给新手家庭的实用指南',
'gta-postpartum-meal-service-guide',
'在 Markham、Richmond Hill、North York、Aurora 等地区选择月子餐服务时，建议重点关注菜单安排、配送范围、沟通流程和服务稳定性。',
'<h2>GTA 月子餐如何选择？给新手家庭的实用指南</h2>
<p>在 GTA 地区选择月子餐服务，很多家庭会关注价格、菜单、配送和口碑。但真正适合的月子餐，不只是菜品丰富，更要符合妈妈的恢复阶段和家庭实际需求。</p>
<h3>一、先看配送范围</h3>
<p>选择月子餐前，建议先确认是否覆盖你的居住区域，例如 Markham、Richmond Hill、North York、Aurora、Vaughan、Scarborough 等。</p>
<h3>二、再看菜单是否分阶段</h3>
<p>好的月子餐不应该每天都一样，也不应该一开始就大补。第一周、第二周、第三周和第四周的饮食重点应有所不同。</p>
<h3>三、沟通是否清楚</h3>
<ul><li>能否说明套餐内容</li><li>能否备注忌口</li><li>是否方便确认配送时间</li><li>是否有清楚的付款和取消规则</li></ul>
<h3>四、口味要适合长期吃</h3>
<p>月子餐通常不是吃一两天，而是连续数周。口味太重或太油，妈妈可能很快吃腻或不舒服。</p>
<h3>五、总结</h3>
<p>选择 GTA 月子餐服务时，重点不只是价格，而是配送稳定、菜单有阶段、沟通清楚、餐食温和且适合妈妈长期食用。</p>',
'/images/blog/gta-postpartum-meal-service-guide.png',
'published',
0,
'2026-08-07 09:00:00')
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
'顺产后 30 天饮食建议：从第一周到第四周怎么安排？',
'natural-birth-30-day-diet-guide',
'顺产后的恢复节奏通常循序渐进。本文按 30 天分阶段整理饮食重点，帮助家庭更有方向地准备产后餐食。',
'<h2>顺产后 30 天饮食建议：从第一周到第四周怎么安排？</h2>
<p>顺产后的饮食安排可以按阶段进行。每一周的身体状态不同，餐食重点也可以逐步调整。</p>
<h3>第一周：清淡易消化</h3>
<p>第一周建议选择粥、汤面、蒸蛋、清淡汤品和软烂食物。重点是让妈妈恢复胃口，吃得舒服。</p>
<h3>第二周：逐步增加营养</h3>
<p>第二周可以适度增加鱼肉、鸡肉、瘦肉、豆腐、熟蔬菜和全谷类主食，让营养密度慢慢提高。</p>
<h3>第三周：均衡和规律</h3>
<p>第三周可以更重视餐食多样化和规律加餐，帮助妈妈维持体力和日常照护节奏。</p>
<h3>第四周：接近日常但仍温和</h3>
<p>第四周可以逐渐接近日常饮食，但仍建议避免过油、过咸和过度刺激的吃法。</p>
<h3>总结</h3>
<p>顺产后 30 天饮食的关键是循序渐进。每个家庭都可以根据妈妈状态和口味调整，不必追求固定菜单。</p>',
'/images/blog/natural-birth-30-day-diet-guide.png',
'published',
0,
'2026-08-10 09:00:00')
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
'月子餐提前多久预订比较合适？',
'when-to-book-postpartum-meals',
'很多家庭会在预产期前才开始了解月子餐。提前规划可以帮助沟通配送范围、菜单偏好和特殊需求。',
'<h2>月子餐提前多久预订比较合适？</h2>
<p>很多家庭会等到临近预产期才开始找月子餐，但如果能提前规划，通常会更从容。</p>
<h3>一、为什么建议提前了解？</h3>
<ul><li>确认配送区域</li><li>了解套餐内容</li><li>沟通忌口和特殊需求</li><li>安排预产期前后的弹性</li><li>避免临时找不到合适服务</li></ul>
<h3>二、预产期有变怎么办？</h3>
<p>宝宝出生时间可能提前或延后，所以预订月子餐时，建议提前问清楚调整规则。</p>
<h3>三、需要准备哪些信息？</h3>
<p>家庭可以提前准备地址、预产期、生产医院、饮食偏好、是否忌口、是否哺乳、是否剖腹产等信息。</p>
<h3>四、总结</h3>
<p>月子餐越早了解，家人越容易安排。尤其在 GTA 地区，提前确认配送和菜单，可以减少产后临时沟通的压力。</p>',
'/images/blog/when-to-book-postpartum-meals.png',
'published',
0,
'2026-08-12 09:00:00')
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
'Markham 月子餐配送服务怎么选？',
'markham-postpartum-meal-delivery-guide',
'Markham 华人家庭较多，月子餐需求也更集中。本文整理选择本地月子餐服务时可以关注的几个重点。',
'<h2>Markham 月子餐配送服务怎么选？</h2>
<p>Markham 有很多华人家庭，对月子餐的需求也比较集中。选择配送服务时，建议关注餐食质量，也要关注配送稳定性和沟通效率。</p>
<h3>一、先确认配送区域和时间</h3>
<p>同样在 Markham，不同社区的配送安排可能不同。建议先确认是否覆盖你的地址，以及每天大概配送时间。</p>
<h3>二、菜单是否适合连续吃</h3>
<p>月子餐通常要连续吃数周，因此菜单需要有变化，也要避免太油腻或太单一。</p>
<h3>三、是否可以备注忌口</h3>
<p>如果妈妈有不吃的食材、过敏、特殊口味或生产方式不同，最好提前沟通。</p>
<h3>四、服务是否稳定</h3>
<p>稳定配送、清楚沟通和及时确认，比单纯菜品数量更重要。</p>
<h3>五、总结</h3>
<p>选择 Markham 月子餐配送服务时，建议综合考虑配送、菜单、沟通和妈妈的真实饮食感受。</p>',
'/images/blog/markham-postpartum-meal-delivery-guide.png',
'published',
0,
'2026-08-15 09:00:00')
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
'月子餐第二周怎么吃？产后第二周饮食安排指南',
'postpartum-meal-week-2-guide',
'产后第二周，妈妈的身体开始逐步恢复，饮食可以在第一周清淡易消化的基础上，慢慢增加营养密度。本文整理产后第二周月子餐的安排重点。',
'<h2>月子餐第二周怎么吃？产后第二周饮食安排指南</h2>
<p>产后第二周，很多妈妈已经慢慢度过最初几天的不适应，身体开始进入更稳定的恢复阶段。相比第一周，第二周的饮食可以在“清淡、温和、易消化”的基础上，逐步增加营养密度。</p>
<h3>一、第二周饮食的核心原则</h3>
<ul><li><strong>继续保持温和清淡：</strong>餐食仍以温热、清淡、容易接受为主。</li><li><strong>适度增加蛋白质：</strong>可以安排鸡肉、鱼肉、瘦肉、鸡蛋和豆腐。</li><li><strong>增加营养密度：</strong>适度搭配熟蔬菜、全谷类主食和温和汤品。</li><li><strong>保持水分：</strong>如果正在哺乳，可以准备汤水、粥品和温水。</li></ul>
<h3>二、第二周可以比第一周增加什么？</h3>
<p>如果妈妈状态不错，可以逐步增加鸡汤、鱼汤、清蒸鱼、炖鸡肉、软饭、紫米饭、熟青菜和南瓜等食材。</p>
<h3>三、不建议吃得太油腻</h3>
<p>第二周可以开始补，但不建议突然吃得太油。汤品可以撇油，肉类选择偏瘦部位，烹调方式以蒸、炖、煮为主。</p>
<h3>四、总结</h3>
<p>产后第二周的月子餐重点是：继续清淡、适度增加营养、补充体力、保持水分，并根据妈妈每天的反馈调整。</p>',
'/images/blog/postpartum-meal-week-2.png',
'published',
0,
'2026-08-18 09:00:00')
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
'月子餐第三周怎么吃？产后第三周饮食安排指南',
'postpartum-meal-week-3-guide',
'产后第三周，妈妈的身体恢复进入更稳定阶段，饮食可以在前两周温和调理的基础上，进一步增加营养均衡和体力支持。',
'<h2>月子餐第三周怎么吃？产后第三周饮食安排指南</h2>
<p>产后第三周，很多妈妈已经比前两周更适应产后生活。这个阶段的月子餐，可以在第一周清淡易消化和第二周逐步增加营养的基础上，进一步强调营养均衡、体力支持和饮食多样化。</p>
<h3>一、第三周饮食的核心重点</h3>
<ul><li><strong>继续保持温和：</strong>餐食仍然以温热、清淡、容易接受为主。</li><li><strong>增加营养密度：</strong>可以适度增加蛋白质、铁质、蔬菜和全谷类食材。</li><li><strong>支持日常体力：</strong>妈妈需要照顾宝宝，也可能正在哺乳，所以餐食要稳定、有规律。</li></ul>
<h3>二、第三周可以增加哪些食材？</h3>
<p>可以考虑鸡肉、鱼肉、瘦肉、鸡蛋、豆腐、小米、燕麦、糙米、紫米、南瓜、胡萝卜、菠菜、菌菇等食材。</p>
<h3>三、仍然不要过度油腻</h3>
<p>过多油脂可能让妈妈觉得胃口差、口干、反胃或不舒服。比较稳妥的做法是汤品先撇油，烹调以蒸、炖、煮为主。</p>
<h3>四、总结</h3>
<p>第三周可以从恢复胃口和逐步进补，进入均衡支持阶段。这个阶段不是突然大补，而是让餐食更有营养、更有变化，也更贴近日常生活。</p>',
'/images/blog/postpartum-meal-week-3.png',
'published',
0,
'2026-08-20 09:00:00')
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
