import React, { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  // Simulated data for events (replace with your actual event data)
  const eventData = [
    {
      id: 1,
      title: "Event 1",
      content: "Event 1 details...",
      tags: ["#event", "#fun"],
      images: ["image_url_1.jpg", "image_url_2.jpg"],
      videos: ["video_url_1.mp4"],
      likes: 10,
      comments: 5,
      seen: ["User 1", "User 2", "User 3", "User 4", "User 5"],
    },
    {
      id: 2,
      title: "Event 2",
      content: "Event 2 details...",
      tags: ["#event", "#happy"],
      images: ["image_url_3.jpg"],
      videos: [],
      likes: 5,
      comments: 2,
      seen: ["User 2", "User 4", "User 6"],
    },
    {
      id: 3,
      title: "Event 2",
      content: "Event 2 details...",
      tags: ["#event", "#happy"],
      images: ["image_url_3.jpg"],
      videos: [],
      likes: 5,
      comments: 2,
      seen: ["User 2", "User 4", "User 6"],
    },
    {
      id: 3,
      title: "Event 2",
      content: "Event 2 details...",
      tags: ["#event", "#happy"],
      images: ["image_url_3.jpg"],
      videos: [],
      likes: 5,
      comments: 2,
      seen: ["User 2", "User 4", "User 6"],
    },
    // Add more events as needed
  ];

  useEffect(() => {
    // Simulate fetching events from an API or database
    // Replace this with your actual data fetching logic
    setEvents(eventData);
  }, []);

  return (
    <section className="section ">
    <div className="container overflow-scroll max-h-50 bg-pink-900">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="max-w-md mx-auto">
        {events.map((event) => (
          <div key={event.id} className="mb-4 p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-700">{event.content}</p>

            {/* Tags */}
            <div className="mt-4">
              {event.tags.map((tag) => (
                <span key={tag} className="mr-2 text-blue-500">
                  {tag}
                </span>
              ))}
            </div>

            {/* Images */}
            <div className="mt-4">
              {event.images.map((imageUrl) => (
                <img
                  key={imageUrl}
                  src={imageUrl}
                  alt="Event"
                  className="mb-2 rounded-lg"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              ))}
            </div>

            {/* Videos */}
            <div className="mt-4">
              {event.videos.map((videoUrl) => (
                <video
                  key={videoUrl}
                  src={videoUrl}
                  controls
                  className="mb-2 rounded-lg"
                  style={{ maxWidth: "100%" }}
                />
              ))}
            </div>

            {/* Like and Comment Buttons */}
            <div className="mt-2">
              <button className="mr-2">
                Like ({event.likes})
              </button>
              <button>
                Comment ({event.comments})
              </button>
            </div>

            {/* Seen Section */}
            <div className="mt-4 overflow-auto" style={{ maxHeight: "150px" }}>
              <p className="text-gray-600">
                Seen by: {event.seen.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Events;
