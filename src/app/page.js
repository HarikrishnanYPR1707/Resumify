import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { LuFileSpreadsheet } from "react-icons/lu";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillFileLock2Fill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import FooterSection from "@/components/FooterSection/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col items-center justify-center">
        <div className="mx-32 flex flex-col items-center justify-center text-center">
          {/* HERO SECTION  */}
          <div className="flex w-[1200px] flex-col items-center justify-center px-10 pt-10">
            <p className="text-Green">Online Resume Creator</p>
            <h1 className="pt-2 text-5xl font-black">
              Your resume is your first impression on a potential employer.
              <span className="text-Green"> Make it count.</span>
            </h1>
            <h2 className="pt-5 text-xl">
              Create your professional resume in 5 minutes.
            </h2>
            <Link
              className="mt-5 rounded-2xl bg-Green px-32 py-5 font-bold text-white"
              href="/editor"
            >
              Create Your Resume
            </Link>
          </div>

          {/* WHY CHOOSE US --> SECTION */}
          <div className="mt-5 flex w-[1200px] flex-col items-center justify-center p-10">
            <div className="text-Green">PROFESSIONAL RESUME BUILDER</div>
            <div className="mt-2 text-4xl font-black">Win your dream job</div>
            <div className="grid grid-cols-2 gap-4 p-5">
              <div className="flex items-start justify-center gap-4">
                <div className="grid aspect-square w-[50px] place-content-center rounded-xl bg-Green">
                  <LuFileSpreadsheet className="text-2xl font-bold text-white" />
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold">
                    Create resume with ease
                  </p>
                  <p className="text-sm">
                    Build your resume online in minutes without even leaving
                    your web browser.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center gap-4">
                <div className="grid aspect-square w-[70px] place-content-center rounded-xl bg-Green">
                  <AiFillCheckCircle className="text-2xl font-bold text-white" />
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold">
                    Professionally approved templates
                  </p>
                  <p className="text-sm">
                    Our well designed resume templates are approved by
                    professionals. Your resume is ready in 5 minutes.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center gap-4">
                <div className="grid aspect-square w-[50px] place-content-center rounded-xl bg-Green">
                  <BsFillFileLock2Fill className="text-2xl font-bold text-white" />
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold">
                    We care about your data
                  </p>
                  <p className="text-sm">
                    Anything you share with us is well protected with our
                    256-bit SSL encryption.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center gap-4">
                <div className="grid aspect-square w-[50px] place-content-center rounded-xl bg-Green">
                  <FaDownload className="text-2xl font-bold text-white" />
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold">Download as PDF</p>
                  <p className="text-sm">
                    Download your resume in PDF and other common formats with
                    just a click.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* INFORAMTION 1 --> SECTION */}
          <div className="mt-5 flex w-[1200px] items-center justify-center gap-8 p-10 text-left">
            <Image
              className="w-[520px]"
              loading="lazy"
              width="100"
              height="100"
              src="/img1.svg"
              alt="Resumify Resume Example"
            />
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-base text-Green">RESUME MAKER</h2>
              <h1 className="text-4xl font-black">
                Building a h1 Resume is the First Step Toward a{" "}
                <span className="text-Green">Successful Career.</span>
              </h1>
              <Link
                className="my-4 inline-flex items-center justify-center rounded-md bg-Green px-6 py-3 text-lg font-semibold text-white"
                href="/editor"
              >
                Create Your Resume
              </Link>
              <p className="mb-4 text-lg font-medium">
                Your resume is the initial document that reaches the HR
                recruiter's desk before you have the opportunity to meet them in
                person for an interview, when pursuing your dream job.
              </p>
              <p className="text-base text-DarkGray">
                Given that in the absence of a direct in-person interaction to
                experience your engaging personality, h1 dedication to work, and
                seamless team compatibility, your resume serves as your
                representative and must effectively convey these qualities.
                <br />
                That's why it's crucial for your resume to effectively convey
                your identity, highlight your unique skills and contributions,
                and compel them to reach out and invite you for an interview
                without hesitation.
                <br />
                Resumify ensures that your resume doesn't get lost in the stack;
                instead, it grabs recruiters' attention and stands out.
              </p>
            </div>
          </div>

          {/* INFORAMTION 1 --> SECTION */}
          <div className="mt-5 flex w-[1200px] items-center justify-center gap-8 p-10 text-left">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-base text-Green">FREE RESUME TEMPLATES</h2>
              <h1 className="text-4xl font-black">
                Maximizing Your{" "}
                <span className="text-Green">Initial Impact.</span>
              </h1>
              <Link
                className="my-4 inline-flex items-center justify-center rounded-md bg-Green px-6 py-3 text-lg font-semibold text-white"
                href="/editor"
              >
                Create Your Resume
              </Link>
              <p className="mb-4 text-lg font-medium">
                Recruiters typically dedicate just six seconds to review your
                resume, a particularly critical factor in highly competitive job
                markets where numerous candidates vie for coveted positions.
              </p>
              <p className="text-base text-DarkGray">
                Resumify empowers you to craft a polished and effective resume
                with the professionalism that makes every second matter. With
                features like optimized white space, well-structured columns,
                and clear, reader-friendly headings, our tools guarantee a
                precise representation of your skills and abilities in each
                section. What sets us apart is the speed, ease, and readiness it
                provides for your journey into a new career.
              </p>
            </div>
            <Image
              className="w-[520px]"
              loading="lazy"
              width="100"
              height="100"
              src="/img2.svg"
              alt="Resumify Resume Example"
            />
          </div>

          {/* FREQUENTLY ASKED QUESTION */}
          <div className="my-10 w-[1200px] divide-y divide-gray-200 bg-green-50 px-8 py-16">
            <h2 className=" text-left text-3xl font-bold tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <div className="mt-8">
              <dl className="divide-y divide-gray-200">
                <div className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    Can I use Resumify for free?
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-500">
                      Absolutely! Resumify has lots of different tools you can
                      use for free.
                    </p>
                  </dd>
                </div>
                <div className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    Can I customize my resume?
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-500">
                      We have professionally built templates that are designed
                      to adapt to your content.
                    </p>
                  </dd>
                </div>
                <div className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    Can I download my resume as PDF?
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-500">
                      Yes! After you complete your resume you will be able to
                      download it as PDF with ease.
                    </p>
                  </dd>
                </div>
                <div className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    How can I cancel my account?
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-500">
                      After login, you can easily manage everything account
                      related in your "Account Settings" page.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Call To Action */}
          <div className="mx-auto flex w-[1200px] items-center justify-between px-8 py-16">
            <h2 className="text-left text-3xl font-bold tracking-tight text-gray-900">
              Ready to dive in?
              <br />
              <span className="text-Green">Create your resume today.</span>
            </h2>
            <div className="mt-8 flex">
              <Link href="/editor">
                <div className="mr-3 inline-flex items-center justify-center rounded-md bg-Green px-6 py-3 text-lg font-semibold text-white hover:bg-[#329876]">
                  Create my resume
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* FOOTER --> SECTION */}
        <FooterSection />
      </main>
    </>
  );
}
