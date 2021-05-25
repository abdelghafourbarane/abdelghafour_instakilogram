const PUBLICATIONS_LIST = [
  {
    id: "1",
    content: "coding ....",
    published_by: {
      id: "2",
      user_name: "Ronaldo",
      user_profil_photo_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    },
    photo_url:
      "https://assets-fr.imgfoot.com/cristiano-ronaldo-60509ce0c1689.jpg",
    liked_by: ["hamdoun", "abssi", "halima", "tizman"],
    comments: [
      {
        id: "3",
        comment_content: "good photo",
        commented_by: "hamdoun",
      },
      {
        id: "4",
        comment_content: "bad photo",
        commented_by: "abssi",
      },
      {
        id: "5",
        comment_content: "oh nice",
        commented_by: "tizman",
      },
    ],
  },
  {
    id: "6",
    content: "ghizlan",
    published_by: {
      id: "7",
      user_name: "abdo_1",
      user_profil_photo_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/FRA-ARG_%2810%29_%28cropped%29.jpg",
    },
    photo_url:
      "https://images.daznservices.com/di/library/GOAL/c2/60/antoine-griezmann-barcelona-la-liga-2020-21_1l2vl1y10pp5a1ooh5npj6jmsn.jpg?t=-1777694151&quality=60&w=1200&h=800",
    liked_by: ["hamdoun", "abssi", "halima", "tizman"],
    comments: [
      {
        id: "8",
        comment_content: "loser",
        commented_by: "hamdoun",
      },
      {
        id: "9",
        comment_content: "fucking loser",
        commented_by: "abssi",
      },
      {
        id: "10",
        comment_content:
          "do you want to read my comment? I want to tell you that you are a big loser too",
        commented_by: "halima",
      },
    ],
  },
];

export default PUBLICATIONS_LIST;
