CREATE TABLE IF NOT EXISTS blog_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT NULL,
  content LONGTEXT NOT NULL,
  cover_image VARCHAR(255) NULL,
  status ENUM('draft', 'published') DEFAULT 'draft',
  is_featured TINYINT(1) DEFAULT 0,
  published_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES blog_categories(id)
);

INSERT INTO blog_categories (name, slug) VALUES
('月子餐知识', 'postpartum-meal'),
('产后恢复', 'postpartum-recovery'),
('宝宝护理', 'baby-care'),
('孕期营养', 'pregnancy-nutrition'),
('客户故事', 'customer-stories'),
('加华动态', 'jiahua-news');