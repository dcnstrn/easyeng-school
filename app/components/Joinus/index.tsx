const Join = () => {
  return (
    <div className="bg-joinus my-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest">
            Звʼязок з нами
          </h3>
          <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
            {" "}
            Залиште нам
            <br /> ваші контакні дані
          </h2>
          <p className="text-lightblack text-base font-normal">
            Та наш менеджер звʼяжеться з нами <br /> найближщим часом.
          </p>
        </div>

        <div className="mx-auto max-w-4xl pt-5">
          <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
            <div>
              <input
                type="name"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Ваше Імʼя"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="phone"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black"
                placeholder="Ваш номер телефону"
                autoComplete="off"
              />
            </div>
            <div className="sm:mr-3">
              <button
                type="submit"
                className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
              >
                Замовити дзвінок
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
