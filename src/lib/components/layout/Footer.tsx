const Footer = () => {
  return (
    <footer className="wrapper lg:absolute bottom-0 left-0 right-0 text-violet-3 font-light text-sm">
      <div className="flex justify-between">
        <p className="mr-8 md:mr-20">
          Nothing on this website is financial advice. Always remember to do your own research. Interacting with DeFi products is risky.
        </p>
        <p>
          &copy; &nbsp;
          {new Date().getFullYear()} -{" "}
          <a href="https://moonman.live" target="_blank" rel="noopener noreferrer">
            The MoonMan Project
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
