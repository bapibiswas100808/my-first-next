import Link from "next/link";
import React from "react";

const AboutContent = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/About/history"}>History</Link>
        </li>
        <li>
          <Link href={"/About/mission"}>Mission</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutContent;
