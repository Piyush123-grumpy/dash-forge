import { Link } from "react-router-dom";

function BookService() {
  return (
    <div className="max-w-2xl mx-auto my-20 px-8 py-10 bg-white border border-gray-200 rounded-2xl shadow-lg">
      {/* Left: Order Info */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Details</h2>
        <div className="w-50 pl-4 py-10">
          <img
            src="https://media.istockphoto.com/id/1067496776/photo/top-view-of-drill-tool-and-another-equipment-on-wood-table-furniture-assembly-improvement-or.jpg?s=612x612&w=0&k=20&c=pW5vu2TK9yaOvqLG8jktB59DRIvVdr6eAVnI72RwPPI="
            alt="Furniture Assembly"
            className="w-full h-auto rounded-md shadow-sm object-cover"
          />
        </div>
        <div className="text-gray-700 mb-2">
          <span className="font-semibold">Title:</span> Furniture Assembly
        </div>
        <div className="text-gray-600 mb-2">
          <span className="font-semibold">Description:</span> Get your IKEA or
          custom furniture assembled at home quickly by our experts.
        </div>
        <div className="text-gray-700 font-semibold text-lg">Price: $29.99</div>

      </div>
      <div className="py-10">
          <Link
            to='/BookingService'
            className="relative  justify-center  overflow-hidden bg-gradient-to-br from-[#18181B] to-[#27272A] text-white rounded-xl px-5 py-2 text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:from-[#27272A] hover:to-[#3F3F46] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
          >
            Purchase
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
  );
}

export default BookService;
