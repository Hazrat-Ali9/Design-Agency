import Image from 'next/image';


const PageTitle = ({img,title,page}) => {
  return (
    <div>
      <div className=" bg-[#F8F9FC] pb-20 pl-7">
        <div>
          <Image
            src={img}
            alt="img"
            width={1440}
            height={370}
            className=" max-h-48"
          />
        </div>
        <div>
          <h1 className=" text-[#101A29] text-[40px] font-semibold">{title}</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a className=" text-[#101A29] font-semibold">Home</a>
              </li>
              <li>
                <a className=" text-[#20B15A] font-semibold">{page}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;