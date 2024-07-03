import Image from "next/image";
import ImgProfile from "../../public/profile.jpeg";
import { Separator } from "./ui/separator";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";

interface ProfileProps {}
const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <div className=" border border-zinc-500 h-full rounded-lg p-5  bg-[#1F1E1F]">
      <div className="aspect-square rounded-md p-4">
        <Image
          src={ImgProfile}
          alt="profile"
          width={200}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="font-poppins text-white flex justify-center text-2xl mt-2">
        Bryan Julio
      </div>
      <div className="font-poppins text-white flex justify-center text-md mt-2 bg-[#282729] rounded-md p-2 items-center">
        Desenvolvedor Web
      </div>
      <Separator className="my-8" />
      <div className="flex flex-row gap-2">
        <div className=" w-fit h-fit rounded-md p-1 shadow-[#FFFF] shadow-[-1px_-1px_4px_-2px] hover:shadow-[-1px_-1px_8px_-2px] ">
          <CiMail color="#FFCD4D" size={30} />
        </div>
        <div>
          <div className="text-sm">email</div>
          <div>bryan.19julio@gmail.com</div>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <div className=" w-fit h-fit rounded-md p-1 shadow-[#FFFF] shadow-[-1px_-1px_4px_-2px] hover:shadow-[-1px_-1px_8px_-2px] ">
          <IoPhonePortraitOutline color="#FFCD4D" size={20} />
        </div>
        <div>
          <div className="text-sm">Telefone</div>
          <div>19 971495663</div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className=" w-fit h-fit rounded-md p-1 shadow-[#FFFF] shadow-[-1px_-1px_4px_-2px] hover:shadow-[-1px_-1px_8px_-2px] ">
          <IoPhonePortraitOutline color="#FFCD4D" size={20} />
        </div>
        <div>
          <div className="text-sm">Telefone</div>
          <div>19 971495663</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
