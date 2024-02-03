import React from "react";

function HomeData() {
  const cardData = {
    title: "Live From Space",
    image: "https://source.unsplash.com/random?space",
    unpublished: true,
  };

  const courses = [
    {
      name: "Course 1",
      description: "John Doe requested to enroll in the course",
    },
    {
      name: "Course 2",
      description: "Jane Smith requested to enroll in the course",
    },
    {
      name: "Course 3",
      description: "Max Moller requested to enroll in the course",
    },
  ];

  return { cardData, courses };
};

export default HomeData;
