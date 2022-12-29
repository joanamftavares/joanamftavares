export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/919966397524738091/1058022852600799312/4bf029229e9f4ec241117cd42c39aceb89c2c81839e99f001249a448.png",
      name: "investments 4 some",
      description: "app developed during first year of my master's degree. it aims to educate the user on how to invest and how to analyze usual technical indicators.",
      link: "https://investments4some-n1xe.onrender.com/",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/919966397524738091/1058025165923041351/image.png",
      name: "bi4all - dashboard",
      description: "using power bi, we developed a dashboard with the analysis of multiple departments in bi4all. we used multiple techniques and KPI's to help provide insights/solutions.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNGM3ZDAwZmMtNzhiNi00ZGUyLWJmN2QtZjg3MTA2ODc2ZjRkIiwidCI6ImU0YmQ2OWZmLWU2ZjctNGMyZS1iMjQ3LTQxYjU0YmEyNDkwZSIsImMiOjh9",
    }
  ];
  res.status(200).json(data);
};
