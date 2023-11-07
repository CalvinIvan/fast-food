import Image from "next/image";
import background from "@/assets/bg1.png";
import FormSubmitButton from "../components/FormSubmit";

export default function AddProduct() {
  return (
    <div className="relative flex-col items-center">
      <div>
        <Image
          src={background}
          alt="Background"
          width={5000}
          height={50}
          className="h-[50rem] blur-[4rem] sm:h-[58rem] "
          priority
        />
      </div>
      <div className="absolute left-1/2 top-10 mt-16 w-full -translate-x-1/2 rounded-2xl bg-white/50 px-[4%] py-2 sm:w-[60%] sm:px-[5%]">
        <h1 className="mb-5 text-4xl font-semibold text-slate-100/[0.75] sm:mb-3 md:text-5xl">
          Add Product
        </h1>
        <form>
          <input
            required
            name="name"
            placeholder="Name"
            className="input input-bordered mb-3 w-full rounded-xl bg-white/75 p-2"
          />
          <textarea
            required
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered mb-3 w-full rounded-xl  bg-white/75 p-2"
          />
          <input
            required
            name="imageUrl"
            placeholder="Image URL"
            type="url"
            className="input input-bordered mb-3 w-full rounded-xl  bg-white/75 p-2"
          />
          <input
            required
            name="price"
            placeholder="Price"
            type="number"
            className="input input-bordered mb-3 w-full rounded-xl  bg-white/75 p-2"
          />
          <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
        </form>
      </div>
    </div>
  );
}
