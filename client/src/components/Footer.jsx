import logo from '/logo2.png';

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="footer_logo"
              className="w-[10rem] md:w-[12rem]"
            />
            <p className="text-sm md:text-base text-gray-600 mt-4 text-center md:text-left">
              We are dedicated to providing the best livestream video experience for our users. Enjoy high-quality RTSP video streams with custom overlays and easy-to-use controls.
            </p>
          </div>

          {/* About */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-[#ff0366]">About</p>
            <p className="mt-2">
              <a href="#" className="text-gray-600 hover:text-[#ff0366]">Privacy Policy</a>
            </p>
            <p className="mt-2">
              <a href="#" className="text-gray-600 hover:text-[#ff0366]">Terms of Use</a>
            </p>
          </div>

          {/* Our Features */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-[#ff0366]">Our Features</p>
            <p className="mt-2 text-gray-600">Watch Live Stream</p>
            <p className="mt-2 text-gray-600">Use Custom Overlays</p>
            <p className="mt-2 text-gray-600">Update Custom Overlays</p>
          </div>
        </div>

        {/* Privacy Policy and Credits */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-base">
            Privacy Policy | © {new Date().getFullYear()} <br />
            Design by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://naveedsportfolio.netlify.app"
              className="text-[#ff0366] hover:underline"
            >
              Naveed Qadir
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
