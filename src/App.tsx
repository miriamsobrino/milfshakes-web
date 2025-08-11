import "./App.css";
import { RiShoppingBag4Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        scrub: 1,
        start: "top top", // empieza cuando la parte superior de #logo-mask toca el top del viewport
        end: "+=2000",
      },
    });

    tl.to("#banner-web", { duration: 0.5, scale: 1.1, opacity: 0 })
      .to("#logo-mask", { maskSize: "clamp(20vh,25%, 30vh)" }, "<")
      .to("#btn-shop", { opacity: 0, duration: 0.3 }, "<")
      .to("#logo-mask", {
        translateY: "-427px",
        translateX: "-55px",
        duration: 0.5,
      })
      .to("#logo-mask", { scale: 0.16, duration: 0.3 }, "<")
      .to(
        "#img-3",
        {
          translateX: "400px",
          opacity: 1,
          rotation: "-3px",
        },
        "<"
      )
      .to("#img-2", { translateX: "-400px", opacity: 1, rotation: "3px" }, "<");
  }, []);

  return (
    <div className="relative w-full h-screen  ">
      <div className="noise-overlay h-[300vh] w-full bg-amber-400 z-50"></div>
      <header className="w-full items-center flex  justify-center bg-transparent  ">
        <RxHamburgerMenu
          className=" top-8 left-20 fixed text-white z-10 "
          size={28}
          strokeWidth={0.3}
        />

        <img
          src="/logo-milfshakes-white.webp"
          alt="Logo MilfShakes"
          className="w-60 z-20 fixed  top-8 "
        />

        <RiShoppingBag4Line
          className=" top-8 right-20 fixed text-white z-10 "
          size={28}
        />
      </header>
      <section
        id="logo-mask"
        className="bg-red-700 h-screen items-center flex flex-col gap-4 fixed  w-full"
      >
        <div className="relative w-full h-screen  ">
          <img
            id="banner-web"
            src="/banner-home.webp"
            alt="Banner home última colección"
            className=" z-0  w-full "
          />

          <button
            id="btn-shop"
            className="absolute -skew-2 z-10 bg-white text-lg font-semibold px-6 py-2 top-96 left-1/2 transform -translate-x-1/2 uppercase cursor-pointer hover:scale-105 duration-300 transtion-all "
          >
            Shop now
          </button>
        </div>
      </section>

      <section className="min-h-screen w-full relative items-center gap-1 justify-center flex flex-col mt-[200vh] overflow-x-hidden">
        <h1 className="text-5xl -ml-20 text-white text-left uppercase  z-10  -tracking-wider  -skew-1">
          Create your own{" "}
          <i>
            <strong>rules</strong>,
          </i>
        </h1>
        <h1 className="text-5xl ml-20   text-left uppercase  z-10  -tracking-wider  bg-white px-3 py-1 -skew-1 text-red-700">
          create your own{" "}
          <i>
            <strong>style</strong>
          </i>
        </h1>
        <img
          id="img-2"
          src="/2.webp"
          alt="Fotografía modelo con Red Lines Boxer"
          className="w-[450px] absolute -right-40 opacity-0"
        />
        <img
          id="img-3"
          src="/3.webp"
          alt="Fotografía modelo con Lucky Green Cap"
          className="w-[450px] absolute -left-40 opacity-0"
        />
      </section>
      <section className=" w-full relative items-center gap-20  justify-start flex flex-col px-80   overflow-x-hidden">
        <nav className="flex flex-col w-full">
          <ul className="flex flex-col gap-2">
            <li className="group relative uppercase text-white text-3xl cursor-pointer flex gap-2 opacity-80 hover:opacity-100">
              Creative Playground
              <GoArrowUpRight
                className="mt-1 opacity-0 -translate-x-1 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                strokeWidth={0.7}
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white origin-left scale-x-100 transition-transform duration-300 ease-in-out group-hover:scale-x-0"></div>
            </li>
            <li className="group relative uppercase text-white text-3xl cursor-pointer  flex gap-2 opacity-80 hover:opacity-100">
              Back to 90'S
              <GoArrowUpRight
                className="mt-1 opacity-0 -translate-x-1 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                strokeWidth={0.7}
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white origin-left scale-x-100 transition-transform duration-300 ease-in-out group-hover:scale-x-0"></div>
            </li>
            <li className="group relative uppercase text-white text-3xl cursor-pointer  flex gap-2 opacity-80 hover:opacity-100">
              Strikeball
              <GoArrowUpRight
                className="mt-1 opacity-0 -translate-x-1 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                strokeWidth={0.7}
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white origin-left scale-x-100 transition-transform duration-300 ease-in-out group-hover:scale-x-0"></div>
            </li>
            <li className="group relative uppercase text-white text-3xl cursor-pointer flex gap-2 opacity-80 hover:opacity-100">
              All
              <GoArrowUpRight
                className="mt-1 opacity-0 -translate-x-1 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                strokeWidth={0.7}
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white origin-left scale-x-100 transition-transform duration-300 ease-in-out group-hover:scale-x-0"></div>
            </li>
          </ul>
        </nav>
      </section>
      <section className=" w-full  relative items-center   justify-start flex flex-col px-80 overflow-x-hidden mt-28 h-[450px]">
        <h3 className="w-full text-left uppercase text-xl text-white">
          Best Sellers
        </h3>
        <div className="grid grid-cols-4 mt-6 gap-4">
          <div className="group relative overflow-hidden cursor-pointer">
            <img src="/gorra.webp" className="bg-white" />
            <div className="w-full h-full  text-center absolute top-0 left-0 flex flex-col text-white justify-center items-center bg-red-600/20 backdrop-blur-2xl translate-y-100 group-hover:translate-y-0 transition-all duration-300">
              <h4 className="text-2xl font-semibold ">MLFSHKS CAP</h4>
              <span className="text-md">29,69€</span>
            </div>
          </div>
          <div className="group relative overflow-hidden cursor-pointer">
            <img src="/chandal.webp" className="bg-white" />
            <div className="w-full h-full  text-center absolute top-0 left-0 flex flex-col text-white justify-center items-center bg-red-600/20 backdrop-blur-2xl translate-y-100 group-hover:translate-y-0 transition-all duration-300">
              <h4 className="text-2xl font-semibold ">*** TRACKSUIT</h4>
              <span className="text-md">99,00€</span>
            </div>
          </div>
          <div className="group relative overflow-hidden cursor-pointer">
            <img src="/shirtlovemilfs.webp" className="bg-white" />
            <div className="w-full h-full  text-center absolute top-0 left-0 flex flex-col text-white justify-center items-center bg-red-600/20 backdrop-blur-2xl translate-y-100 group-hover:translate-y-0 transition-all duration-300">
              <h4 className="text-2xl font-semibold ">MILF LOVER TEE</h4>
              <span className="text-md">34,69€</span>
            </div>
          </div>
          <div className="group relative overflow-hidden cursor-pointer">
            <img src="/hoodie.webp" className="bg-white" />
            <div className="w-full h-full  text-center absolute top-0 left-0 flex flex-col text-white justify-center items-center bg-red-600/20 backdrop-blur-2xl translate-y-100 group-hover:translate-y-0 transition-all duration-300">
              <h4 className="text-2xl font-semibold ">*** HOODIE RED</h4>
              <span className="text-md">59,69€</span>
            </div>
          </div>
        </div>
        <button className=" -skew-2  mt-6 bg-white text-lg font-semibold px-6 py-2  uppercase cursor-pointer hover:scale-105 duration-300 transtion-all ">
          Show more
        </button>
      </section>
      <section className=" w-full min-h-screen relative items-center   justify-start flex flex-col px-80  overflow-x-hidden mt-28">
        <h3 className="w-full text-left uppercase text-xl text-white">
          Behind Milfshakes
        </h3>
        <div className="flex gap-4 mt-6 ">
          <img src="./nil-ojeda.webp" className="w-80 " />
          <div className="flex flex-col gap-1 text-white w-80">
            <h3 className="text-3xl font-semibold">Nil Ojeda</h3>
            <h4 className="uppercase text-xl">Fundador de MilfShakes</h4>

            <p className="text-md text-white mt-6">
              Ha llevado su visión irreverente y creativa del streetwear a otro
              nivel. Con un estilo que mezcla la nostalgia de los 90’s, la
              cultura pop y un toque descarado, la marca nació como un proyecto
              personal y se convirtió en un referente para quienes buscan ropa
              que rompe las reglas. Cada colección es un guiño a su
              personalidad: divertida, atrevida y siempre lista para sorprender.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
