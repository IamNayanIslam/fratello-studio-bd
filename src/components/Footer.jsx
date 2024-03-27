const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  // Example usage:
  const currentYear = getCurrentYear();
  return (
    <div className="text-center bg-gray-600 py-3 text-white font-light">
      <div className="md:max-w-screen-2xl mx-auto">
        <p className="">
          All right reserved &copy; Fratello Studio BD {currentYear}
        </p>

        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFratelloStudio&tabs&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=879270317071538"
          width="250"
          height="150"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
