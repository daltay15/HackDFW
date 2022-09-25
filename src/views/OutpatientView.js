export default function OutpatientView() {
  return (
    <div className="flex flex-col justify-start items-center bg-gray-200 h-full pt-10 px-4">
      <div className="text-lg text-center text-gray-800 font-bold pb-6">
        Before you go, lets take care of a few things!
      </div>
      {/*Check box input */}
      <div className="flex items-center justify-center border-2 w-full border-gray-500 flex-col gap-y-2 py-4">
        <div className="flex items-center justify-center">
          <label> Lorem Ipsum Dolorem </label>
          <input type="checkbox" className="mx-4" value="Lorem Ipsum" />
        </div>
        <div className="flex items-center justify-center">
          <label> Lorem Ipsum Dolorem </label>
          <input type="checkbox" className="mx-4" value="Lorem Ipsum" />
        </div>
        <div className="flex items-center justify-center">
          <label> Lorem Ipsum Dolorem </label>
          <input type="checkbox" className="mx-4" value="Lorem Ipsum" />
        </div>
        <div className="flex items-center justify-center">
          <label> Lorem Ipsum Dolorem </label>
          <input type="checkbox" className="mx-4" value="Lorem Ipsum" />
        </div>
        <div className="flex items-center justify-center">
          <label> Lorem Ipsum Dolorem </label>
          <input type="checkbox" className="mx-4" value="Lorem Ipsum" />
        </div>
        <div className="text-2xl">(0/5) Completed</div>
      </div>
    </div>
  );
}
