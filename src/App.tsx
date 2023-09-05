import { Fragment, useState } from "react";

function App() {
  const arrValue: string[] = [
    "Nell",
    "Xin chào",
    "Cảm ơn",
    "Lần tới nhé",
    "Bắt tay cái",
    "Chúc mừng bạn",
  ];
  const [valueRand, setValueRand] = useState<string>("");
  const handleClick = () => {
    let randVal: number = Math.floor(Math.random() * arrValue.length);
    setValueRand(arrValue[randVal]);
  };
  let day: Date = new Date();
  let hour = day.getHours();
  let minute = day.getMinutes();
  let secon = day.getSeconds();

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-30% via-sky-500 via-50% to-emerald-500 to-80% relative bg-black h-[100vh]">
      <div className="absolute  top-0 left-0 md:left-[25%] ml-auto text-center overflow-hidden text-lg w-full md:max-w-[450px] shrink-0 py-10 ">
        <div className="z-40 p-2 border-2 border-dotted border-emerald-900 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="font-mono text-orange-500 md:text-red-800">
            "Quày...Quày...Quay...Quay"
          </h1>
          <h4 className="break-words">
            Chào mọi ngườiii, Nell có một trò chơi nhỏ xíu để mọi người chơi
            cùng. Vô cùng đơn giản và chỉ có 1
            <span className="font-bold text-red-700"> lưu ý </span> là sau khi
            mọi người đã có cho mình một giá trị đặt biệt riêng, hãy nhanh tay
            chụp lại màn hình và comment vào bài post này của mình nhé.
          </h4>
          <h3>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 inline-block pl-2 text-red-800"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Thời gian tham gia trò chơi của mình có chút "vội vã" tính từ khi
            mình post bài đến 21h cùng ngày, sau đó mình sẽ kết thúc comment lại
            và bắt đầu chọn giá trị ngẫu nhiên từ app sau đó để lại ở comment
            trong bài post.
          </h3>
          Sẽ không giới hạn các bạn có cùng câu trả lời nhé, 5 bạn đúng comment
          sớm sẽ được mình gửi tặng 1Pi.
          <br />
          Các bạn lưu ý thời gian tham gia nhé. Dù là Pi không cao nhưng mong là
          sẽ nhiều bạn tham gia game của Nell nhé !!!.
          <div className="my-4">
            <button
              onClick={handleClick}
              disabled={valueRand ? true : false}
              className={`inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${
                !valueRand ? "cursor-pointer" : "cursor-not-allowed"
              }`}
            >
              Nhấn đây nè
            </button>
            {valueRand ? (
              <input
                className="block rounded-lg mt-6 text-red-600 ml-auto w-full pl-20 shadow-teal-400 shadow-lg text-2xl font-bold border-yellow-500 border-2 outline-none"
                value={valueRand}
              />
            ) : (
              <p className="text-center text-red-900 mt-4">
                Kết quả sẽ hiện ở đâyyy
              </p>
            )}
          </div>
          {valueRand ? (
            <p className="font-sans uppercase xl text-green-800 italic">
              Time: {hour}:{minute}:{secon}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
