import Profile from "../classes/Profile";
import Sports from "../classes/Sports";

const profiles: Profile[] = [
  {
    id: 1,
    firstName: "LeBron",
    lastName: "James",
    sports: [Sports.Basketball, Sports.Football, Sports.TrackAndField],
    team: "Los Angeles Lakers",
    aboutMe: "A four-time NBA champion and widely regarded as one of the greatest basketball players of all time, known for his all-around game and leadership.",
    gender: "Male",
    hobbies: ["Basketball", "Philanthropy", "Music"],
    profileImage: "https://www.example.com/images/lebron.jpg"
  },
  {
    id: 2,
    firstName: "Serena",
    lastName: "Williams",
    sports: [Sports.Tennis],
    team: "N/A",
    aboutMe: "A legendary tennis player with 23 Grand Slam singles titles, Williams is known for her powerful serve and unmatched resilience on the court.",
    gender: "Female",
    hobbies: ["Tennis", "Fashion", "Activism"],
    profileImage: "https://www.example.com/images/serena.jpg"
  },
  {
    id: 3,
    firstName: "Cristiano",
    lastName: "Ronaldo",
    sports: [Sports.Soccer, Sports.Futsal],
    team: "Al Nassr FC",
    aboutMe: "One of the greatest footballers in history, Ronaldo is known for his incredible goal-scoring ability, athleticism, and competitive spirit.",
    gender: "Male",
    hobbies: ["Football", "Fitness", "Fashion"],
    profileImage: "https://www.example.com/images/cristiano.jpg"
  },
  {
    id: 4,
    firstName: "Simone",
    lastName: "Biles",
    sports: [Sports.Gymnastics],
    team: "USA Gymnastics",
    aboutMe: "The most decorated American gymnast of all time, Biles has revolutionized the sport with her groundbreaking skills and mental toughness.",
    gender: "Female",
    hobbies: ["Gymnastics", "Reading", "Traveling"],
    profileImage: "https://www.example.com/images/simone.jpg"
  },
  {
    id: 5,
    firstName: "Tom",
    lastName: "Brady",
    sports: [Sports.Football, Sports.Baseball],
    team: "Retired (formerly Tampa Bay Buccaneers)",
    aboutMe: "Considered the greatest quarterback in NFL history, Brady holds seven Super Bowl titles and numerous records for passing yards and touchdowns.",
    gender: "Male",
    hobbies: ["Football", "Golf", "Family"],
    profileImage: "https://www.example.com/images/tom.jpg"
  },
  {
    id: 6,
    firstName: "Megan",
    lastName: "Rapinoe",
    sports: [Sports.Soccer],
    team: "OL Reign",
    aboutMe: "A vocal advocate for social justice and gender equality, Rapinoe is a World Cup champion and Olympic gold medalist.",
    gender: "Female",
    hobbies: ["Soccer", "Advocacy", "Reading"],
    profileImage: "https://www.example.com/images/megan.jpg"
  },
  {
    id: 7,
    firstName: "Usain",
    lastName: "Bolt",
    sports: [Sports.TrackAndField],
    team: "Jamaica National Team",
    aboutMe: "Known as the fastest man in the world, Bolt holds the world record for both the 100m and 200m sprints.",
    gender: "Male",
    hobbies: ["Track", "Music", "Parties"],
    profileImage: "https://www.example.com/images/usain.jpg"
  },
  {
    id: 8,
    firstName: "Michael",
    lastName: "Phelps",
    sports: [Sports.Swimming, Sports.Lacrosse],
    team: "USA Swimming",
    aboutMe: "With 23 Olympic gold medals, Phelps is the most decorated Olympian in history, renowned for his dominance in freestyle and butterfly events.",
    gender: "Male",
    hobbies: ["Swimming", "Golf", "Charity Work"],
    profileImage: "https://www.example.com/images/michael.jpg"
  },
  {
    id: 9,
    firstName: "Naomi",
    lastName: "Osaka",
    sports: [Sports.Tennis],
    team: "N/A",
    aboutMe: "A rising star in tennis, Osaka has won multiple Grand Slam titles and is known for her poise on the court and activism off it.",
    gender: "Female",
    hobbies: ["Tennis", "Fashion", "Philanthropy"],
    profileImage: "https://www.example.com/images/naomi.jpg"
  },
  {
    id: 10,
    firstName: "Patrick",
    lastName: "Mahomes",
    sports: [Sports.Football, Sports.Baseball],
    team: "Kansas City Chiefs",
    aboutMe: "A dynamic quarterback with a unique playing style, Mahomes led the Chiefs to two Super Bowl victories and is known for his arm strength and mobility.",
    gender: "Male",
    hobbies: ["Football", "Baseball", "Family"],
    profileImage: "https://www.example.com/images/patrick.jpg"
  }
];

export default profiles;
