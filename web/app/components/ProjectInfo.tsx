import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Image4 from "@/public/project-card4.svg"

const ProjectInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-between border-b pb-2 mb-5">
        <p className="text-projsync-green font-kumbh-sans text-2xl">Projects</p>
        <button className="bg-projsync-green flex w-8 h-8 sm:h-10 sm:w-28 rounded-lg items-center justify-center">
          <IoIosArrowDown className="text-white size-4 font-extrabold sm:mr-1" />
          <span className="text-white font-manrope text-xs  font-medium hidden sm:block">
            Assign Status
          </span>
        </button>
      </div>
      <div>
        <h1 className="font-manrope font-medium text-3xl text-projsync-green mb-4">OrionPay</h1>
        <h4 className="font-manrope text-projsync-green font-normal text-sm mb-4">Description</h4>
        <p className="font-poppins font-light text-gray-700 text-left text-sm/7 w-8/12 mb-4 ">
          Donec ac risus metus. Suspendisse ultrices purus sed metus rutrum,
          eget pharetra quam tristique. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Suspendisse non sapien
          a nunc elementum mattis. Aliquam euismod ex vitae velit mollis
          ullamcorper. Aenean laoreet ex dui, ornare rhoncus sem interdum nec. <br /> <br />
          Pellentesque vel tortor id ipsum fermentum pretium eu eget dui.
          Quisque a commodo neque. Mauris augue lectus, vulputate placerat felis
          ac, convallis volutpat lorem. Ut eros augue, fermentum id maximus vel,
          volutpat id nunc. Suspendisse vitae justo nunc. In erat turpis,
          fermentum malesuada odio lacinia, feugiat ultrices nisi. Donec at
          velit a nisi efficitur sollicitudin.
        </p>
        <h3 className="font-kumbh-sans text-projsync-green font-medium text-sm mb-4">Members</h3>
        <div className="space-y-3 mb-4">
            <div className="flex">
            <Image src={Image4} alt="profile" className="size-7 mr-5" />
            <p className="font-kumbh-sans">Godwin Owusu</p>
            </div>
            <div className="flex">
            <Image src={Image4} alt="profile" className="size-7 mr-5" />
            <p className="font-kumbh-sans">Ama Abrampah</p>
            </div>
            <div className="flex">
            <Image src={Image4} alt="profile" className="size-7 mr-5" />
            <p className="font-kumbh-sans">John Teye Doku</p>
            </div>
            <div className="flex">
            <Image src={Image4} alt="profile" className="size-7 mr-5" />
            <p className="font-kumbh-sans">Prince Twumasi</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectInfo;
