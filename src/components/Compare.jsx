export default function Compare() {
  return (
    <section className="w-full flex flex-col p-4">
      <h3 className="text-xl text-center text-dark-100 font-semibold">
        The ultimate upgrade
      </h3>

      <h2 className="text-white text-4xl text-center md:text-8xl font-bold mt-2">
        Most wanted.
      </h2>

      <p className="max-w-4xl mx-auto text-center text-sm md:text-xl text-dark-100 font-semibold mt-4">
        iPhone 18 Pro is{" "}
        <span className="font-bold text-white">
          purpose-built for unprecedented performance
        </span>
        .{" "}
        <span className="md:hidden">
          Featuring faster charging, the A20 Pro chip for intensive AI
          workloads, and a 48MP Fusion camera with variable aperture. All in a
          durable unibody with Ceramic Shield.
        </span>
        <span className="hidden md:inline">
          Get up to 6 more hours of video playback on iPhone 18 Pro Max compared
          with iPhone 17 Pro Max.4 Faster wired charging.5 Vapor-cooled A20 Pro
          chip to{" "}
          <span className="font-bold text-white">
            handle even the most intensive AI workloads
          </span>
          . New 48MP Fusion Main camera with variable aperture for
          better-quality low-light photos and video and greater depth of field.
          All in a durable unibody with Ceramic Shield front and back —
          everything a pro wants.
        </span>
      </p>

      <hr className="text-white my-8 w-full max-w-7xl mx-auto" />

      <p className="text-center text-xl text-dark-100 font-semibold">
        Compare with <span className="font-bold text-white">iPhone 17 Pro</span>
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:gap-18 md:mx-auto mt-8 gap-8">
        <div className="flex flex-col items-start md:items-center">
          <p>up to</p>
          <span className="font-bold text-white text-2xl">12 more hours</span>
          <p className="mt-1">
            video playback on <br className="md:hidden" /> iPhone 18 Pro Max
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <p>up to</p>
          <span className="font-bold text-white text-2xl">20% faster</span>
          <p className="mt-1">6-core CPU</p>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <p>up to</p>
          <span className="font-bold text-white text-2xl">40% faster</span>
          <p className="mt-1">7-core GPU</p>
        </div>
      </div>
      <img
        className="mt-8 w-full max-w-2xl mx-auto"
        src="/iphone.jpg"
        alt="iPhone 18 Pro"
        width={800}
        height={600}
        loading="lazy"
      />
    </section>
  );
}
