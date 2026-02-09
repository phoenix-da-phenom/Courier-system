import NumberCaption from "./NumberCaption";
import Slider5 from "../assets/slide5.jpg";
import Slider7 from "../assets/slide7.jpeg";

const newsData = [
  { img: Slider5 },
  { img: Slider7 },
  { img: Slider5 },
  { img: Slider7 },
];

export default function LatestNews() {
  return (
    <section className="my-container py-16">
      <NumberCaption desc="LATEST NEWS" num="03" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {newsData.map((item, index) => (
          <article
            key={index}
            className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt="Latest news"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5">
              <h4 className="text-lg font-semibold leading-snug">
                Social and demographic information
              </h4>

              <p className="text-sm text-gray-600">
                There are no hidden costs associated with our transportation
                services.
              </p>

              <a
                href="#"
                className="mt-2 w-fit text-sm font-semibold text-primary transition hover:underline"
              >
                READ MORE →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
