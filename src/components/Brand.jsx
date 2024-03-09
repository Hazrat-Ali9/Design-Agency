import Image from 'next/image';

import Marquee from 'react-fast-marquee';

const Brand = () => {
  return (
    <div className=" py-7 -mt-32 mb-24 bg-white z-10 ">
      <Marquee>
        <Image
          src="/logos_google.png"
          alt="google"
          width={88}
          height={28}
          style={{
            width: "auto",
            height: "auto",
          }}
          className=" mr-36"
        />
        <Image
          src="/Trello-logo-blue 1.png"
          alt="google"
          width={88}
          height={28}
          style={{
            width: "auto",
            height: "auto",
          }}
          className=" mr-36"
        />
        <Image
          src="/logos_monday.png"
          alt="google"
          width={88}
          height={28}
          style={{
            width: "auto",
            height: "auto",
          }}
          className=" mr-36"
        />
        <Image
          src="/Notion.png"
          alt="google"
          width={88}
          height={28}
          style={{
            width: "auto",
            height: "auto",
          }}
          className=" mr-36"
        />
        <Image
          src="/Slack.png"
          alt="google"
          width={88}
          height={28}
          style={{
            width: "auto",
            height: "auto",
          }}
          className=" mr-36"
        />
      </Marquee>
    </div>
  );
};

export default Brand;