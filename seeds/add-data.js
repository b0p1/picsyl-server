/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Matt Maloney",
      username: "matt_m",
      img: "matt-profile.jpeg",
      desc: "Experimentation at its finest.",
    },
    {
      id: 2,
      name: "Ulrich Hofmann",
      username: "hofmann.art",
      img: "ulrich-profile.jpeg",
      desc: "Acrylic Painting | Based in Berlin ",
    },
    {
      id: 3,
      name: "Caitlin Romano",
      username: "cr.murals",
      img: "caitlin-profile.jpeg",
      desc: "I am an artist, designer, and muralist.",
    },
    {
      id: 4,
      name: "Jordan Lane",
      username: "house_of_prints",
      img: "jordan-profile.jpeg",
      desc: "SCAD Art Student  2024 ",
    },
    {
      id: 5,
      name: "Sofia Rojo",
      username: "quirky.ghost.workshop",
      img: "sofia-profile.jpeg",
      desc: "Artist turned Web Developer",
    },
  ]);
  await knex("posts").del();
  await knex("posts").insert([
    {
      id: 1,
      img: "caitlin1.jpeg",
      desc: "WIP of my newest project! What do you think?",
      user_id: 3,
    },
    {
      id: 2,
      img: "jordan1.jpeg",
      desc: "THE PAST CANNOT BE CHANGED. THE FUTURE IS IN YOUR POWER",
      user_id: 4,
    },
    { id: 3, img: "ulrich1.jpeg", desc: '"Transparency"', user_id: 2 },
    {
      id: 4,
      img: "caitlin2.jpeg",
      desc: "I've been working a lot recently in these small spaces. I've found them quite enjoyable... It's like transporting to another world.",
      user_id: 3,
    },
    { id: 5, img: "matt1.jpeg", desc: "the abyss | PART 1 / 5", user_id: 1 },
    {
      id: 6,
      img: "jordan2.jpeg",
      desc: "school-town view ft. fountain pen",
      user_id: 4,
    },
    { id: 7, img: "matt2.jpeg", desc: "THE ABYSS | PART 2 / 5", user_id: 1 },
    { id: 8, img: "matt3.jpeg", desc: "THE ABYSS | PART 3 RED", user_id: 1 },
    {
      id: 9,
      img: "ulrich2.jpeg",
      desc: '"The Colors That Make Us"',
      user_id: 2,
    },
    {
      id: 10,
      img: "caitlin3.jpeg",
      desc: "One of my first projects... 5 years ago I got the chance to paint this super fun design for an elementary school outdoor walkway. The kids loved it and after that experience, I knew I made the right choice to follow my dreams.",
      user_id: 3,
    },
    { id: 11, img: "matt4.jpeg", desc: "the abyss | PART 4 / 5", user_id: 1 },
    {
      id: 12,
      img: "jordan3.jpeg",
      desc: "From my most recent photography project",
      user_id: 4,
    },
    { id: 13, img: "matt5.jpeg", desc: "lil star", user_id: 1 },
    {
      id: 14,
      img: "caitlin4.jpeg",
      desc: "I had a fun time painting Luciana's studio this past week!! So happy with how it turned out!",
      user_id: 3,
    },
    { id: 15, img: "matt6.jpeg", desc: "off kilter...", user_id: 1 },
    { id: 16, img: "matt7.jpeg", desc: "Unknown Guest", user_id: 1 },
    { id: 17, img: "ulrich3.jpeg", desc: '"Pouring Out"', user_id: 2 },
    { id: 18, img: "matt8.jpeg", desc: "THE ABYSS | PART 5 / 5", user_id: 1 },
    {
      id: 19,
      img: "jordan4.jpeg",
      desc: "This is part of a print exchange. Hopefully they like it... I can't wait to see what everyone came up with!",
      user_id: 4,
    },
    {
      id: 20,
      img: "caitlin5.jpeg",
      desc: "Sneak Peek of my latest project ",
      user_id: 3,
    },
    {
      id: 21,
      img: "ulrich4.jpeg",
      desc: '"When The Sun Came Out"',
      user_id: 2,
    },
  ]);
  await knex("comments").del();
  await knex("comments").insert([
    {
      id: 1,
      text: "I love the colors you chose. I can't stop thinking about how hard it must have been to get the paint out of her hair!",
      post_id: 17,
      user_id: 3,
    },
    {
      id: 2,
      text: "she might have had to shave her head after the photoshoot!!",
      post_id: 17,
      user_id: 4,
    },
    { id: 3, text: "The red circle is a nice touch", user_id: 4, post_id: 8 },
    { id: 4, text: "I thought so too. thanks", post_id: 8, user_id: 1 },
    {
      id: 5,
      text: "Its so cool that you've been sharing your progression and planning",
      user_id: 4,
      post_id: 16,
    },
    { id: 6, text: "Outstanding", user_id: 4, post_id: 18 },
    { id: 7, text: "thank you", user_id: 1, post_id: 18 },
    {
      id: 8,
      text: "I've been following your work and I love your style",
      user_id: 2,
      post_id: 20,
    },
    { id: 9, text: "WOW", user_id: 4, post_id: 12 },
    { id: 10, text: "That expression! Amazing work", user_id: 3, post_id: 12 },
    { id: 11, text: "so talented", user_id: 1, post_id: 12 },
    { id: 12, text: "thank you everyone!", user_id: 4, post_id: 12 },
    {
      id: 13,
      text: "What is real. How do you define real?",
      user_id: 1,
      post_id: 2,
    },
    { id: 14, text: "I wish I had that view!", user_id: 3, post_id: 6 },
    { id: 15, text: "where can I see this??", user_id: 4, post_id: 4 },
    { id: 16, text: "This looks like a lot of fun", user_id: 2, post_id: 4 },
  ]);
  await knex("likes").del();
  await knex("likes").insert([
    { id: 1, post_id: 2, user_id: 1 },
    { id: 2, post_id: 2, user_id: 2 },
    { id: 3, post_id: 3, user_id: 1 },
    { id: 4, post_id: 4, user_id: 1 },
    { id: 5, post_id: 5, user_id: 1 },
    { id: 6, post_id: 6, user_id: 1 },
    { id: 7, post_id: 6, user_id: 2 },
    { id: 8, post_id: 7, user_id: 1 },
    { id: 9, post_id: 8, user_id: 1 },
    { id: 10, post_id: 9, user_id: 1 },
    { id: 11, post_id: 11, user_id: 1 },
    { id: 12, post_id: 12, user_id: 1 },
    { id: 13, post_id: 12, user_id: 2 },
    { id: 14, post_id: 12, user_id: 3 },
    { id: 15, post_id: 13, user_id: 1 },
    { id: 16, post_id: 13, user_id: 2 },
    { id: 17, post_id: 14, user_id: 1 },
    { id: 18, post_id: 15, user_id: 1 },
    { id: 19, post_id: 15, user_id: 2 },
    { id: 20, post_id: 16, user_id: 1 },
    { id: 21, post_id: 17, user_id: 1 },
    { id: 22, post_id: 17, user_id: 2 },
    { id: 23, post_id: 18, user_id: 1 },
    { id: 24, post_id: 18, user_id: 2 },
    { id: 25, post_id: 18, user_id: 3 },
    { id: 26, post_id: 19, user_id: 1 },
    { id: 27, post_id: 20, user_id: 1 },
    { id: 28, post_id: 21, user_id: 1 },
    { id: 29, post_id: 21, user_id: 1 },
  ]);
};
