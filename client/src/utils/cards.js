import donate from "../assets/images/donate.png";
import adopt from "../assets/images/adopt.png";
import volunteer from "../assets/images/volunteer.png";
import foster from "../assets/images/foster.png";

import impactAdopt from "../assets/images/aboutUs/impactAdopt.png";
import impactDonate from "../assets/images/aboutUs/impactDonate.png";
import impactVolunteer from "../assets/images/aboutUs/impactVolunteer.png";
import impactFoster from "../assets/images/aboutUs/impactFoster.png";

export const homeCards = [
  {
    action: "Donate",
    image: donate,
  },
  {
    action: "Adopt",
    image: adopt,
  },
  {
    action: "Volunteer",
    image: volunteer,
  },
  {
    action: "Foster",
    image: foster,
  },
];

export const impactCards = [
  {
    action: "Adopt",
    image: impactAdopt,
    detail: "Since our founding in 2011, Eleventh Hour Rescue has found homes for over 4,000 cats and dogs.  We have a 92% placement rate, one of the highest in the state. "
  },
  {
    action: "Donate",
    image: impactDonate,
    detail: "In 2019, we have received over $10,000 in donations from our valued supporters.  All donations help with medical costs, transporting dogs, boarding, feeding, fostering and facility maintenance. "
  },
  {
    action: "Volunteer",
    image: impactVolunteer,
    detail: "Volunteers are a vital part of our organization, and play a huge role in caring for the animals in our care centers.  With their help, our facilities operate with over hundreds of volunteers across three locations."
  },
  {
    action: "Foster",
    image: impactFoster,
    detail: "Our foster families  provide a clean, safe, loving environment for pets and help them prepare to find a new home.  After receiving foster care, these pets are healthier and happier, which means they are well prepared to be adopted by a loving family."
  },
];
