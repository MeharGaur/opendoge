const Footer = () => {
  return (
    <footer className="wrapper bottom-0 left-0 right-0 text-violet-3 font-light text-sm">
      <div className="flex justify-between">
        <p className="mr-8 md:mr-20">
          The Premier NFT Marketplace On Dogechain.
        </p>
        <p>
          &copy; &nbsp;
          {new Date().getFullYear()} -{" "}
          <a href="https://moonman.live" target="_blank" rel="noopener noreferrer">
            OpenDoge
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
