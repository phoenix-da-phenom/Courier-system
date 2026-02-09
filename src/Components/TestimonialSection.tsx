import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import p1 from "../assets/tst1.jpg"
import p2 from "../assets/tst2.jpg"
import p3 from "../assets/tst3.jpg"


const testimonials = [
  {
    name: "Hessica Owen",
    role: "Business Owner",
    text: "Their delivery speed is insane. My packages arrive earlier than expected every single time.",
    image: p1
  },
  {
    name: "Larry Glenn",
    role: "Online Vendor",
    text: "Reliable, secure, and professional. I trust them with all my customer deliveries.",
    image: p2
  },
  {
    name: "Michael Xin",
    role: "Logistics Manager",
    text: "Tracking is accurate and support is responsive. Easily the best courier service we’ve used.",
    image:p3
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center text-black">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          What Our Clients Say
        </motion.h2>

        <p className="text-black/30 mb-12">
          Trusted by businesses and individuals nationwide
        </p>

        {/* Testimonial Card */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-xl"
        >
          <div className="mx-auto w-30 "> <img className="w-30 rounded-full" src={testimonials[index].image}/></div>
         

          <p className="text-lg leading-relaxed mb-6">
            “{testimonials[index].text}”
          </p>

          <div className="font-semibold text-xl">
            {testimonials[index].name}
          </div>

          <div className="text-black/70 text-sm">
            {testimonials[index].role}
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${
                index === i ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
