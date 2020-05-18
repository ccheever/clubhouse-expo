type User = {
  firstName: string;
  lastName: string;
  avatar: string;
  followers: number;
  following: number;
  bio: string;
  username: string;
};

export let users: any = {
  rohan: {
    firstName: 'Rohan',
    lastName: 'Seth',
    avatar: 'https://pbs.twimg.com/profile_images/1244839965512491008/vc14IySU_400x400.jpg',
  },
  jen: {
    firstName: 'Jen',
    lastName: 'Fernquist Seth',
    avatar: 'https://pbs.twimg.com/profile_images/1156762330283163649/YnfF2vnF_400x400.jpg',
  },
  duckie: {
    firstName: 'Nicole',
    lastName: 'Lundblad',
    avatar: 'https://pbs.twimg.com/profile_images/613853343945879552/hx5sXghF_400x400.jpg',
  },
  lydia: {
    firstName: 'Lydia',
    lastName: 'Seth',
    avatar: 'https://static1.squarespace.com/static/5cba2bdcc2ff61041b86f4b8/5df063acd6478c453d382381/5df064ff14008e5e2f993008/1576038031801/1_ITk2MORJ8UDxC8NWjXHQzw.jpeg?format=500w',

  },
  carlos: {
    firstName: 'Carlos',
    lastName: 'Whitt',
    avatar: 'https://pbs.twimg.com/profile_images/2420234980/t762jhcozdw62oxrn6u4_400x400.jpeg',
  },
  charlie: {
    firstName: 'Charlie',
    lastName: 'Cheever',
    avatar: 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/24274468_1927903647474598_8256529376166805504_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=bAPVzWwmjXoAX8TMWRb&oh=07e49af610e7a01d7acf72523ef3f611&oe=5EEBDDB9',
  },
  brent: {
    firstName: 'Brent',
    lastName: 'Vatne',
    avatar: 'https://pbs.twimg.com/profile_images/1244659453699350529/LIiKjlOS_400x400.jpg',
  },
  jon: {
    firstName: 'Jon',
    lastName: 'Samp',
    avatar: 'https://pbs.twimg.com/profile_images/1042074972779413510/6bxBya0I_400x400.jpg',
  },
  arthur: {
    firstName: 'Arthur',
    lastName: 'Rudolph',
    avatar: 'https://i.pinimg.com/280x280_RS/17/79/45/17794505852167cddf8bcbe1ef73085a.jpg',
  },
  paul: {
    firstName: 'Paul',
    lastName: 'Davison',
    avatar: 'https://pbs.twimg.com/profile_images/1002660826287730688/2hdXRJyV_400x400.jpg',
  },
  francie: {
    firstName: "Francie",
    lastName: "Cheever",
    avatar: "https://profile.alumnius.net/235047094.jpg"
  }
};

export function randomUsername() {
  let keys = Object.keys(users);
  let key = keys[Math.floor(Math.random() * keys.length)];
  return key;
}