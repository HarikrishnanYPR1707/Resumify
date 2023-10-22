import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { LuFileSpreadsheet } from "react-icons/lu";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillFileLock2Fill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <main className="mx-32 flex flex-col items-center justify-center text-center">
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
          href="/template"
        >
          Create Your Resume
        </Link>
      </div>

      {/* -- */}
      <div className="mt-5 flex w-[1200px] flex-col items-center justify-center p-10">
        <div className="text-Green">PROFESSIONAL RESUME BUILDER</div>
        <div className="mt-2 text-4xl font-black">Win your dream job</div>
        <div className="grid grid-cols-2 gap-4 p-5">
          <div className="flex items-start justify-center gap-4">
            <div className="grid aspect-square w-[50px] place-content-center rounded-xl bg-Green">
              <LuFileSpreadsheet className="text-2xl font-bold text-white" />
            </div>
            <div className="text-left">
              <p className="text-base font-semibold">Create resume with ease</p>
              <p className="text-sm">
                Build your resume online in minutes without even leaving your
                web browser.
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
              <p className="text-base font-semibold">We care about your data</p>
              <p className="text-sm">
                Anything you share with us is well protected with our 256-bit
                SSL encryption.
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
                Download your resume in PDF and other common formats with just a
                click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
