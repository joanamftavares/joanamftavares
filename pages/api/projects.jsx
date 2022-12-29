export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/919966397524738091/1058022852600799312/4bf029229e9f4ec241117cd42c39aceb89c2c81839e99f001249a448.png",
      name: "investments 4 some",
      description: "app developed during first year of my master's degree. it aims to educate the user on how to invest and how to analyze usual technical indicators",
      link: "https://investments4some-n1xe.onrender.com/",
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/737348411568685066/999563078079361074/YT_AVATAR_NET.jpg",
      name: "project 2",
      description: "project 2 description",
      link: "https://youtube.com/UmutBayraktarYT",
    }
  ];
  res.status(200).json(data);
};
