import Image from "next/image";
import Link from "next/link";
import Author from "./Author";

const CategoryPost = () => {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"#"}>
          <Image
            src="/images/300x250.png"
            alt={""}
            className="rounded"
            width={"300"}
            height={"250"}
          />
        </Link>
      </div>

      <div className="info flex flex-col justify-center">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"#"}>
            Business, Travel
          </Link>
          {" — "}
          <Link className="text-gray-800 hover:text-gray-600" href={"#"}>
            July 30, 2023
            {/* ┬ ↗ */}
          </Link>
        </div>
        <div className="title">
          <Link
            href={""}
            className="text-xl font-bold text-gray-800  hover:text-gray-600 py-3"
          >
            Just In: World Population Crosses 8 Billion Mark
          </Link>
        </div>

        <Author></Author>
      </div>
    </div>
  );
};

export default CategoryPost;
