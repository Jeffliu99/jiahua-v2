-- Fix Blog Chinese text mojibake for jiahua_db
-- Run this from project root with:
-- cmd /c "docker exec -i jiahua_mysql mysql -u jiahua_user -pjiahua_password jiahua_db < database\fix_blog_encoding.sql"

ALTER DATABASE jiahua_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE blog_categories CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE blog_posts CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

UPDATE blog_categories SET name = '月子餐知识', slug = 'postpartum-meal' WHERE id = 1;
UPDATE blog_categories SET name = '产后恢复', slug = 'postpartum-recovery' WHERE id = 2;
UPDATE blog_categories SET name = '宝宝护理', slug = 'baby-care' WHERE id = 3;
UPDATE blog_categories SET name = '孕期营养', slug = 'pregnancy-nutrition' WHERE id = 4;
UPDATE blog_categories SET name = '客户故事', slug = 'customer-stories' WHERE id = 5;
UPDATE blog_categories SET name = '加华动态', slug = 'jiahua-news' WHERE id = 6;

-- Fix the test blog post if it exists
UPDATE blog_posts
SET
  title = '月子餐第一周怎么吃？',
  excerpt = '了解产后第一周月子餐的基本原则。',
  content = '这里是文章正文内容。第一周建议以温和、易消化为主。'
WHERE slug = 'postpartum-meal-week-1';
