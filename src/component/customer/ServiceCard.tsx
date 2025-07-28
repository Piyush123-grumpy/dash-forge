import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  img: string;
  desc: string;
  price?: string;
  phone?: string;
}

function ServiceCard({
  title,
  img,
  desc,
  price,
  phone = "8054056171",
}: ServiceCardProps) {
  return (
    <div className="w-full max-w-sm mx-auto relative bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-transform duration-400 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] font-sans">
      {/* Image */}
      <div className="overflow-hidden preserve-3d perspective-[1000px]">
        <div className="h-48 relative overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-800 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-[1.05]"
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between min-h-[250px]">
        <div>
          <h3 className="text-xl font-extrabold text-[#003366] mb-3 leading-tight -tracking-[0.5px]">
            {title}
          </h3>
          {price && (
            <p className="text-sm font-bold text-gray-900 mb-4">{price}</p>
          )}

          {/* Description with fixed height */}
          <p className="text-sm text-gray-600 leading-relaxed mb-6 min-h-[60px]">
            {desc}
          </p>
        </div>

        {/* Order Button */}
        <div>
          <Link
            to='/BookingService'
            className="relative  justify-center  overflow-hidden bg-gradient-to-br from-[#18181B] to-[#27272A] text-white rounded-xl px-5 py-2 text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:from-[#27272A] hover:to-[#3F3F46] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
          >
            Order
            <svg
              className="transition-transform duration-300 ease-in-out hover:-rotate-12 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
