import Link from "next/link";

function About() {
  return (
    <main className="min-h-[78vh] lg:px-[20%] px-[10%] bg-green-50 flex justify-center">
      <div className="pb-8">
        <div className="flex flex-col items-center pt-8 pb-4">
          {" "}
          <p className="text-[35px] font-semibold">Cookie Policy</p>
          <p className="mt-6">LAST MODIFIED: 13 June 2024</p>
          <p className="mt-6">
            Welcome to TL-DW.ai. <br />
            <br />
            This website <a className="text-blue-500">TL-DW.ai</a> &nbsp;
            {"(“Our Site”)"} uses Cookies and similar technologies to
            distinguish you from other users. By using Cookies, we can provide
            you with a better experience and to improve Our Site by better
            understanding how you use it. Please read this Cookie Policy
            carefully and ensure that you understand it. Your acceptance of Our
            Cookie Policy is deemed to occur if you continue using Our Site. If
            you do not agree to Our Cookie Policy, please stop using Our Site
            immediately.
          </p>
        </div>

        <div className="pt-4 pb-4">
          <p className="text-[30px]">What Are Cookies</p>
          <p className="">
            In accordance with standard procedure for most professional
            websites, this site utilizes cookies. Cookies are small files that
            are downloaded to your computer to enhance your browsing experience.
            This page will outline the information collected through these
            cookies, the purpose of their use, and the reasons for their
            storage. However, we will also provide information on how to prevent
            the storage of these cookies, though this may cause some parts of
            the site’s functionality to degrade or not work properly.
          </p>
        </div>

        <div className="pt-4 pb-4">
          <p className="text-[30px]">How We Use Cookies</p>
          <p className="">
            We utilize cookies for various reasons as outlined below.
            Unfortunately, there are no universally accepted methods to disable
            cookies without completely disabling the features and functionality
            they bring to our website. We advise that you keep all cookies
            activated if you are unsure about their purpose as they may be
            necessary for providing services that you utilize.
          </p>
        </div>
        <div className="pt-4 pb-4">
          <p className="text-[30px]">Disabling Cookies</p>
          <p className="">
            Preventing the setting of cookies is possible by adjusting the
            settings on your browser. Consult your browser’s Help section for
            instructions on how to do this. We utilized the Cookie Policy
            Generator to draft our own document. Please note that disabling
            cookies will impact the functionality of this website as well as
            many others that you may visit. This can result in the disabling of
            certain features and functionality on this site. It is advised to
            not disable cookies for the best user experience.
          </p>
        </div>

        <div className="pt-4 pb-4">
          <p className="text-[30px]">Third-Party Cookies</p>
          <p className="">
            In certain instances, we utilize cookies supplied by trustworthy
            third parties. The section below outlines the third-party cookies
            that you may come across while using this website.
          </p>
          <div className="mt-2 pl-8">
            <ol className="list-disc my-4">
              <li>
                Occasionally, we experiment with new features and make slight
                modifications to the site’s presentation. During these testing
                phases, cookies may be employed to guarantee a consistent
                experience for users and to gather information on which
                optimizations are most favored.
              </li>
              <li>
                This site utilizes third-party analytics to monitor and evaluate
                usage, enabling us to create captivating content. These cookies
                may gather information such as your time spent on the site or
                the pages you visit, providing us with insights to enhance your
                overall experience on the site.
              </li>
              <li>
                We hope this explanation has cleared things up for you. As
                mentioned before, if you are uncertain about whether a cookie is
                necessary, it is generally safer to keep cookies enabled in case
                it affects any features you use on our site.
              </li>
            </ol>
          </div>
          <div className="pt-4 pb-4">
            <p className="text-[30px]">More Information</p>
            <p className="">
              Hopefully, that has clarified things for you, and as was
              previously mentioned if there is something that you aren’t sure
              whether you need or not it’s usually safer to leave cookies
              enabled in case it does interact with one of the features you use
              on our site. However, if you are still looking for more
              information then you can contact us at{" "}
              <a className="text-blue-500">contact@tl-dw.ai</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default About;
