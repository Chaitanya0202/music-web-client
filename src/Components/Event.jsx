import React from "react";

const EventCard = () => {
  const events = [
    {
      id: 1,
      title: "Live Music Night",
      date: "May 20, 2024",
      description: "Join us for a night of live music featuring local bands.",
      image: "https://source.unsplash.com/550x350/?music",
    },
    {
      id: 2,
      title: "Trivia Night",
      date: "June 5, 2024",
      description: "Test your knowledge with our fun-filled trivia night.",
      image: "https://source.unsplash.com/550x350/?trivia",
    },
    {
      id: 3,
      title: "Karaoke Party",
      date: "June 18, 2024",
      description: "Sing your heart out at our karaoke party.",
      image: "https://source.unsplash.com/550x350/?karaoke",
    },
    {
      id: 4,
      title: "Happy Hour Specials",
      date: "July 3, 2024",
      description: "Enjoy discounted drinks and appetizers during our happy hour specials.",
      image: "https://source.unsplash.com/550x350/?happyhour",
    },
    {
      id: 5,
      title: "Game Night",
      date: "July 15, 2024",
      description: "Join us for a fun-filled evening of board games and friendly competition.",
      image: "https://source.unsplash.com/550x350/?gamenight",
    },
    {
      id: 6,
      title: "Outdoor BBQ",
      date: "August 5, 2024",
      description: "Experience our delicious BBQ menu in our outdoor seating area.",
      image: "https://source.unsplash.com/550x350/?bbq",
    },
    {
      id: 7,
      title: "Dance Party",
      date: "August 20, 2024",
      description: "Dance the night away with our DJ and dance floor.",
      image: "https://source.unsplash.com/550x350/?danceparty",
    },
    {
      id: 8,
      title: "Craft Beer Tasting",
      date: "September 10, 2024",
      description: "Sample a variety of craft beers from local breweries.",
      image: "https://source.unsplash.com/550x350/?craftbeer",
    }
    
  ];

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
        {events.map(event => (
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={`${event.image}`}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                {event.date}
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                {event.title}
              </h2>
              <p class="leading-relaxed text-base">
                {event.description}
              </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCard;
