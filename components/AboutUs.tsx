import React from "react";

function AboutUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Meet the Team
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Notion team is dedicated to creating the best all-in-one
              workspace for your notes. Our team is made up of designers,
              engineers, and product managers who are passionate about
              innovation and making your life easier.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <img
              alt="Image"
              className="h-24 w-24 overflow-hidden rounded-full border-2 border-gray-100 object-cover object-center dark:border-gray-800"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Alice Johnson</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Product Manager
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Image"
              className="h-24 w-24 overflow-hidden rounded-full border-2 border-gray-100 object-cover object-center dark:border-gray-800"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Mark Lee</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                UX Designer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Image"
              className="h-24 w-24 overflow-hidden rounded-full border-2 border-gray-100 object-cover object-center dark:border-gray-800"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Sophia Chen</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
