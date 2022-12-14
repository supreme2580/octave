function Story({ img, username }) {
  return (
    <div>
       <img src={"/user.jpeg"} className="w-14 h-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain hover:scale-110 transition transform duration-200 ease-out cursor-pointer" alt="status Image" />
       <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  )
}

export default Story
