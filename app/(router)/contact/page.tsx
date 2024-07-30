import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="py-20 md:px-64 px-10 ">
      <h2 className="text-xl font-bold">Contact US</h2>
      <p>
        Do you want to know more about how we could help you? Don’t hesitate to
        get in touch with us.
      </p>
      Contact us by email:{" "}
      <Link href={"mailto:yadusurya666@gmail.com"} className="text-primary">yadusurya666@gmail.com</Link>
    </div>
  );
}

export default page;
