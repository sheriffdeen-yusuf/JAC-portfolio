import Header from "@/layouts/Header";
import Image from "next/image";
import React from "react";

function index() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <div className="grid  grid-cols-12 bg-black px-20 pt-10">
          <div className="col-span-7">
            <h1 className="text-white">ndjknkdnkjw</h1>
          </div>
          <div>
            <Image
              src="/owner.png"
              height={200}
              width={300}
              alt="owner.svg"
              className="col-span-5 max-h-[70vh] min-w-[500px]  object-cover"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default index;
