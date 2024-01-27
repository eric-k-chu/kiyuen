import { Github, HackerText, Linkedin, Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-around bg-zinc-950">
        <div className="flex flex-col items-start gap-y-6">
          <HackerText />
          <div className="flex w-full items-center justify-around font-sans font-semibold tracking-wider">
            <h2 className="hover:text-primary-blue text-white transition-colors duration-150 ease-in-out">
              React&#46;js
            </h2>
            <h2 className="hover:text-primary-blue text-white transition-colors duration-150 ease-in-out">
              TypeScript
            </h2>
            <h2 className="hover:text-primary-blue text-white transition-colors duration-150 ease-in-out">
              Node&#46;js
            </h2>
          </div>
          <code className="text-medium rounded-md bg-zinc-800 px-4 py-4">
            <span className="select-none pr-2">$</span>
            <span className="text-primary-blue">full-stack</span> software
            engineer
          </code>
        </div>
        <div className="h-[400px] w-[600px] rounded-md bg-red-400" />
      </div>
      <section className="bg-gradient-to-t from-zinc-900 from-90% to-zinc-950 pt-20">
        <a id="about" className="mx-auto block max-w-7xl py-20">
          <h1 className="text-center font-sans text-4xl font-semibold">
            About
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            neque viverra, ullamcorper mauris vel, pellentesque eros. Fusce ac
            porttitor sem, in tempus lorem. Pellentesque et lectus sed dui
            cursus tempus. Vestibulum viverra, est ac varius molestie, mauris
            elit dapibus tortor, eu egestas elit erat nec nibh. Vivamus accumsan
            dictum ante. Nunc tempor mi sit amet velit fringilla vehicula ac sed
            massa. Vivamus facilisis sem eros, laoreet finibus felis venenatis
            eu. Vivamus consectetur ante lectus, eget molestie mi maximus non.
            Sed sit amet quam leo. Donec a lacus eu nisi vestibulum vulputate
            quis eu ex. Maecenas pretium id purus ut ornare. In venenatis elit
            eget nibh egestas faucibus. Pellentesque egestas metus erat, cursus
            suscipit metus scelerisque in. Maecenas blandit eu nibh eu
            fringilla. Aenean blandit sagittis ligula lobortis malesuada.
            Suspendisse ornare sodales nibh, vitae luctus tortor viverra nec.
            Sed maximus aliquam felis, sit amet fermentum massa fermentum a.
            Proin ac ullamcorper elit. Sed convallis porttitor nisi non
            pharetra. Nunc eget enim eget mi accumsan scelerisque quis eget
            lacus. Phasellus imperdiet ligula in egestas condimentum. Ut
            scelerisque, urna rhoncus finibus congue, lorem tellus bibendum
            ligula, at blandit ex quam ut erat. Ut lacinia quis nisl eget
            fermentum. Pellentesque non purus nisi. Duis eget enim nisl. Sed
            blandit sit amet velit in elementum. Nulla ut gravida tellus. Mauris
            at tortor auctor mi faucibus elementum id id nulla. Donec gravida
            est et pellentesque blandit. Aenean id commodo sapien. Quisque eget
            urna hendrerit, pharetra odio vel, pretium ex. Nullam semper, eros
            vel placerat tincidunt, ante sapien rhoncus libero, vitae placerat
            augue mi eget enim. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Maecenas volutpat eu
            lacus vitae elementum. Fusce at augue nunc. Suspendisse at lacus et
            elit venenatis aliquet non eu diam. Sed laoreet elit ac elit
            vehicula, vel maximus quam accumsan. Etiam sed sollicitudin eros,
            eget feugiat ipsum. Fusce ac hendrerit est. Vestibulum id ligula et
            mi varius porta et sit amet metus. Vivamus ut quam volutpat sapien
            dapibus molestie. Quisque volutpat, ipsum at mattis imperdiet, erat
            ligula tempus magna, eu commodo velit eros ut enim. Nulla gravida
            ipsum vel eros aliquet, sed iaculis dolor pharetra. Donec laoreet
            turpis at orci efficitur dictum. Vestibulum pellentesque laoreet
            nisi sed lacinia. Phasellus sapien dolor, varius ut eleifend ut,
            lacinia ut ex. Nullam elementum justo eget justo congue, vel dictum
            lacus sodales. In pellentesque leo elit, at fermentum erat tempor
            non. Praesent vel augue egestas, placerat lectus eget, fermentum
            neque. Integer ac odio nec nisi mattis interdum. Morbi in dolor
            facilisis arcu consequat ultrices. Nam id erat hendrerit, malesuada
            erat nec, pulvinar tellus. Suspendisse quis sapien sed tellus
            ultricies tempor blandit quis sem. Fusce non nulla quis mauris
            ornare varius. Proin eu blandit arcu, eget placerat dolor. Praesent
            laoreet felis quam, a feugiat neque imperdiet ut. In vitae felis at
            turpis dapibus viverra. Sed ante ligula, tempor eget tristique
            porttitor, elementum vel felis. Donec mollis lacinia metus vel
            pulvinar. Nullam cursus lacus convallis justo egestas pretium. Cras
            a sem lectus. Vestibulum nec quam vel purus volutpat placerat vel at
            mauris. Duis eget augue purus. Sed rhoncus dolor sed vestibulum
            pharetra. In porta non nibh et aliquam. Aliquam erat volutpat.{" "}
          </p>
        </a>
      </section>
      <a id="projects" className="mx-auto block max-w-7xl py-20">
        <h1 className="text-center font-sans text-4xl font-semibold">
          Projects
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
          neque viverra, ullamcorper mauris vel, pellentesque eros. Fusce ac
          porttitor sem, in tempus lorem. Pellentesque et lectus sed dui cursus
          tempus. Vestibulum viverra, est ac varius molestie, mauris elit
          dapibus tortor, eu egestas elit erat nec nibh. Vivamus accumsan dictum
          ante. Nunc tempor mi sit amet velit fringilla vehicula ac sed massa.
          Vivamus facilisis sem eros, laoreet finibus felis venenatis eu.
          Vivamus consectetur ante lectus, eget molestie mi maximus non. Sed sit
          amet quam leo. Donec a lacus eu nisi vestibulum vulputate quis eu ex.
          Maecenas pretium id purus ut ornare. In venenatis elit eget nibh
          egestas faucibus. Pellentesque egestas metus erat, cursus suscipit
          metus scelerisque in. Maecenas blandit eu nibh eu fringilla. Aenean
          blandit sagittis ligula lobortis malesuada. Suspendisse ornare sodales
          nibh, vitae luctus tortor viverra nec. Sed maximus aliquam felis, sit
          amet fermentum massa fermentum a. Proin ac ullamcorper elit. Sed
          convallis porttitor nisi non pharetra. Nunc eget enim eget mi accumsan
          scelerisque quis eget lacus. Phasellus imperdiet ligula in egestas
          condimentum. Ut scelerisque, urna rhoncus finibus congue, lorem tellus
          bibendum ligula, at blandit ex quam ut erat. Ut lacinia quis nisl eget
          fermentum. Pellentesque non purus nisi. Duis eget enim nisl. Sed
          blandit sit amet velit in elementum. Nulla ut gravida tellus. Mauris
          at tortor auctor mi faucibus elementum id id nulla. Donec gravida est
          et pellentesque blandit. Aenean id commodo sapien. Quisque eget urna
          hendrerit, pharetra odio vel, pretium ex. Nullam semper, eros vel
          placerat tincidunt, ante sapien rhoncus libero, vitae placerat augue
          mi eget enim. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Maecenas volutpat eu lacus
          vitae elementum. Fusce at augue nunc. Suspendisse at lacus et elit
          venenatis aliquet non eu diam. Sed laoreet elit ac elit vehicula, vel
          maximus quam accumsan. Etiam sed sollicitudin eros, eget feugiat
          ipsum. Fusce ac hendrerit est. Vestibulum id ligula et mi varius porta
          et sit amet metus. Vivamus ut quam volutpat sapien dapibus molestie.
          Quisque volutpat, ipsum at mattis imperdiet, erat ligula tempus magna,
          eu commodo velit eros ut enim. Nulla gravida ipsum vel eros aliquet,
          sed iaculis dolor pharetra. Donec laoreet turpis at orci efficitur
          dictum. Vestibulum pellentesque laoreet nisi sed lacinia. Phasellus
          sapien dolor, varius ut eleifend ut, lacinia ut ex. Nullam elementum
          justo eget justo congue, vel dictum lacus sodales. In pellentesque leo
          elit, at fermentum erat tempor non. Praesent vel augue egestas,
          placerat lectus eget, fermentum neque. Integer ac odio nec nisi mattis
          interdum. Morbi in dolor facilisis arcu consequat ultrices. Nam id
          erat hendrerit, malesuada erat nec, pulvinar tellus. Suspendisse quis
          sapien sed tellus ultricies tempor blandit quis sem. Fusce non nulla
          quis mauris ornare varius. Proin eu blandit arcu, eget placerat dolor.
          Praesent laoreet felis quam, a feugiat neque imperdiet ut. In vitae
          felis at turpis dapibus viverra. Sed ante ligula, tempor eget
          tristique porttitor, elementum vel felis. Donec mollis lacinia metus
          vel pulvinar. Nullam cursus lacus convallis justo egestas pretium.
          Cras a sem lectus. Vestibulum nec quam vel purus volutpat placerat vel
          at mauris. Duis eget augue purus. Sed rhoncus dolor sed vestibulum
          pharetra. In porta non nibh et aliquam. Aliquam erat volutpat.{" "}
        </p>
      </a>
      <a id="experience" className="mx-auto block max-w-7xl py-20">
        <h1 className="text-center font-sans text-4xl font-semibold">
          Experience
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
          neque viverra, ullamcorper mauris vel, pellentesque eros. Fusce ac
          porttitor sem, in tempus lorem. Pellentesque et lectus sed dui cursus
          tempus. Vestibulum viverra, est ac varius molestie, mauris elit
          dapibus tortor, eu egestas elit erat nec nibh. Vivamus accumsan dictum
          ante. Nunc tempor mi sit amet velit fringilla vehicula ac sed massa.
          Vivamus facilisis sem eros, laoreet finibus felis venenatis eu.
          Vivamus consectetur ante lectus, eget molestie mi maximus non. Sed sit
          amet quam leo. Donec a lacus eu nisi vestibulum vulputate quis eu ex.
          Maecenas pretium id purus ut ornare. In venenatis elit eget nibh
          egestas faucibus. Pellentesque egestas metus erat, cursus suscipit
          metus scelerisque in. Maecenas blandit eu nibh eu fringilla. Aenean
          blandit sagittis ligula lobortis malesuada. Suspendisse ornare sodales
          nibh, vitae luctus tortor viverra nec. Sed maximus aliquam felis, sit
          amet fermentum massa fermentum a. Proin ac ullamcorper elit. Sed
          convallis porttitor nisi non pharetra. Nunc eget enim eget mi accumsan
          scelerisque quis eget lacus. Phasellus imperdiet ligula in egestas
          condimentum. Ut scelerisque, urna rhoncus finibus congue, lorem tellus
          bibendum ligula, at blandit ex quam ut erat. Ut lacinia quis nisl eget
          fermentum. Pellentesque non purus nisi. Duis eget enim nisl. Sed
          blandit sit amet velit in elementum. Nulla ut gravida tellus. Mauris
          at tortor auctor mi faucibus elementum id id nulla. Donec gravida est
          et pellentesque blandit. Aenean id commodo sapien. Quisque eget urna
          hendrerit, pharetra odio vel, pretium ex. Nullam semper, eros vel
          placerat tincidunt, ante sapien rhoncus libero, vitae placerat augue
          mi eget enim. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Maecenas volutpat eu lacus
          vitae elementum. Fusce at augue nunc. Suspendisse at lacus et elit
          venenatis aliquet non eu diam. Sed laoreet elit ac elit vehicula, vel
          maximus quam accumsan. Etiam sed sollicitudin eros, eget feugiat
          ipsum. Fusce ac hendrerit est. Vestibulum id ligula et mi varius porta
          et sit amet metus. Vivamus ut quam volutpat sapien dapibus molestie.
          Quisque volutpat, ipsum at mattis imperdiet, erat ligula tempus magna,
          eu commodo velit eros ut enim. Nulla gravida ipsum vel eros aliquet,
          sed iaculis dolor pharetra. Donec laoreet turpis at orci efficitur
          dictum. Vestibulum pellentesque laoreet nisi sed lacinia. Phasellus
          sapien dolor, varius ut eleifend ut, lacinia ut ex. Nullam elementum
          justo eget justo congue, vel dictum lacus sodales. In pellentesque leo
          elit, at fermentum erat tempor non. Praesent vel augue egestas,
          placerat lectus eget, fermentum neque. Integer ac odio nec nisi mattis
          interdum. Morbi in dolor facilisis arcu consequat ultrices. Nam id
          erat hendrerit, malesuada erat nec, pulvinar tellus. Suspendisse quis
          sapien sed tellus ultricies tempor blandit quis sem. Fusce non nulla
          quis mauris ornare varius. Proin eu blandit arcu, eget placerat dolor.
          Praesent laoreet felis quam, a feugiat neque imperdiet ut. In vitae
          felis at turpis dapibus viverra. Sed ante ligula, tempor eget
          tristique porttitor, elementum vel felis. Donec mollis lacinia metus
          vel pulvinar. Nullam cursus lacus convallis justo egestas pretium.
          Cras a sem lectus. Vestibulum nec quam vel purus volutpat placerat vel
          at mauris. Duis eget augue purus. Sed rhoncus dolor sed vestibulum
          pharetra. In porta non nibh et aliquam. Aliquam erat volutpat.{" "}
        </p>
      </a>
      <a id="contact" className="mx-auto block max-w-7xl py-20">
        <h1 className="text-center font-sans text-4xl font-semibold">
          Contact
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
          neque viverra, ullamcorper mauris vel, pellentesque eros. Fusce ac
          porttitor sem, in tempus lorem. Pellentesque et lectus sed dui cursus
          tempus. Vestibulum viverra, est ac varius molestie, mauris elit
          dapibus tortor, eu egestas elit erat nec nibh. Vivamus accumsan dictum
          ante. Nunc tempor mi sit amet velit fringilla vehicula ac sed massa.
          Vivamus facilisis sem eros, laoreet finibus felis venenatis eu.
          Vivamus consectetur ante lectus, eget molestie mi maximus non. Sed sit
          amet quam leo. Donec a lacus eu nisi vestibulum vulputate quis eu ex.
          Maecenas pretium id purus ut ornare. In venenatis elit eget nibh
          egestas faucibus. Pellentesque egestas metus erat, cursus suscipit
          metus scelerisque in. Maecenas blandit eu nibh eu fringilla. Aenean
          blandit sagittis ligula lobortis malesuada. Suspendisse ornare sodales
          nibh, vitae luctus tortor viverra nec. Sed maximus aliquam felis, sit
          amet fermentum massa fermentum a. Proin ac ullamcorper elit. Sed
          convallis porttitor nisi non pharetra. Nunc eget enim eget mi accumsan
          scelerisque quis eget lacus. Phasellus imperdiet ligula in egestas
          condimentum. Ut scelerisque, urna rhoncus finibus congue, lorem tellus
          bibendum ligula, at blandit ex quam ut erat. Ut lacinia quis nisl eget
          fermentum. Pellentesque non purus nisi. Duis eget enim nisl. Sed
          blandit sit amet velit in elementum. Nulla ut gravida tellus. Mauris
          at tortor auctor mi faucibus elementum id id nulla. Donec gravida est
          et pellentesque blandit. Aenean id commodo sapien. Quisque eget urna
          hendrerit, pharetra odio vel, pretium ex. Nullam semper, eros vel
          placerat tincidunt, ante sapien rhoncus libero, vitae placerat augue
          mi eget enim. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Maecenas volutpat eu lacus
          vitae elementum. Fusce at augue nunc. Suspendisse at lacus et elit
          venenatis aliquet non eu diam. Sed laoreet elit ac elit vehicula, vel
          maximus quam accumsan. Etiam sed sollicitudin eros, eget feugiat
          ipsum. Fusce ac hendrerit est. Vestibulum id ligula et mi varius porta
          et sit amet metus. Vivamus ut quam volutpat sapien dapibus molestie.
          Quisque volutpat, ipsum at mattis imperdiet, erat ligula tempus magna,
          eu commodo velit eros ut enim. Nulla gravida ipsum vel eros aliquet,
          sed iaculis dolor pharetra. Donec laoreet turpis at orci efficitur
          dictum. Vestibulum pellentesque laoreet nisi sed lacinia. Phasellus
          sapien dolor, varius ut eleifend ut, lacinia ut ex. Nullam elementum
          justo eget justo congue, vel dictum lacus sodales. In pellentesque leo
          elit, at fermentum erat tempor non. Praesent vel augue egestas,
          placerat lectus eget, fermentum neque. Integer ac odio nec nisi mattis
          interdum. Morbi in dolor facilisis arcu consequat ultrices. Nam id
          erat hendrerit, malesuada erat nec, pulvinar tellus. Suspendisse quis
          sapien sed tellus ultricies tempor blandit quis sem. Fusce non nulla
          quis mauris ornare varius. Proin eu blandit arcu, eget placerat dolor.
          Praesent laoreet felis quam, a feugiat neque imperdiet ut. In vitae
          felis at turpis dapibus viverra. Sed ante ligula, tempor eget
          tristique porttitor, elementum vel felis. Donec mollis lacinia metus
          vel pulvinar. Nullam cursus lacus convallis justo egestas pretium.
          Cras a sem lectus. Vestibulum nec quam vel purus volutpat placerat vel
          at mauris. Duis eget augue purus. Sed rhoncus dolor sed vestibulum
          pharetra. In porta non nibh et aliquam. Aliquam erat volutpat.{" "}
        </p>
      </a>
      <footer className="flex items-center justify-around py-20">
        <h2 className="font-sans text-xl font-semibold">&#169; Eric Chu</h2>
        <div className="flex gap-x-4">
          <a href="https://github.com/eric-k-chu" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/eric-k-chu/" target="_blank">
            <Linkedin />
          </a>
        </div>
      </footer>
    </>
  );
}
