import ServiceCard from "@/component/customer/ServiceCard";

function BookVendor() {
  return (
    <div className="p-10 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "AC Repair & Servicing",
            img: "https://media.istockphoto.com/id/1437896577/photo/air-conditioner-technician-repairing-central-air-conditioning-system-with-outdoor-tools.jpg?s=612x612&w=0&k=20&c=Vt5lo-He1rM3_d-G5GHaFVYD0lyMGAtsUccuwNaCe08=",
            desc: "Professional air conditioning repair with same-day service. Certified technicians available for home visits.",
            price: "$49.99",
          },
          {
            title: "Full Home Cleaning",
            img: "https://t3.ftcdn.net/jpg/04/21/55/50/360_F_421555010_VDODYiU9sAvvhxWKYgnEp0YahXoPLSCg.jpg",
            desc: "Deep cleaning for your entire home including kitchen, bathrooms, and windows. Book now for a sparkling home.",
            price: "$129.99",
          },
          {
            title: "Electrician On Call",
            img: "https://media.istockphoto.com/id/1516692331/photo/electrician-measurements-with-multimeter-testing-current-electric-in-control-panel-safety.jpg?s=612x612&w=0&k=20&c=Qy0TnliUysuATIxfAMjdUp9Z-KEr0w2CqJz3Palixgc=",
            desc: "Fix switches, fans, lights, and wiring issues at home. Available 7 days a week.",
            price: "$39.99",
          },
          {
            title: "Plumbing Fix & Install",
            img: "https://media.istockphoto.com/id/918319088/photo/plumber-at-work-in-a-bathroom-plumbing-repair-service-assemble-and-install-concept.jpg?s=612x612&w=0&k=20&c=eYng98h3oV3RZCJBngyj8vPAGLOnnkf7MMa9klg_JS0=",
            desc: "Leakage, sink issues, pipe blockages or full plumbing setup. Affordable and reliable.",
            price: "$59.99",
          },
          {
            title: "Furniture Assembly",
            img: "https://media.istockphoto.com/id/1067496776/photo/top-view-of-drill-tool-and-another-equipment-on-wood-table-furniture-assembly-improvement-or.jpg?s=612x612&w=0&k=20&c=pW5vu2TK9yaOvqLG8jktB59DRIvVdr6eAVnI72RwPPI=",
            desc: "Get your IKEA or custom furniture assembled at home quickly by our experts.",
            price: "$29.99",
          },
          {
            title: "CCTV Installation",
            img: "https://static.vecteezy.com/system/resources/thumbnails/029/624/737/small_2x/technician-installing-cctv-camera-for-security-ai-generative-photo.jpg",
            desc: "Secure your home or office with our professional CCTV installation packages.",
            price: "$149.99",
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
    </div>
  );
}

export default BookVendor;
