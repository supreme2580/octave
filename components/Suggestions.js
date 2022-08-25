import faker from "faker"
import { useEffect, useState } from "react"
import Profile from "./Profile"

function Suggestions() {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        setSuggestions(suggestions)
    }, [])
  return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
            <button className="text-gray-600 font-semibold">See all</button>
        </div>
        {
            suggestions.map(profile => <Profile key={profile.id} username={profile.username} company={profile.company} />)
        }
    </div>
  )
}

export default Suggestions
