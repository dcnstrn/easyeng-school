import Image from "next/image";

const index = () => {
  return (
    <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-32">
      <h2 className="text-4xl sm:text-65xl font-bold text-center">
        Зручна <br /> онлайн платформа
      </h2>
      <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
        Спілкуйтеся з викладачем англійською в режимі реального часу вже з
        перших занять через особистий кабінет
      </h3>
      <div className="grid grid-cols-1 my-16">
        <Image
          src="/images/team/room.webp"
          alt="office-image"
          height={684}
          width={1296}
        />
      </div>
    </div>
  );
};

export default index;
