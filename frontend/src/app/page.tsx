import { NextPage } from "next";

const Home: NextPage = () => {
  const list = [
    { title: "早", description: "多言語自動翻訳掲示板" },
    { title: "早稲", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
    { title: "早稲田", description: "多言語自動翻訳掲示板" },
  ];
  return (
    <div className="flex flex-col bg-gray-200 ">
      <div className="bg-gray-300">
        h1 header <br />
        <br />
        <br />
      </div>
      <div className="container mx-auto bg-gray-400">
        main
        <div className="flex flex-wrap justify-center ">
          {list.map((data, index) => (
            <a
              key={`${data.title}-${index}`}
              href="https://www.waseda-nishimura.org"
              className="block border border-black rounded-lg bg-white  w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 m-4"
            >
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </a>
          ))}
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="bg-gray-300">
        footer <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
