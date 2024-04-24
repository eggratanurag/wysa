// predefined chats list
const chatLines = [
    { user: 'user1', message: "Hi there!", type: "text"},
    { user: 'user1', message: "Hello!", type: "text" },
    { user: 'user1', message: "How are you today?", type: "text" },
    { user: 'user1', message: "Hey Today I visited sundar nursery?", type: "both", imgUrl: "https://images.pexels.com/photos/269176/pexels-photo-269176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { user: 'user1', message: "I clicked a picture of mine as well", type: "both", imgUrl: "https://images.pexels.com/photos/712413/pexels-photo-712413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { user: 'user1', message: "It was a nice day", type: "text" },
    { user: 'user1', type: "image", imgUrl: "https://images.pexels.com/photos/589802/pexels-photo-589802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { user: 'user1', message: "Not much, just catching up on some work.", type: "text" },
    { user: 'user1', message: "Sounds busy!", type: "text" },
    { user: 'user1', message: "Yeah, but it's manageable.", type: "text" },
    { user: 'user1', message: "That's good to hear.", type: "text" },
    { user: 'user1', message: "Do you have any plans for the weekend?", type: "text" },
    { user: 'user1', message: "Not really, just relaxing at home.", type: "text" },
    { user: 'user1', message: "That sounds nice.", type: "text" },
    { user: 'user1', message: "Yeah, it should be a good break.", type: "text" },
    { user: 'user1', message: "I agree.", type: "text" },
    { user: 'user1', message: "Anyway, I have to go now. Talk to you later!", type: "text" },
    { user: 'user1', message: "Sure, talk to you later!", type: "text" }
  ];
  
  // predefined themes list
  export const themes = [
    {name: "Cyan", color1: "#DDEEED", color2: "#FDF1E0", id: "cyan" },
    {name: "Oxford Green", color1: "#203A43", color2: "#2C5364", id: "oxfordGreen" },
    {name: "Sky", color1: "#2980B9", color2: "#6DD5FA", id: "sky" },
    {name: "Ocean", color1: "#373B44", color2: "#4286f4", id: "ocean" },
    {name: "Cyberpunk", color1: "#12c2e9", color2: "#c471ed", id: "cyberpunk" },

  ]

  // predefined chat delays list
  export const chatDelayList = [ 10000, 7000, 5000, 2000 ]

export default chatLines;