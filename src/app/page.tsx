import React from "react";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleService from "@/components/Features/SingleService";
import { SERVICES } from "@/_data/services";

export const metadata: Metadata = {
  title: "Elevate Your Vision with Custom Digital Solutions",
  description:
    "We design, develop, and deliver innovative software solutions that drive real-world results.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />

      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle title="We Build Solutions That Elevates You" center>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              We craft digital experiences that drive real impact. Whether
              you’re launching a startup, transforming operations, or scaling an
              existing product, our services are designed to take your ideas
              higher.
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <Video />
      <Brands />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
