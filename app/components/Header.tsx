export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold text-[#1F4E4C]">
            加华月子餐
          </h2>

          <p className="text-xs text-[#D6B37F]">
            Jiahua Postpartum Nutrition
          </p>
        </div>

        <nav className="flex gap-8">
          <span>首页</span>
          <span>服务方案</span>
          <span>营养理念</span>
          <span>妈妈故事</span>
          <span>关于加华</span>
        </nav>

        <button className="bg-[#1F4E4C] text-white px-6 py-3 rounded-full">
          预约营养顾问
        </button>

      </div>
    </header>
  );
}