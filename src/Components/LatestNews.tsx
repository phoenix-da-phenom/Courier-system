import NumberCaption from "./NumberCaption";
import Slider5 from "../assets/slide5.jpg";
import Slider7 from "../assets/slide7.jpeg";

const newsData = [
  { id:1,
    img: Slider5 ,
    title:"Social and demographic information",
    message:"There are no hidden costs associated with our transportation services."

  },
  { 
    id:2,
    img: Slider7,
    title:"Team member to discuss our meeting",
    message:"Offers you peace-of-mind that we’ll be on-hand to help whenever you need us."
   },
  { 
    id:3,
    img: Slider5,
    title:"Financial Institutions changes control",
    message:"As a company, we believe in operating as independent national carriers."
   },
  { id:4,
    title:"",
    img: Slider7 },
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
                {item.title}
              </h4>

              <p className="text-sm text-gray-600">
               {item.message}
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
