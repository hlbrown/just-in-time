const db = require("./connection");
const { Profile, Diagnosis, Medication, User } = require("../models");

db.once("open", async () => {
  await Diagnosis.deleteMany();

  const diagnosis = await Diagnosis.insertMany([
    {
      name: "Type 1 Diabetes",
      commonlyKnownAs: "Diabetes",
      description: "Pancreas doesn’t make insulin or makes very little insulin. Insulin is a hormone that helps blood sugar enter the cells in your body where it can be used for energy.",
      symptoms: "Fatigue, Blurry vision, Crankiness or mood changes, Upset stomach and vomiting",
    },
    {
      name:"Schizophrenia",
      commonlyKnownAs: "Schizophrenia",
      description:  "A mental illness that affects how a person thinks, feels, and behaves. People with schizophrenia may seem like they have lost touch with reality, which causes significant distress for the individual, their family members, and friends.",
      symptoms: "Hallucinations, Delusions, and Thought disorder.",
    },
    {
      name: "Attention Deficit Hyperactivity Disorder",
      commonlyKnownAs: "ADHD",
      description: "Common mental disorder.",
      symptoms: "Inattention, Hyperactivity, Impulsivity",
    },
    {
      name: "Nut Allergy",
      commonlyKnownAs: "Nut Allergy",
      description: "Allergic to any type of nut.",
      symptoms: "hives, or itchy red spots on the skin, scratchy throat, swelling of the face, eyes, or tongue", 
    },
    {
      name: "Shell Fish Allergy",
      commonlyKnownAs: "Shell Fish Allergy",
      description: "Allergic to any type of shell fish.",
      symptoms: "hives, or itchy red spots on the skin, scratchy throat, swelling of the face, eyes, or tongue",
    },
    {
      name: "Alzheimer's disease",
      commonlyKnownAs: "Dementia",
      description: "Alzheimer's disease is a progressive condition, which means the symptoms develop gradually and become more severe over the course of several years.",
      symptoms: "confusion, disorientation and getting lost in familiar places, personality changes, such as becoming aggressive, demanding and suspicious of others",
    },
    {
      name: "Anxiety disorders in children",
      commonlyKnownAs: "Anxiety",
      description: "Anxiety is a feeling of unease, such as worry or fear",
      symptoms: "Finding it hard to concentrate, Feeling tense and fidgety, quickly getting angry or irritable, and being out of control during outbursts."
    },
    {
      name: "Asperger Syndrome",
      commonlyKnownAs: "Asperger's",
      description: "A neurodevelopmental disorder characterized by significant difficulties in social interaction and nonverbal communication, along with restricted and repetitive patterns of behavior and interests.",
      symptoms: "Poor social interactions, obsessions, odd speech patterns, limited facial expressions and other peculiar mannerisms."
    },
  ]);

  console.log("diagnosis seeded");

  await Medication.deleteMany();

  const medication = await Medication.insertMany([
    {
      //for type 1 diabetes
      name: "Glucophage",
      brand: "Metformin",
      prescription: true,
      otc: false,
      dose: "100 units",
      interactions: "N/A",
    },
    {
      //for schizophrenia
      name: "Chlorpromazine",
      brand: "Thorazine",
      prescription: true,
      otc: false,
      dose: "100 mg",
      interactions: "",
    },
    {
      // for ADHD
      name: "Methylphenidate",
      brand: "Ritalin ",
      prescription: true,
      otc: false,
      dose: "5 mg two times a day",
      interactions: "N/A",
    },
    {
      //for food alergic retractions
      name: "Adrenaline Auto Injector",
      brand: "EpiPen",
      perscription: true,
      otc: false,
      dose: " 0.3 mg",
      interactions: "N/A",
    },
    {
      //for food alergic retractions
      name: "Diphenhydramine",
      brand: "Benadryl (Liquid)",
      perscription: false,
      otc: true,
      dose: "25 mg",
      interactions: "N/A",
    },
    {
      //for Alzheimer's
      name: "Donepezil",
      brand: "Aricept",
      prescription: true,
      otc: false,
      dose: "10 mg once a day",
      interactions:"",
    },
    {
     //for Anxiety
     name: "Paroxetine Hydrochloride",
     brand: "Paxil",
     prescription: true,
     otc: false,
     dose: "10 mg daily",
     interactions: "",
    },
    {
      //for Asperger
      name: "Risperidone Systemic",
      brand: "Risperdal",
      prescription: true,
      otc: false,
      dose: "1 mg daily",
      interactions: "",
    }
  
  ]);

  console.log("medications seeded");

  await Profile.deleteMany();

  const profiles = await Profile.insertMany([
    {
      firstName: "Cody",
      lastName: "Van Buren II",
      sex: "Male",
      address: "141 Windrush Ln. Durham NC 27703",
      image: "https://res.cloudinary.com/dtjtbzifj/image/upload/v1636829359/FamilyGuy_Single_StewieBackpack_R7_cgr1dv.jpg",
      age: '30',
      height: "5'5",
      weight: 120,
      bloodType: "O",
      organDonor: true,
      pastSurgeries: true,
      pcpName: "Random",
      pcpAddress: "some address",
      pcpPhoneNumber: 39857230489,
      emergencyContactName: "Her",
      emergencyContactNumber: 985273458907234,
      diagnosis: diagnosis[0]._id,
      medication: medication[0]._id,
    },
    {
      firstName: "Agnus",
      lastName: "Brown",
      sex: "Female",
      address: "141 Hippo Ln. Raleigh, NC 27703",
      image: "https://res.cloudinary.com/dtjtbzifj/image/upload/v1637016620/Profile_-_Roz_wnpbap.jpg",
      age: '30',
      height: "5'2",
      weight: 130,
      bloodType: "B",
      organDonor: true,
      pastSurgeries: true,
      pcpName: "Random",
      pcpAddress: "some address",
      pcpPhoneNumber: 39857230489,
      emergencyContactName: "Her",
      emergencyContactNumber: 985273458907234,
      diagnosis: diagnosis[5]._id,
      medication: medication[5]._id,
    },
    {
      firstName: "Harley",
      lastName: "Eggleston",
      sex: "Female",
      address: "141 Lion Rush Ln. Durham, NC 27713",
      image: "https://res.cloudinary.com/dtjtbzifj/image/upload/v1637016871/darla-finding-nemo-costume_iscyec.jpg",
      age: '30',
      height: "3'3",
      weight: 80,
      bloodType: "O",
      organDonor: true,
      pastSurgeries: true,
      pcpName: "Random",
      pcpAddress: "some address",
      pcpPhoneNumber: 39857230489,
      emergencyContactName: "Her",
      emergencyContactNumber: 985273458907234,
      diagnosis: diagnosis[1]._id,
      medication: medication[1]._id,
    },
    {
      firstName: "Issac",
      lastName: "Barretto",
      sex: "Male",
      address: "141 Zebra Dr Cary, NC 27703",
      image: "https://res.cloudinary.com/dtjtbzifj/image/upload/v1637017276/up_2009_1280x717_796346_s6hzbq.jpg",
      age: '30',
      height: "6'8",
      weight: 220,
      bloodType: "A",
      organDonor: true,
      pastSurgeries: true,
      pcpName: "Random",
      pcpAddress: "some address",
      pcpPhoneNumber: 39857230489,
      emergencyContactName: "Her",
      emergencyContactNumber: 985273458907234,
      diagnosis: diagnosis[4]._id,
      medication: medication[3]._id,
    }
  ]);
  console.log("profiles seeded")

  await User.deleteMany();
  // const user = new User(
  //   {
  //     firstName: "Cody",
  //     lastName: "Van Buren",
  //     email: "random@gmail.com",
  //     password: "password12345",
  //     profile: profiles[0]._id,
  //   },
  // )
  // user.save();
  const users = await User.insertMany([
    {
      firstName: "Cody",
      lastName: "Van Buren",
      email: "bvanburenwx@gmail.com",
      password: "password12345",
      phoneNumber: "9195556969",
      image: "https://res.cloudinary.com/dtjtbzifj/image/upload/v1636818567/83733566_iwozxo.jpg",
      profile: profiles[0]._id,
    },
    {
      firstName: "Hannah",
      lastName: "Brown",
      email: "hlbrown@my.waketech.edu",
      password: "world123",
      phoneNumber: "9196961234",
      image: "https://res.cloudinary.com/dtjtbzifj/image/upload/v1636819609/hlbrown_zcuxgk.jpg",
      profile: profiles[1]._id,
    },
    {
      firstName: "Jamel",
      lastName: "Eggleston",
      email: "jamel.eggleston@gmail.com",
      password: "hello789",
      phoneNumber: "9193345698",
      image: "https://res.cloudinary.com/dtjtbzifj/image/upload/v1636819636/jameleggleston_gq7bky.jpg",
      profile: profiles[2]._id,
    },
    {
      firstName: "Dion",
      lastName: "Barretto",
      email: "denverdionne@gmail.com",
      password: "helper248",
      phoneNumber: "9193567888",
      image:"https://res.cloudinary.com/dtjtbzifj/image/upload/v1636819620/dionnenoellabarretto_qvgtrx.jpg",
      profile: profiles[3]._id,
    }
  ]);
});

// const profiles = await Category.insertMany([
//   { name: 'Food' },
//   { name: 'Household Supplies' },
//   { name: 'Electronics' },
//   { name: 'Books' },
//   { name: 'Toys' }
// ]);

// await Product.deleteMany();

// const products = await Product.insertMany([
//   {
//     name: 'Tin of Cookies',
//     description:
//       'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
//     image: 'cookie-tin.jpg',
//     category: profiles[0]._id,
//     price: 2.99,
//     quantity: 500
//   },
//   {
//     name: 'Canned Coffee',
//     description:
//       'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
//     image: 'canned-coffee.jpg',
//     category: categories[0]._id,
//     price: 1.99,
//     quantity: 500
//   },
//   {
//     name: 'Toilet Paper',
//     category: categories[1]._id,
//     description:
//       'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
//     image: 'toilet-paper.jpg',
//     price: 7.99,
//     quantity: 20
//   },
//   {
//     name: 'Handmade Soap',
//     category: categories[1]._id,
//     description:
//       'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
//     image: 'soap.jpg',
//     price: 3.99,
//     quantity: 50
//   },
//   {
//     name: 'Set of Wooden Spoons',
//     category: categories[1]._id,
//     description:
//       'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
//     image: 'wooden-spoons.jpg',
//     price: 14.99,
//     quantity: 100
//   },
//   {
//     name: 'Camera',
//     category: categories[2]._id,
//     description:
//       'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
//     image: 'camera.jpg',
//     price: 399.99,
//     quantity: 30
//   },
//   {
//     name: 'Tablet',
//     category: categories[2]._id,
//     description:
//       'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
//     image: 'tablet.jpg',
//     price: 199.99,
//     quantity: 30
//   },
//   {
//     name: 'Tales at Bedtime',
//     category: categories[3]._id,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
//     image: 'bedtime-book.jpg',
//     price: 9.99,
//     quantity: 100
//   },
//   {
//     name: 'Spinning Top',
//     category: categories[4]._id,
//     description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
//     image: 'spinning-top.jpg',
//     price: 1.99,
//     quantity: 1000
//   },
//   {
//     name: 'Set of Plastic Horses',
//     category: categories[4]._id,
//     description:
//       'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
//     image: 'plastic-horses.jpg',
//     price: 2.99,
//     quantity: 1000
//   },
//   {
//     name: 'Teddy Bear',
//     category: categories[4]._id,
//     description:
//       'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
//     image: 'teddy-bear.jpg',
//     price: 7.99,
//     quantity: 100
//   },
//   {
//     name: 'Alphabet Blocks',
//     category: categories[4]._id,
//     description:
//       'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
//     image: 'alphabet-blocks.jpg',
//     price: 9.99,
//     quantity: 600
//   }
// ]);

// console.log('products seeded');

// await User.deleteMany();

// await User.create({
//   firstName: 'Pamela',
//   lastName: 'Washington',
//   email: 'pamela@testmail.com',
//   password: 'password12345',
//   orders: [
//     {
//       products: [products[0]._id, products[0]._id, products[1]._id]
//     }
//   ]
// });

// await User.create({
//   firstName: 'Elijah',
//   lastName: 'Holt',
//   email: 'eholt@testmail.com',
//   password: 'password12345'
// });

// console.log('users seeded');

// process.exit();
