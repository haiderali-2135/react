import React from 'react'

function card(props) {
    console.log(props);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-6/268606373_1527881847573930_5871178824006280491_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PA0Ja3iabrUAX94F-9o&_nc_ht=scontent.fisb17-1.fna&oh=00_AfBwRhMZXp0MExZuOR8VhWh38JaHA2T7vnerWYWtm9G-0Q&oe=654774C8"
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{props.username}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
        View Profile →
      </button>
    </div>
  </div>
  )
}

export default card
