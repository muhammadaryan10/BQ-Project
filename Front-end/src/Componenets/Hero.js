export const Header = () => {
  return (
    <div className="relative " style={styles.container}>
      <div
        className="absolute inset-x-0 bottom-0 align-text-top"
        style={styles.centerContent}
      >
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none font-serif">
            Welcome to this Ultimate Shopping Destination!
          </h2>
          <div>
            <p className="mb-6 text-base text-100 md:text-lg font-bold">
              Are you ready to experience shopping like never before? Look no
              further! This Shopping center is here to redefine your online
              shopping journey. Dive into a captivating realm of fashion,
              technology, home essentials, and so much more. With an exquisite
              range of products curated just for you, we're your one-stop
              destination for all things amazing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "140vh",
    backgroundImage:
      'url("https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  centerContent: {
    textAlign: "top",
  },
};
