import Link from "next/link";
import PassGuardx from "./Guardx";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" bottom-[20px] w-full mb-8 bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]">
      <div className="dark:bg-zinc-900 bg-zinc-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row px-[5%]">
          <p className="dark:text-gray-400 text-gray-700 text-sm text-center sm:text-left">
            © Copyright - 2024 &nbsp;
            <Link href="/" target="_blank">
              <PassGuardx />
            </Link>
            <Link href="/terms" target="_blank" className="text-blue-400 ml-8">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              target="_blank"
              className="text-blue-400 ml-8">
              Privacy Policy
            </Link>
            <Link href="/cookie" target="_blank" className="text-blue-400 ml-8">
              Cookie Policy
            </Link>
            {/* —&nbsp; */}
            {/* <Link
              href="https://github.com/arnavnagpurkar"
              className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-500 hover:text-blue-600 transition-all"
              target="_blank">
              @arnavnagpurkar
            </Link> */}
          </p>
          {/* <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link
              href="https://github.com/arnavnagpurkar/PassGuardx/"
              target="_blank">
              <Image
                src={"/images/github-mark.svg"}
                width={22}
                height={22}
                alt="github"
                className="hover:opacity-80 transition-all dark:invert-0 invert"
              />
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
