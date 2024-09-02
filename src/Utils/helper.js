var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
 ];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
  
};

export function generateRandomComment() {
  const comments = [
  "Great video! 👍",
  "This is a fantastic video! 🤩📚",
  "I learned a lot from this video. 📚🤔",
  "This is very insightful. 🤔✨",
  "I enjoyed watching this video. 😊👍",
  "This video is well-made. 👍📝",
  "This video is informative and engaging. 💯🔥",
  "I appreciate your perspective on this video. 🙏❤️",
  "This video is a helpful resource. ✅📚",
  "I'll definitely refer back to this video. 🔖👍",
  "I'm impressed by your knowledge in this video. 🧠✨",
  "This video is a thought-provoking piece. 🤔💭",
  "I found this video to be very relevant to my interests. 🎯😊",
  "This video is a valuable contribution to the discussion. 👍💬",
  "I'm glad I came across this video. 😊🎉",
  "This video is a great example of clear and concise presentation. 📝👍",
  "I'm impressed by the depth of your analysis in this video. 🔍🤔",
  "This video is a very well-researched piece. 📚💯",
  "I'm inspired by your ideas in this video. ✨🔥",
  "This video is about a topic I'm passionate about. 🔥❤️",
  "I'm looking forward to more videos like this. 期待👍",
  "This video is a great starting point. 🚀🎉",
  "I'll be sharing this video with my friends and colleagues. 👥👍",
  "This video is a much-needed resource. 🛠️❤️",
  "This video is a timely piece. ⏰👍",
  "I'm grateful for this video. 🙏😊",
  "This video is a valuable addition to the conversation. 👍💬",
  "I'm impressed by your ability to explain complex topics in a simple way in this video. 💡👍",
  "This video is well-organized. 🗂️👍",
  "I'm excited to see what you create next. 🎉✨",
  "Wow, this video is amazing! 🤩",
  "I can't believe this video! 😲",
  "This video is so cool! 😎",
  "I'm speechless. 😶",
  "This video is incredible! 👏",
  "This video is beyond my expectations. 🤯",
  "This video is the best thing I've seen all day. 🎉",
  "I'm so impressed. 👍👍👍",
  "I'm blown away. 😮",
  "This video is mind-blowing. 🤯",
  "I'm so happy I found this video. 😊",
  "This video is exactly what I was looking for. 🎯",
  "I'm so grateful for this video. 🙏",
  "This video is a game-changer. 🎮",
  "This video is a breakthrough. 💥",
  "This video is a revolution. 🔄",
  "This video is a masterpiece. 🎨",
  "This video is a work of art. 🖼",
  "This video is a miracle. ✨",
  "This video is a dream come true. 🌟",
  "This video is a once-in-a-lifetime experience. 💫",
  "This video is a moment I'll never forget. 📸"
  ];

  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}