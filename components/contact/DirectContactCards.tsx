import { directContacts } from "@/data/contact/contactData";

export default function DirectContactCards() {
  return (
    <div className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
        Direct Contact
      </p>
      <h3 className="mt-3 text-2xl font-bold text-[#1F4E4C]">
        也可以直接联系
      </h3>
      <p className="mt-4 leading-7 text-gray-600">
        如果您希望更快沟通，也可以直接通过微信、电话或邮箱联系我们。
      </p>

      <div className="mt-6 space-y-4">
        {directContacts.map((item) => (
          <div key={item.label} className="rounded-2xl bg-white p-5">
            <p className="text-sm font-semibold text-[#B8915D]">{item.label}</p>
            <p className="mt-1 text-lg font-bold text-[#1F4E4C]">{item.value}</p>
            <p className="mt-2 text-sm text-gray-600">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
