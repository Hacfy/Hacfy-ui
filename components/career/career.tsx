"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const courses = [
  {
    title: "The Evolution of Phishing Attacks: Why We Still Fall for It (and How to Stay Safe)",
    description:
      "Phishing has been around for decades, yet it's still one of the most successful tricks in a hacker's playbook. Discover why phishing still works and how to protect yourself in today's digital world.",
    image: "/i2.jpg",
    route:"/blogs/phishing-evolution-2024"
  },
  {
    title: "Financial Fraud in 2025: Digital Payments Under Siege",
    description:
      "With UPI, digital wallets, and instant payments booming worldwide, financial fraud has evolved into more sophisticated scams. Fraudsters are leveraging AI, social engineering, and deepfakes to bypass verification systems.",
    image: "/i2.jpg",
    route:"/blogs/financial-fraud-trends-2025"
  },
  {
    title: "Identity Theft Resource Center Sees Acceleration of Data Breach Trends in H1 2025",
    description:
      "The Identity Theft Resource Center (ITRC) tracked 1,732 U.S. data compromises in the first half of 2025, putting the year on pace to break records if current trends continue. Cyberattacks remain the leading cause, with financial services and healthcare among the most targeted sectors.",
    image: "/i2.jpg",
    route:"blogs/itrc-h1-2025-data-breach-trends"
  },
];

function BlogsCard({
  title,
  description,
  image,
  route,
}: {
  title: string;
  description: string;
  image: string;
  route: string;
}) {
  const Router = useRouter();
  return (
    <div
      className="bg-primary border border-gray-700 rounded-lg p-6 
      shadow-lg flex flex-col items-center text-center transition-transform duration-300  hover:shadow-xl"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="rounded-md"
      />
      <h3 className="text-lg font-bold text-secondary mt-4">{title}</h3>
      <p className="text-gray-900 mt-2">{description}</p>
      <button onClick={()=> Router.push(route)} className="bg-secondary hover:bg-secondary/90 text-white mt-6 px-8 py-2 rounded-xl font-bold text-lg  shadow-lg">
        Read more
      </button>
    </div>
  );
}

export default function BlogsPage() {
  return (
    <section className=" text-white py-16 px-8 md:px-16 lg:px-32">
      <h2 className="text-center text-4xl md:text-4xl font-bold mb-8 text-secondary">
        Blogs and Newsletters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {courses.map((course, index) => (
          <BlogsCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}
