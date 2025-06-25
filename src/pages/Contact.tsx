import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  communication: "email" | "phone";
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    // You can send data to an API here
  };

  return (
    <section className="py-24">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* Left Section (Contact Info) */}
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="ContactUs tailwind section"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block space-y-6">
                    <div className="flex items-center">
                      <span className="material-icons text-indigo-600">phone</span>
                      <h5 className="ml-5 text-black text-base">470-601-1911</h5>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-indigo-600">email</span>
                      <h5 className="ml-5 text-black text-base">Pagedone1234@gmail.com</h5>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-indigo-600">location_on</span>
                      <h5 className="ml-5 text-black text-base">
                        654 Sycamore Avenue, Meadowville, WA 76543
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-indigo-600 font-manrope text-4xl font-semibold mb-11">
              Send Us A Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full h-12 mb-3 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
                placeholder="Name"
              />
              {errors.name && <p className="text-red-500 text-sm mb-3">{errors.name.message}</p>}

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full h-12 mb-3 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email.message}</p>}

              <input
                {...register("phone")}
                className="w-full h-12 mb-3 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
                placeholder="Phone"
              />

              <div className="mb-6">
                <h4 className="text-gray-500 text-lg mb-2">Preferred method of communication</h4>
                <div className="flex">
                  <label className="flex items-center mr-6 cursor-pointer">
                    <input
                      {...register("communication", { required: "Select a method" })}
                      type="radio"
                      value="email"
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      {...register("communication", { required: "Select a method" })}
                      type="radio"
                      value="phone"
                      className="mr-2"
                    />
                    Phone
                  </label>
                </div>
                {errors.communication && (
                  <p className="text-red-500 text-sm mt-2">{errors.communication.message}</p>
                )}
              </div>

              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                className="w-full h-24 mb-4 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none p-4 resize-none"
              />
              {errors.message && <p className="text-red-500 text-sm mb-3">{errors.message.message}</p>}

              <button
                type="submit"
                className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
