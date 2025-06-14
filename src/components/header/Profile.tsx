import Image from "next/image";
import avatar from "/public/images/graphics/avatar.jpg";
import iconArrow from "/public/icons-header/icon-arrow.svg";

const Profile = () => {
  return (
    <div className="rounded-[50%] ml-6 p-2 flex flex-1 justify-end items-center gap-2.5">
      <Image
        src={avatar}
        alt="Ваш профиль"
        width={40}
        height={40}
        className="rounded-[50%] min-w-10 min-h-10"
      />
      <p className="hidden xl:block cursor-pointer p-2.5">Maksym</p>
      <button className="hidden xl:block cursor-pointer p-2">
        <Image
          src={iconArrow}
          alt="Меню профиля"
          width={24}
          height={24}
          sizes="24px"
        />
      </button>
    </div>
  );
};

export default Profile;
