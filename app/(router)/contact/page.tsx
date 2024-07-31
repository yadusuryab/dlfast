import Link from "next/link";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="py-20 px-10 md:px-64">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <p className="mt-4">
        Do you want to know more about how we could help you? Don’t hesitate to
        get in touch with us.
      </p>
      <p className="mt-4">
        Contact us by email:{" "}
        <Link href="mailto:yadusurya666@gmail.com" className="text-primary">
          yadusurya666@gmail.com
        </Link>
      </p>
    </div>
  );
};

export default Page;
