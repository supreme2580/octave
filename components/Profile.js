function Profile({ id, username, company }) {
  return (
    <div key={id} className="flex items-center justify-between mt-3">
                    <img
                        src="/user.jpeg"
                        alt="image"
                        className="w-10 h-10 rounded-full border p-[2px"
                    />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">{username}</h2>
                        <h3 className="text-xs text-gray-400">Works at {company.name}</h3>
                    </div>
                    <button className="text-xs font-bold text-blue-400">Follow</button>
                </div>
  )
}

export default Profile
