export default function Footer() {
  return (
    <footer className="bg-[#173D3B] text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h3 className="text-2xl font-bold mb-4">
              加华月子餐
            </h3>

            <p className="text-white/70 leading-8 mb-4">
              为新生命而喜悦，
              为妈妈的恢复而用心。
            </p>

            <p className="text-white/60 text-sm leading-7">
              加华月子餐融合传统产后调理智慧与现代营养科学，
              为加拿大华人家庭提供专业的产后营养支持服务。
            </p>

          </div>

          {/* Services */}
          <div>

            <h4 className="text-lg font-semibold mb-4">
              服务方案
            </h4>

            <ul className="space-y-3 text-white/70">

              <li>30天月子餐方案</li>

              <li>剖腹产恢复方案</li>

              <li>哺乳期营养方案</li>

              <li>高端定制方案</li>

            </ul>

          </div>

          {/* About */}
          <div>

            <h4 className="text-lg font-semibold mb-4">
              关于加华
            </h4>

            <ul className="space-y-3 text-white/70">

              <li>品牌故事</li>

              <li>营养理念</li>

              <li>妈妈故事</li>

              <li>常见问题</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-lg font-semibold mb-4">
              <a href="/about#contact" className="text-white">
                联系我们
              </a>
            </h4>

            <ul className="space-y-3 text-white/70">

              <li>📍 Greater Toronto Area</li>

              <li>📞 905-XXX-XXXX</li>

              <li>✉️ info@jiahuameal.ca</li>

              <li>💬 微信客服咨询</li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-white/60">
              © 2026 加华月子餐 Jiahua Postpartum Nutrition.
              All Rights Reserved.
            </p>

            <p className="text-sm text-white/50">
              专业产后营养支持 ｜ GTA地区配送服务
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}