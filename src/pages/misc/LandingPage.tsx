
import ServiceCard from "@/component/customer/ServiceCard";

function LandingPage() {
  return (
    <div className="bg-gray-100 text-[#222] font-[Segoe UI,sans-serif]">
      <header
        className="text-white text-center p-10 md:p-24 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.squarespace-cdn.com/content/v1/5ee114c6d1f6dc1e425aab2f/e4a13839-5437-46f4-ab3f-abd27e29b113/Sabor+Piri+Piri+V-101.JPG')`,
        }}
      >
        <h1 className="text-4xl md:text-6xl mb-4 shadow-md">
          Connect. Post. Get Things Done — Smarter.
        </h1>
        <p className="text-lg max-w-2xl mx-auto shadow-sm">
          A platform where service providers post jobs and clients find the
          right talent for the task. Whether you're offering services or hiring
          for one, we make it easy to connect, collaborate, and complete work —
          all in one place.
        </p>
      </header>

      <section className="max-w-4xl my-10 mx-auto px-4 py-16 bg-white rounded-lg shadow mb-10">
        <h2 className="text-2xl text-[#003366] text-center mb-10">
          About Service
        </h2>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpglXFPMe5L2uAHIE2gtlOGne66imZ24bvIg&s"
            alt="Shannon Conley"
            className="w-48 float-right ml-6 mb-4 max-sm:float-none max-sm:mx-auto max-sm:mb-6 max-sm:w-36"
          />
          <p className="text-lg leading-relaxed px-10">
            Our platform empowers skilled vendors to showcase their services and
            connect with customers seeking reliable help. Whether you're looking
            to hire talent or find new gigs, we simplify collaboration and
            ensure successful outcomes every time.
          </p>
        </div>
      </section>

      <section className="max-w-[90vw] mx-auto px-4 py-16 bg-white rounded-lg shadow mb-10 ">
        <h2 className="text-2xl text-[#003366] text-center mb-10">
          Available Vendors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {[
            {
              title: "Lake Nacimiento Rentals",
              img: "https://i.ibb.co/PZMgG9TJ/Naci-lake.webp",
              desc: "Vacation-style lakeside rentals perfect for families or weekend getaways. Call or email for availability, pricing, and more info.",
            },
            {
              title: "464 Arbor Ct, Simi Valley, CA",
              img: "https://photos.zillowstatic.com/fp/c5115698a11d2cee53b6d69a6ecbcf63-cc_ft_768.webp",
              desc: "Spacious family home with modern amenities, managed by Lightfoot Property Management. Rent includes deposit of $4,400. Lease terms upon inquiry.",
              price: "$4,400/mo – 3 Bed, 2.5 Bath • 2,069 sq ft",
            },
             {
              title: "Lake Nacimiento Rentals",
              img: "https://i.ibb.co/PZMgG9TJ/Naci-lake.webp",
              desc: "Vacation-style lakeside rentals perfect for families or weekend getaways. Call or email for availability, pricing, and more info.",
            },
            {
              title: "464 Arbor Ct, Simi Valley, CA",
              img: "https://photos.zillowstatic.com/fp/c5115698a11d2cee53b6d69a6ecbcf63-cc_ft_768.webp",
              desc: "Spacious family home with modern amenities, managed by Lightfoot Property Management. Rent includes deposit of $4,400. Lease terms upon inquiry.",
              price: "$4,400/mo – 3 Bed, 2.5 Bath • 2,069 sq ft",
            },
          ].map((rental, idx) => (
            <>
              <ServiceCard
                key={idx}
                title={rental.title}
                img={rental.img}
                desc={rental.desc}
                price={rental.price}
              />
            </>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm bg-gray-300 py-4">
        <p>© 2025 Shannon Conley | DRE #01719855</p>
        <p>
          <a href="tel:8054056171">(805) 405-6171</a> &bull;{" "}
          <a href="mailto:shannonconley4homes@gmail.com">
            shannonconley4homes@gmail.com
          </a>
        </p>
        <p>
          Office: Property Pros Realty & Management, 1227 Park St, Suite D, Paso
          Robles, CA 93446
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
