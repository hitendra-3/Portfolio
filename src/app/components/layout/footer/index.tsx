import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>
          <div className="flex items-center justify-between w-full flex-col sm:flex-row gap-3">
            <p className="text-secondary text-sm sm:text-base hover:text-primary transition-colors duration-300e">
              © 2026 Hitendra S. All rights reserved.
            </p>
            <button
              type="button"
              className="text-secondary text-sm sm:text-base hover:text-primary transition-colors duration-300"
            >
              Let’s Connect & Collaborate | Open for Internships
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
