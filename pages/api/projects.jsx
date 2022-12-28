export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/737348411568685066/954502826791428136/codeshare_logo.png",
      name: "project 1",
      description: "project 1 description",
      link: "https://codeshare.me",
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
